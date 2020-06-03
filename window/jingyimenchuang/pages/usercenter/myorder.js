var config = require('../../utils/config.js');
var request = require('../../utils/request.js');
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    pageIndex: 1,
    code: "",
    orderList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.orderStatus) {
      this.setData({
        currentTab: options.orderStatus
      });
    }
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
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  clickTab: function (e) {
    //console.log(this.data.currentTab === e.target.dataset.current);
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current
      })
      this.geteDataList();
    }
  },
  geteDataList: function () {debugger
    var pageIndex = this.data.pageIndex;
    var orderStatus= this.data.currentTab;
    if (orderStatus == 0){
      orderStatus = "";
    }
    var data = {
      pageNum: pageIndex,
      pageSize: 10,
      orderStatus: orderStatus,
      code:this.data.code
    };
    var thisObj = this;
    request.get(config.hmcApiHost + "mallOrder/listFrontData", data).then(function (res) {
      debugger
      util.hideLoading();
      wx.login({
        success: function (res) {
          thisObj.setData({ code: res.code });
        }
      })

      if (res.statusCode != 200) {
        return;
      }
      if (res.data.status != 1) {
        util.alert(res.data.message);
        return;
      }
      thisObj.setData({ orderList: res.data.data.list });
    });
  },


})