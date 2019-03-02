Page({
  data: {
    art: {},
    symptom_list: []

  },
  go_third: function(e) {
    debugger;
    wx.navigateTo({
      url: '../symptomDetail/symptomDetail?id='+e.currentTarget.dataset.id+"&name="+e.currentTarget.dataset.name
    })
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: ''
    })
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://www.chinabeishi.cn/HttpHandleGetSymps.ashx?sid=' + options.id,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
         that.setData({
          symptom_list: res.data
         })
         console.log(res.data)
      }
    })
  }
})