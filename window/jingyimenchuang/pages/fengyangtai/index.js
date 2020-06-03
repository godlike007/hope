Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgaList: [
      // { "url": "http://img.xianrenn.com/hmc-web/fengyangtai/ee308119335c47768eb98aa7d20a7829-1.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg", "title":"铂悦府移门12平方"},
      { "url": "http://img.xianrenn.com/hmc-web/fengyangtai/ee308119335c47768eb98aa7d20a7829-2.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg", "title": "苏州铂悦犀湖北阳台20平方" },
      { "url": "http://img.xianrenn.com/hmc-web/fengyangtai/ee308119335c47768eb98aa7d20a7829-3.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg", "title": "苏州铂悦犀湖北阳台25平方" },
      { "url": "http://img.xianrenn.com/hmc-web/fengyangtai/ee308119335c47768eb98aa7d20a7829-4.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg", "title": "苏州铂悦犀湖南阳台11.5平方" },
      { "url": "http://img.xianrenn.com/hmc-web/fengyangtai/ee308119335c47768eb98aa7d20a7829-5.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg", "title": "苏州铂悦犀湖南阳台12平方" },
      { "url": "http://img.xianrenn.com/hmc-web/fengyangtai/ee308119335c47768eb98aa7d20a7829-6.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg", "title": "太湖颐景15平方" },
      { "url": "http://img.xianrenn.com/hmc-web/fengyangtai/ee308119335c47768eb98aa7d20a7829-7.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg", "title": "天著6平方" },
      { "url": "http://img.xianrenn.com/hmc-web/fengyangtai/ee308119335c47768eb98aa7d20a7829-8.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg", "title": "万科公园里8平方" },
      { "url": "http://img.xianrenn.com/hmc-web/fengyangtai/ee308119335c47768eb98aa7d20a7829-9.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg", "title": "万科公园里11平方" },
      // { "url": "http://img.xianrenn.com/hmc-web/fengyangtai/ee308119335c47768eb98aa7d20a7829-10.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg", "title": "新城郡未来8平方" }
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