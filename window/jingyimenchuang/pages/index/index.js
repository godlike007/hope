// pages/index/index.js
var request = require('../../utils/request.js');
var submitCount=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    submitCount:0,
    imgUrls: [
      "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/f2/2019/12/12/9a2102888d7243b3aeb0f22695bea683.jpg"
    ],
    bannerList: [{ "path": "/pages/pingroup/index", "openType":"navigate", "image":       //"https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/f2/2019/12/12/9a2102888d7243b3aeb0f22695bea683.jpg" 
    "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/31/fdaf070a184244a0a534c7512b5616ec.jpg"}, 
      { "path": "/pages/reservation/yuyue", "openType": "switchTab", "image": "https://jtljia.oss-cn-hangzhou.aliyuncs.com/jia-web/2019/12/28/d629b40d86c04aa2a7bc815870db525e.jpg" }],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular:true,
    rooArray:[1,2,3,4,5],
    roomNum:2,
    tingNum:1,
    comminutyName:"",
    code:""
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
    wx.login({
      success: function (res) {
        _this.setData({ code: res.code });
      }
    })

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
  onShareAppMessage: function (res) {
    wx.showShareMenu({
      withShareTicket: true
    })

    return {
      title: '贤人做窗',
      path: '/pages/index/index',
      imageUrl: '',
      success: function (res) {debugger
        console.info(res);
        var shareTickets = res.shareTickets;
        console.info(shareTickets);
        /*
        var content = res;
        var url = "https://oapi.dingtalk.com/robot/send?access_token=ff30a73225969ce3eeee688a2c080d291ac0199a155fbf29edfea71c3383ac2e";
        var param = { "msgtype": "text", "text": { "content": content } };
        request.postJson(url, param).then(function (res) {
          if (res.statusCode == 200) {

          }
          else {
          }
        });*/
      },
      fail: function (res) {
      }
    }

  },
  submitFrom:function(){
    var thisObj = this;
    if (thisObj.data.submitCount > 8) {
      wx.showToast({
        title: '提交超过最大次数',
        icon: "none",
        duration: 3000
      });
    }
    else {
      if (this.data.comminutyName == "") {
        wx.showToast({
          title: '请填写小区名称',
          icon: "none",
          duration: 3000
        });
        return false;
      } 
      if (this.data.phone=="") {
        wx.showToast({
          title: '请填写手机号码',
          icon: "none",
          duration: 3000
        });
        return false;
      } 
      if (!(/^1[3456789]\d{9}$/.test(this.data.phone))) {
        wx.showToast({
          title: '手机号码有误，请重新填写',
          icon: "none",
          duration: 3000
        });
        return false;
      }
      
      var content = "您有新客户，手机号：" + this.data.phone + " , 所在小区：" + this.data.comminutyName ;
      var url = "https://oapi.dingtalk.com/robot/send?access_token=ff30a73225969ce3eeee688a2c080d291ac0199a155fbf29edfea71c3383ac2e";
      var param = { "msgtype": "text", "text": { "content": content } };
      request.postJson(url, param).then(function (res) {
        if(res.statusCode ==200){
          
          thisObj.data.submitCount = thisObj.data.submitCount + 1;
          thisObj.delPhoneInput();
          wx.showToast({
            title: '提交成功,稍后客服会联系您！',
            icon: "none",
            duration: 3000
          });
        }
        else{
          wx.showToast({
            title: '提交失败了哎！',
            icon: "none",
            duration: 3000
          });
        }
      });
      
      
    }
    

  },
  bindComminutyNameInput(e) {
    this.data.comminutyName = e.detail.value;
  },
  bindReplaceInput(e) {
    this.data.phone = e.detail.value;
  },
  callPhone:function(){
    wx.makePhoneCall({
      phoneNumber: '18662668966' // 仅为示例，并非真实的电话号码
    })
  },
  delPhoneInput:function(){
    
    this.setData({
      phone: '',
    });
  },
  bindPickerChangeRoom(e){
    
    this.setData({
      roomNum: parseInt(e.detail.value)
    })
  },
  bindPickerChangeTing(e) {
    
    this.setData({
      tingNum: parseInt(e.detail.value)
    })
  },
  previewImage: function (event) {
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = event.currentTarget.dataset.list;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接',
      urls: this.data.imgUrls // 需要预览的图片http链接列表
    })
  },
  previewSingleImage: function (event) {
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = [];//获取data-list
    imgList[0]=src;
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接',
      urls: imgList // 需要预览的图片http链接列表
    })
  },
  getPhoneNumber(e) {debugger
    //console.log(e.detail.errMsg)
    //console.log(e.detail.iv)
    //console.log(e.detail.encryptedData)
    var params = {
      encryptedData: e.detail.encryptedData,
      iv: e.detail.iv,
      code: this.data.code,
      //appid:"wx60ad28b269aec787",
      //secret:"4d6fcd75c439b08ad392504f4fac465a"
      customerName:"张三",
      customerPhone:"19900011002",
      problemDescription:"测试阶段",
      address:"金尚路99号"
    };

    var url = "https://user.jtljia.com/hmc-web/order/save";
    
    request.post(url, params).then(function (res) {debugger
      let _this = this;
      wx.login({
        success: function (res) {
          _this.setData({ code: res.code });
        }
      })
      
      if (res.statusCode == 200) {
        console.info(res.data);
      }
      else {
        wx.showToast({
          title: '提交失败了哎！',
          icon: "none",
          duration: 3000
        });
      }
    });

  },
  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '18662668966' // 仅为示例，并非真实的电话号码
    })
  }
})