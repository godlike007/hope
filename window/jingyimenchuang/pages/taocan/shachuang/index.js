// pages/taocan/oto_quanwu/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgaList: [
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/09e2cdb63ae04fe0bc174cfd0dc9489b.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/10b5b9278de944b3a7732c87f15b6314.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/1b3c14ffa9674b30ad39af16f290f4ab.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/56e09daff4f34e6db6fd8b561b6b1a79.jpg",

      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/a6596f61194745b79bec1cd86fabef6e.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/dcb2e7ff087d46f2a6eeea613e96180f.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/8ae7c49e1b3247368d8824d31a662d59.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/a343fd3198424e2d9a2a4f2c209eb6ef.jpg",
      
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/763daa8d9db7471e9c903a7a5ed531a9.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/60995a58a4474986b60b1e1bd3abbd2b.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/08a50cab08684f20ba3a77f9119db499.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/01a19afd16e646e8ae909c69ec2df52e.jpg",
      
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/4bc6fe75558c46e6b8836a123807b743.jpg",
 ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '',
    });
    setTimeout(function () {
      wx.hideLoading()
    }, 500);
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

  },
  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '18662668966' // 仅为示例，并非真实的电话号码
    })
  },
  previewImage: function (event) {
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = event.currentTarget.dataset.list;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接',
      urls: this.data.imgaList // 需要预览的图片http链接列表
    })

  }
})