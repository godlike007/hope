// pages/baoxiu/baoxiu_create.js
var config = require('../../utils/config.js');
var request = require('../../utils/request.js');
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: "",
    projectName:"",
    customerName: "",
    customerPhone: "",
    address: "",
    buildingNum: "",
    roomNum: "",
    visitDate:"",
    startDate:"",//开始日期
    visitDefaultDesc: "请选择日期",
    multiArray: [['请选择', '门窗', '封阳台', '阳光房', '幕墙', '外装饰', '隔断', '庭院'], ['请选择']],
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
          id: 3,
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
    multiIndex: [0, 0],
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
    let _this = this;
    _this.setData({ customerName: "" });
    _this.setData({ customerPhone: "" });
    _this.setData({ address: "" });
    _this.setData({ buildingNum: "" });
    _this.setData({ roomNum: "" });
    this.setData({ startDate: util.formatTimeYMD(new Date())})
    wx.login({
      success: function (res) {
        _this.setData({ code: res.code });
      }
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

  },
  searchBox: function (e) {
    const that = this;
    let first, second;
    that.setData({
      customerName: e.detail.value.customerName,
      customerPhone: e.detail.value.customerPhone,
      address: e.detail.value.address,
      buildingNum: e.detail.value.buildingNum,
      roomNum: e.detail.value.roomNum,
    })
  },
  errorShow(message) {
    wx.showToast({
      title: message,
      icon: "none",
      duration: 3000
    });
  },
  getPhoneNumber(e) {
    debugger
    var params = {
      encryptedData: e.detail.encryptedData,
      iv: e.detail.iv,
      code: this.data.code,
      customerName: this.data.customerName,
      customerPhone: this.data.customerPhone,
      address: this.data.address,
      buildingNum: this.data.buildingNum,
      roomNum: this.data.roomNum,
      projectName: this.data.projectName,
      visitDate:this.data.visitDate
    };

    if (params.projectName.replace(/(^\s*)|(\s*$)/g, "") == "") {
      this.errorShow("请选择服务项目");
      return;
    }

    if (params.customerName.replace(/(^\s*)|(\s*$)/g, "") == "") {
      this.errorShow("请输入姓名");
      return;
    }
    if (params.customerPhone.replace(/(^\s*)|(\s*$)/g, "") == "") {
      this.errorShow("请输入手机号");
      return;
    }
    if (!(/^1[3456789]\d{9}$/.test(params.customerPhone))) {
      this.errorShow("手机号码有误，请重新填写");
      return false;
    }
    if (params.address.replace(/(^\s*)|(\s*$)/g, "") == "") {
      this.errorShow("请输入小区地址");
      return;
    }
    if (params.buildingNum.replace(/(^\s*)|(\s*$)/g, "") == "") {
      this.errorShow("请输入楼栋号");
      return;
    }
    if (params.roomNum.replace(/(^\s*)|(\s*$)/g, "") == "") {
      this.errorShow("请输入房号");
      return;
    }
    if (params.visitDate.replace(/(^\s*)|(\s*$)/g, "") == "") {
      this.errorShow("请选择预约日期");
      return;
    }

    var _bodyObj = this;
    _bodyObj.saveUser(params);
  },
  saveUser(params) {
    var _thisObj = this;
    var url = config.hmcApiHost + "reservation/save";
    request.post(url, params).then(function (res) {
      debugger
      wx.login({
        success: function (res) {
          //this.data.code =res.code;
          _thisObj.setData({ code: res.code });
        }
      })

      if (res.statusCode == 200 && res.data.status == "1") {debugger
        //console.info(res.data);
        wx.navigateTo({
          url: '/pages/activity/yuandan',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      }
      else {
        wx.showToast({
          title: res.data.message,
          icon: "none",
          duration: 3000
        });
      }
    });
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
            data.multiArray[1] = ['新装门窗', '改造门窗', '纱窗门', '电动门', '感应门', '旋转门', '电动开启窗'];
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
    this.setData({ projectName: data.multiArray[0][data.multiIndex[0]] + "-" + data.multiArray[1][data.multiIndex[1]] });
  },
  bindDateChange: function (e) {
    this.setData({ visitDefaultDesc: "" });
    this.setData({
      visitDate: e.detail.value
    })
    let _this = this;
    console.log('picker 日期发送选择改变，携带值为', _this.data.visitDate)
  }


})