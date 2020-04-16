<template>
	<div id="app">
		<el-container>
			<el-header>
				<el-col :span="8"><h5>css3可视化编辑器</h5></el-col>
				<el-col :span="16"><el-switch v-model="is_real" active-text="预览模式" inactive-text="编辑模式"></el-switch></el-col>
			</el-header>
			<el-container>
				<!-- 图层结构 -->
				<el-aside width="400px">
					<el-tree :data="data" node-key="id" default-expand-all :expand-on-click-node="false" @node-click="select_node">
						<span class="custom-tree-node" slot-scope="{ node, data }">
							<span><el-input size="mini" :value="node.label" placeholder="请填写字段名" @input="toggel_label(node, data, $event)"></el-input></span>
							<span><el-input size="mini" :value="data.value" placeholder="请填写字段值" @input="toggel_value(node, data, $event)"></el-input></span>
							<span>
								<el-button type="text" size="mini" @click="() => append(data)">新增</el-button>
								<el-button type="text" size="mini" @click="() => remove(node, data)">删除</el-button>
							</span>
						</span>
					</el-tree>

					<!-- <div class="preview" v-html="html"></div> -->
				</el-aside>
				<!-- 预览 -->
				<el-container>
					<el-main>
						<div id="preview" class="preview" :class="is_real ? 'real' : ''">
							
							
							<div id="coordinates">
								
							</div>
							
							<div
								id="preview_canvas"
								v-for="(item, index) in data"
								class="item"
								:class="cur_item_id == item.id ? 'cur-item' : ''"
								:style="item.css.style"
								@mouseover.stop="over_div(item)"
								@click.stop="select_div(item, index, $event)"
							>
								<div
									v-for="(a, index1) in item.children"
									class="item"
									:class="cur_item_id == a.id ? 'cur-item' : ''"
									:style="a.css.style"
									@mouseover.stop="over_div(a)"
									@click.stop="select_div(a, index1, $event)"
								>
									<div
										v-for="(b, index2) in a.children"
										class="item"
										:class="cur_item_id == b.id ? 'cur-item' : ''"
										:style="b.css.style"
										@mouseover.stop="over_div(b)"
										@click.stop="select_div(b, index2, $event)"
									>
										<div
											v-for="(c, index3) in b.children"
											class="item"
											:class="cur_item_id == c.id ? 'cur-item' : ''"
											:style="c.css.style"
											@mouseover.stop="over_div(c)"
											@click.stop="select_div(c, index3, $event)"
										>
											<div
												v-for="(d, index4) in c.children"
												class="item"
												:class="cur_item_id == d.id ? 'cur-item' : ''"
												:style="d.css.style"
												@mouseover.stop="over_div(d)"
												@click.stop="select_div(d, index4, $event)"
											>
												<div
													v-for="(e, index5) in d.children"
													class="item"
													:class="cur_item_id == e.id ? 'cur-item' : ''"
													:style="e.css.style"
													@mouseover.stop="over_div(e)"
													@click.stop="select_div(e, index5, $event)"
												>
													######
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div v-for="(item, index) in config_item_list" class="config-item">
							<el-row :gutter="20">
								<el-col :span="4">{{ item.name }}</el-col>
								<el-col :span="20">
									<el-input @input="update_style(item)" rows="5" type="textarea" placeholder="请输入内容" v-model="item.value" show-word-limit></el-input>
								</el-col>
							</el-row>
						</div>

						<template>
							<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
							<div style="margin: 15px 0;"></div>
							<el-checkbox-group v-model="checked_item" @change="handlechecked_itemChange">
								<el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
							</el-checkbox-group>
						</template>
					</el-main>
					<el-footer></el-footer>
				</el-container>
				<!-- 属性配置 -->
				<el-aside width="510px">
					<!-- <div class="preview" v-html="html"></div> -->
					<div class="config">
						<div class="config-item" v-if="checked_item.includes('position')">
							<el-row :gutter="20">
								<el-col :span="8">position</el-col>
								<el-col :span="16">
									<template>
										<el-radio-group v-model="css_attr.position" @change="toggel_attr">
											<el-radio label="relative">relative</el-radio>
											<el-radio label="absolute">absolute</el-radio>
											<el-radio label="fixed">fixed</el-radio>
										</el-radio-group>
									</template>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('width')">
							<el-row :gutter="20">
								<el-col :span="8">width</el-col>
								<el-col :span="24">
									<template>
										<div class="block"><el-slider :max="1000" @change="toggel_attr_add_px('width')" v-model="css_attr.width" show-input></el-slider></div>
									</template>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('height')">
							<el-row :gutter="20">
								<el-col :span="8">height</el-col>
								<el-col :span="24">
									<template>
										<div class="block"><el-slider :max="1000" @change="toggel_attr_add_px('height')" v-model="css_attr.height" show-input></el-slider></div>
									</template>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('top')">
							<el-row :gutter="20">
								<el-col :span="8">top</el-col>
								<el-col :span="24">
									<template>
										<div class="block"><el-slider @change="toggel_attr_add_px('top')" v-model="css_attr.top" show-input></el-slider></div>
									</template>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('left')">
							<el-row :gutter="20">
								<el-col :span="8">left</el-col>
								<el-col :span="24">
									<template>
										<div class="block"><el-slider @change="toggel_attr_add_px('left')" v-model="css_attr.left" show-input></el-slider></div>
									</template>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('right')">
							<el-row :gutter="20">
								<el-col :span="8">right</el-col>
								<el-col :span="24">
									<template>
										<div class="block"><el-slider @change="toggel_attr_add_px('right')" v-model="css_attr.right" show-input></el-slider></div>
									</template>
								</el-col>
							</el-row>
						</div>
						<div class="config-item" v-if="checked_item.includes('bottom')">
							<el-row :gutter="20">
								<el-col :span="8">bottom</el-col>
								<el-col :span="24">
									<template>
										<div class="block"><el-slider @change="toggel_attr_add_px('bottom')" v-model="css_attr.bottom" show-input></el-slider></div>
									</template>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('backgroundColor')">
							<el-row :gutter="20">
								<el-col :span="8">background-color</el-col>
								<el-col :span="24"><el-color-picker @change="toggel_attr('backgroundColor')" v-model="css_attr.backgroundColor"></el-color-picker></el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('backgroundPosition')">
							<el-row :gutter="20">
								<el-col :span="8">background-position</el-col>
								<el-col :span="24">
									<template>
										<div class="block">
											<el-slider
												@change="toggel_background_position('backgroundPosition')"
												v-model="css_attr_detail.backgroundPosition.x"
												show-input
											></el-slider>
										</div>
										<div class="block">
											<el-slider
												@change="toggel_background_position('backgroundPosition')"
												v-model="css_attr_detail.backgroundPosition.y"
												show-input
											></el-slider>
										</div>
									</template>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('backgroundSize')">
							<el-row :gutter="20">
								<el-col :span="8">backgroundSize</el-col>
								<el-col :span="24">
									<template>
										<el-radio-group v-model="css_attr_detail.backgroundSize.type" @change="toggel_background_size">
											<el-radio label="length">length</el-radio>
											<el-radio label="percentage">percentage</el-radio>
											<el-radio label="cover">cover</el-radio>
											<el-radio label="contain">contain</el-radio>
										</el-radio-group>
									</template>

									<template v-if="['length', 'percentage'].includes(css_attr_detail.backgroundSize.type)">
										<div class="block">
											<el-slider @change="toggel_background_size_w_h" v-model="css_attr_detail.backgroundSize.width" show-input></el-slider>
										</div>
										<div class="block">
											<el-slider @change="toggel_background_size_w_h" v-model="css_attr_detail.backgroundSize.height" show-input></el-slider>
										</div>
									</template>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('backgroundRepeat')">
							<el-row :gutter="20">
								<el-col :span="8">backgroundRepeat</el-col>
								<el-col :span="16">
									<template>
										<el-radio-group v-model="css_attr.backgroundRepeat" @change="toggel_attr('backgroundRepeat')">
											<el-radio label="repeat">repeat</el-radio>
											<el-radio label="repeat-x">repeat-x</el-radio>
											<el-radio label="repeat-y">repeat-y</el-radio>
											<el-radio label="no-repeat">no-repeat</el-radio>
										</el-radio-group>
									</template>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('backgroundOrigin')">
							<el-row :gutter="20">
								<el-col :span="8">backgroundOrigin</el-col>
								<el-col :span="16">
									<template>
										<el-radio-group v-model="css_attr.backgroundOrigin" @change="toggel_attr('backgroundOrigin')">
											<el-radio label="padding-box	">padding-box</el-radio>
											<el-radio label="border-box">border-box</el-radio>
											<el-radio label="content-box">content-box</el-radio>
										</el-radio-group>
									</template>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('backgroundClip')">
							<el-row :gutter="20">
								<el-col :span="8">backgroundClip</el-col>
								<el-col :span="16">
									<template>
										<el-radio-group v-model="css_attr.backgroundClip" @change="toggel_attr('backgroundClip')">
											<el-radio label="border-box">border-box</el-radio>
											<el-radio label="padding-box">padding-box</el-radio>
											<el-radio label="content-box">content-box</el-radio>
										</el-radio-group>
									</template>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('backgroundAttachment')">
							<el-row :gutter="20">
								<el-col :span="8">backgroundAttachment</el-col>
								<el-col :span="16">
									<template>
										<el-radio-group v-model="css_attr.backgroundAttachment" @change="toggel_attr('backgroundAttachment')">
											<el-radio label="scroll">scroll</el-radio>
											<el-radio label="fixed">fixed</el-radio>
											<el-radio label="local">local</el-radio>
											<el-radio label="initial">initial</el-radio>
											<el-radio label="inherit">inherit</el-radio>
										</el-radio-group>
									</template>
								</el-col>
							</el-row>
						</div>
						<div class="config-item" v-if="checked_item.includes('backgroundImage')">
							<el-row :gutter="20">
								<el-col :span="8">background-image</el-col>
								<el-col :span="24">
									<template>
										<el-radio-group v-model="css_attr_detail.backgroundImage.type" @change="toggel_background_image">
											<el-radio label="url">url</el-radio>
											<el-radio label="none">none</el-radio>
											<el-radio label="linearGradient">linear-gradient()</el-radio>
											<el-radio label="radialGradient">radial-gradient()</el-radio>
											<el-radio label="repeatingLinearGradient">repeating-linear-gradient()</el-radio>
											<el-radio label="repeatingRadialGradient">repeating-radial-gradient()</el-radio>
											<el-radio label="inherit">inherit</el-radio>
										</el-radio-group>
									</template>

									<template v-if="css_attr_detail.backgroundImage.type == 'url'">
										<div class="block">
											<el-input @change="toggel_background_image" v-model="css_attr_detail.backgroundImage.url" placeholder="请输入图片路径"></el-input>
										</div>
									</template>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('backgroundOrigin')">
							<el-row :gutter="20">
								<el-col :span="8">backgroundOrigin</el-col>
								<el-col :span="16">
									<template>
										<el-radio-group v-model="css_attr.backgroundOrigin" @change="toggel_attr('backgroundOrigin')">
											<el-radio label="padding-box">padding-box</el-radio>
											<el-radio label="border-box">border-box</el-radio>
											<el-radio label="content-box">content-box</el-radio>
										</el-radio-group>
									</template>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('borderTop')">
							<el-row :gutter="20">
								<el-col :span="8">border-top</el-col>
								<el-col :span="16">
									<template>
										<div class="block"><el-slider @change="toggel_border('borderTop')" v-model="css_attr_detail.borderTop.width" show-input></el-slider></div>

										<el-radio-group v-model="css_attr_detail.borderTop.style" @change="toggel_border('borderTop')">
											<el-radio label="none">none</el-radio>
											<el-radio label="hidden">hidden</el-radio>
											<el-radio label="dotted">dotted</el-radio>
											<el-radio label="dashed">dashed</el-radio>
											<el-radio label="solid">solid</el-radio>

											<el-radio label="double">double</el-radio>
											<el-radio label="groove">groove</el-radio>
											<el-radio label="ridge">ridge</el-radio>
											<el-radio label="inset">inset</el-radio>
											<el-radio label="outset">outset</el-radio>
										</el-radio-group>
									</template>
									<div class="block"><el-color-picker @change="toggel_border('borderTop')" v-model="css_attr_detail.borderTop.color"></el-color-picker></div>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('borderLeft')">
							<el-row :gutter="20">
								<el-col :span="8">border-left</el-col>
								<el-col :span="16">
									<template>
										<div class="block"><el-slider @change="toggel_border('borderLeft')" v-model="css_attr_detail.borderLeft.width" show-input></el-slider></div>

										<el-radio-group v-model="css_attr_detail.borderLeft.style" @change="toggel_border('borderTop')">
											<el-radio label="none">none</el-radio>
											<el-radio label="hidden">hidden</el-radio>
											<el-radio label="dotted">dotted</el-radio>
											<el-radio label="dashed">dashed</el-radio>
											<el-radio label="solid">solid</el-radio>

											<el-radio label="double">double</el-radio>
											<el-radio label="groove">groove</el-radio>
											<el-radio label="ridge">ridge</el-radio>
											<el-radio label="inset">inset</el-radio>
											<el-radio label="outset">outset</el-radio>
										</el-radio-group>
									</template>
									<div class="block"><el-color-picker v-model="css_attr_detail.borderLeft.color"></el-color-picker></div>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('borderRight')">
							<el-row :gutter="20">
								<el-col :span="8">border-right</el-col>
								<el-col :span="16">
									<template>
										<div class="block">
											<el-slider @change="toggel_border('borderRight')" v-model="css_attr_detail.borderRight.width" show-input></el-slider>
										</div>
										<el-radio-group v-model="css_attr_detail.borderRight.style" @change="toggel_border('borderRight')">
											<el-radio label="none">none</el-radio>
											<el-radio label="hidden">hidden</el-radio>
											<el-radio label="dotted">dotted</el-radio>
											<el-radio label="dashed">dashed</el-radio>
											<el-radio label="solid">solid</el-radio>

											<el-radio label="double">double</el-radio>
											<el-radio label="groove">groove</el-radio>
											<el-radio label="ridge">ridge</el-radio>
											<el-radio label="inset">inset</el-radio>
											<el-radio label="outset">outset</el-radio>
										</el-radio-group>
									</template>
									<div class="block"><el-color-picker @change="toggel_border('borderRight')" v-model="css_attr_detail.borderRight.color"></el-color-picker></div>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('borderBottom')">
							<el-row :gutter="20">
								<el-col :span="8">border-bottom</el-col>
								<el-col :span="16">
									<template>
										<div class="block">
											<el-slider @change="toggel_border('borderBottom')" v-model="css_attr_detail.borderBottom.width" show-input></el-slider>
										</div>
										<el-radio-group @change="toggel_border('borderBottom')" v-model="css_attr_detail.borderBottom.style">
											<el-radio label="none">none</el-radio>
											<el-radio label="hidden">hidden</el-radio>
											<el-radio label="dotted">dotted</el-radio>
											<el-radio label="dashed">dashed</el-radio>
											<el-radio label="solid">solid</el-radio>

											<el-radio label="double">double</el-radio>
											<el-radio label="groove">groove</el-radio>
											<el-radio label="ridge">ridge</el-radio>
											<el-radio label="inset">inset</el-radio>
											<el-radio label="outset">outset</el-radio>
										</el-radio-group>
									</template>
									<div class="block">
										<el-color-picker @change="toggel_border('borderBottom')" v-model="css_attr_detail.borderBottom.color"></el-color-picker>
									</div>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('borderRadius')">
							<el-row :gutter="20">
								<el-col :span="8">border-radius</el-col>
								<el-col :span="16">
									<el-radio-group v-model="css_attr_detail.borderRadius.type">
										<el-radio label="length">length</el-radio>
										<el-radio label="percentage">percentage</el-radio>
									</el-radio-group>

									<template v-if="css_attr_detail.borderRadius.type == 'length'">
										<div class="block">
											<el-slider @change="toggel_border_radius" v-model="css_attr_detail.borderRadius.val1" show-input></el-slider>

											<el-slider @change="toggel_border_radius" v-model="css_attr_detail.borderRadius.val2" show-input></el-slider>
											<el-slider @change="toggel_border_radius" v-model="css_attr_detail.borderRadius.val3" show-input></el-slider>
											<el-slider @change="toggel_border_radius" v-model="css_attr_detail.borderRadius.val4" show-input></el-slider>
										</div>
									</template>
									<template v-if="css_attr_detail.borderRadius.type == 'percentage'">
										<div class="block">
											<el-slider @change="toggel_border_radius" v-model="css_attr_detail.borderRadius.val1" show-input></el-slider>

											<el-slider @change="toggel_border_radius" v-model="css_attr_detail.borderRadius.val2" show-input></el-slider>
											<el-slider @change="toggel_border_radius" v-model="css_attr_detail.borderRadius.val3" show-input></el-slider>
											<el-slider @change="toggel_border_radius" v-model="css_attr_detail.borderRadius.val4" show-input></el-slider>
											<el-slider @change="toggel_border_radius" v-model="css_attr_detail.borderRadius.val5" show-input></el-slider>

											<el-slider @change="toggel_border_radius" v-model="css_attr_detail.borderRadius.val6" show-input></el-slider>
											<el-slider @change="toggel_border_radius" v-model="css_attr_detail.borderRadius.val7" show-input></el-slider>
											<el-slider @change="toggel_border_radius" v-model="css_attr_detail.borderRadius.val8" show-input></el-slider>
										</div>
									</template>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('transform')">
							<el-row :gutter="20">
								<el-col :span="8">transform</el-col>
								<el-col :span="16">
									<div class="block">
										translate3d({{ css_attr_detail.transform.translate3d.x }},{{ css_attr_detail.transform.translate3d.y }},{{
											css_attr_detail.transform.translate3d.z
										}})
										
										<el-switch
										  v-model="css_attr_detail.transform.translate3d.is_forward"
										  active-text="正向"
										  inactive-text="反向">
										</el-switch>
	
									</div>

									<template>sd
										<div class="block"><el-slider :max="1000" @change="toggel_transform" v-model="css_attr_detail.transform.translate3d.x" show-input></el-slider></div>
										<div class="block"><el-slider :max="1000" @change="toggel_transform" v-model="css_attr_detail.transform.translate3d.y" show-input></el-slider></div>
										<div class="block"><el-slider :max="1000" @change="toggel_transform" v-model="css_attr_detail.transform.translate3d.z" show-input></el-slider></div>
									</template>
								</el-col>

								<el-col :span="8">&nbsp;</el-col>
								<el-col :span="16">
									<div class="block">
										scale3d({{ css_attr_detail.transform.scale3d.x }},{{ css_attr_detail.transform.scale3d.y }},{{ css_attr_detail.transform.scale3d.z }})
									</div>

									<template>
										<div class="block"><el-slider @change="toggel_transform" v-model="css_attr_detail.transform.scale3d.x" show-input></el-slider></div>
										<div class="block"><el-slider @change="toggel_transform" v-model="css_attr_detail.transform.scale3d.y" show-input></el-slider></div>
										<div class="block"><el-slider @change="toggel_transform" v-model="css_attr_detail.transform.scale3d.z" show-input></el-slider></div>
									</template>
								</el-col>

								<el-col :span="8">&nbsp;</el-col>
								<el-col :span="16">
									<div class="block">
										rotate3d({{ css_attr_detail.transform.rotate3d.x }},{{ css_attr_detail.transform.rotate3d.y }},{{ css_attr_detail.transform.rotate3d.z }},{{
											css_attr_detail.transform.rotate3d.deg
										}}deg)
									</div>

									<el-switch @change="toggel_transform" v-model="is_rotate3d" active-text="rotate3d模式" inactive-text="传统模式"></el-switch>

									<template v-if="is_rotate3d">
										<div class="block"><el-slider @change="toggel_transform" v-model="css_attr_detail.transform.rotate3d.x" show-input></el-slider></div>
										<div class="block"><el-slider @change="toggel_transform" v-model="css_attr_detail.transform.rotate3d.y" show-input></el-slider></div>
										<div class="block"><el-slider @change="toggel_transform" v-model="css_attr_detail.transform.rotate3d.z" show-input></el-slider></div>
										<div class="block"><el-slider @change="toggel_transform" v-model="css_attr_detail.transform.rotate3d.deg" show-input></el-slider></div>
									</template>

									<template v-if="!is_rotate3d">
										<div class="block">
											<el-slider @change="toggel_transform" :max="360" v-model="css_attr_detail.transform.rotate3d._x" show-input></el-slider>
										</div>
										<div class="block">
											<el-slider @change="toggel_transform" :max="360" v-model="css_attr_detail.transform.rotate3d._y" show-input></el-slider>
										</div>
										<div class="block">
											<el-slider @change="toggel_transform" :max="360" v-model="css_attr_detail.transform.rotate3d._z" show-input></el-slider>
										</div>
									</template>
								</el-col>

								<el-col :span="8">&nbsp;</el-col>
								<el-col :span="16">
									<div class="block">skew({{ css_attr_detail.transform.skew.x }},{{ css_attr_detail.transform.skew.y }})</div>
									<template>
										<div class="block"><el-slider @change="toggel_transform" :max="180" v-model="css_attr_detail.transform.skew.x" show-input></el-slider></div>
										<div class="block"><el-slider @change="toggel_transform" v-model="css_attr_detail.transform.skew.y" show-input></el-slider></div>
									</template>
								</el-col>

								<el-col :span="8">&nbsp;</el-col>
								<el-col :span="16">
									<div class="block">perspective({{ css_attr_detail.transform.perspective }})</div>
									<template>
										<el-slider @change="toggel_transform" :max="1000" v-model="css_attr_detail.transform.perspective" show-input></el-slider>
									</template>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('transformOrigin')">
							<el-row :gutter="20">
								<el-col :span="8">transform-origin</el-col>
								<el-col :span="24">
									<div class="block">
										<el-slider @change="toggel_transform_origin('transformOrigin')" v-model="css_attr_detail.transformOrigin.x" show-input></el-slider>
									</div>
									<div class="block">
										<el-slider @change="toggel_transform_origin('transformOrigin')" v-model="css_attr_detail.transformOrigin.y" show-input></el-slider>
									</div>
									<div class="block">
										<el-slider @change="toggel_transform_origin('transformOrigin')" v-model="css_attr_detail.transformOrigin.z" show-input></el-slider>
									</div>
								</el-col>
							</el-row>
						</div>

						<div class="config-item" v-if="checked_item.includes('transformStyle')">
							<el-row :gutter="20">
								<el-col :span="8">transform-style</el-col>
								<el-col :span="16">
									<template>
										<el-radio-group v-model="css_attr.transformStyle" @change="toggel_attr('transformStyle')">
											<el-radio label="flat">flat</el-radio>
											<el-radio label="preserve-3d">preserve-3d</el-radio>
										</el-radio-group>
									</template>
								</el-col>
							</el-row>
						</div>
					</div>
				</el-aside>
			</el-container>
		</el-container>
	</div>
