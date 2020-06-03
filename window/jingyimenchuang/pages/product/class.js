var config = require('../../utils/config.js');
var request = require('../../utils/request.js');
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 10001,
    productList: [],
    pageIndex: 1,
    recordsTotal:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.type){
      this.setData({
        currentTab: options.type
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
    _this.geteDataList(this.data.pageIndex);
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
    
    var pageIndex = this.data.pageIndex;
    if (pageIndex * 10 < this.data.recordsTotal) {
      this.data.pageIndex = pageIndex + 1;
      this.geteDataList(pageIndex + 1);
    }
    else {
      return false;
    }
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
      this.geteDataList(1);
    }
  },
  geteDataList: function (pageIndex) {
    //var pageIndex = this.data.pageIndex;
    var data = {
      pageNum: pageIndex,
      pageSize: 10,
      categoryId: this.data.currentTab
    };
    var thisObj = this;
    request.get(config.hmcApiHost + "goods/listData", data).then(function (res) {
      util.hideLoading();
      if (res.statusCode != 200) {
        return;
      }
      if (res.data.status != 1) {
        util.alert(res.data.message);
        return;
      }

      var dataList;
      if (pageIndex == 1){
        dataList = res.data.data.list;
      }
      else{
        dataList = thisObj.data.productList.concat(res.data.data.list);
      }
      thisObj.setData({ 
        productList: dataList ,
        recordsTotal: res.data.data.recordsTotal
        });
    });
  },
  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '18662668966' // 仅为示例，并非真实的电话号码
    })
  }

})