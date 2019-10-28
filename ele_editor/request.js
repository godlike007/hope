var request = {
    load: function (ajaxParam) {
        $.ajax({
            url: ajaxParam.url,
            async: false,
        }).then(function (result) {
            $(ajaxParam.jq_selector).html(result);


        })
    },
}