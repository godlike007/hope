// pages/product/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgaList: [
      { 'title': '精选门窗', 'url': "http://img.xianrenn.com/hmc-web/category/category-menchuang.jpg?x-oss-process=image/resize,w_380/auto-orient,1/quality,q_95/format,jpg", "target":"10001" },
      { 'title': '优质移门', 'url': "http://img.xianrenn.com/hmc-web/category/category-yimen.jpg?x-oss-process=image/resize,w_380/auto-orient,1/quality,q_95/format,jpg", "target": "10002" },
      { 'title': '品牌纱窗', 'url': "http://img.xianrenn.com/hmc-web/category/category-shachuang.jpg?x-oss-process=image/resize,w_380/auto-orient,1/quality,q_95/format,jpg", "target": "10003" },
      { 'title': '淋浴房', 'url': "http://img.xianrenn.com/hmc-web/category/category-linyufang.jpg?x-oss-process=image/resize,w_380/auto-orient,1/quality,q_95/format,jpg", "target": "10004" },
    ],
    imgaDataList: [
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/01/17/dd93e500ac2d4591a1c0dee14fd698b8.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/01/17/32c50faf50e74c1d94ec2fbb4197acfa.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/01/17/67f8cc591f4448ccbc58e2ff90e9055b.jpg",
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/01/17/67f8cc591f4448ccbc58e2ff90e9055b.jpg"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '',
    });

    wx.setNavigationBarTitle({
      title: '产品'
    })

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
      path: '/pages/product/main',
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
      urls: this.data.imgaDataList // 需要预览的图片http链接列表
    })

  }
})