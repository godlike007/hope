
var Main = {
    methods: {
      select_chart_type(e,item){
      	this.cur_chart_data.chart_type = item.value;
      	
      	load_module_chart('chart_'+ item.value + this.cur_chart_data.module_index,item.value);
      	
      	load_data_model(item.value);
      	
      },
      select_chart_module(e,item){
      	var cur = e.currentTarget;
      	
      	$(".chart-module .active").addClass("active");
      	$(this).addClass("active");
      	
      	this.cur_chart_data.module_index = item.index;
      	
      	
      	
      	debugger;
      }
    },
    data() {
      return {
      	cur_chart_data:{
      		//typesetting_type
      		
      		//chart type
      		chart_type:1,
      		//chart module
      		module_index:'',
      		//data model
      		sql:'',
      		model_title:'',
      		x_axis:'',
      		y_axis:'',

      	},
      	
      	//typesetting_type
      	typesetting_type_list:[{
      		type: 1,
          name: 'HTML',
          label: 'HTML'
        }, {
        	type: 2,
          name: 'CSS',
          label: 'CSS'
        }, {
        	
          name: 'JavaScript',
          label: 'JavaScript'
        }],
      	//chart type
      	chart_type_list:[{
      		type: 1,
      		value:'line',
          name: '折线图',
          label: 'HTML'
        }, {
        	type: 2,
        	value:'bar',
          name: '直方图',
          label: 'CSS'
        }, {
        	type: 3,
        	value:'pie',
          name: '饼状图',
          label: 'JavaScript'
        }],
        
        //chart module
        chart_module_list:[{
        	index: 1,
          name: 'line',
          label: 'HTML'
        }, {
        	index: 2,
          name: 'bar',
          label: 'CSS'
        }, {
        	index: 3,
          name: 'pie',
          label: 'JavaScript'
        }],
        
      	//data model
      	x_axis_list: [{
          value: '1月',
          label: '1月'
        }, {
          value: '2月',
          label: '2月'
        }, {
          value: '3月',
          label: '3月'
        }],
      
      	
      	y_axis_list: [{
          value: 'a指标',
          label: 'a指标'
        }, {
          value: 'b指标',
          label: 'b指标'
        }, {
          value: 'c指标',
          label: 'c指标'
        }],
       
      }
    }
  }
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')


var myChart = {}

var load_module_chart = function(id,chart_type,data){
debugger;
        myChart[id] = echarts.init(document.getElementById(id));

        // 指定图表的配置项和数据
        

        // 使用刚指定的配置项和数据显示图表。
        myChart[id].setOption(chart_option_config[chart_type](data));	
}

var load_data_model = function(chart_type){

}

var chart_option_config = {
   line:function(data){	  
	  if(!!data){
	  	data = {
	  		title:'折现图示例',
	  		legend:['销量'],
	  		xAxis:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
	  		legend:'折现图示例',
	  		series_name:'销量',
	  		series_data:[5, 20, 36, 10, 10, 20],
	  		
	  	}
	  }

        var option = {
            title: {
                text: data.title
            },
            tooltip: {},
            legend: {
                data:data.legend
            },
            xAxis: {
                data:data.xAxis
            },
            yAxis: {},
            series: [{
                name: data.series_name,
                type: 'line',
                data: data.series_data,
            }]
        };
	
	return option;
},

   bar: function(data){
	  
	  if(!!data){
	  	data = {
	  		title:'直方图示例',
	  		legend:['销量'],
	  		xAxis:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
	  		series_name:'销量',
	  		series_data:[5, 20, 36, 10, 10, 20],
	  		
	  	}
	  }

        var option = {
            title: {
                text: data.title
            },
            tooltip: {},
            legend: {
                data:data.legend
            },
            xAxis: {
                data:data.xAxis
            },
            yAxis: {},
            series: [{
                name: data.series_name,
                type: 'bar',
                data: data.series_data,
            }]
        };
	
	return option;
},


 pie: function(data){
	  
	  if(!!data){
	  	data = {
	  		title:'饼状图示例',
			legend:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
	  		series_name:'访问来源',
	  		series_data:[
		                {value:335, name:'直接访问'},
		                {value:310, name:'邮件营销'},
		                {value:234, name:'联盟广告'},
		                {value:135, name:'视频广告'},
		                {value:1548, name:'搜索引擎'}
		            ]
	  		
	  	}
	  }


	var option = {
			title: {
                text: data.title
            },
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        data:data.legend
		    },
		    series: [
		        {
		            name:data.series_name,
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:data.series_data
		        }
		    ]
		};

	
	return option;
}

}