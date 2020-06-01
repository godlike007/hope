Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgaList: [
      // "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/a78654c54ab941c585c0a497796090e9.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/84b4a24080374515a77bf0be8a9dd19c.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/481fa22b62794db7b61b3d75866bb0ad.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/fad7621dbf6a423bb341f7ed588182b1.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/01008b081aeb495dbdd5d65ab19a33d9.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/8da1bbed7f9f4490bb833e9bbbd2d290.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/bf504b87ff904fb78a650b5b60a7a7b1.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/d961629a3ef44082948f7045bcd1acef.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/b6ae6983866e45f386b28726a469b0ba.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/888530b6c916489a968cf54b35aa4f51.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/d21db017b0bd4e52964b0f0d0416ed55.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/f273ea71d7a1451bb3ff09818d86578e.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      // "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/299bfa14e3354853882155ca37b15385.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      // "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/0dde391354094c76bd4ffee7748427a6.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      // "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/8dcf5dd92b9141898b22841e0ccd4700.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/c9ab3de884354a1dac0c125012ba1ed1.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/a5a53e52d8fc4f47ba215f8be91693e3.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg"
    ],
    caseList1: [
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/84b4a24080374515a77bf0be8a9dd19c.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/481fa22b62794db7b61b3d75866bb0ad.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/fad7621dbf6a423bb341f7ed588182b1.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/01008b081aeb495dbdd5d65ab19a33d9.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/8da1bbed7f9f4490bb833e9bbbd2d290.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/bf504b87ff904fb78a650b5b60a7a7b1.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/d961629a3ef44082948f7045bcd1acef.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/b6ae6983866e45f386b28726a469b0ba.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg"
    ],
    caseList2: [
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/888530b6c916489a968cf54b35aa4f51.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/d21db017b0bd4e52964b0f0d0416ed55.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/f273ea71d7a1451bb3ff09818d86578e.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/c9ab3de884354a1dac0c125012ba1ed1.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/a5a53e52d8fc4f47ba215f8be91693e3.jpg?x-oss-process=image/resize,w_450/auto-orient,1/quality,q_100/format,jpg"
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
    if (options.caseId == 1){debugger
      this.setData({
        imgaList: this.data.caseList1
      });
    }
    else{
      this.setData({
        imgaList: this.data.caseList2
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