var request = require('../../utils/request.js');
var config = require('../../utils/config.js');
var util = require('../../utils/util.js');
//var quote = require('../../utils/quote.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cid: "",
    code:"",
    customerName: "",
    customerPhone: "",
    address: "",
    problem: "",
    createTime: "",
    statusDesc: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.showLoading();
    var thisObj = this;
    wx.login({
      success: function (res) {
        thisObj.setData({
          code: res.code
        });

        thisObj.getDetail(options,res.code);
      }
    })
  },
  getDetail(options, code){
    if (options.cid) {
      this.setData({
        cid: options.cid
      });

      var data = {
        code: code
      };
      var thisObj = this;
      request.get(config.hmcApiHost + "repairOrder/detail/"+thisObj.data.cid, data).then(function (res) {
        util.hideLoading();
        wx.login({
          success: function (res) {
            thisObj.setData({
              code: res.code
            });
          }
        })

        if (res.statusCode != 200) {
          return;
        }
        if (res.data.status != "1") {
          util.alert(res.data.message);
          return;
        }
        
        //var that = this;
        thisObj.setData({
          customerName: res.data.data.customerName,
          customerPhone: res.data.data.customerPhone,
          address: res.data.data.address,
          problem: res.data.data.problem,
          createTime: res.data.data.createTime,
          statusDesc: res.data.data.statusDesc
        });

      });

    }
    else{
      util.hideLoading();
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