var config = require('config.js');
var quote = {
  dataStatus: 0,//0：数据未准备，1：正在请求接口，但还没收到响应，2：接口已响应，数据已经准备好了
  pagckageList: [],//所有门店的所有组包数据
  callbackList: [],
  //请求接口
  getdata: function (request,callback) {
    if (this.dataStatus == 2) {
      if (callback && typeof callback == "function") {
        callback();
      }
      return;
    }
    if (this.dataStatus == 1) {
      if (callback && typeof callback == "function") {
        this.callbackList.push(callback);
      }
      return;
    }
    this.dataStatus = 1;
    request.get(config.serverHost + config.packagePrice, {}).then(function (res) {
      if (res.statusCode != 200) {
        return;
      }
      var data = res.data;
      if (data.status == 1) {
        quote.pagckageList = data.data;
        quote.dataStatus = 2;
        if (callback && typeof callback == "function") {
          callback();
        }
        for (var i = 0; i < quote.callbackList.length; i++) {
          var fn = quote.callbackList[i];
          if (fn && typeof fn == "function") {
            fn();
          }
        }
      }
    });
  },
  getStorePackage: function (orgId) {
    if (this.dataStatus == 2) {
      return this.pagckageList[orgId];
    } else {
      this.getdata(function () {
        return quote.getStorePackage(orgId);
      });
    }
  },
  /* packageInfo  {"jzb":1,"cfb":[{"packageId":5,"packageName":"严选厨房包","packageNum":1}],"wyb":[{"packageId":9,"packageName":"严选卫浴包","packageNum":1}]}
  packageId  1严选包 2舒适包 3品质包  4 尊享包 5严选厨房  6舒适厨房 7品质厨房  8尊享厨房  9严选卫浴 10舒适卫浴 11品质卫浴（标配）12品质卫浴（高配） 13尊享卫浴（标配） 14尊享卫浴（高配）
  */
  fastQuote: function (orgId, area, kitchenCount, bathroomCount) {
    var obj = this.fastQuoteDetail(orgId, area, kitchenCount, bathroomCount);

    return obj.total;
  },
  fastQuoteDetail: function (orgId, area, kitchenCount, bathroomCount) {
    var storePackage = this.getStorePackage(orgId) || this.getdata();
    var bjObj = storePackage["KSBJ"] || null;
    var jzb = (bjObj && storePackage[bjObj['basePackageId']]) || storePackage["p1"]; // 默认严选包
    var cfb = (bjObj && storePackage[bjObj['kitchenPackageId']]) || storePackage["p5"]; // 默认严选厨房
    var wyb = (bjObj && storePackage[bjObj['bathPackageId']]) || storePackage["p9"]; // 默认严选卫浴
    var houseArea = parseFloat(area) || 90;
    var cfbNum = parseInt(kitchenCount) || 1;
    var wybNum = parseInt(bathroomCount) || 1;
    var jzbAmount = (jzb.amount && parseInt(houseArea * jzb.amount)) || 0;
    var cfbAmount = (cfb.amount && parseInt(cfbNum * cfb.amount)) || 0;
    var wybAmount = (wyb.amount && parseInt(wybNum * wyb.amount)) || 0;
    var amount = jzbAmount + cfbAmount + wybAmount; // 总价钱
    var amountRate = (bjObj && bjObj["manageAmountRate"]) || 0; // 管理费率
    amountRate = ((amountRate > 0) && ++amountRate) || 1.1;
    var total = this.fixed(amount * amountRate);

    var detail = {
      total: total,
      jzbAmount: jzbAmount,
      cfbAmount: cfbAmount,
      wybAmount: wybAmount,
      jzbName: jzb.name,
      packageInfo: {
        jzb: jzb.packageId,
        cfb: [{ packageId: cfb.packageId, packageName: cfb.name, packageNum: cfbNum }],
        wyb: [{ packageId: wyb.packageId, packageName: wyb.name, packageNum: wybNum }]
      }
    };

    return detail;
  },
  caseQuote: function (orgId, area, packageInfo) {
    var obj = this.resultQuote(orgId, area, packageInfo);

    return obj.total;
  },
  resultQuote: function (orgId, area, packageInfo) {
    // 不传，则默认严选包、严选厨房、严选卫浴
    packageInfo = {
      jzb: (packageInfo.jzb && parseInt(packageInfo.jzb)) || "1",
      cfb: (packageInfo.cfb && packageInfo.cfb instanceof Array && packageInfo.cfb) || [{ packageId: "5", packageNum: 1 }],
      wyb: (packageInfo.wyb && packageInfo.wyb instanceof Array && packageInfo.wyb) || [{ packageId: "9", packageNum: 1 }]
    }

    var storePackage = this.getStorePackage(orgId) || this.getdata();
    var bjObj = storePackage["KSBJ"] || null;
    var jzb = storePackage["p" + packageInfo.jzb];
    var houseArea = parseFloat(area) || 90; // 房屋面积
    var kitchenStr = []; // 厨房包字段
    var bathroomStr = []; // 卫浴包字段
    var jzbName = jzb.name || "严选包";
    var jzbAmount = (jzb.amount && parseInt(houseArea * jzb.amount)) || 0; // 基准包价钱
    var amount = jzbAmount; // 总价钱 = 基准包价钱 + 厨房包价钱 + 卫浴包价钱
    var amountRate = (bjObj && bjObj["manageAmountRate"]) || 0; // 管理费率
    amountRate = ((amountRate > 0) && ++amountRate) || 1.1;

    // 厨房包 
    for (var i = 0; i < packageInfo.cfb.length; i++) {
      var item = packageInfo.cfb[i];
      var packageNum = item.packageNum && parseInt(item.packageNum) || 0;
      var packageId = item.packageId && parseInt(item.packageId) || "5";
      var packageMore = storePackage["p" + packageId] || null;
      var packageAmount = packageMore.amount && parseInt(packageMore.amount) || 0;
      var packageName = packageMore.name || "严选厨房";
      item.packageName = packageName;
      amount += packageAmount * packageNum;
      kitchenStr[i] = packageName + "×" + packageNum + "-" + packageAmount;
    }

    // 卫浴包 
    for (var j = 0; j < packageInfo.wyb.length; j++) {
      var item = packageInfo.wyb[j];
      var packageNum = item.packageNum && parseInt(item.packageNum) || 0;
      var packageId = item.packageId && parseInt(item.packageId) || "9";
      var packageMore = storePackage["p" + packageId] || null;
      var packageAmount = packageMore.amount && parseInt(packageMore.amount) || 0;
      var packageName = packageMore.name || "严选卫浴";
      item.packageName = packageName;
      amount += packageAmount * packageNum;
      bathroomStr[j] = packageName + "×" + packageNum + "-" + packageAmount;
    }

    var total = this.fixed(amount * amountRate);
    var priceDetail = {
      area: houseArea,
      jzbName: jzbName,
      kitchenStr: kitchenStr.join(','),
      bathroomStr: bathroomStr.join(','),
      base: {
        name: jzbName,
        price: (jzb.amount && parseInt(jzb.amount)) || 0
      },
      total: total,
      packageInfo: packageInfo
    };

    return $.extend({}, priceDetail, packageInfo);
  },
  fixed: function (amount) {
    return (amount / 1000).toFixed(0) * 1000;
  }
}
module.exports = quote;