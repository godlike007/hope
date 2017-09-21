/**
 * 方法说明
 * @method checkInput.userDefined(element,regex,inputTip) 现有方法：checkInput.city，checkInput.mobile，checkInput.houseArea
 * @param element：jquery选择器传值，regex：正则表达式，inputTip：正则不满足input内的提示文字
 * @return true or false
 */
var checkInput = {
	
		mustFillTip:"请完善您的信息",
		isFill:function(element){
			var txt = $(element).val();
			if(txt != ""&&txt!="请完善您的信息"&&txt!="请输入汉字"){
				return true;
			}
			return false;
		},
		baseIsFill:function(element,inputTip){
			var txt = $(element).val();
			if(txt != ""&&txt!=inputTip){
				return true;
			}
			else{

				return false;
			}
			
		},
		regexOk:function(element,regex){
			return regex.test($(element).val());
		},
		showTip:function(element,inputTip){
			$(element).val(inputTip);
			$(element).css("color","#FF0202");
			$(element).css("border","1px solid #FFABAB");
			$(element).css("background-color","#FCE9E9");
		},
		clear:function(){
			
		},

	
    userDefined:function(element,regex,inputTip){
    	//$(element).focusout();
    	if(this.isFill(element)){
    		if(!this.regexOk(element,regex)){
    			this.showTip(element,inputTip);
    			$(element).focusin(function() {
				  if($(this).val()==inputTip){  			  	
				  	  $(this).val("");
					  $(element).css("color","#8f8f8f");
					  $(element).css("border-color","#b5b5b5");
					  $(element).css("background-color","white");
				   }
				});
    			
    			return false;
    		}

    		return true;
    	}
    	else{
    		this.showTip(element,this.mustFillTip);
    		$(element).focusin(function() {
  				if($(this).val()=="请完善您的信息"){  
			  	  $(this).val("");
				  $(element).css("color","#8f8f8f");
				  $(element).css("border-color","#b5b5b5");
				  $(element).css("background-color","white");
 				}
			});
			return false;
    	}
    },
	userSelect:function(element,regex,inputTip){
		if(this.isFill(element)){
			/*if(!this.regexOk(element,regex)){
				this.showTip(element,inputTip);
				$(element).focusin(function() {
					if($(this).val()==inputTip){
						$(this).val("");
						$(element).css("color","#8f8f8f");
						$(element).css("border-color","#b5b5b5");
						$(element).css("background-color","white");
					}
				});

				return false;
			}*/
			$(element).change(function(){
				$(element).parent().css("border-color","#b5b5b5");
			});
			$(element).parent().css("border-color","#b5b5b5");
			return true;
		}
		else{
			$(element).parent().css("border","1px solid #FFABAB");
			/*$(element).focusin(function() {
				if($(this).val()=="请完善您的信息"){
					$(this).val("");
					$(element).css("color","#8f8f8f");
					$(element).css("border-color","#b5b5b5");
					$(element).css("background-color","white");
				}
			});*/
			$(element).change(function(){
				$(element).parent().css("border-color","#b5b5b5");
			});
			return false;
		}
	},
    baseUserDefined:function(element,regex,inputTip){
        if(this.baseIsFill(element,inputTip)){
    		if(!this.regexOk(element,regex)){
    			this.showTip(element,inputTip);
    			$(element).focusin(function() {
    			  if($(this).val()==inputTip){
    			  	  $(this).val("");
					  $(element).css("color","#8f8f8f");
					  $(element).css("background-color","white");
    			   }
				});
    			return false;
    		}
    		return true;
    	}
        else{
        	var txt = $(element).val();
        	if(txt == inputTip){
        		return false;
        	}
        	else{
        		return true;
        	}
        	
        }
    },
	pwdCompare:function(element1,element2,inputTip){
    	if(this.isFill(element1)){
    		if(this.isFill(element2)){
				var e1 = $(element1).val();
				var e2 = $(element2).val();
    			if(e1!=e2){
					$(element1).removeAttr("type");
					$(element2).removeAttr("type");
					this.showTip(element1,inputTip);
					this.showTip(element2,inputTip);
					return false;
				}
			
				$(element1).unbind("focusin");
				$(element2).unbind("focusin");
				
				
				return true;
			}else{
				$(element2).removeAttr("type");
				this.showTip(element2,this.mustFillTip);
				$(element2).focusin(function() {
				  $(this).val("");
				  $(element2).css("color","#8f8f8f");
				  $(element2).css("background-color","white");
				});
				return false;
			}
    		
    	}
    	else{
			$(element1).removeAttr("type");
    		this.showTip(element1,this.mustFillTip);
    		$(element1).focusin(function() {
			  $(this).val("");
			  $(element1).css("color","#8f8f8f");
			  $(element1).css("background-color","white");
			});
			return false;
    	}
    },
    
    //不能为空
    notNull:function(element){   	
    	var regex = /^.*[^\s]+.*$/;
    	var isOk = this.userDefined(element,regex,"不能为空");
    	if(isOk){
    		return true;
    	}
    	else{
    		return false;
    	}
    },
	//selec必选
	notNullSelect:function(element){
		var regex = /^.*[^\s]+.*$/;
		var isOk = this.userSelect(element,regex,"不能为空");
		if(isOk){
			return true;
		}
		else{
			return false;
		}
	},
    //正整数校验（可不填）
    positiveInteger:function(element){   	
    	var regex = /^\+?[1-9][0-9]*$/;
    	var isOk = this.baseUserDefined(element,regex,"请输入正整数或者不填");
    	if(isOk){
    		return true;
    	}
    	else{
    		return false;
    	}
    },
        //0或正数校验（可不填）
    nonnegativeNumber:function(element){   	
    	var regex = /^([0-9])+(\.[0-9]+)?$/;
    	var isOk = this.baseUserDefined(element,regex,"请输入0或正数");
    	if(isOk){
    		return true;
    	}
    	else{
    		return false;
    	}
    },
   //0或正数校验
    mustFillNonnegativeNumber:function(element){   	
    	var regex = /^([0-9])+(\.[0-9]+)?$/;
    	var isOk = this.userDefined(element,regex,"请输入0或正数");
    	if(isOk){
    		return true;
    	}
    	else{
    		return false;
    	}
    },
       //只为正数
    isPositiveNum:function(element){   	
//  	var regex = /^(-)?[1-9][0-9]*$/;
    	var regex = /^(0\.\d+)|([1-9][0-9]*(\.\d+)?)$/;
    	var isOk = this.userDefined(element,regex,"请输入正数");
    	if(isOk){
    		return true;
    	}
    	else{
    		return false;
    	}
    },
	//只为正数
	checkPerformance:function(element){
		var regex = /^([0-9])+(\.[0-9]+)?$/;
		var isOk = this.userDefined(element,regex,"请输入正数");

		if(isOk){
			var standardScore =parseFloat($(element).parents('tr').find('td.score').text());
			if(standardScore < $(element).val()){
				this.showTip(element,"填写分数大于标准分数！");
				$(element).focusin(function() {
					if($(this).val()=="填写分数大于标准分数！"){
						$(this).val("");
						$(element).css("color","#8f8f8f");
						$(element).css("border-color","#b5b5b5");
						$(element).css("background-color","white");
					}
				});
				return false;
			}
			return true;
		}
		else{
			return false;
		}
	},
           //只为正数(可不填)
    isPositiveNumCanBeNull:function(element){   	
//  	var regex = /^(-)?[1-9][0-9]*$/;
    	var regex = /^(0\.\d+)|([1-9][0-9]*(\.\d+)?)$/;
    	var isOk = this.baseUserDefined(element,regex,"请输入正数");
    	if(isOk){
    		return true;
    	}
    	else{
    		return false;
    	}
    },
    //输入城市校验
    city:function(element){   	
    	var regex = /^[\u4E00-\u9FFF]+$/;
    	var isOk = this.userDefined(element,regex,"请输入汉字");
    	if(isOk){
    		return true;
    	}
    	else{
    		return false;
    	}
    },
    //输入手机校验
    mobile:function(element){   	
    	var regex = /^1[3|4|5|7|8]\d{9}$/;
    	var isOk = this.userDefined(element,regex,"手机号格式不正确");
    	if(isOk){
    		return true;
    	}
    	else{
    		return false;
    	}
    },
    //输入面积校验
    houseArea:function(element){   	
    	var regex = /^[1-9]\d*$/;
    	var isOk = this.userDefined(element,regex,"请输入正整数");
    	if(isOk){
    		return true;
    	}
    	else{
    		return false;
    	}
    },
    //密码校验
    pwdRegex:function(element){   	
    	var regex = /^[\\@A-Za-z0-9\\-\\_\\.]{6,16}$/;
    	var isOk = this.userDefined(element,regex,"密码格式不正确(6-20位字符 可由大小写英文，数字或符号-_组成)");
    	if(isOk){
    		return true;
    	}
    	else{
			$(element).removeAttr("type");
    		return false;
    	}
    },
	//密码校验
    pwdSame:function(element1,element2){   	
    	var isOk = this.pwdCompare(element1,element2,"两次输入的密码不一致");
    	if(isOk){
    		return true;
    	}
    	else{
    		return false;
    	}
    }
}


