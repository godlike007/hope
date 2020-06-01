// pages/taocan/oto_linedown/oto_linedown.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgaList: [
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/4d2f880f77824ff8af7dbdb790ba4b25.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/30/fe50b60b04a8436a85f1a49b6860b546.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/eae1059f0b67457caf208718127f4675.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/30/4c203e60f23c46dc89f1578d2d8bbfcd.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/bc55b74314554434bddab15ac586d5da.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/439e66186f1048cdbfa0da2679b75e8a.jpg",
      //"https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/43725f7608404435b8267d77c4ba669a.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/30/1207d39cd3494f04bb0eccc047250be2.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/3e84e3cd1d9248fda71af24e7e44129f.jpg"
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