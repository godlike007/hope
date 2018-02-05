var query_condition = new Vue({
  el: '#query_condition',
  data: {
    field_list: [{
    	name:'日期'
    },
    {
    	name:'姓名'
    },
    {
    	name:'省份'
    },
    {
    	name:'市区'
    },
    {
    	name:'地址'
    },
    {
    	name:'邮编'
    }],
    field_list_show: [{
    	name:'日期'
    },
    {
    	name:'姓名'
    },
    {
    	name:'省份'
    },
    {
    	name:'市区'
    },
    {
    	name:'地址'
    },
    {
    	name:'邮编'
    }]
  },
  methods: {
      selected_field:function(e,item){
      	debugger
      	var cur = e.currentTarget;
      	if($(cur).hasClass("el-button--primary")){
      		query_condition.field_list_show = query_condition.field_list_show.filter(function(t){
      			return t.name != item.name;
      		});
      		$(cur).removeClass("el-button--primary").addClass("el-button--default");
      	}
      	else{
      		query_condition.field_list_show.push({
      			name:item.name
      		});
      		$(cur).removeClass("el-button--default").addClass("el-button--primary");
      	}	
      },
      create_data_model:function(){
      	debugger
      	
      },
    },
})
var Main = {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
      	test:1,
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
