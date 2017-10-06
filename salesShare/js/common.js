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
var uploadUtl = {
	IMG:{
		form_param_html:"<input type=\"text\" name=\"#name\" value=\"#name\"/>",
		loadTool:function(obj;){
			var _this = this;
			var form_base_html ="<form enctype=\"multipart/form-data\" method=\"post\" name=\"#form_name\">#PARAM</form>";
			
			var param_list = [];
			for(var o in obj.param){
				var dom = "<input type=\"text\" name=\"#name\" value=\"#name\"/>";
				dom = dom.replace(/#content/g,html);
				param_list += 
				
    			var html = $("#froalaEditorWrap .fr-element").html();
    			var dom = this.tem[st];

					dom=dom.replace(/#id/g,this.handleTxtSourceIndex(csId,ht,stJqId))
					dom=dom.replace(/#content/g,html);
			}
		}
	}
}
