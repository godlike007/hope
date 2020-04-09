
monitoring = new Vue({
    el: "#monitoring1",
    data() {
        return {
            index_list: [{
                title: '今日开工',
                value:20,
            }, {
                title: '今日在建',
                value:15,
            }, {
                title: '今日完工',
                value:5,
            }, {
                title: '待开工',
                value:5,
            }, {
                title: '待验收',
                value:2,
            }, {
                title: '停工',
                value:1,
            }],
            project_list: [{
                title: '海德公园',
                status:'视频监控中'
            }, {
                title: '海尚壹品',
                status:'信号中断'
            }, {
                title: '中海国际',
                status:'正在重连中'
            }, {
                title: '金色万科',
                status:'视频监控中'
            }],
            manager_list: [{
                name: '张三',
                num:2,
            }, {
                name: '李四',
                num:4,
            }, {
                name: '王五',
                num:1,
            }, {
                name: '赵四',
                num:3,
            }],
            housekeeper_list: [{
                name: '雷军',
                num:7,
            }, {
                name: '马云',
                num:1,
            }, {
                name: '张一鸣',
                num:5,
            }, {
                name: '马化腾',
                num:3,
            }],
            video_list: [{
                title: '海德公园',
            
            }, {
                title: '金色万科',
            }],
            //cur_time:(new Date()).toLocaleString()
        };
    },

    computed: {
        cur_time(){
            var d =  new Date();
            return (d.getMonth()+1)+'月'+d.getDate()+'日  '+d.getHours()+':'+d.getMinutes();
        }
    },
    mounted: function () {
        this.init();
        this.$nextTick(function () {

        })
    },

    methods: {
        init() { },
        toggel_section(item) {
            this.cur_section = item.name;
            this.setting_list = this.setting_data[item.name];

            this.$nextTick(function () {

            })

        },
        add_code(item) {
            this.code += $.trim($("#" + item.id).html().replace(/\#/, this.handler_value_name)) + "\n";

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


var roY=0,roX=-10;
 var xN=0,yN=0;
 var play=null;
$(document).mousedown(function(ev){
    var x_=ev.clientX;
    var y_=ev.clientY;

console.log("x:"+x_+",y:"+y_);

    clearInterval(play);
            //console.log('我按下了');
            $(this).bind('mousemove',function(ev){
                /*获取当前鼠标的坐标*/
                var x=ev.clientX;
                var y=ev.clientY;
                /*两次坐标之间的距离*/
                  xN=x-x_;
                  yN=y-y_;
    
                 roY+=xN*0.2;
                roX-=yN*0.1;
                //console.log('移动');
                //$('body').append('<div style="width:5px;height:5px;position:absolute;top:'+y+'px;left:'+x+'px;background-color:red"></div>');
    
                $('#road').css({
                     transform:'perspective(800px) rotateX('+roX+'deg) rotateY('+roY+'deg)'
                });
                /*之前的鼠标坐标*/
             x_=ev.clientX;
             y_=ev.clientY;
    
            });
        }).mouseup(function(){
              $(this).unbind('mousemove');
              var play=setInterval(function(){
               
               xN*=0.95;
               yN*=0.95
               if(Math.abs(xN)<1 && Math.abs(yN)<1){
                  clearInterval(play);
               }
                roY+=xN*0.2;
                roX-=yN*0.1;
                $('#road').css({
                     transform:'perspective(800px) rotateX('+roX+'deg) rotateY('+roY+'deg)'
                });
    
              },30);
    
        });


        