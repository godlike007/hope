Page({
  data: {
    art: {},
    symptom_list: [
      {
        id:1,
        href: "../symptomDetail/symptomDetail",
        name: "怕冷"
      },
      {
        id:2,
        href: "../symptomDetail/symptomDetail",
        name: "一会儿冷一会儿热"
      },
      {
        id:3,
        href: "../symptomDetail/symptomDetail",
        name: "怕热"
      },
      {
        id:4,
        href: "../symptomDetail/symptomDetail",
        name: "不怕冷也不怕热"
      },
    ]

  },
  go_third: function(e) {
    wx.navigateTo({
      url: '../symptomDetail/symptomDetail?id='
    })
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '详情页面1'
    })
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/' + options.id,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
         that.setData({
           art: res.data
         })
         console.log(res.data)
      }
    })
  }
})