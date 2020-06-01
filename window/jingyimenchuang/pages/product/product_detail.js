var request = require('../../utils/request.js');
var config = require('../../utils/config.js');
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productId: 100013,
    code: "",
    name:"",
    brief:"",
    price: 0,
    picUrl:"",
    detailList:[],
    rightIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACfUlEQVRIiaXWS6hNURzH8c/ZlIuJUFwxkNedeEWEi9wSxQBhQAbE8N6YmGCEuceElBEREYVyFVfklZtXJKbCwJWRxwSD9d/Ow77XOce/Tnudtfb6ffd/r/9jlyb17PcPm471WIw2jIr5PrxCNy7hzUAipQFAS3AgALl9x8cYj0VLxdod7MPtIrGsYK4Fx9ATkBfokrwZhonxGxZzXXgW996KvS21orUejcQVLMB77MYZ/Cx6ykodrMVRjMN9rMbnIo+G4lpA7mMOTtcBgV+4iLl4EBrXJK//Ah3CfNzEMuWzaMQ+xN6boXWoFrQUO/AOG/GjCUhu30PjHbaH9h/QAek9d0lh26zlen2hVQptGWaiHU+lfGjW1uIuRsT/S6HZjpkZ1sXCSelQm4WcxTwsirlfoQnrMuWEvP6fkEHYgqsVa91xXZJJSfcVb2sERjcBOVOz/ia0p2VS7fqk+rW14Tn2/gdEaH7CqKISBMOlBN7fD6weSJVlUiiOlkIxt14sx5cCWCOQUmj3DcZrKZunqC71jwN2I2DwskFPJktl6FEmlXdYUXBjDss9O9cABFbG9U4mFUPYpvr1FcFKDUBK2BrjC5nUS+5iFtb0symHbaoTIrRmh/azPOr2SqF4RLlVF8HO1QkZicOhuY9yEbyNExgfYkPqFCyyITiPCaHZUwmCnXiIDqklj20CMkbqRR2htStfqAR9wyrlDtmLzYq/K2otk86vFwsDskoqP3+BSMnbgeNoxSmp1HdiquqoLEm514knUtsfF3s71PS1gT63luKgctknef0hxq1SmcrtHvaIM6m1wf1RpABpxwxsiHGbdMjiiR9I7eWyVGH6td/yCZrYQ/RvXAAAAABJRU5ErkJggg==",
    indexIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAD40lEQVRoge3aa4hVVRQH8N+khpQxURBkZFofhJAehCWV9tI0wYqiF2QFMb2/ZA8ioqBQ6EVEFBYYZX3IQgyyzJhKK0vtAWqBGDlGQohBBI44VEwf1r7MntvcmXPvnDPjh/nDhb3W3mev/WfvvdY661zGMIZK0FZrzJ07t4r5T8dyzMI36MCuso10dnY6ouxJM1yJzZiNCZiDLZhfhbEqiLThUazBMXV9x+JDPFC20bKJHIV3sDSbezMuxI4kj8NzWImJZRkuk8jJ+ArXZ7q3cAk24Xy8n/UtxgZMLsN4WUQuwHc4O8n/4iHcgkNJdwDX4Cn0Jt15+BbnDncBZRDpwGc4Icl/YZE4PvXoxeO4Ad1JNxkbxQ61jOEQGY+X8BqOTLpdwtWuG+LZ98Qu/prkieLOPCvuUNNolcjxWI/7Mt0ngsTOgnNsw0x8mekexFrh3ZpCK0RmYCsuzXQvYCH+bHKu/bhM7GoNC4Snm97MRM0SuUpE6FOT3IPbsURc8FbwN+7EvalNkNiCK4pOUpRIGx4TQW5S0u0Tu/J6UWND4BVcjj+S3I4PhPcbEkWIHI1Vwm3WcrMfxPn+upmVFsAG4Yq3J3kcnhHxaNDgORSRU0SQuy7TvSvyp99aWGgRdAmPtibT3YwvcFKjhwYjMltc6rOS3CuO1404OJyVFsABXIsn9QXPmWk9swZ6oBGRO9CpL8jVovLSbOKq0YsnxGk4kHST8TlurR9cT2QCXsar+oJcl//nSSOJ1SLp3JPkiXgDz8uCZ07kOBHk7sl0G8Tl22F0sS2tY2OmWyJeCdrpT2SFyFRrWK6/Oxxt7Mc8sa4a5ot1G58pF9Q9eFf65Wgz8hjqTi6i/478VN1aKsXP9Cdym/DVVbvWsnBQpEuL6X+0fsRFAzwwUu62CBoe7SqrKCOKMSKHG6okMkWk5l3i/Xx3kqdUYawqIvOF87gbU0W9a1qSt4u3wlJRBZGp4v2lvspYQ7vIn6aVabQKIo9I+Y9I9OaIZPRifYlfOx4u02gVRBZm7Q5RJflHJHx5+l2fEg0LVRA5MWtvrevb1GDcsFEFkd+z9jl1ffnb3b4yjVZBZH3WXiEqLZNE+rMy6/u4TKPjhx7SNJbhJlF9mYZPBxjTjafLNFrFjnSJTwuNsuju1L+7TKNVBcSPcIYohe4VXmtvkmek/lJRxdGq4RdRCh0RjCWNhxuKEOnJ2mdWtZAGyO0dajhKMSJ7svZqfd8Jq8Z0vJ3Jg/7RoAiRVVn7NFGJ7x2B307h4Wp4c7hElulf4RsNrMWLgw0oekfm4X5RuuwZfHhpOITvRZHwaq1/ERvDqOA/4mvM54lm/kwAAAAASUVORK5CYII=",
    bjModal:{},
    itemList:[],
    orderType:2,
    activityProductId:"",
    activityPrice:"",
    groupNum: 12,
    unit:"",
    orderPrice:"",
    sjPhoneFlag :false // 商家手机号是否展示，窗帘的商户手机号特殊处理
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.showLoading();
    var thisObj = this;
    thisObj.getDetail(options);

    if (options.orderType) {
      this.setData({
        orderType: options.orderType
      });
    }
    if (options.activityProductId){
      this.setData({ activityProductId: options.activityProductId});
    }

    if (options.activityPrice) {
      this.setData({ activityPrice: options.activityPrice });
    }
    if (options.groupNum) {
      this.setData({ groupNum: options.groupNum });
    }

    var bjModal = thisObj.selectComponent("#bjModal");
    this.setData({
      bjModal: bjModal
    });
  },
  getDetail(options) {
    //options.productId = 10019;//TODO:
    if (options.productId) {
      this.setData({
        productId: options.productId
      });

      var data = {
      };
      var thisObj = this;
      request.get(config.hmcApiHost + "goods/detail/" + options.productId, data).then(function (res) {
        
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
        
        var itemList = res.data.data.itemList;
        for(var i=0;i<itemList.length;i++){
          var specifications = itemList[i].specifications.replace('[', '').replace(']', '').replace(/\"/g, '');
          itemList[i].specifications = specifications;
        }

        var productName = res.data.data.name;
        thisObj.setData({
          name: productName,
          brief: res.data.data.brief,
          price: res.data.data.price,
          picUrl: res.data.data.picUrl,
          unit: res.data.data.unit,
          orderPrice:res.data.data.orderPrice,
          detailList: res.data.data.detailList,
          itemList: itemList
        });

        //只有宝丽阁的商户手机号展示
        if (productName.indexOf('宝丽阁') > -1) {
          thisObj.setData({
            sjPhoneFlag : true
          });
        }
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
  showSelectModel:function(){
    var thisObj = this;
    this.data.bjModal.showModal(this.data.name, this.data.picUrl, this.data.orderPrice, this.data.itemList, this.data.orderType,this.data.activityProductId);
  }
  ,
  callPhone: function () {
    //宝丽阁 窗帘特殊处理
    var phone ="18662668966";
    if (this.data.name.indexOf('宝丽阁') > -1){
      phone = "15995899254";
    }
    wx.makePhoneCall({
      phoneNumber: phone // 仅为示例，并非真实的电话号码
    })
  }
})