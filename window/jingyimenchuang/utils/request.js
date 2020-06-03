var promise = require('promise.js');
function getData(url,data){
  return new promise(function(resolve, reject){
    wx.request({
      url: url,
      data: data,
      method:'GET',
      header: {
        //'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log("get data success")
        resolve(res)
      },
      fail: function (res) {
        reject(res)
        console.log("get data failed")
      }
    })
  })
}
function getJsonp(url,data){
  return new promise(function(resolve, reject){   
     url += "?callback" + urlEncode(data);
    //var param = Object.assign({callback:''},data);

    wx.request({
      url: url,
      method:'GET',
      header: {
        'Content-Type': 'application/jsonp'
      },
      success: function(res) {
        console.log("get data success")
        resolve(res)
      },
      fail: function (res) {
        reject(res)
        console.log("get data failed")
      }
    })
  })
}
function postData(url,data){
  return new promise(function(resolve, reject){
    wx.request({
      url: url,
      data: data,
      method:'POST',
      header: {
        'Content-Type': "application/x-www-form-urlencoded"
      },
      success: function(res) {
        console.log("post data success")
        resolve(res)
      },
      fail: function (res) {
        reject(res)
        console.log("post data failed")
      }
    })
  })
}

function postDataJSON(url, data) {
  return new promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: data,
      method: 'POST',
      header: {
        'Content-Type': "application/json"
      },
      success: function (res) {
        console.log("post data success")
        resolve(res)
      },
      fail: function (res) {
        reject(res)
        console.log("postDataJSON data failed")
      }
    })
  })
}


var urlEncode = function (param, key, encode) {
  if(param==null) return '';
  var paramStr = '';
  var t = typeof (param);
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);
  } else {
    for (var i in param) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
      paramStr += urlEncode(param[i], k, encode);
    }
  }
  return paramStr;
};


module.exports = {
    get: getData,
    post: postData,
    jsonp: getJsonp,
    postJson: postDataJSON,
}