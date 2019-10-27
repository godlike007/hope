var get_config_data = function (config_jqId) {
    var config_data = [];
    $(config_jqId).find("tbody tr").each(function (item) {
        let _default = $(this).children().eq(4).text();

        if (_default == "true") {
            _default = true;
        } else if (_default == "false") {
            _default = false;
        }

        // if ([].indexOf($(item).children().eq(0)) == -1) {
        config_data.push({
            param: $(this).children().eq(0).text(),
            info: $(this).children().eq(1).text(),
            type: $(this).children().eq(2).text(),
            values: $(this).children().eq(3).text(),
            default: _default,
        })
        // }

    })
    return config_data;
}

var config = {
    switch: get_config_data("#switch_config"),
    select: get_config_data("#select_config")
}
//_config1 = get_config_data("#switch_config");
//_config2 = get_config_data("#select_config");


var render_ele_widget_param = function (jqId, config) {

    config.forEach(function (o, index) {

        if(o.default == "fixed_value_attribute"){
            $(jqId).attr(o.param, `item.widget.list[${index}].value`);
        }
        else{
            $(jqId).attr(":" + o.param, `item.widget.list[${index}].value`);
        }

       

    })


}
render_ele_widget_param("#page el-switch", config.switch);
render_ele_widget_param("#page el-select", config.select);

debugger;

page = new Vue({
    el: "#page",
    data() {
        return {
            
 
            switch1: true,
            item_list: [],
            switch: {
                name: "switch",
                value: true,
                index: 0,
            },
            select: {
                label: "3",
                value: "3",
                index: 0,
                name: 'select'
            },

            switch_list: [{
                name: "switch",
                value: true,
                show: false,
                index: 0,
            }, {
                name: "switch",
                value: true,
                show: false,
                index: 1
            }, {
                name: "switch",
                value: false,
                show: false,
                index: 2
            }],

            select_list: [{
                label: "1",
                value: "1",
                show: false,
                index: 0,
                name: 'select'
            }, {
                label: "2",
                value: "2",
                show: false,
                index: 1,
                name: 'select'
            }, {
                label: "3",
                value: "3",
                show: false,
                index: 2,
                name: 'select'
            }],
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            cur_switch_len: 0,
            cur_select_len: 0,
            cur_item_len: 0,
            cur_index: 0,

            //visual_editor
            widget: {
                list: []
            },
            code: {
                config: ''
            },
            form: {

            },
            config_data: [],
            _config: [],

            ColorPicker_color: 'rgba(255, 69, 0, 0.68)',
            predefineColors: [
                '#ff4500',
                '#ff8c00',
                '#ffd700',
                '#90ee90',
                '#00ced1',
                '#1e90ff',
                '#c71585',
                'rgba(255, 69, 0, 0.68)',
                'rgb(255, 120, 0)',
                'hsv(51, 100, 98)',
                'hsva(120, 40, 94, 0.5)',
                'hsl(181, 100%, 37%)',
                'hsla(209, 100%, 56%, 0.73)',
                '#c7158577'
            ],



        };
    },
    components: {
        //分页

    },
    watch: {
        widget: { //深度监听，可监听到对象、数组的变化
            handler(val, oldVal) {
                debugger;
                page.item_list[page.cur_index].widget = val;
            },
            //deep:true
        }

    },
    computed: {

    },
    created: function () {
        debugger;
        $("template1").get(0).outerHTML.replace(/template1/, "template");
    },
    mounted: function () {
        this.init();
        this.$nextTick(function () {

        })
    },
    methods: {
        init() {

        },
        create_config() {
            debugger;
            let attr_dom = "";

            this.widget.list.forEach(function (o, index) {
                if (o.value != o.default && o.value != "") {
                    attr_dom += o.param + "='" + o.value + "' \n ";
                }
            });
            this.code.config = attr_dom;

        },
        remove(item, index, field) {
            debugger;
            // page[`cur_${item.name}_len`]--;
            // console.log(`cur_${item.name}_len` + page[`cur_${item.name}_len`]);
            // page[field + "_list"][index].show = false;
            if (page.cur_index > 0) {
                page.cur_index--;
            }
            page.cur_item_len++;

            page.item_list.splice(index, 1);
        },
        select_cur(item, index, field) {
            debugger;
            // page[`cur_${item.name}_len`]--;
            // console.log(`cur_${item.name}_len` + page[`cur_${item.name}_len`]);
            // page[field + "_list"][index].show = false;

            page.cur_index = index;
            page.widget = page.item_list[index].widget;
        },
        render_widget(type, obj) {
            debugger;
            var _this = this;

            obj.widget = {
                list: []
            }

            let type_map = {
                "—": true,
                "string / number / boolean": true,
                "boolean / string / number": true,
                "number": true,
                "boolean": true,
                "string": true,
                "boolean / object": true,
            }

            config[type].forEach(function (o, index) {
                debugger;

                if (!!type_map[o.type]) {



                    if (o.type == "—") {
                        obj.widget.list.push({
                            param: o.param,
                            type: 1,
                            field: o.type,
                            value: '',
                            info: o.info,
                            default: o.default,
                        })
                    }
                    if (o.type == "string / number / boolean") {
                        obj.widget.list.push({
                            param: o.param,
                            type: 1,
                            field: o.type,
                            value: '',
                            info: o.info,
                            default: o.default,
                        })
                    }
                    if (o.type == "boolean / string / number") {
                        obj.widget.list.push({
                            param: o.param,
                            type: 2,
                            field: "boolean" + index,
                            value: o.default,
                            info: o.info,
                            default: o.default,
                        })
                    }
                    if (o.type == "number") {
                        obj.widget.list.push({
                            param: o.param,
                            type: 1,
                            field: o.type,
                            value: '',
                            info: o.info,
                            default: o.default,
                        })
                    }
                    if (o.type == "boolean") {
                        obj.widget.list.push({
                            param: o.param,
                            type: 2,
                            field: "boolean" + index,
                            value: o.default,
                            info: o.info,
                            default: o.default,
                        })
                    }
                    if (o.type == "string") {
                        debugger;
                        if (o.values.indexOf("/") > 0) {
                            obj.widget.list.push({
                                param: o.param,
                                type: 3,
                                list: o.values.split(" / "),
                                field: "string" + index,
                                value: o.default == '—' ? '' : o.values.split(" / ")[0],
                                info: o.info,
                                default: o.default,
                            })
                        } else if (o.values.indexOf(", ") > 0) {
                            obj.widget.list.push({
                                param: o.param,
                                type: 3,
                                list: o.values.split(", "),
                                field: "string" + index,
                                value: o.default == '—' ? '' : o.default,
                                info: o.info,
                                default: o.default,
                            })
                        } else {
                            let _type = 1;
                            if (o.default.length == 7 && o.default.indexOf("#") > -1) {
                                _type = 4;
                            }
                            obj.widget.list.push({
                                param: o.param,
                                type: _type,
                                field: "string" + index,
                                value: o.default == '—' ? '' : o.default,
                                info: o.info,
                                default: o.default,
                            })
                        }
                    }
                    if (o.type == "boolean / object") {
                        obj.widget.list.push({
                            param: o.param,
                            type: 2,
                            field: "boolean" + index,
                            value: o.default,
                            info: o.info,
                            default: o.default,
                        })
                    }

                } else {
                    alert(o.param);
                }

            });

            page.item_list.push(obj);
            this.widget.list = obj.widget.list;

            //visual_editor.render_widget('switch');

        },
    }
});


