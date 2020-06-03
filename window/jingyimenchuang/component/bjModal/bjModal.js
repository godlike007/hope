var request = require('../../utils/request.js');
var config = require('../../utils/config.js');
var util = require('../../utils/util.js');
//var quote = require('../../utils/quote.js');

// pages/storeSelect/storeSelect.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    reservationCode:{
      type:String,
      value:""
    },
    yyTitle: {
      type: String,
      value: ""
    },
    yyRemark: {
      type: String,
      value: ""
    },
    code: {
      type: String,
      value: ""
    },
    orgId:{
      type:String,
      value:""
    },
    userId:{
      type:String,
      value:""
    },
    channel:{
      type:String,
      value:""
    },
    sourcePage:{
      type:String,
      value:""
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    hideModal: true,
    animationData: {},
    bjBtnShow:true,
    bjGetPhone:false,
    //packageInfo:{}
    productName: "",
    url: "",
    price: 0,
    itemList: [],
    qty:1,
    productId: 0,
    orderType:2,
    activityProductId:null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //动画集
    fadeIn: function () {
      this.animation.translateY(0).step()
      this.setData({
        animationData: this.animation.export()//动画实例的export方法导出动画数据传递给组件的animation属性
      })
    },
    fadeDown: function () {
      this.animation.translateY(300).step()
      this.setData({
        animationData: this.animation.export(),
      })
    },
    // yyLiuzi: function (e) {
    //   var ch = e.target.dataset.ch;
    //   var data = this.data;
    //   var reservationCode;
    //   switch (ch) {
    //     case "special_server_yysj":
    //       data.yyTitle = "预约设计";
    //       data.yyRemark = "线上预约，专享一对一户型设计服务";
    //       reservationCode = "预约设计"
    //       break;
    //     case "special_server_gdcg":
    //       data.yyTitle = "工地参观";
    //       data.yyRemark = "预约实地看工地，施工品质看得见";
    //       reservationCode = "预约参观工地"
    //       break;
    //     case "special_server_ybfty":
    //       data.yyTitle = "样板房体验";
    //       data.yyRemark = "样板房、主材、施工工艺真实体验";
    //       reservationCode = "预约到店"
    //       break;
    //     case "special_server_mfyf":
    //       data.yyTitle = "免费验房";
    //       data.yyRemark = "线上预约，专享免费上门验房服务";
    //       reservationCode = "预约验房"
    //       break;
    //     case "special_server_mflf":
    //       data.yyTitle = "免费量房";
    //       data.yyRemark = "线上预约，专享免费上门量房服务";
    //       reservationCode = "预约量房"
    //       break;
    //     case "special_server_mfsj":
    //       data.yyTitle = "免费设计";
    //       data.yyRemark = "线上预约，专享免费户型规划设计服务";
    //       reservationCode = "预约设计"
    //       break;
    //     case "yyzc":
    //       data.yyTitle = "预约专车";
    //       data.yyRemark = "线上预约，专享免费户型规划设计服务";
    //       reservationCode = "预约专车"
    //       break;
    //     default:
    //       data.yyTitle = "预约到店";
    //       data.yyRemark = "线上预约，专享免费户型规划设计服务";
    //       reservationCode = "预约到店"
    //       break;
    //   }
    //   this.setData(data);
    //   this.showModal(reservationCode);
    // },
    // 显示遮罩层
    showModal: function (productName, url, price, itemList, orderType, activityProductId) {debugger
      // this.setData({ reservationCode: reservationCode });
      //reservationCode = reservationCode || this.data.reservationCode;
      var that = this;
      that.setData({
        hideModal: false,
        productName: productName,
        url: url,
        price: price,
        itemList: itemList,
        productId:itemList[0].id,
        activityProductId: activityProductId
      })

      if (orderType){
        that.setData({
          orderType: orderType
        })
      }

      var animation = wx.createAnimation({
        duration: 400,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
        timingFunction: 'ease',//动画的效果 默认值是linear
      })
      this.animation = animation
      setTimeout(function () {
        that.fadeIn();//调用显示动画
      }, 100);
    },

    // 隐藏遮罩层
    hideModal: function () {
      var that = this;
      var animation = wx.createAnimation({
        duration: 400,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
        timingFunction: 'ease',//动画的效果 默认值是linear
      })
      this.animation = animation
      that.fadeDown();//调用隐藏动画   
      setTimeout(function () {
        that.setData({
          hideModal: true
        })
      }, 100)//先执行下滑动画，再隐藏模块
    },
    setArea: function (e) {
      var data = this.data;
      data.area = e.detail.value;

      if (isNaN(this.data.area) || this.data.area <= 0) {
        data.bjBtnShow = true;
        data.bjGetPhone = false;
      } else {
        data.bjBtnShow = false;
        data.bjGetPhone = true;
      }
      this.setData(data);
    },
    checkArea: function () {
      if (isNaN(this.data.area) || this.data.area <= 0) {
        util.alert("请输入正确的面积！");
      }
    },
    changeProductNum: function(e){debugger
      var that = this;
      that.setData({
        productId: e.target.dataset.id
      })
    }


  }
})
