// pages/usercenter/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    youjianICON:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAXCAYAAAA/ZK6/AAAAkklEQVQ4jZXU4Q3CIBCG4deLC7iCMzgTXaEjuEK7CivoTv4oWIIc90lCOJLvCVxCuOSc78ANeCMMA15lJhWspd4UZMAOLCqyssrImlpC1u1D1IMQjcAUecBF1wmoqIItOqFFX6iAxNnDEoFUr8LRzz4DP2HwexiGPeCGR2Aa7kEYboEUrkAOV/BUw3C8pQd//BofMLMsPyaca/0AAAAASUVORK5CYII=",
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  getUserAddress() {
    const that = this;
    wx.getSetting({
      success(res) {
        //console.log("vres.authSetting['scope.address']：", res.authSetting['scope.address'])
        if (res.authSetting['scope.address']) {
          wx.chooseAddress({
            success(res) {
              that.setData({
                userName: res.userName,
                telNumber: res.telNumber,
                address: res.provinceName + res.cityName + res.countyName + res.detailInfo
              })

              // wx.showToast({
              //   title: res.userName + ' ' + res.telNumber,
              //   icon: "none",
              //   duration: 3000
              // });

            }
          })
          // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问

        } else {
          if (res.authSetting['scope.address'] == false) {
            wx.openSetting({
              success(res) {
                console.log(res.authSetting)
              }
            })
          } else {
            wx.chooseAddress({
              success(res) {
                that.setData({
                  userName: res.userName,
                  telNumber: res.telNumber,
                  address: res.provinceName + res.cityName + res.countyName + res.detailInfo
                })
              }
            })
          }
        }
      }
    })
  },


})