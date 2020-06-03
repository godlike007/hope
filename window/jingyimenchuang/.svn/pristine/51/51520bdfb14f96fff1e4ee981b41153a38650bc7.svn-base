// pages/mall/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgaList: [
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/01/07/2179926fcb064297a482069c33adf5c8.jpg?x-oss-process=image/resize,w_1000/auto-orient,1/quality,q_90/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/01/07/81f9904512454298bfdea8486a903e3d.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/01/07/6cdbe7b8e7df404d89945836eed30290.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/01/07/96469dd76a354c728861d9e8352e5b3c.jpg"
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
      phoneNumber: '0512-63064555' // 仅为示例，并非真实的电话号码
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