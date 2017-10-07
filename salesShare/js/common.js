var request = {
    getData: function(ajaxParam) {
        var promise = new Promise(function(resolve, reject) {
            $.ajax({
                url: ajaxParam.url + ajaxParam.param,
                //contentType: 'application/json',
                //dataType: 'json',
                type: 'get',
                async:ajaxParam.async||true,
                data: ajaxParam.param,
                success: function(data) {
                    resolve(data);
                },
                error: function(xhr, statusText) {
                    reject(statusText);
                }
            });
        });
        return promise;
    },
    postData: function(ajaxParam) {
        var promise = new Promise(function(resolve, reject) {
            $.ajax({
                url: ajaxParam.url,
                //contentType: 'application/json',
               // dataType: 'json',
                type: 'post',
                async:ajaxParam.async||true,
                //data: JSON.stringify(ajaxParam.param),
                data:ajaxParam.param,
                success: function(data) {
                    resolve(data);
                },
                error: function(xhr, statusText) {
                    reject(statusText);
                }
            });
        });
        return promise;
    }	
}
var uploadUtil = {
	IMG:{
		form_param_html:"<input type=\"text\" name=\"#name\" value=\"#name\"/>",
		loadTool:function(obj){
			var _this = this;
			var form_base_html ="<form enctype=\"multipart/form-data\" method=\"post\" name=\"#form_name\">#PARAM</form>";
			
			var param_list = [];
			for(var o in obj.param){
				/*var dom = "<input type=\"text\" name=\"#name\" value=\"#name\"/>";
				dom = dom.replace(/#content/g,html);
				param_list += 
				
    			var html = $("#froalaEditorWrap .fr-element").html();
    			var dom = this.tem[st];

					dom=dom.replace(/#id/g,this.handleTxtSourceIndex(csId,ht,stJqId))
					dom=dom.replace(/#content/g,html);*/
					
			}
		}
	},
	img_preview:function(_this){
		
		if (window.FileReader) {
            var reader = new FileReader();
        } else {
            alert("您的设备不支持图片预览功能！");
        }

        //获取文件
        var file = _this.files[0];
        var imageType = /^image\//;
        //是否是图片
        if (!imageType.test(file.type)) {
            alert("请选择正确的图片文件！");
            return;
        }
        debugger
        //读取完成
        reader.onload = function(e) {
            //获取图片dom
            $(_this).parent().prev().attr("src",e.target.result);
            $(_this).parent().prev().addClass("opa050");
            //图片路径设置为读取的图片
            //img.src = e.target.result;
        };
        reader.readAsDataURL(file);
	},
	single_file:function(_this,callback){
		$(_this).submit(function(ev){
		  	var oReq = new XMLHttpRequest();
		    oReq.open("POST", urlConfig.uploadImgUrls, true);
		    oReq.onload = function(oEvent) {
			    if (oReq.status == 200) {
			    	if(!!callback){
				    	callback();
			    	}
		    		else{
		    			alert("上传成功");
				    	$(_this).prev().attr("src",responseText.value);
	            		$(_this).prev().removeClass("opa050");	
		    		}
			    } else {
			    	alert("上传失败："+oReq.status);
			      //oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
			    }
			    oReq.send(new FormData(_this));
	  			ev.preventDefault();
			    
		  	}
		  
		  });
	},
	init_event_render:function(jq_selector){
		$(jq_selector).each(function(o){
			uploadUtil.single_file(o);
		  
		})
	},
}

var BASE_UTIL = {
	get_url_param:function(paramName){
		var reg = new RegExp('(^|&)' + paramName + '=([^&]*)(&|$)', 'i');
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) {
	        return unescape(r[2]);
	    }
	    return null;
	},
	get_random_in_range:function(Min,Max){
		var Range = Max - Min;
		var Range = Max - Min;
		var Rand = Math.random();  
		var num = Min + Math.round(Rand * Range);
		return num;	
	},
	
}
var DATE_UTIL = {
	get_date_diff:function(history_date){
		var date1= history_date;  //开始时间  
	    var date2 = new Date();    //结束时间  
	    var date3 = date2.getTime() - new Date(date1).getTime();   //时间差的毫秒数        
	  
	    //------------------------------  
	  
	    //计算出相差天数  
	    var days=Math.floor(date3/(24*3600*1000))  
	  
	    //计算出小时数  
	  
	    var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数  
	    var hours=Math.floor(leave1/(3600*1000))  
	    //计算相差分钟数  
	    var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数  
	    var minutes=Math.floor(leave2/(60*1000))  
	    //计算相差秒数  
	    var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数  
	    var seconds=Math.round(leave3/1000)  
	    
	    var obj = {
	    	text:days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒",
	    	days:days,
	    	hours:hours,
	    	minutes:minutes,
	    	seconds:seconds,
	    }
        return obj;
	}
}


var LAYOUT = {
	render_css:function(activityTypeId,type){
		$("body").removeAttr("class");
		var css_root = MAP.activtiy_template[activityTypeId].style_root;
		if(!!type){
			$("body").addClass(css_root+"_"+type);
		}
		else{
			$("body").addClass(css_root);
		}
	},
}
