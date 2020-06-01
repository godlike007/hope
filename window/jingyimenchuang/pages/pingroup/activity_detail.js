var request = require('../../utils/request.js');
var config = require('../../utils/config.js');
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupList:[],
    activityId:1,
    code: "",
    totalNum:0,
    detail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.showLoading();
    var thisObj = this;
    wx.login({
      success: function (res) {
        thisObj.setData({
          code: res.code
        });

        thisObj.getDetail(options, res.code);
      }
    })
  },
  getDetail(options, code) {
    //options.activityId=1;
    if (options.activityId) {
      this.setData({
        activityId: options.activityId
      });

      var data = {
        code: code
      };
      var thisObj = this;
      request.get(config.hmcApiHost + "frontActivity/getActivityDetailInfo?activityId=" + thisObj.data.activityId, data).then(function (res) {
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

        //var that = this;
        thisObj.setData({
          detail: res.data.data.detail,
          totalNum: res.data.data.totalNum,
          groupList: res.data.data.itemList
        });

      });

    }
    else {
      util.hideLoading();
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
  goDrawGroup:function(e){
    var groupId = e.currentTarget.dataset.cid;
    console.log('用户点击了活动：'+groupId);
    var detailObj = this;
    wx.showModal({
      title: '提示',
      content: '马上去拼单~',
      success(res) {
        if (res.confirm) {
          detailObj.searchUser(groupId);
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  searchUser(groupId){
    var _this = this;
    wx.login({
      success: function (res) {
        util.showLoading();
        var params = {
          code: res.code
        };
        request.get(config.hmcApiHost + "frontUser/getByCode", params).then(function (res) {
          util.hideLoading();
          if (res.statusCode != 200) {
            util.alert("请求异常！");
            return;
          }
          if (res.data.status != "1") {
            util.alert(res.data.message);
            return;
          }
          //没有查询到用户
          if (res.data.data == "10001") {
            wx.showModal({
              title: '提示',
              content: '请完善地址信息~',
              success(res) {
                if (res.confirm) {
                  //去完善地址
                  wx.navigateTo({
                    url: '/pages/user/register',
                    success: function (res) { },
                    fail: function (res) { },
                    complete: function (res) { },
                  })
                } else if (res.cancel) {
                  //点击取消
                  return;
                }
              }
            })
          }

          _this.submitPinGroupInfo(groupId);
        });//get over

      }
    })
    
  }
  ,
  //提交拼团
  submitPinGroupInfo(groupId) {
    
    util.showLoading();
    //var thisObj = this;
    wx.login({
      success: function (res) {
        var data = {
          code: res.code,
          groupId: groupId
        };

        var thisObj = this;
        //追加拼团
        request.post(config.hmcApiHost + "frontActivity/appendGroup", data).then(function (res) {
          util.hideLoading();
          wx.login({
            success: function (res) {
              thisObj.setData({
                code: res.code
              });
            }
          })

          if (res.statusCode != 200) {
            util.alert("努力通信中~");
            return;
          }
          if (res.data.status != "1") {
            util.alert(res.data.message);
            return;
          }
          //拼单成功
          util.alert("拼团成功！");

        });


      }
    })
  }
})