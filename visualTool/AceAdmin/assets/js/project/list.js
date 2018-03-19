	
    var v_sql = new Vue({
        el: '#v_sql',
        data: {
            
            data_table_list:[{
            	name:'jia_business_accounting_history',
            	fields_list:[{
            		name:'account'
            	},{
            		name:'house'
            	},{
            		name:'price'
            	},{
            		name:'area'
            	}]
            },{
            	name:'jia_business_accounting_item',
            	fields_list:[{
            		name:'product'
            	},{
            		name:'color'
            	},{
            		name:'union'
            	}]
            },{
            	name:'jia_business_accounting_log',
            	fields_list:[{
            		name:'brand'
            	},{
            		name:'productId'
            	}]
            }],
            table_selected_fields_list:[],
            fields_selected_list:[],
            data_list:[],
            condition_list:[{
            	name:'等于',
            	value:'=',
            	type:1,
            },{
            	name:'不等于',
            	value:'<>',
            	type:1,	
            },{
            	name:'小于',
            	value:'<',
            	type:1,	
            },{
            	name:'小于或等于',
            	value:'<=',
            	type:1,	
            },{
            	name:'大于',
            	value:'>',
            	type:1,	
            },{
            	name:'大于或等于',
            	value:'>=',
            	type:1,	
            },{
            	name:'包含',
            	value:"LIKE '%值%'",
            	type:2,	
            },{
            	name:'不包含',
            	value:"NOT (栏位 LIKE '%值%')",
            	type:2,			
            },{
            	name:'开始以',
            	value:"LIKE '值%'",
            	type:2,		
            },{
            	name:'结束以',
            	value:"LIKE '值%'",
            	type:2,		
            },{
            	name:'是 null',
            	value:'IS NULL',
            	type:1,		
            },{
            	name:'不是 null',
            	value:'IS NOT NULL',
            	type:1,		
            },{
            	name:'介于',
            	value:"((栏位 >= 值1) and (栏位 <= 值2))",
            	type:3,	
            },{
            	name:'非介于',
            	value:"NOT ((栏位 >= 值1) and (栏位 <= 值2))",
            	type:3,	
            },{
            	name:'在列表中',
            	value:"栏位 in ('aaa','bbb',...)",
            	type:4,	
            },{
            	name:'不在列表中',
            	value:"栏位 not in ('aaa','bbb',...)",
            	type:4,	
            }],
            
            cur_field:'',
            existing_condition_list:[]
        },
        methods: {
        	view_detail: function(item) {
   
				window.history.pushState(null, null, "?No="+item.id);
				$("#manage").load("detail.html");				
				
			},
			
			//####
			load_fields: function(e,item) {
				var is_add = render_selected_table(e.currentTarget);
				//debugger
				if(is_add){
					item.fields_list.forEach(function(o){
						o.table_name = item.name;
						v_sql.table_selected_fields_list.push(o);
						//v_sql.fields_selected_list.push(o);	
						
					})					
				}
				else{
					item.fields_list.forEach(function(o,index){
						debugger;
						//v_sql.table_selected_fields_list.$remove(o);
						var cur = $("[data-name='"+item.name+"_"+o.name+"']");
						if(cur.length>0){
							v_sql.table_selected_fields_list.splice($.inArray(o, v_sql.table_selected_fields_list),1);
						}
					})
				}
			},
			select_field: function(e,item) {
				
				var is_add = render_selected_table(e.currentTarget);	
				if(is_add){
					v_sql.fields_selected_list.push(item);					
				}
				else{
					v_sql.fields_selected_list.splice($.inArray(item, v_sql.fields_selected_list),1);
				}
			},
			select_filter: function(e,item) {
				v_sql.cur_field = item.name;
			},
			load_condition: function(e,item) {
				if(item.type == 1){
					var load_html = v_sql.cur_field + item.value;
					//render_sql(item);
				}
				if(item.type == 2){
					
				}
				if(item.type == 3){
					
				}
				if(item.type == 4){
					
				}
			},
			select_condition: function(e,item) {
				
			},

		},
		computed: {
	
		}
    });
    
    var testData = {"recordsFiltered":140,"pageInfo":{"current":1,"end":6,"maxPage":14,"pageSize":10,"start":1,"total":140},"draw":2,"list":[{"address":"江苏省无锡市","applyCertList":null,"bankCard":null,"belongChief":null,"belongChiefName":null,"birthday":-211536000000,"birthdayStr":"1963-04-20","certStatus":"0","createdBy":"无锡直营店主账号","createdDt":1521194584000,"datas":[],"deleteReason":null,"deleted":"0","education":"高中","email":null,"entryDate":null,"exprinfos":null,"familyAddress":null,"headIcon":null,"icon":null,"id":"a21dcb4dd4c9453f894b17d3a45c8499","idCard":"320325196304207517","isBackUpDesc":"未审核","isBackup":0,"isChief":0,"mobile":"18914267651","name":"吕守才","nativePlace":"江苏徐州","oprIds":null,"orgId":"5828be74689f418f9177dd1d7ac730fd","orgName":"无锡店","pageInfo":{"current":null,"end":null,"maxPage":null,"pageSize":null,"start":null,"total":null},"passedCertList":null,"policyNo":null,"printCard":"0","qqNumber":null,"regDt":null,"relations":null,"searchAll":false,"sex":"男","skills":"FZ","source":null,"starLevel":"1","status":"0","tempWorkerId":14477,"type":"1","typeDesc":"施工","updatedBy":null,"updatedDt":null,"weiXinNumber":null,"workNo":null,"workPositionId":null,"workPositionIdDesc":null,"workerReqDetail":null,"workerSnNo":null},{"address":"朝阳 金盏","applyCertList":null,"bankCard":null,"belongChief":"173384cc876b4a44b1108d20a3751dc6","belongChiefName":"田浩","birthday":168969600000,"birthdayStr":"1975-05-11","certStatus":"0","createdBy":"房毅","createdDt":1521187643000,"datas":[],"deleteReason":null,"deleted":"0","education":"小学","email":null,"entryDate":null,"exprinfos":null,"familyAddress":null,"headIcon":null,"icon":null,"id":"5c8ffd315c9540b08e082361d9add4c2","idCard":"131126197505114814","isBackUpDesc":"未审核","isBackup":0,"isChief":0,"mobile":"15033181619","name":"左书喜","nativePlace":"河北","oprIds":null,"orgId":"0966c06a3eca42b3bd4c9578312a73ee","orgName":"北京店","pageInfo":{"current":null,"end":null,"maxPage":null,"pageSize":null,"start":null,"total":null},"passedCertList":null,"policyNo":null,"printCard":"0","qqNumber":null,"regDt":null,"relations":null,"searchAll":false,"sex":"男","skills":"FZ","source":null,"starLevel":"1","status":"0","tempWorkerId":14468,"type":"1","typeDesc":"施工","updatedBy":null,"updatedDt":null,"weiXinNumber":null,"workNo":null,"workPositionId":null,"workPositionIdDesc":null,"workerReqDetail":null,"workerSnNo":null},{"address":"朝阳 金盏","applyCertList":null,"bankCard":null,"belongChief":"173384cc876b4a44b1108d20a3751dc6","belongChiefName":"田浩","birthday":-34502400000,"birthdayStr":"1968-11-28","certStatus":"0","createdBy":"房毅","createdDt":1521187037000,"datas":[],"deleteReason":null,"deleted":"0","education":"小学","email":null,"entryDate":null,"exprinfos":null,"familyAddress":null,"headIcon":null,"icon":null,"id":"5a9589a0a3aa4c4a83d0cdaa01171c37","idCard":"321023196811282214","isBackUpDesc":"未审核","isBackup":0,"isChief":0,"mobile":"18811567204","name":"张财付","nativePlace":"江苏","oprIds":null,"orgId":"0966c06a3eca42b3bd4c9578312a73ee","orgName":"北京店","pageInfo":{"current":null,"end":null,"maxPage":null,"pageSize":null,"start":null,"total":null},"passedCertList":null,"policyNo":null,"printCard":"0","qqNumber":null,"regDt":null,"relations":null,"searchAll":false,"sex":"男","skills":"FZ","source":null,"starLevel":"1","status":"0","tempWorkerId":14466,"type":"1","typeDesc":"施工","updatedBy":null,"updatedDt":null,"weiXinNumber":null,"workNo":null,"workPositionId":null,"workPositionIdDesc":null,"workerReqDetail":null,"workerSnNo":null},{"address":"朝阳 金盏","applyCertList":null,"bankCard":null,"belongChief":"173384cc876b4a44b1108d20a3751dc6","belongChiefName":"田浩","birthday":729014400000,"birthdayStr":"1993-02-07","certStatus":"0","createdBy":"房毅","createdDt":1521186813000,"datas":[],"deleteReason":null,"deleted":"0","education":"初中","email":null,"entryDate":null,"exprinfos":null,"familyAddress":null,"headIcon":null,"icon":null,"id":"643a7824b73c401b8813246fee5bb8c3","idCard":"51372319930207933X","isBackUpDesc":"未审核","isBackup":0,"isChief":0,"mobile":"18518902613","name":"刘吉祥","nativePlace":"四川","oprIds":null,"orgId":"0966c06a3eca42b3bd4c9578312a73ee","orgName":"北京店","pageInfo":{"current":null,"end":null,"maxPage":null,"pageSize":null,"start":null,"total":null},"passedCertList":null,"policyNo":null,"printCard":"0","qqNumber":null,"regDt":null,"relations":null,"searchAll":false,"sex":"男","skills":"S","source":null,"starLevel":"1","status":"0","tempWorkerId":14465,"type":"1","typeDesc":"施工","updatedBy":null,"updatedDt":null,"weiXinNumber":null,"workNo":null,"workPositionId":null,"workPositionIdDesc":null,"workerReqDetail":null,"workerSnNo":null},{"address":"朝阳 金盏","applyCertList":null,"bankCard":null,"belongChief":"173384cc876b4a44b1108d20a3751dc6","belongChiefName":"田浩","birthday":462816000000,"birthdayStr":"1984-09-01","certStatus":"0","createdBy":"房毅","createdDt":1521186573000,"datas":[],"deleteReason":null,"deleted":"0","education":"小学","email":null,"entryDate":null,"exprinfos":null,"familyAddress":null,"headIcon":null,"icon":null,"id":"7007a51f28964682ab9c0cdc4f68dc3c","idCard":"130406198409012716","isBackUpDesc":"未审核","isBackup":0,"isChief":0,"mobile":"13661178413","name":"蔺相如","nativePlace":"河北","oprIds":null,"orgId":"0966c06a3eca42b3bd4c9578312a73ee","orgName":"北京店","pageInfo":{"current":null,"end":null,"maxPage":null,"pageSize":null,"start":null,"total":null},"passedCertList":null,"policyNo":null,"printCard":"0","qqNumber":null,"regDt":null,"relations":null,"searchAll":false,"sex":"男","skills":"S","source":null,"starLevel":"1","status":"0","tempWorkerId":14464,"type":"1","typeDesc":"施工","updatedBy":null,"updatedDt":null,"weiXinNumber":null,"workNo":null,"workPositionId":null,"workPositionIdDesc":null,"workerReqDetail":null,"workerSnNo":null},{"address":"朝阳 金盏","applyCertList":null,"bankCard":null,"belongChief":"173384cc876b4a44b1108d20a3751dc6","belongChiefName":"田浩","birthday":356457600000,"birthdayStr":"1981-04-19","certStatus":"0","createdBy":"房毅","createdDt":1521186364000,"datas":[],"deleteReason":null,"deleted":"0","education":"初中","email":null,"entryDate":null,"exprinfos":null,"familyAddress":null,"headIcon":null,"icon":null,"id":"6b03731adf7046518238cded7fddbcd4","idCard":"512323198104194233","isBackUpDesc":"未审核","isBackup":0,"isChief":0,"mobile":"13717701246","name":"李大雍","nativePlace":"重庆","oprIds":null,"orgId":"0966c06a3eca42b3bd4c9578312a73ee","orgName":"北京店","pageInfo":{"current":null,"end":null,"maxPage":null,"pageSize":null,"start":null,"total":null},"passedCertList":null,"policyNo":null,"printCard":"0","qqNumber":null,"regDt":null,"relations":null,"searchAll":false,"sex":"男","skills":"Q","source":null,"starLevel":"1","status":"0","tempWorkerId":14463,"type":"1","typeDesc":"施工","updatedBy":null,"updatedDt":null,"weiXinNumber":null,"workNo":null,"workPositionId":null,"workPositionIdDesc":null,"workerReqDetail":null,"workerSnNo":null},{"address":"朝阳 金盏","applyCertList":null,"bankCard":null,"belongChief":"173384cc876b4a44b1108d20a3751dc6","belongChiefName":"田浩","birthday":153676800000,"birthdayStr":"1974-11-15","certStatus":"0","createdBy":"房毅","createdDt":1521186150000,"datas":[],"deleteReason":null,"deleted":"0","education":"小学","email":null,"entryDate":null,"exprinfos":null,"familyAddress":null,"headIcon":null,"icon":null,"id":"357c02ffd96048b5924d859f3232d524","idCard":"512924197411154893","isBackUpDesc":"未审核","isBackup":0,"isChief":0,"mobile":"13641140082","name":"吴应国","nativePlace":"四川","oprIds":null,"orgId":"0966c06a3eca42b3bd4c9578312a73ee","orgName":"北京店","pageInfo":{"current":null,"end":null,"maxPage":null,"pageSize":null,"start":null,"total":null},"passedCertList":null,"policyNo":null,"printCard":"0","qqNumber":null,"regDt":null,"relations":null,"searchAll":false,"sex":"男","skills":"W","source":null,"starLevel":"1","status":"0","tempWorkerId":14462,"type":"1","typeDesc":"施工","updatedBy":"房毅","updatedDt":1521193082000,"weiXinNumber":null,"workNo":null,"workPositionId":null,"workPositionIdDesc":null,"workerReqDetail":null,"workerSnNo":null},{"address":"连云港新浦北小区","applyCertList":null,"bankCard":null,"belongChief":"76f877f4a62c4d6ba030ea22d259f120","belongChiefName":"庄想想","birthday":571420800000,"birthdayStr":"1988-02-10","certStatus":"0","createdBy":"花红星","createdDt":1521186087000,"datas":[],"deleteReason":null,"deleted":"0","education":"高中","email":null,"entryDate":null,"exprinfos":null,"familyAddress":null,"headIcon":null,"icon":null,"id":"502f960d961741ee8e3bdf2825b9f4a4","idCard":"371122198802104990","isBackUpDesc":"未审核","isBackup":0,"isChief":0,"mobile":"15061336678","name":"李兴宇","nativePlace":"山东省日照市","oprIds":null,"orgId":"b04543dc89ca4c9392c8f95dc8aeb332","orgName":"连云港店","pageInfo":{"current":null,"end":null,"maxPage":null,"pageSize":null,"start":null,"total":null},"passedCertList":null,"policyNo":null,"printCard":"0","qqNumber":null,"regDt":null,"relations":null,"searchAll":false,"sex":"男","skills":"S","source":null,"starLevel":"1","status":"0","tempWorkerId":14461,"type":"1","typeDesc":"施工","updatedBy":null,"updatedDt":null,"weiXinNumber":null,"workNo":null,"workPositionId":null,"workPositionIdDesc":null,"workerReqDetail":null,"workerSnNo":null},{"address":"朝阳 金盏","applyCertList":null,"bankCard":null,"belongChief":"173384cc876b4a44b1108d20a3751dc6","belongChiefName":"田浩","birthday":24854400000,"birthdayStr":"1970-10-16","certStatus":"0","createdBy":"房毅","createdDt":1521185904000,"datas":[],"deleteReason":null,"deleted":"0","education":"初中","email":null,"entryDate":null,"exprinfos":null,"familyAddress":null,"headIcon":null,"icon":null,"id":"8637e4f442094943ab300167a455294e","idCard":"510227197010166657","isBackUpDesc":"未审核","isBackup":0,"isChief":0,"mobile":"13691020821","name":"付友伦","nativePlace":"重庆","oprIds":null,"orgId":"0966c06a3eca42b3bd4c9578312a73ee","orgName":"北京店","pageInfo":{"current":null,"end":null,"maxPage":null,"pageSize":null,"start":null,"total":null},"passedCertList":null,"policyNo":null,"printCard":"0","qqNumber":null,"regDt":null,"relations":null,"searchAll":false,"sex":"男","skills":"W","source":null,"starLevel":"1","status":"0","tempWorkerId":14460,"type":"1","typeDesc":"施工","updatedBy":null,"updatedDt":null,"weiXinNumber":null,"workNo":null,"workPositionId":null,"workPositionIdDesc":null,"workerReqDetail":null,"workerSnNo":null},{"address":"连云港新浦北小区","applyCertList":null,"bankCard":null,"belongChief":"76f877f4a62c4d6ba030ea22d259f120","belongChiefName":"庄想想","birthday":78681600000,"birthdayStr":"1972-06-30","certStatus":"0","createdBy":"花红星","createdDt":1521185861000,"datas":[],"deleteReason":null,"deleted":"0","education":"高中","email":null,"entryDate":null,"exprinfos":null,"familyAddress":null,"headIcon":null,"icon":null,"id":"f3b7ab1b2bf149fda2f772418a348793","idCard":"410522197206304098","isBackUpDesc":"未审核","isBackup":0,"isChief":0,"mobile":"18795556022","name":"杨献勇","nativePlace":"河南省安阳县","oprIds":null,"orgId":"b04543dc89ca4c9392c8f95dc8aeb332","orgName":"连云港店","pageInfo":{"current":null,"end":null,"maxPage":null,"pageSize":null,"start":null,"total":null},"passedCertList":null,"policyNo":null,"printCard":"0","qqNumber":null,"regDt":null,"relations":null,"searchAll":false,"sex":"男","skills":"M","source":null,"starLevel":"1","status":"0","tempWorkerId":14459,"type":"1","typeDesc":"施工","updatedBy":"花红星","updatedDt":1521186287000,"weiXinNumber":null,"workNo":null,"workPositionId":null,"workPositionIdDesc":null,"workerReqDetail":null,"workerSnNo":null}],"recordsTotal":140}
    

    var atest = testData.list.slice(0,100);
				atest.forEach(function(o){
					var obj = [];
					
					for(var item in o){
						obj.push({
							name:item,
							value:o[item]
						})
					}
					v_sql.data_list.push(obj);
					
					
					v_sql.$nextTick(function () {
	                    $("#data_list_page").pagination(v_sql.data_list.length, {
	                        num_edge_entries: 1, //边缘页数
	                        num_display_entries: 5, //主体页数
	                        callback: pageSelectCallback,
	                        items_per_page: 10 //每页显示10项
	                    });
	
	                    function pageSelectCallback(page_index, jq) {
	                        $(jq).prev().find(".stores-items").addClass("hide");
	                        $(jq).prev().find(".stores-items[data-page='" + (page_index + 1) + "']").removeClass("hide");
	                    }
	                });
					
					
				})			
    
   /* $.ajax({
			type : "get",
			url : urlConfig.DataUrl + "services/worker/getChiefWorkers",
			beforeSend: function (request) {
					request.setRequestHeader("token", POMSCom.GetCookie("token"));
				},
			data : {},
			async : false,//不然取不到数据
			success : function(data){
				debugger
				var atest = data.slice(0,100);
				atest.forEach(function(o){
					var obj = [];
					
					for(var item in o){
						obj.push({
							name:item,
							value:o[item]
						})
					}
					v_sql.data_list.push(obj);
					
					
					v_sql.$nextTick(function () {
	                    $("#data_list_page").pagination(v_sql.data_list.length, {
	                        num_edge_entries: 1, //边缘页数
	                        num_display_entries: 5, //主体页数
	                        callback: pageSelectCallback,
	                        items_per_page: 10 //每页显示10项
	                    });
	
	                    function pageSelectCallback(page_index, jq) {
	                        $(jq).prev().find(".stores-items").addClass("hide");
	                        $(jq).prev().find(".stores-items[data-page='" + (page_index + 1) + "']").removeClass("hide");
	                    }
	                });
					
					
				})			
			}
		});*/
		
    
    
    var render_selected_table = function(obj){
    	var is_selected = $(obj).hasClass("cur");
    	
    	if(is_selected){
    		$(obj).removeClass("cur");
    	}
    	else{
    		$(obj).addClass("cur");
    	}
	
    	return !is_selected;
    }
    
    var render_sql = function(item){
    	var aDatabases = [];
    	var aFields = [];
    	for(var o in v_sql.data_list[0]){
    		aFields.push(o);
    	}
    	v_sql.data_table_list.forEach(function(o){
    		aDatabases.push(o);
    	})

		var databases_str = aDatabases.join(",");
    	var fields_str = aFields.join(",");
    	
    	var base_sql = "select" + fields_str + "from" + databases_str + "where";
    	
    	if(item.type == 1){
			
		}
		if(item.type == 2){
			
		}
		if(item.type == 3){
			
		}
		if(item.type == 4){
			
		}
    }
    
    
	



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