</template>
<script>
let id = 1000;

const css_vals = [
	'position',
	'width',
	'height',
	'top',
	'left',
	'right',
	'bottom',
	'backgroundColor',
	'backgroundPosition',
	'backgroundSize',
	'backgroundRepeat',
	'backgroundOrigin',
	'backgroundClip',
	'backgroundAttachment',
	'backgroundImage',
	'borderTop',
	'borderLeft',
	'borderRight',
	'borderBottom',
	'borderRadius',
	'content',
	'transform',
	'transformOrigin',
	'transformStyle',
	'perspective',
	'perspective-origin',
	'transition',
	'animation',
	'animation-delay',
	'animation-fill-mode',
	'box-shadow',
	'z-index'
];

export default {
	data() {
		const data = [
			{
				id: 1,
				class_name: '',
				css: {
					style:'width：100px;height:100px',
					list: []
				},
				label: '一级 1',
				value: '11111',
				children: [
					{
						id: 4,
						class_name: '',
						css: {
							style: 'width：100px;height:100px',
							list: []
						},
						label: '二级 1-1',
						value: '4444',
						children: [
							{
								id: 9,
								class_name: '',
								css: {
									style: 'width：100px;height:100px',
									list: []
								},
								label: '三级 1-1-1',
								value: '9999',
								children: [
									{
										id: 19,
										class_name: '',
										css: {
											style: 'width：100px;height:100px',
											list: []
										},
										label: '三级 1-1-1',
										value: '9999'
									}
								]
							},
							{
								id: 10,
								class_name: '',
								css: {
									style: 'width：100px;height:100px',
									list: []
								},
								label: '三级 1-1-2',
								value: '100000'
							}
						]
					}
				]
			}
			// 	{
			// 		id: 2,
			// 		class_name: '',
			// 		css: {
			// 			style: '',
			// 			list: []
			// 		},
			// 		label: '一级 2',
			// 		value: '2222',
			// 		children: [
			// 			{
			// 				id: 5,
			// 				class_name: '',
			// 				css: {
			// 					style: '',
			// 					list: []
			// 				},
			// 				value: '5555',
			// 				label: '二级 2-1'
			// 			},
			// 			{
			// 				id: 6,
			// 				class_name: '',
			// 				css: {
			// 					style: '',
			// 					list: []
			// 				},
			// 				value: '666',
			// 				label: '二级 2-2'
			// 			}
			// 		]
			// 	},
			// 	{
			// 		id: 3,
			// 		class_name: '',
			// 		css: {
			// 			style: '',
			// 			list: []
			// 		},
			// 		value: '3333',
			// 		label: '一级 3',
			// 		children: [
			// 			{
			// 				id: 7,
			// 				class_name: '',
			// 				css: {
			// 					style: '',
			// 					list: []
			// 				},
			// 				value: '7777',
			// 				label: '二级 3-1'
			// 			},
			// 			{
			// 				id: 8,
			// 				class_name: '',
			// 				css: {
			// 					style: '',
			// 					list: []
			// 				},
			// 				value: '8888',
			// 				label: '二级 3-2'
			// 			}
			// 		]
			// 	}
		];
		return {
			data: JSON.parse(JSON.stringify(data)),
			index: 0,
			html: '',
			config_item_list: [],
			div_list: [
				{
					class_name: '11',
					children: [
						{
							class_name: '22',
							children: []
						}
					]
				}
			],
			cur_item: {},

			checkAll: false,
			checked_item: [],
			cities: css_vals,
			isIndeterminate: true,
			cur_item_id: '',
			history_checked_item: [],
			cur_config_attr: '',
			is_real: false,
			is_rotate3d: false,

			css_attr: {
				position: 'absolute',
				width: '0',
				height: '0',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: '#409EFF',
				backgroundPosition: '0% 0%',
				backgroundSize: 'auto',
				backgroundRepeat: 'no-repeat',
				backgroundOrigin: 'border-box',
				backgroundClip: 'border-box',
				backgroundAttachment: 'scroll',
				backgroundImage: '',
				borderTop: '',
				borderLeft: '',
				borderRight: '',
				borderBottom: '',
				borderRadius: 0,
				content: '',
				transform: '',
				transformOrigin: '',
				transformStyle: 'flat',
				perspective: '',
				perspectiveOrigin: '',
				transition: '',
				animation: '',
				'animation-delay': '',
				'animation-fill-mode': '',
				'box-shadow': '',
				'z-index': ''
			},
			css_attr_detail: {
				backgroundPosition: {
					x: 0,
					y: 0
				},
				backgroundSize: {
					type: 'contain',
					width: 0,
					height: 0
				},
				backgroundImage: {
					type: 'url',
					url: ''
				},
				borderTop: {
					width: 1,
					style: 'solid',
					color: '#eee'
				},
				borderLeft: {
					width: 1,
					style: 'solid',
					color: '#eee'
				},
				borderRight: {
					width: 1,
					style: 'solid',
					color: '#eee'
				},
				borderBottom: {
					width: 1,
					style: 'solid',
					color: '#eee'
				},
				borderRadius: {
					type: 'length',
					val1: '',
					val2: '',
					val3: '',
					val4: '',
					val5: '',
					val6: '',
					val7: '',
					val8: ''
				},
				transform: {
					translate3d: {
						x: 0,
						y: 0,
						z: 0,
						is_forward:true
						
					},
					scale3d: {
						x: 1,
						y: 1,
						z: 1
					},
					rotate3d: {
						x: 0,
						y: 0,
						z: 0,
						deg: 0,
						_x: 0,
						_y: 0,
						_z: 0
					},
					skew: {
						x: 0,
						y: 0
					},
					perspective: 0
				},
				transformOrigin: {
					x: 50,
					y: 50,
					z: 0
				}
			}
		};
	},
	mounted() {
		this.$nextTick(function() {
			window.onload = function() {
				var oBox = document.querySelector('#preview_canvas');
				var coordinates = document.querySelector('#coordinates');
				

				var y = -60;
				var x = 45;
				var left = 0;
				var right = 0;
				var top = 0;
				var bottom = 0;

				var translateX = 0;
				var translateY = 0;
				var translateZ = 0;
				var zoom = 0;

				oBox.onmousedown = function(ev) {
					var oEvent = ev || event;
					var disX = oEvent.clientX - y;
					var disY = oEvent.clientY - x;
					document.onmousemove = function(ev) {
						var oEvent = ev || event;
						x = oEvent.clientY - disY;
						y = oEvent.clientX - disX;
						oBox.style.transform = 'perspective(800px) rotateX(' + x + 'deg) rotateZ(' + y + 'deg)  translate3d(' + translateX + 'px,' + translateY + 'px,0)';
					};
					document.onmouseup = function() {
						document.onmousemove = null;
						document.onmouseup = null;
					};
					return false;
				};
				
				coordinates.onmousedown = function(ev) {
					var oEvent = ev || event;
					var disX = oEvent.clientX - y;
					var disY = oEvent.clientY - x;
					document.onmousemove = function(ev) {
						var oEvent = ev || event;
						x = oEvent.clientY - disY;
						y = oEvent.clientX - disX;
						coordinates.style.transform = 'perspective(800px) rotateX(' + x + 'deg) rotateZ(' + y + 'deg)  translate3d(' + translateX + 'px,' + translateY + 'px,0)';
					};
					document.onmouseup = function() {
						document.onmousemove = null;
						document.onmouseup = null;
					};
					return false;
				};
				$("#preview").bind('mousewheel DOMMouseScroll', function(event) {
					//on也可以 bind监听
					//Chorme
					
					var wheel = event.originalEvent.wheelDelta;
					var detal = event.originalEvent.detail;
					if (event.originalEvent.wheelDelta) {
						//判断浏览器IE,谷歌滚轮事件
						if (wheel > 0) {
							debugger;
							zoom++;
							//当滑轮向上滚动时
							oBox.style.zoom = zoom;
							left-=oBox.offsetWidth;
							top-=oBox.offsetHeight;
							oBox.style.marginLeft = left + 'px';
						}
						if (wheel < 0) {
							zoom--;
							//当滑轮向下滚动时
							oBox.style.zoom = zoom;
							left+=oBox.offsetWidth;
							top+=oBox.offsetHeight;
							oBox.style.marginLeft = left + 'px';
						}
					} else if (event.originalEvent.detail) {
						//Firefox滚轮事件
						if (detal > 0) {
							//当滑轮向下滚动时
							alert('下滚');
						}
						if (detal < 0) {
							//当滑轮向上滚动时
							alert('上滚');
						}
					}
				});
				
				$("#preview").bind('mousewheel DOMMouseScroll', function(event) {
					//on也可以 bind监听
					//Chorme
					
					var wheel = event.originalEvent.wheelDelta;
					var detal = event.originalEvent.detail;
					if (event.originalEvent.wheelDelta) {
						//判断浏览器IE,谷歌滚轮事件
						if (wheel > 0) {
							debugger;
							zoom++;
							//当滑轮向上滚动时
							coordinates.style.zoom = zoom;
							left-=coordinates.offsetWidth;
							top-=coordinates.offsetHeight;
							coordinates.style.marginLeft = left + 'px';
						}
						if (wheel < 0) {
							zoom--;
							//当滑轮向下滚动时
							coordinates.style.zoom = zoom;
							left+=coordinates.offsetWidth;
							top+=coordinates.offsetHeight;
							coordinates.style.marginLeft = left + 'px';
						}
					} else if (event.originalEvent.detail) {
						//Firefox滚轮事件
						if (detal > 0) {
							//当滑轮向下滚动时
							alert('下滚');
						}
						if (detal < 0) {
							//当滑轮向上滚动时
							alert('上滚');
						}
					}
				});

				document.onkeydown = function(ev1) {
					debugger;
					var ev2 = ev1 || window.event;
					switch (ev2.keyCode) {
						case 68:
							debugger;
							left += 20;
							oBox.style.marginLeft = left + 'px';

							break;
						case 65:
							debugger;
							left -= 20;
							oBox.style.marginLeft = left + 'px';

							break;
						case 87:
							debugger;
							top -= 20;
							oBox.style.marginTop = top + 'px';

							break;
						case 83:
							debugger;
							top += 20;
							oBox.style.marginTop = top + 'px';

							break;
						case 37:
						case 100:
							debugger;
							translateY += 10;
							oBox.style.transform = 'perspective(800px) rotateX(' + x + 'deg) rotateZ(' + y + 'deg) translate3d(' + translateX + 'px,' + translateY + 'px,0)';
							break;
						case 38:
						case 104:
							debugger;

							translateX -= 10;
							oBox.style.transform = 'perspective(800px) rotateX(' + x + 'deg) rotateZ(' + y + 'deg) translate3d(' + translateX + 'px,' + translateY + 'px,0)';

							break;
						case 39:
						case 102:
							debugger;
							translateY -= 10;
							oBox.style.transform = 'perspective(800px) rotateX(' + x + 'deg) rotateZ(' + y + 'deg) translate3d(' + translateX + 'px,' + translateY + 'px,0)';

							break;
						case 40:
						case 98:
							translateX += 10;
							oBox.style.transform = 'perspective(800px) rotateX(' + x + 'deg) rotateZ(' + y + 'deg) translate3d(' + translateX + 'px,' + translateY + 'px,0)';
							break;
						default:
							console.log('请按上下左右键');
							break;
					}
				};
			
			document.onkeydown = function(ev1) {
					debugger;
					var ev2 = ev1 || window.event;
					switch (ev2.keyCode) {
						case 68:
							debugger;
							left += 20;
							coordinates.style.marginLeft = left + 'px';
			
							break;
						case 65:
							debugger;
							left -= 20;
							coordinates.style.marginLeft = left + 'px';
			
							break;
						case 87:
							debugger;
							top -= 20;
							coordinates.style.marginTop = top + 'px';
			
							break;
						case 83:
							debugger;
							top += 20;
							coordinates.style.marginTop = top + 'px';
			
							break;
						case 37:
						case 100:
							debugger;
							translateY += 10;
							coordinates.style.transform = 'perspective(800px) rotateX(' + x + 'deg) rotateZ(' + y + 'deg) translate3d(' + translateX + 'px,' + translateY + 'px,0)';
							break;
						case 38:
						case 104:
							debugger;
			
							translateX -= 10;
							coordinates.style.transform = 'perspective(800px) rotateX(' + x + 'deg) rotateZ(' + y + 'deg) translate3d(' + translateX + 'px,' + translateY + 'px,0)';
			
							break;
						case 39:
						case 102:
							debugger;
							translateY -= 10;
							coordinates.style.transform = 'perspective(800px) rotateX(' + x + 'deg) rotateZ(' + y + 'deg) translate3d(' + translateX + 'px,' + translateY + 'px,0)';
			
							break;
						case 40:
						case 98:
							translateX += 10;
							coordinates.style.transform = 'perspective(800px) rotateX(' + x + 'deg) rotateZ(' + y + 'deg) translate3d(' + translateX + 'px,' + translateY + 'px,0)';
							break;
						default:
							console.log('请按上下左右键');
							break;
					}
				};
			
			
			};
		});
	},
	methods: {
		update_render() {
			debugger;
			var that = this;
			this.config_item_list.forEach(function(o, index) {
				if (that.cur_config_attr == o.name) {
					that.config_item_list[index].value = that.css_attr[that.cur_config_attr];
				}
			});

			that.cur_item.css.style = '';
			this.config_item_list.forEach(function(o) {
				that.cur_item.css.style += o.name + ':' + o.value + ';';
			});
			debugger;
		},
		toggel_attr_add_px(val_name) {
			this.cur_config_attr = val_name;
			this.css_attr[val_name] = this.css_attr[val_name] + 'px';
			this.update_render();
		},
		toggel_attr(val_name) {
			this.cur_config_attr = val_name;
			this.update_render();
		},
		toggel_transform_origin() {
			this.css_attr.transformOrigin =
				this.css_attr_detail.transformOrigin.x + '% ' + this.css_attr_detail.transformOrigin.y + '% ' + this.css_attr_detail.transformOrigin.z + 'px';

			this.cur_config_attr = 'transformOrigin';
			this.update_render();
		},
		toggel_transform() {
			debugger;
			if(-this.css_attr_detail.transform.translate3d.is_forward){
				this.css_attr.transform = `translate3d(${this.css_attr_detail.transform.translate3d.x}px,${this.css_attr_detail.transform.translate3d.y}px,${
					this.css_attr_detail.transform.translate3d.z
				}px)`;
			}
			else{
				this.css_attr.transform = `translate3d(${-this.css_attr_detail.transform.translate3d.x}px,${-this.css_attr_detail.transform.translate3d.y}px,${
					-this.css_attr_detail.transform.translate3d.z
				}px)`;
			}
			
			this.css_attr.transform += ` scale3d(${this.css_attr_detail.transform.scale3d.x},${this.css_attr_detail.transform.scale3d.y},${
				this.css_attr_detail.transform.scale3d.z
			})`;

			if (this.is_rotate3d) {
				this.css_attr.transform += ` rotate3d(${this.css_attr_detail.transform.rotate3d.x},${this.css_attr_detail.transform.rotate3d.y},${
					this.css_attr_detail.transform.rotate3d.z
				},${this.css_attr_detail.transform.rotate3d.deg}deg)`;
			} else {
				this.css_attr.transform += ` rotateX(${this.css_attr_detail.transform.rotate3d._x}deg) rotateY(${this.css_attr_detail.transform.rotate3d._y}deg) rotateZ(${
					this.css_attr_detail.transform.rotate3d._z
				}deg)`;
			}

			this.css_attr.transform += ` skew(${this.css_attr_detail.transform.skew.x}deg,${this.css_attr_detail.transform.skew.y}deg)`;
			this.css_attr.transform += ` perspective(${this.css_attr_detail.transform.perspective}px)`;

			this.cur_config_attr = 'transform';
			this.update_render();
		},
		toggel_border_radius() {
			if (this.css_attr_detail.borderRadius.type == 'length') {
				this.css_attr.borderRadius =
					this.css_attr_detail.borderRadius.val1 +
					'px ' +
					this.css_attr_detail.borderRadius.val2 +
					'px ' +
					this.css_attr_detail.borderRadius.val3 +
					'px ' +
					this.css_attr_detail.borderRadius.val4 +
					'px';
			} else {
				this.css_attr.borderRadius =
					this.css_attr_detail.borderRadius.val1 +
					'% ' +
					this.css_attr_detail.borderRadius.val2 +
					'% ' +
					this.css_attr_detail.borderRadius.val3 +
					'% ' +
					this.css_attr_detail.borderRadius.val4 +
					'% / ' +
					this.css_attr_detail.borderRadius.val5 +
					'% ' +
					this.css_attr_detail.borderRadius.val6 +
					'% ' +
					this.css_attr_detail.borderRadius.val7 +
					'% ' +
					this.css_attr_detail.borderRadius.val8 +
					'%';
			}

			this.cur_config_attr = 'borderRadius';
			this.update_render();
		},
		toggel_border(top_type) {
			this.css_attr[top_type] = this.css_attr_detail[top_type].width + 'px ' + this.css_attr_detail[top_type].top + ' ' + this.css_attr_detail[top_type].color;

			this.cur_config_attr = top_type;
			this.update_render();
		},
		toggel_background_image(item) {
			if (this.css_attr_detail.backgroundImage.type == 'url') {
				this.css_attr.backgroundImage = `url($(this.css_attr_detail.backgroundImage.url))`;
			}

			this.cur_config_attr = 'backgroundImage';
			this.update_render();
		},

		toggel_background_size_w_h(item) {
			let unit = '%';
			if (this.css_attr_detail.backgroundSize.type == 'length') {
				unit = 'px';
			}
			this.css_attr.backgroundSize = this.css_attr_detail.backgroundSize.x + unit + this.css_attr_detail.backgroundSize.x + unit;
		},
		toggel_background_size(item) {
			if (!['length', 'percentage'].includes(this.css_attr_detail.backgroundSize.type)) {
				this.css_attr.backgroundSize = this.css_attr_detail.backgroundSize.type;
			}
			this.cur_config_attr = 'backgroundSize';
			this.update_render();
		},
		toggel_background_position(item) {
			this.css_attr.backgroundPosition = this.css_attr_detail.backgroundPosition.x + 'px ' + this.css_attr_detail.backgroundPosition.x + 'px';

			this.cur_config_attr = 'backgroundPosition';
			this.update_render();
		},
		update_style(item) {
			debugger;
			var that = this;

			that.cur_item.css.style = '';
			this.config_item_list.forEach(function(o) {
				that.cur_item.css.style += o.name + ':' + o.value + ';';
			});
		},
		select_node(e) {
			debugger;
			this.select_div(e);
		},
		select_div(item, index, e) {
			debugger;

			var that = this;
			that.checked_item = [];
			that.config_item_list = [];
			if (!!item.css.list) {
				item.css.list.forEach(function(o) {
					that.checked_item.push(o.name);
					that.config_item_list.push(o);
				});
			}

			this.cur_item_id = item.id;
			this.cur_item = item;
			console.log(item.id);
		},
		over_div(item) {
			//this.cur_item_id = item.id;
		},
		handleCheckAllChange(val) {
			this.checked_item = val ? css_vals : [];
			this.isIndeterminate = false;
		},
		handlechecked_itemChange(value) {
			debugger;
			if (!!this.cur_item_id) {
				var that = this;
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.cities.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;

				if (this.history_checked_item.length > this.checked_item.length) {
					var name = '';
					this.history_checked_item.forEach(function(o) {
						if (that.checked_item.indexOf(o) == -1) {
							name = o;
						}
					});
					this.config_item_list = this.config_item_list.filter(function(o) {
						if (o.name != name) {
							return o;
						}
					});
				} else {
					var len = this.checked_item.length;

					that.cur_config_attr = this.checked_item[len - 1];

					that.config_item_list.push({
						name: that.cur_config_attr,
						value: that.css_attr[that.cur_config_attr]
					});
				}
				this.cur_item.css.list = this.config_item_list;

				this.history_checked_item = this.checked_item;
			} else {
				this.$alert('请选择div', '提示', {
					confirmButtonText: '确定',
					callback: action => {}
				});
			}
		},
		toggel_label(node, data, val) {
			this.data.forEach(function(o1) {
				if (o1.id == data.id) {
					o1.label = val;
				}
				if (!!o1.children) {
					this.data.forEach(function(o2) {
						if (o2.id == data.id) {
							o2.label = val;
						}
						if (!!o2.children) {
							this.data.forEach(function(o3) {
								if (o3.id == data.id) {
									o3.label = val;
								}
							});
						}
					});
				}
			});

			debugger;
		},
		toggel_value(node, data, val) {
			this.data.forEach(function(o1) {
				if (o1.id == data.id) {
					o1.value = val;
				}
				if (!!o1.children) {
					this.data.forEach(function(o2) {
						if (o2.id == data.id) {
							o2.value = val;
						}
						if (!!o2.children) {
							this.data.forEach(function(o3) {
								if (o3.id == data.id) {
									o3.value = val;
								}
							});
						}
					});
				}
			});

			debugger;
		},

		append(data) {
			this.index += 1;
			const newChild = {
				id: id++,
				label: '新建字段' + this.index,
				value: '测试值' + this.index,
				children: [],
				class_name: '',
				css: {
					style: 'width：100px;height:100px',
					list: []
				}
			};
			if (!data.children) {
				this.$set(data, 'children', []);
			}
			data.children.push(newChild);
		},

		remove(node, data) {
			const parent = node.parent;
			const children = parent.data.children || parent.data;
			const index = children.findIndex(d => d.id === data.id);
			children.splice(index, 1);
		},
		//递归
		render(lst, pv) {
			var that = this;
			for (var i in lst) {
				var obj = lst[i];
				if (pv.length > 0) {
					obj.sj = pv;
					obj.value = pv + '0' + i;
				} else {
					obj.value = '01';
					obj.sj = '-';
				}
				if (obj.children) {
					that.render(lst[i].children, obj.value);
				}
			}
		}
	}
};
</script>

<style>
body,
body span {
	font-size: 12px;
}
.config {
	width: 500px;
	padding-left: 10px;
}
.preview {
	width: 400px;
	height: 400px;
}
.custom-tree-node {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 14px;
	padding-right: 8px;
}

.el-tree-node__content {
	height: 40px;
}
.preview > .item {
	width: 30%;
}
.preview .item {
	border: 1px solid #ccc;
	min-height: 20px;
	padding: 10px;
}

.preview .item.cur-item {
	border: 2px solid #008800;
}
.preview.real .item {
	border: none;
	padding: 0px;
}

#coordinates{
	width: 300px;
	height: 300px;
	background: radial-gradient(rgba(0, 0, 0, 0) 50%, #5a5858 71%), linear-gradient(#4646461a 0.125em, transparent 0), linear-gradient(90deg, #4646461a 0.125em, transparent 0);
	    background-position: 50% 50%;
	    background-size: 100%, 3em 3em, 3em 3em;
		border: 1px solid #4646461a;
}
</style>
