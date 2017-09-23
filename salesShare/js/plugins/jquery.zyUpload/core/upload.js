 /* 代码整理：懒人之家 www.lanrenzhijia.com */
$(function(){
	//页面资源DOM模板
	var tem = {
		img:"<div id=\"#id\" src=\"#content\" class=\"img\"><img src=\"#content\"alt=\"\"/></div>",
		txt:"<div id=\"#id\" class=\"txt\"><p>#content</p></div>",
		video:"<div id=\"#id\" class=\"video\"><video src=\"#content\"></video></div>",
	}
	
	var urlParam = "?"+'unique=pic1';
	urlParam +=  "&"+'shopUserId=15';
	urlParam +=  "&"+'section=1';
	urlParam +=  "&"+'activityTypeId=2';
	// 初始化插件
	$("#uploadImgTool").zyUpload({
		width            :   "100%",                 // 宽度
		//height           :   "700px",                 // 宽度
		//itemWidth        :   "1200px",                 // 文件项的宽度
		//itemHeight       :   "100px",                 // 文件项的高度
		url              :   urlConfig.uploadImgUrl,  // 上传文件的路径
		multiple         :   false,                    // 是否可以多个文件上传
		dragDrop         :   false,                    // 是否可以拖动上传文件
		del              :   true,                    // 是否可以删除文件
		finishDel        :   false,  				  // 是否在上传文件完成后删除预览
		/* 外部获得的回调接口 */
		onSelect: function(files, allFiles){                    // 选择文件的回调方法
			console.info("当前选择了以下文件：");
			console.info(files);
			console.info("之前没上传的文件：");
			console.info(allFiles);
			debugger
		},
		onDelete: function(file, surplusFiles){                     // 删除一个文件的回调方法
			console.info("当前删除了此文件：");
			console.info(file);
			console.info("当前剩余的文件：");
			console.info(surplusFiles);
			debugger
		},
		onSuccess: function(file){                    // 文件上传成功的回调方法
			console.info("此文件上传成功：");
			console.info(file);
			debugger
		},
		onFailure: function(file){                    // 文件上传失败的回调方法
			console.info("此文件上传失败：");
			console.info(file);
			debugger
		},
		onComplete: function(data){           // 上传完成的回调方法
			
			
	/*		data.list = [{
				id:'pic1',
				url:'../images/demo/upload_success_1.jpg'
			},
			{
				id:'pic2',
				url:'../images/demo/upload_success_2.jpg'
			}]
			console.info("文件上传完成");
			console.info(responseInfo);
			debugger
			
			
			var ht = $("#handleName").val();
			var st = $("#sourceType").val();
			var stJqId = $("#sectionType").val();
			var csId = $("#curSourceId");
			
			var dom = '';
				data.list.forEach(function(o){
					var d = tem[st];
					d.replace(/#id/,o.id)
					d.replace(/#content/,o.url)
					dom += d;
				})
			
			//add
			if(ht == 'add'){
				
				$(stJqId).append(dom);
			}
			
			//insert
			if(ht == 'insert'){				
				$(csId).after(dom);
			}
			//instead
			if(ht == 'instead'){				
				$(csId).replaceWith(dom);
			}
			//clear
			*/
		}
	});
});

