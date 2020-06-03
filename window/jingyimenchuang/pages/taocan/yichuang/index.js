// pages/taocan/oto_quanwu/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgaList: [
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/0d7c8a309c2d496fa03f14da25d4b457.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/91588e5ed8b84385adb75409e0ebe260.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/19c514acbbeb4dfe9322437f98ee76bf.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/7894ae8dca23410c815b395f8f08296c.jpg"

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