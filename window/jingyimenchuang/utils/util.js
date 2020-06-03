function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatTimeYMD(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('-');
}


function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//格式化ajax返回数据结构
function jsonpDataObj(baseData) {
  var o = {};
  o.exist = !!baseData.data;

  if (o.exist) {
    //o = baseData.data;
    //o.hasData = !!baseData.data.status
    var obj = baseData.data.split("(")[1];
    obj = obj.split(")")[0];
    obj = JSON.parse(obj);
    o.jsonpObj = obj;
  }

  return o;
}

function formatJsonp(jsonp) {
  debugger;

  //o = baseData.data;
  //o.hasData = !!baseData.data.status
  var obj = jsonp.split("(")[1];
  obj = obj.split(")")[0];
  obj = JSON.parse(obj);


  return obj;
}
//手机号校验
function isPhoneNumber(s) {
  var regu = "^1[3|4|5|7|8|9][0-9]{9}$";
  var reg = new RegExp(regu);
  return reg.test(s);
}

function imageUtil(e) {
  var imageSize = {};
  var originalWidth = e.detail.width; //图片原始宽 
  var originalHeight = e.detail.height; //图片原始高 
  var originalScale = originalHeight / originalWidth; //图片高宽比 
  console.log('originalWidth: ' + originalWidth)
  console.log('originalHeight: ' + originalHeight)
  //获取屏幕宽高 
  wx.getSystemInfo({
    success: function (res) {
      var windowWidth = res.windowWidth;
      var windowHeight = res.windowHeight;
      var windowscale = windowHeight / windowWidth; //屏幕高宽比 
      console.log('windowWidth: ' + windowWidth)
      console.log('windowHeight: ' + windowHeight)
      if (originalScale < windowscale) { //图片高宽比小于屏幕高宽比 
        //图片缩放后的宽为屏幕宽 
        imageSize.imageWidth = windowWidth;
        imageSize.imageHeight = (windowWidth * originalHeight) / originalWidth;
      } else { //图片高宽比大于屏幕高宽比 
        //图片缩放后的高为屏幕高 
        imageSize.imageHeight = windowHeight;
        imageSize.imageWidth = (windowHeight * originalWidth) / originalHeight;
      }

    }
  })
  console.log('缩放后的宽: ' + imageSize.imageWidth)
  console.log('缩放后的高: ' + imageSize.imageHeight)
  return imageSize;
}

function rebuildObjArrayByAsc(property) {
  return function (obj1, obj2) {
    var value1 = obj1[property];
    var value2 = obj2[property];
    return value1 - value2;     // 升序
  }
}
function showTips(title) {
  wx.showToast({
    title: title,
    icon: "none",
    duration: 1500
  });
}
function showLoading() {
  wx.showLoading({
    title: '加载中...',
    mask: true
  })
}

function hideLoading() {
  wx.hideLoading();
}
module.exports = {
  formatTime: formatTime,
  getJsonpDataObj: jsonpDataObj,
  getFormatJsonp: formatJsonp,

  isPhoneNumber: isPhoneNumber,
  alert: showTips,
  showLoading: showLoading,
  hideLoading: hideLoading,
  imageUtil: imageUtil,
  rebuildObjArrayByAsc: rebuildObjArrayByAsc,
  formatTimeYMD: formatTimeYMD,
  createTimeStamp: createTimeStamp,
  randomString: randomString,
  getXMLNodeValue: getXMLNodeValue,
  errorShow: errorShow
}
//时间戳产生函数 
function createTimeStamp() {
  return parseInt(new Date().getTime() / 1000) + ''
}

/* 随机数 */
function randomString() {
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; //默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
  var maxPos = chars.length;
  var pwd = '';
  for (var i = 0; i < 32; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}
/* 获取XML节点信息 */
function getXMLNodeValue(node_name, xml) {
  var tmp = xml.split("<" + node_name + ">")
  var _tmp = tmp[1].split("</" + node_name + ">")
  return _tmp[0]
}
//弹框提示
function errorShow(message) {
  wx.showToast({
    title: message,
    icon: "none",
    duration: 4000
  });
}