component = new Vue({
    el: "#component",
    data() {
        return {
            component_list: [{
                //name: "Switch 开关",
                list_name: 'switch_list',
                name: 'switch',
            }, {
                //name: "Select 选择器",
                list_name: 'select_list',
                name: 'select'
            }],
        };
    },
    components: {
        //分页

    },
    computed: {

    },
    mounted: function () {
        this.init();
        this.$nextTick(function () {

        })
    },

    methods: {
        init() {},
        add(item) {
            // page[`cur_${item.name}_len`]++;
            // for (var i = 0; i < page[`cur_${item.name}_len`]; i++) {
            //     page[item.list_name][i].show = true;
            // }
            debugger;
            page.cur_item_len++;

            page[item.name].index = page.cur_item_len - 1;

            page.cur_index = page.cur_item_len - 1;


            let obj2 = {
                ...page[item.name]
            };

            page.render_widget(item.name, obj2);

            //page.item_list.push(page[item.name]);

            this.$nextTick(function () {
                //visual_editor._config = visual_editor.get_config_data(`#${item.name}_config`);
                //visual_editor.render_ele_widget_param(`#${page[item.name].id}`);  



            })

        },

    }
});




vue_test = new Vue({
    el: "#vue_test",
    data() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
              }, {
                value: '选项2',
                label: '双皮奶'
              }, {
                value: '选项3',
                label: '蚵仔煎'
              }, {
                value: '选项4',
                label: '龙须面'
              }, {
                value: '选项5',
                label: '北京烤鸭'
              }],
              value: ''
        };
    },
    components: {
        //分页

    },
    computed: {

    },
    mounted: function () {
       
    },

    methods: {
        init() {},
        add(item) {
         
        },

    }
});



$(function () {

})