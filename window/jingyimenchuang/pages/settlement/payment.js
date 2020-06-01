var request = require('../../utils/request.js');
var config = require('../../utils/config.js');
var util = require('../../utils/util.js');
var md5 = require('../../utils/md5.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAD40lEQVRoge3aa4hVVRQH8N+khpQxURBkZFofhJAehCWV9tI0wYqiF2QFMb2/ZA8ioqBQ6EVEFBYYZX3IQgyyzJhKK0vtAWqBGDlGQohBBI44VEwf1r7MntvcmXPvnDPjh/nDhb3W3mev/WfvvdY661zGMIZK0FZrzJ07t4r5T8dyzMI36MCuso10dnY6ouxJM1yJzZiNCZiDLZhfhbEqiLThUazBMXV9x+JDPFC20bKJHIV3sDSbezMuxI4kj8NzWImJZRkuk8jJ+ArXZ7q3cAk24Xy8n/UtxgZMLsN4WUQuwHc4O8n/4iHcgkNJdwDX4Cn0Jt15+BbnDncBZRDpwGc4Icl/YZE4PvXoxeO4Ad1JNxkbxQ61jOEQGY+X8BqOTLpdwtWuG+LZ98Qu/prkieLOPCvuUNNolcjxWI/7Mt0ngsTOgnNsw0x8mekexFrh3ZpCK0RmYCsuzXQvYCH+bHKu/bhM7GoNC4Snm97MRM0SuUpE6FOT3IPbsURc8FbwN+7EvalNkNiCK4pOUpRIGx4TQW5S0u0Tu/J6UWND4BVcjj+S3I4PhPcbEkWIHI1Vwm3WcrMfxPn+upmVFsAG4Yq3J3kcnhHxaNDgORSRU0SQuy7TvSvyp99aWGgRdAmPtibT3YwvcFKjhwYjMltc6rOS3CuO1404OJyVFsABXIsn9QXPmWk9swZ6oBGRO9CpL8jVovLSbOKq0YsnxGk4kHST8TlurR9cT2QCXsar+oJcl//nSSOJ1SLp3JPkiXgDz8uCZ07kOBHk7sl0G8Tl22F0sS2tY2OmWyJeCdrpT2SFyFRrWK6/Oxxt7Mc8sa4a5ot1G58pF9Q9eFf65Wgz8hjqTi6i/478VN1aKsXP9Cdym/DVVbvWsnBQpEuL6X+0fsRFAzwwUu62CBoe7SqrKCOKMSKHG6okMkWk5l3i/Xx3kqdUYawqIvOF87gbU0W9a1qSt4u3wlJRBZGp4v2lvspYQ7vIn6aVabQKIo9I+Y9I9OaIZPRifYlfOx4u02gVRBZm7Q5RJflHJHx5+l2fEg0LVRA5MWtvrevb1GDcsFEFkd+z9jl1ffnb3b4yjVZBZH3WXiEqLZNE+rMy6/u4TKPjhx7SNJbhJlF9mYZPBxjTjafLNFrFjnSJTwuNsuju1L+7TKNVBcSPcIYohe4VXmtvkmek/lJRxdGq4RdRCh0RjCWNhxuKEOnJ2mdWtZAGyO0dajhKMSJ7svZqfd8Jq8Z0vJ3Jg/7RoAiRVVn7NFGJ7x2B307h4Wp4c7hElulf4RsNrMWLgw0oekfm4X5RuuwZfHhpOITvRZHwaq1/ERvDqOA/4mvM54lm/kwAAAAASUVORK5CYII="
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
  /*统一支付接口*/
  unitedPayRequest: function () {debugger
    var openid = "oSR0F5s6ukNmj0YQtXhoWVXZ3074"; //（变化）
    var that = this;
    //统一支付签名
    var appid = 'wx60ad28b269aec787';//appid必填
    var body = '72系统窗';//商品名必填（变化）
    var mch_id = '1578086751';//商户号必填
    var nonce_str = util.randomString();//随机字符串，不长于32位。  
    var notify_url = 'https://api.xianrenn.com/hmc-web/mallOrder/notice';//通知地址必填
    var total_fee = parseInt(0.01 * 100); //价格，这是一分钱
    var trade_type = "JSAPI";
    var key = '7554bed1e53a4d40b46d8b401b9ab2ce'; //商户key必填，在商户后台获得
    var out_trade_no = '202004221354571732096906';//自定义订单号必填 （变化）
    debugger
    var unifiedPayment = 'appid=' + appid + '&body=' + body + '&mch_id=' + mch_id + '&nonce_str=' + nonce_str + '&notify_url=' + notify_url + '&openid=' + openid + '&out_trade_no=' + out_trade_no + '&total_fee=' + total_fee + '&trade_type=' + trade_type + '&key=' + key;
    //console.log("unifiedPayment", unifiedPayment);
    var sign = md5.md5(unifiedPayment).toUpperCase();
    //console.log("签名md5", sign);

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
    console.log("formData", formData);
    //统一支付
    wx.request({
      url: 'https://api.mch.weixin.qq.com/pay/unifiedorder', //别忘了把api.mch.weixin.qq.com域名加入小程序request白名单，这个目前可以加
      method: 'POST',
      head: 'application/x-www-form-urlencoded',
      data: formData, //设置请求的 header
      success: function (res) {
        debugger
        //console.log("返回商户", res.data);
        var result_code = util.getXMLNodeValue('result_code', res.data.toString("utf-8"));
        var resultCode = result_code.split('[')[2].split(']')[0];
        debugger
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
          //console.log("签名字符串", stringSignTemp);
          var sign = md5.md5(stringSignTemp).toUpperCase();
          //console.log("签名", sign);
          var param = { "timeStamp": timeStamp, "package": 'prepay_id=' + tmp1[0], "paySign": sign, "signType": "MD5", "nonceStr": nonceStr }
          //console.log("param小程序支付接口参数", param);
          debugger
          that.processPay(param);
        }

      },
    })

  },//unitedPayRequest()

  /* 小程序支付 */
  processPay: function (param) {
    debugger
    wx.requestPayment({
      timeStamp: param.timeStamp,
      nonceStr: param.nonceStr,
      package: param.package,
      signType: param.signType,
      paySign: param.paySign,
      success: function (res) {
        debugger
        //console.log("wx.requestPayment返回信息", res);
        wx.showModal({
          title: '支付成功',
          content: '您将在“微信支付”官方号中收到支付凭证',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
            } else if (res.cancel) {
            }
          }
        })
      },
      fail: function () {
        console.log("支付失败");
      },
      complete: function () {
        console.log("支付完成(成功或失败都为完成)");
      }
    })
  },



})