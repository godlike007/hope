Page({

  /**
   * 页面的初始数据
   */
  data: {

    multiArray: [['请选择','门窗', '封阳台', '阳光房', '幕墙','外装饰','隔断','庭院'], ['请选择']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '请选择'
        },
        {
          id: 1,
          name: '门窗'
        },
        {
          id: 2,
          name: '封阳台'
        },
        {
          id:3,
          name: '阳光房'
        },
        {
          id: 4,
          name: '幕墙'
        },
        {
          id: 5,
          name: '外装饰'
        },
        {
          id: 6,
          name: '隔断'
        },
        {
          id: 7,
          name: '庭院'
        }
      ],
      [
        {
          id: 0,
          name: '请选择'
        }
      ]
    ],
    multiIndex: [0,0],
  },
  bindMultiPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };

    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 1:
            data.multiArray[1] = ['新装门窗', '改造门窗', '纱窗门','电动门','感应门','旋转门','电动开启窗'];
            break;
          case 2:
            data.multiArray[1] = ['封阳台', '遮阳帘', '纱窗门'];
            break;
          case 3:
            data.multiArray[1] = ['阳光房', '纱窗门'];
            break;
          case 4:
            data.multiArray[1] = ['玻璃幕墙', '石材幕墙', '金属幕墙', '玻璃雨棚', '电动开启窗'];
            break;
          case 5:
            data.multiArray[1] = ['金属格栅', '空调外机格栅', '外遮阳', '金属装饰板'];
            break;
          case 6:
            data.multiArray[1] = ['室内隔断', '淋浴房'];
            break;
          case 7:
            data.multiArray[1] = ['凉亭', '葡萄架', '采光顶', '院门'];
            break;
        }
        break;
    }
    this.setData(data);
  }
})
