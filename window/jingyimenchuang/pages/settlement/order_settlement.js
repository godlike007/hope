var request = require('../../utils/request.js');
var config = require('../../utils/config.js');
var util = require('../../utils/util.js');
var md5 = require('../../utils/md5.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: "",
    userName: "",//收货人姓名
    //postalCode:"",//邮编
    //nationalCode:""//收货人地址国家码
    telNumber: "",//收货人手机号
    productId: "",
    orderType: 2,
    qty: 1,
    name: "",//产品名称
    brief: "",
    price: 0,
    picUrl: "",
    activityProductId: null,
    activityPrice: null,
    orderId: "",
    orderPrice: "",
    totalAmount:"",
    code:"",
    dataList:"",
    openId:"",//用户openId
    orderNo:"",//主订单好
    totalAmount:"" //订单总价
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {debugger
    if (options.orderId) {
      this.setData({
        orderId: options.orderId
      });
    }
    if (options.orderType) {
      this.setData({
        orderType: options.orderType
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {debugger
    var thisObj = this;
    wx.login({
      success: function (res) {
        thisObj.setData({ code: res.code });
        thisObj.getDetail(thisObj.data.orderId);
      }
    })
    
  },
  getDetail(orderId) {
    if (orderId) {
      var thisObj = this;
      var data = {
        orderId: orderId,
        code: thisObj.data.code
      };
      debugger
      request.get(config.hmcApiHost + "mallOrder/detail/", data).then(function (res) {

        util.hideLoading();
        wx.login({
          success: function (res) {
            thisObj.setData({
              code: res.code
            });
          }
        })

        if (res.statusCode != 200) {
          return;
        }
        if (res.data.status != "1") {
          util.alert(res.data.message);
          return;
        }

        if (res.data.status == "1" && !res.data.data.flagType) {
          util.alert("您的订单信息不存在~");
          return;
        }

        thisObj.setData({
          dataList :res.data.data.list,
          name: res.data.data.productName,
          //brief: res.data.data.brief,
          //price: res.data.data.price,
          picUrl: res.data.data.list[0].url,
          orderPrice: res.data.data.list[0].unitPrice,
          userName: res.data.data.userName,
          telNumber: res.data.data.telNumber,
          address: res.data.data.address,
          totalAmount: res.data.data.totalAmount,
          openId: res.data.data.openId,
          orderNo: res.data.data.orderNo,
        });

      });

    }
    else {
      util.hideLoading();
    }
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
              console.log(res.provinceName + res.cityName + res.countyName + res.detailInfo);
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
                console.log(res.provinceName + res.cityName + res.countyName + res.detailInfo);
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
  getPhoneNumber(e) {

    var params = {
      encryptedData: e.detail.encryptedData,
      iv: e.detail.iv,
      code: this.data.code,
      address: this.data.address,
      userName: this.data.userName,
      telNumber: this.data.telNumber,
      productId: this.data.productId,
      orderType: this.data.orderType,
      qty: this.data.qty,
      activityProductId: this.data.activityProductId
    };


    if (params.address == "") {
      this.errorShow("请选择客户收货地址");
      return;
    }
    if (params.productId == "") {
      this.errorShow("请选择产品");
      return;
    }
    // if (!(/^1[3456789]\d{9}$/.test(params.customerPhone))) {
    //   this.errorShow("手机号码有误，请重新填写");
    //   return false;
    // }

    var _thisObj = this;
    var url = config.hmcApiHost + "mallOrder/save";
    request.post(url, params).then(function (res) {

      wx.login({
        success: function (res) {
          _thisObj.setData({ code: res.code });
        }
      })

      if (res.statusCode == 200) {
        if (res.data.status == "1") {
          _thisObj.setData({ orderId: res.data.data.orderId });
          _thisObj.unitedPayRequest(res.data.data.openId, _thisObj.data.name, res.data.data.orderNo, _thisObj);
        }
        else {
          _thisObj.errorShow(res.data.message);
        }
      }
      else {
        wx.showToast({
          title: '提交订单失败了！',
          icon: "none",
          duration: 3000
        });
      }
    });

  },
  payOrder : function(){//支付当前订单
    var _thisObj = this;
    _thisObj.unitedPayRequest(_thisObj.data.openId, _thisObj.data.name, _thisObj.data.orderNo, _thisObj);

  },
  //提交订单结束
  errorShow(message) {
    wx.showToast({
      title: message,
      icon: "none",
      duration: 5000
    });
  },
  /*统一支付接口*/
  unitedPayRequest: function (openid, productName, orderNo, _thisObj) {

    //var openid = "oSR0F5s6ukNmj0YQtXhoWVXZ3074"; //（变化）
    var that = _thisObj;
    //统一支付签名
    var appid = 'wx60ad28b269aec787';//appid必填
    var body = productName;//商品名必填（变化）
    var mch_id = '1578086751';//商户号必填
    var nonce_str = util.randomString();//随机字符串，不长于32位。  
    var notify_url = 'https://api.xianrenn.com/hmc-web/mallOrder/notice';//通知地址必填
    var total_fee = parseInt(100.00 * 100); //价格，这是一分钱
    var trade_type = "JSAPI";
    var key = '7554bed1e53a4d40b46d8b401b9ab2ce'; //商户key必填，在商户后台获得
    var out_trade_no = orderNo;//自定义订单号必填 （变化）

    var unifiedPayment = 'appid=' + appid + '&body=' + body + '&mch_id=' + mch_id + '&nonce_str=' + nonce_str + '&notify_url=' + notify_url + '&openid=' + openid + '&out_trade_no=' + out_trade_no + '&total_fee=' + total_fee + '&trade_type=' + trade_type + '&key=' + key;
    var sign = md5.md5(unifiedPayment).toUpperCase();

    //封装统一支付xml参数
    var formData = "<xml>";
    formData += "<appid>" + appid + "</appid>";
    formData += "<body>" + body + "</body>";
    formData += "<mch_id>" + mch_id + "</mch_id>";
    formData += "<nonce_str>" + nonce_str + "</nonce_str>";
    formData += "<notify_url>" + notify_url + "</notify_url>";
    formData += "<openid>" + openid + "</openid>";
    formData += "<out_trade_no>" + out_trade_no + "</out_trade_no>";
    formData += "<total_fee>" + total_fee + "</total_fee>";
    formData += "<trade_type>" + trade_type + "</trade_type>";
    formData += "<sign>" + sign + "</sign>";
    formData += "</xml>";
    //console.log("formData", formData);
    //统一支付
    wx.request({
      url: 'https://api.mch.weixin.qq.com/pay/unifiedorder', //别忘了把api.mch.weixin.qq.com域名加入小程序request白名单，这个目前可以加
      method: 'POST',
      head: 'application/x-www-form-urlencoded',
      data: formData, //设置请求的 header
      success: function (res) {

        var result_code = util.getXMLNodeValue('result_code', res.data.toString("utf-8"));
        var resultCode = result_code.split('[')[2].split(']')[0];

        if (resultCode == 'FAIL') {
          var err_code_des = util.getXMLNodeValue('err_code_des', res.data.toString("utf-8"));
          var errDes = err_code_des.split('[')[2].split(']')[0];
          wx.showToast({
            title: errDes,
            icon: 'none',
            duration: 3000
          })
        } else {
          //发起支付
          var prepay_id = util.getXMLNodeValue('prepay_id', res.data.toString("utf-8"));
          var tmp = prepay_id.split('[');
          var tmp1 = tmp[2].split(']');
          //签名  
          var key = '7554bed1e53a4d40b46d8b401b9ab2ce';//商户key必填，在商户后台获得
          var appId = 'wx60ad28b269aec787';//appid必填
          var timeStamp = util.createTimeStamp();
          var nonceStr = util.randomString();
          var stringSignTemp = "appId=" + appId + "&nonceStr=" + nonceStr + "&package=prepay_id=" + tmp1[0] + "&signType=MD5&timeStamp=" + timeStamp + "&key=" + key;
          var sign = md5.md5(stringSignTemp).toUpperCase();
          var param = { "timeStamp": timeStamp, "package": 'prepay_id=' + tmp1[0], "paySign": sign, "signType": "MD5", "nonceStr": nonceStr }
          //console.log("param小程序支付接口参数", param);

          that.processPay(param, that);
        }

      },
    })

  },

  /* 小程序支付 */
  processPay: function (param, _thisObj) {

    wx.requestPayment({
      timeStamp: param.timeStamp,
      nonceStr: param.nonceStr,
      package: param.package,
      signType: param.signType,
      paySign: param.paySign,
      success: function (res) {

        //调用修改状态 orderId
        var params = {
          code: _thisObj.data.code,
          orderId: _thisObj.data.orderId,
          orderNo : _thisObj.data.orderNo
        };
        var url = config.hmcApiHost + "mallOrder/updateStatus/2";
        request.post(url, params).then(function (res) {
          wx.login({
            success: function (res) {
              _thisObj.setData({ code: res.code });
            }
          })
        });

        wx.showModal({
          title: '支付成功',
          content: '您将在“微信支付”官方号中收到支付凭证',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              wx.navigateTo({
                url: '/pages/usercenter/myorder', //订单列表页面
                success: function () {

                },  //成功后的回调；
                fail: function () { },   //失败后的回调；
                complete: function () { }  //结束后的回调(成功，失败都会执行)
              })
            } else if (res.cancel) {

            }
          }
        })
      },
      fail: function () {
        util.errorShow('支付失败了~');
        console.log("支付失败");
      },
      complete: function () {
        console.log("支付完成(成功或失败都为完成)");
      }
    })
  }



})