var validate = {
	nullableClass:"jtl-validate-nullable",
	classNames:["jtl-validate-phone","jtl-validate-chinese","jtl-validate-positiveInteger"],
	init:function(){
		//debugger;
		$(validate.classNames).each(function(i,item){
			$("." + item).removeAttr("style");
		})
		$("." + this.nullableClass).each(function(i,item){
			var className = $(item).attr("class").split(" ")[0];
			funcName = className.split("-")[2];
			validate[funcName]("." + className,true);
		})
		
		$(validate.classNames).each(function(i,item){
			funcName = item.split("-")[2];
			validate[funcName]("." + item + ":not(." + validate.nullableClass + ")",false);
		})
	},
	
	mustFillTip:"请填写",
	isFill:function(element){
		var txt = $(element).val();
		if(txt != ""&&txt!="请填写"){
			return true;
		}
		return false;
	},
	regexOk:function(element,regex){
		return regex.test($(element).val());
	},
	showTip:function(element,inputTip){
		debugger;
		//$(element).css("backgroundColor","pink");
		$(element).val(inputTip);
		$(element).css("color","red");
		
		$(element).css("animation","jtl-validate-warning 3s");
		//$(element).css("transition-duration","2s");
		//$(element).css("transition-timing-function","linear");
		//$(element).css("transition-delay","1s");
		
		//$(element).animate({'backgroundColor':'#FFDDE3'},5000); 
		$(element).focusin(function() {
		  $(this).val("");
		  $(element).css("color","#999");
		  $(element).css("background-color","white");
		});
	},
	clear:function(){
		
	},
    userDefined:function(element,regex,inputTip){
    	if(this.isFill(element)){
    		if(!this.regexOk(element,regex)){
    			this.showTip(element,inputTip);
    			return false;
    		}
    		$(element).unbind("focusin");
    		return true;
    	}else{
    		this.showTip(element,this.mustFillTip);
    		$(element).focusin(function() {
			  $(this).val("");
			  $(element).css("color","#999");
			  $(element).css("background-color","white");
			});
			return false;
    	}
    },
    userDefinedCanBeEmpty:function(element,regex,inputTip){
    	if(this.isFill(element)){
    		if(!this.regexOk(element,regex)){
    			this.showTip(element,inputTip);
    			return false;
    		}
    		$(element).unbind("focusin");
    		return true;
    	}else{
    		return true;
    	}
    },
    //输入手机校验
    phone:function(element,isNull){
    	debugger;
    	var regex = /^1[3|4|5|7|8]\d{9}$/;
    	var isOk = false;
    	if(isNull){
    		isOk = this.userDefinedCanBeEmpty(element,regex,"手机号格式不正确");
    	}
    	else{
    		isOk = this.userDefined(element,regex,"手机号格式不正确");
    	}
    	
    	if(isOk){
    		return true;
    	}
    	else{
    		return false;
    	}
    },
    //输入城市校验
    chinese:function(element,isNull){
    	debugger;
    	var regex = /^[\u4E00-\u9FFF]+$/;
    	//var isOk = this.userDefined(element,regex,"请输入汉字");
    	var isOk = false;
    	if(isNull){
    		isOk = this.userDefinedCanBeEmpty(element,regex,"请输入汉字");
    	}
    	else{
    		isOk = this.userDefined(element,regex,"请输入汉字");
    	}
    	
    	if(isOk){
    		return true;
    	}
    	else{
    		return false;
    	}
    },
    positiveInteger:function(element,isNull){
    	debugger;
    	var regex = /^[0-9]*[1-9][0-9]*$/;
    	//var isOk = this.userDefined(element,regex,"请输入正整数");
     	var isOk = false;
    	if(isNull){
    		isOk = this.userDefinedCanBeEmpty(element,regex,"请输入正整数");
    	}
    	else{
    		isOk = this.userDefined(element,regex,"请输入正整数");
    	}   	
    	if(isOk){
    		return true;
    	}
    	else{
    		return false;
    	}
    }    
}


var checkSelect = {
	notNull:function(element){
		debugger;
		if($(element).val()==""||$(element).val()==null){
			$(element).css("border","1px solid red");
			$(element).focusin(function() {
				if($(this).val()!=""||$(this).val()!=null){
					$(this).val("");
					$(element).css("border","1px solid #D5D5D5");
				}
			});
			return false;
		}
		else{
			$(element).css("border","1px solid #D5D5D5");
			return true;
		}
	}
}