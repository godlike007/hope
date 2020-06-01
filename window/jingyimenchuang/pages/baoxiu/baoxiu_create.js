// pages/baoxiu/baoxiu_create.js
var config = require('../../utils/config.js');
var request = require('../../utils/request.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code:"",
    customerName:"",
    customerPhone:"",
    address:"",
    problemDescription:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let _this = this;
    _this.setData({ customerName: "" });
    _this.setData({ customerPhone: "" });
    _this.setData({ address: "" });
    _this.setData({ problemDescription: ""});
    wx.login({
      success: function (res) {
        _this.setData({ code: res.code });
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  searchBox: function (e) {
    const that = this;
    let first, second;
    that.setData({
      customerName: e.detail.value.customerName,
      customerPhone: e.detail.value.customerPhone,
      address: e.detail.value.address,
      problemDescription: e.detail.value.problemDescription
    })
  },
  errorShow(message){
    wx.showToast({
      title: message,
      icon: "none",
      duration: 3000
    });
  },
  getPhoneNumber(e) {
    
    var params = {
      encryptedData: e.detail.encryptedData,
      iv: e.detail.iv,
      code: this.data.code,
      customerName: this.data.customerName,
      customerPhone: this.data.customerPhone,
      //customerPhone:"18625213339",
      problemDescription: this.data.problemDescription,
      address: this.data.address
    };
    
    if(params.customerName ==""){
      this.errorShow("请输入客户姓名");
      return;
    }
    if (params.customerPhone == "") {
      this.errorShow("请输入手机号");
      return;
    }
    if (!(/^1[3456789]\d{9}$/.test(params.customerPhone))) {
      this.errorShow("手机号码有误，请重新填写");
      return false;
    }
    if (params.address == "") {
      this.errorShow("请输入小区地址");
      return;
    }
    if (params.problemDescription == "") {
      this.errorShow("请输入报修问题");
      return;
    }

    var _thisObj = this;
    var url = config.hmcApiHost +"repairOrder/save";
    request.post(url, params).then(function (res) {
      
      wx.login({
        success: function (res) {
          //this.data.code =res.code;
          _thisObj.setData({ code: res.code });
        }
      })

      if (res.statusCode == 200) {
        //console.info(res.data);
        wx.switchTab({
          url: '/pages/baoxiu/baoxiu_list',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      }
      else {
        wx.showToast({
          title: '提交失败了哎！',
          icon: "none",
          duration: 3000
        });
      }
    });

  }

  
})