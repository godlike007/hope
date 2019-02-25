Page({
  data: {
    art: {},
    symptom_list: [
      {
        id:1,
        href: ".../detail/detail",
        name: "怕冷"
      }
    ],   
    result:''
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '详情页面'
    })
  },
  onLoad: function (options) {
    var that = this;
let txt =  "病情分析：你好，根据你所叙述的情况，可以考虑你是上呼吸道感染，上感是鼻腔，咽或者喉部急性炎症的统称，常见的病原体为病毒，仅少数为细菌引起的";
txt+="指导意见：建议多休息，如有头痛发热就可以适当的服用解热镇痛的药物，可以去医院门诊查个血常规，了解白细胞计数，看看感染的程度，在生活中要多和开水，建议平时多做些体育运动，这样可以增强体质，而且免疫力也有提高";
    this.result = txt;
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