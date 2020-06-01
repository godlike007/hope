/**
 * 大转盘抽奖
 */

//var util = require("../../utils/util.js");
//var app = getApp();

Page({

  //奖品配置
  awardsConfig: {
    chance: true,
    awards: [
      { 'index': 0, 'name': '1元红包' },
      { 'index': 1, 'name': '5元话费' },
      { 'index': 2, 'name': '6元红包' },
      { 'index': 3, 'name': '8元红包' },
      { 'index': 4, 'name': '10元话费' },
      { 'index': 5, 'name': '10元红包' }
    ]
  },

  data: {
    awardsList: {},
    animationData: {},
    btnDisabled: '',
  },

  onReady: function (e) {
    this.drawAwardRoundel();

    //分享
    wx.showShareMenu({
      withShareTicket: true
    });
  },

  //画抽奖圆盘
  drawAwardRoundel: function () {
    var awards = this.awardsConfig.awards;
    var awardsList = [];
    var turnNum = 1 / awards.length;  // 文字旋转 turn 值

    // 奖项列表
    for (var i = 0; i < awards.length; i++) {
      awardsList.push({ turn: i * turnNum + 'turn', lineTurn: i * turnNum + turnNum / 2 + 'turn', award: awards[i].name });
    }

    this.setData({
      btnDisabled: this.awardsConfig.chance ? '' : 'disabled',
      awardsList: awardsList
    });
  },

  //发起抽奖
  playReward: function () {
    
    var duration = 4000;//时长
    //创建动画
    var animationRun = wx.createAnimation({
      duration: duration,
      timingFunction: 'ease'
    })

    var awardIndex;
    setTimeout(function () {
      //中奖index
      awardIndex = parseInt(Math.random() * 10) - 1; debugger
      if (awardIndex > 6 || awardIndex < 0) {
        awardIndex = 0;
      }
      var runNum = 8;//旋转8周

      // 旋转角度
      this.runDeg = this.runDeg || 0;
      this.runDeg = this.runDeg + (360 - this.runDeg % 360) + (360 * runNum - awardIndex * (360 / 6))

      animationRun.rotate(this.runDeg).step();
      this.setData({
        animationData: animationRun.export(),
        btnDisabled: 'disabled'
      });
    }.bind(this), 3000);


    

    // 中奖提示
    var awardsConfig = this.awardsConfig;
    setTimeout(function () {
      wx.showModal({
        title: '恭喜',
        content: '获得' + (awardsConfig.awards[awardIndex].name),
        showCancel: false
      });
      this.setData({
        btnDisabled: ''
      });
    }.bind(this), duration+4000);

  },
  /*
  onShareAppMessage: function () {
    var that = this;
    return util.doShare("大转盘抽奖", "pages/zp/zp", that);
  }
  */
})