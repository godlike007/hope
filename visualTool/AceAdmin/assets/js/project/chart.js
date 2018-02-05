
var Main = {
    methods: {
      select_chart_type(e,item){
      	this.chart_type = item.type;
      	
      },
      select_chart_module(e,item){
      	this.cur_module_id = item.index;
      	
      	init_chart();
      	
      	debugger;
      }
    },
    data() {
      return {
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
          name: '折线图',
          label: 'HTML'
        }, {
        	type: 2,
          name: '直方图',
          label: 'CSS'
        }, {
        	type: 3,
          name: '饼状图',
          label: 'JavaScript'
        }],
        chart_type:1,
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
        cur_module_id:'',
      	//data model
      	x_axis_list: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        x_axis: [],
      	
      	y_axis_list: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        y_axis: [],
        tableData4: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')



var init_chart = function(id){
 // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById(id));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);	
}
