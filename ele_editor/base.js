

base = new Vue({
    el: "#base",
    data() {
        return {
            section_list: [{
                name: '字符串',
            }, {
                name: '数值',
            }, {
                name: 'set',
            }, {
                name: 'map',
            }],

            setting_data:{
                '字符串':[{
                    id:'_模板字符串',
                    name:'模板字符串${}',
                    hot:'item.field,value,fn()'
                },
                {
                    id:'_模板字符串嵌套',
                    name:'模板字符串${}嵌套',
                    hot:''
                },
                {
                    id:'_模板字符串本身',
                    name:'模板字符串${}本身',
                    hot:''
                },{
                    id:'_标签模板tag',
                    name:'标签模板tag',
                    hot:''
                },{
                    id:'_indexOf加强',
                    name:'includes(), startsWith(), endsWith()',
                    hot:''
                },{
                    id:'_repeat()',
                    name:'repeat()',
                    hot:''
                }]
            },


            setting_list: [],
            code:'',
            handler_value_name:'',
            cur_section:'字符串',
            hot_use_list:[]
        };
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
        toggel_section(item) {
            this.cur_section = item.name;
            this.setting_list = this.setting_data[item.name];

            this.$nextTick(function () {
              
            })

        },
        add_code(item) {
            this.code += $.trim($("#"+item.id).html().replace(/\#/,this.handler_value_name))+"\n";

            this.$nextTick(function () {
              
            })

        },
        toggel_hot_use(item) {
            debugger;

            this.hot_use_list = item.hot.split(",");

        },
        assign_value(item) {
            this.handler_value_name = item;


        },
    }
});


$(function () {
    debugger;
    $.ajax({
        url: 'http://appservice.jtljia.net/appjia/commonReport/detail/',
        beforeSend: function (request) {
            request.setRequestHeader("app-device-id", 'HUAWEIEVA-TL00-B2T7N16C10001991');
            request.setRequestHeader("app-device-type", 'android');
            request.setRequestHeader("timestamp", 'android');
            request.setRequestHeader("systemName", '4.32.0');
            request.setRequestHeader("sign", 'fca872206da145ef94605bb5fed3fa91');
            request.setRequestHeader("content-type", 'application/json');
        },
        data: {
            pageCode:'org_order_following',
                    orgId:'',
        },
        async:false,
        type: 'post',
        xhrFields: {
            withCredentials: true
        },
        success: function (m) {
debugger;
         
           
            
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("失败");
        }
    });
})