var config = require('../../utils/config.js');
var request = require('../../utils/request.js');
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: "",
    activityList: [],
    pageIndex: 1,
    grouBannerImg:""
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
    util.showLoading();
    let _this = this;
    _this.setData({ grouBannerImg: config.grouBannerImg });
    wx.login({
      success: function (res) {
        _this.setData({ code: res.code });
        _this.geteDataList();
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
  geteDataList: function () {
    var pageIndex = this.data.pageIndex;
    var data = {
      pageNum: pageIndex,
      pageSize: 20,
      code: this.data.code
    };
    var thisObj = this;
    //frontActivity/listActivity
    request.get(config.hmcApiHost + "goods/listPingGroupGoods", data).then(function (res) {
      util.hideLoading();
      if (res.statusCode != 200) {
        return;
      }
      if (res.data.status != 1) {
        util.alert(res.data.message);
        return;
      }
      debugger
      for (var i = 0; i < res.data.data.list.length; i++ ){
        res.data.data.list[i].btnFlag =1;
      }
      debugger
      thisObj.setData({ activityList: res.data.data.list });
    });
  },
  redirect: function (e) {
    var cid = e.currentTarget.dataset.cid;
    wx.navigateTo({
      url: '/pages/baoxiu/baoxiu_detail?cid=' + cid,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  cutPrice: function (e){debugger
    var index = e.target.dataset.index;
    var activityId = e.target.dataset.activityid;
    var data = {
      activityId: activityId,
      code: this.data.code
    };

    var thisObj = this;
    request.post(config.hmcApiHost + "mallOrder/cutPrice", data).then(function (res) {
      // wx.login({
      //   success: function (res) {
      //     thisObj.setData({ code: res.code });
      //   }
      // })

      if (res.statusCode != 200) {
        return;
      }
      if (res.data.status != 1) {
        util.alert(res.data.message);
        return;
      }
      debugger
      var cutPrice = res.data.data.cutPrice;
      var dataList = thisObj.data.activityList;
      dataList[parseInt(index)].currentPrice = res.data.data.newPrice;
      dataList[parseInt(index)].btnFlag = 2;//展示跳转按钮
      
      if (cutPrice && cutPrice > 0){
        util.errorShow('当前团购商品预计砍掉' + cutPrice + '元~');
      }
      else{
        util.errorShow('活动商品已经砍到最低价了~');
      }
      setTimeout(function(){
        thisObj.setData({ activityList: dataList });
      } , 3000);
    });

  }
  ,
  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '18662668966' // 仅为示例，并非真实的电话号码
    })
  }

})