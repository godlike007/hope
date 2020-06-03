var config = require('../../utils/config.js');
var request = require('../../utils/request.js');
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: "",
    activityItemList:[],
    pageIndex: 1
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
    wx.login({
      success: function (res) {
        _this.setData({ code: res.code });
        _this.geteDataList();
      }
    })
  },
  geteDataList: function () {
    var pageIndex = this.data.pageIndex;
    var data = {
      pageNum: pageIndex,
      pageSize: 20,
      code: this.data.code
    };
    var thisObj = this;
    request.get(config.hmcApiHost + "frontUser/centerData", data).then(function (res) {debugger
      util.hideLoading();
      if (res.statusCode != 200) {
        util.alert("查询信息失败，请联系客服~");
        return;
      }
      if (res.data.status != 1) {
        util.alert(res.data.message);
        return;
      }
      thisObj.setData({ activityItemList: res.data.data.activityItemList });
    });
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

  }
})