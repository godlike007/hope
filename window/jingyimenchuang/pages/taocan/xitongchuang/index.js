// pages/taocan/oto_quanwu/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgaList: [
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/25010cb0c6a5416798a204253ff9feec.jpg?x-oss-process=image/resize,w_380/auto-orient,1/quality,q_95/format,jpg", "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/4c13bd8e9cfb4df1a100858398feeda8.jpg?x-oss-process=image/resize,w_380/auto-orient,1/quality,q_95/format,jpg", "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/35320a36a30940a6af9c0d4c66ea62b6.jpg?x-oss-process=image/resize,w_380/auto-orient,1/quality,q_95/format,jpg", "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/aea62953552e4a8f8a76d144b156058f.jpg?x-oss-process=image/resize,w_380/auto-orient,1/quality,q_95/format,jpg", "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/decd7eec65704b099b8ea7c915e80f6d.jpg?x-oss-process=image/resize,w_380/auto-orient,1/quality,q_95/format,jpg", "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/8d4158acfc90473a8ba6638dae2019ae.jpg?x-oss-process=image/resize,w_380/auto-orient,1/quality,q_95/format,jpg", "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/a5ffed7706034140b7475df90c9bda17.jpg?x-oss-process=image/resize,w_380/auto-orient,1/quality,q_95/format,jpg", "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/dcfe705347824637b2f14bd463a2e3a7.jpg?x-oss-process=image/resize,w_380/auto-orient,1/quality,q_95/format,jpg", "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/fcad3d73e67d442db97da6fbb78a7af7.jpg?x-oss-process=image/resize,w_380/auto-orient,1/quality,q_95/format,jpg", "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/248636e53c5046c78cfcffbe36d7f1b0.jpg?x-oss-process=image/resize,w_380/auto-orient,1/quality,q_95/format,jpg"
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
    wx.showShareMenu({
      withShareTicket: true
    })
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
    wx.showShareMenu({
      withShareTicket: true
    })

    return {
      title: '贤人做窗',
      path: '/pages/taocan/xitongchuang/index',
      imageUrl: '',
      success: function (res) {
        debugger
        console.info(res);
        var shareTickets = res.shareTickets;
        console.info(shareTickets);
        
        var content = res;
        var url = "https://oapi.dingtalk.com/robot/send?access_token=ff30a73225969ce3eeee688a2c080d291ac0199a155fbf29edfea71c3383ac2e";
        var param = { "msgtype": "text", "text": { "content": content } };
        request.postJson(url, param).then(function (res) {
          if (res.statusCode == 200) {

          }
          else {
          }
        });
      },
      fail: function (res) {
      }
    }
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