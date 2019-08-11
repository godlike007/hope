Page({
  data: {
    art: {},
    symptom_list: [{
      id: 1,
      href: ".../detail/detail",
      name: "怕冷"
    }],
    result: ''
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: ''
    })
  },
  onLoad: function (options) {
    var that = this;
    var list = [];

    options.ids.split(',').forEach(function (o) {
      list.push(Number(o));
    })

    that.data.symptom_list[0].name = options.name;
    wx.request({
      url: 'https://www.chinabeishi.cn/HttpHandleGetAnag.ashx',
      method: "POST",
      data: list,
      success: function (res) {
        if (res.data.errcode == "1") {
          that.setData({
            result: res.data.errmsg,
            symptom_list:that.data.symptom_list
          })
        }

      }
    })
  }
})