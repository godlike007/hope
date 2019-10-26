var _config = [{
    param: 'label',
    info: 'Radio 的 value',
    type: 'string / number / boolean',
    values: '',
    default: '',
}, {
    param: 'maxlength',
    info: '原生属性，最大输入长度',
    type: 'number',
    values: '',
    default: '',
}, {
    param: 'show-word-limit',
    info: '是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效',
    type: 'boolean',
    values: '',
    default: false,
}, {
    param: 'size',
    info: '输入框尺寸，只在 type!="textarea" 时有效',
    type: 'string',
    values: 'medium / small / mini',
    default: '—',
}, {
    param: 'rows',
    info: '输入框行数，只对 type="textarea" 有效',
    type: 'number',
    values: '—',
    default: 2,
}]
var config_data = [];

var get_config_data = function (config_jqId) {
    debugger;
    $(config_jqId).find("tbody tr").each(function (item) {
        let _default = $(this).children().eq(4).text();

        if(_default=="true"){
            _default=true;
        }
        else if(_default=="false"){
            _default=false;
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
_config = get_config_data("#radio_config_base");


var render_ele_widget_param = function (jqId) {
    debugger;
    _config.forEach(function (o, index) {

        $(jqId).attr(":" + o.param, `widget.list[${index}].value`);
        
    })
}


render_ele_widget_param("#input1");

template = new Vue({
    el: '#template',
    data: {
        radio: '1',
        //Input Attributes
        config: _config,
        widget: {
            list: []
        },
        vue_value:'',
        form: {

        },
        input1: "",
        code:{
            config:''
        },


        id: go_page.get_sec_tab("id")
    },
    components: {
        //分页
        'vue-pagination1': Vue.Pagination,
        'vue-pagination2': Vue.Pagination_main
    },
    computed: {


    },
    mounted: function () {
        this.init();
        this.$nextTick(function () {
            $("#page_wait_mask_clone", parent.document).hide();
        })
    },
    methods: {
        init() {
            //template.get_module_1();
        },
        create_config() {  
            debugger; 
            let attr_dom = "";

            template.widget.list.forEach(function (o, index) {
                if(o.value != o.default && o.value!=""){
                    attr_dom +=o.param + "='"+o.value+"' \n ";
                }
            });
            template.code.config = attr_dom;
            
        },
        render_widget() {
            template.config.forEach(function (o, index) {
                debugger;
                if (o.type == "—") {
                    template.widget.list.push({
                        param: o.param,
                        type: 1,
                        field: o.type,
                        value: '',
                        info: o.info,
                        default: o.default,
                    })
                }
                if (o.type == "string / number / boolean") {
                    template.widget.list.push({
                        param: o.param,
                        type: 1,
                        field: o.type,
                        value: '',
                        info: o.info,
                        default: o.default,
                    })
                }
                if (o.type == "number") {
                    template.widget.list.push({
                        param: o.param,
                        type: 1,
                        field: o.type,
                        value: '',
                        info: o.info,
                        default: o.default,
                    })
                }
                if (o.type == "boolean") {
                    template.widget.list.push({
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
                        template.widget.list.push({
                            param: o.param,
                            type: 3,
                            list: o.values.split(" / "),
                            field: "string" + index,
                            value: o.default == '—' ? '' : o.values.split(" / ")[0],
                            info: o.info,
                            default: o.default,
                        })
                    } else if (o.values.indexOf(", ") > 0) {
                        template.widget.list.push({
                            param: o.param,
                            type: 3,
                            list: o.values.split(", "),
                            field: "string" + index,
                            value: o.default == '—' ? '' : o.default,
                            info: o.info,
                            default: o.default,
                        })
                    } else {
                        template.widget.list.push({
                            param: o.param,
                            type: 1,
                            field: "string" + index,
                            value: '',
                            info: o.info,
                            default: o.default,
                        })
                    }
                }
                if (o.type == "boolean / object") {
                    template.widget.list.push({
                        param: o.param,
                        type: 2,
                        field: "boolean" + index,
                        value: o.default,
                        info: o.info,
                        default: o.default,
                    })
                }

            });
        },
    }
});
template.render_widget();
$(function () {

});