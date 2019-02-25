Page({
  data: {
    art: {},
    symptom_list: [
      {
        id:1,
        href: ".../symptomDetail/symptomDetail",
        name: "怕冷"
      },
    ],
    symptom_items: [
      {
        id:1,
        name: "有出汗",
        selected:false
      },
      {
        id:2,
        name: "没出汗",
        selected:false
      },
      {
        id:3,
        name: "似乎有汗",
        selected:false
      },
    ],
    sign_items: [
      {
        id:1,
        name: "咽干",
        selected:false
      },
      {
        id:2,
        name: "低热",
        selected:false
      },
      {
        id:3,
        name: "鼻塞",
        selected:false
      },
    ],
    certificate_items: [
      {
        id:1,
        name: "头痛",
        selected:false
      },
      {
        id:2,
        name: "高热》38.5",
        selected:false
      },
      {
        id:3,
        name: "发热《38.5",
        selected:false
      },
    ]

  },
  select_symptoms: function(e) {
    var d = e.target.dataset;
    this.data.symptom_items[d.id-1].selected = !d.selected;

    this.setData({
      symptom_items:this.data.symptom_items
    })
    
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '详情页面'
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