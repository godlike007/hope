// pages/mall/guangnengqiue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgaList:[
      {'title': '时尚之约', 'url': "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/01/17/dd93e500ac2d4591a1c0dee14fd698b8.jpg"},
      {'title': '古月飞舞', 'url':"https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/01/17/32c50faf50e74c1d94ec2fbb4197acfa.jpg"},
      {'title': '妙音', 'url':"https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/01/17/67f8cc591f4448ccbc58e2ff90e9055b.jpg"},
    ],
    imgaDataList: [
     "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/01/17/dd93e500ac2d4591a1c0dee14fd698b8.jpg",
     "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/01/17/32c50faf50e74c1d94ec2fbb4197acfa.jpg",
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
           urls: this.data.imgaDataList // 需要预览的图片http链接列表
        })
    
  }


})