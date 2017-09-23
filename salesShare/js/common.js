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