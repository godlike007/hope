// pages/taocan/oto_quanwu/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*imgaList: [
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/d7cd7ec2aff642a7af4efa7ace811810.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/a7797f3a6e96426fa8b73d153e55d02b.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/a37822ba509d453e8bc49c89311d717f.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/26ef37496d824db4ad4fc12fc525210b.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/507b170d78c64653b88f0b3ebbb14f05.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/8592108b6e0e41b7a5713ead8ce6fc71.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/b6d1104e57954dc28eea36832b05de22.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/8b87393c6cb94cb095483748a8cf3fe0.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/6884abcda511493c9a740d1e1ef1aa3f.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/06/22/69ef0a689e2b4da3a0e986e8f1cee43d.jpg"
    ],*/
    imgaList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var imgaList = [];
    for(var i=6;i<=66;i++){
      imgaList.push("https://book.yunzhan365.com/boju/qxdj/files/mobile/"+i+".jpg?x-oss-process=image/resize,w_400/auto-orient,1/quality,q_95/format,jpg");
    }
    let _this =this;
    _this.setData({ imgaList: imgaList });
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