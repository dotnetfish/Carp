//app.js
var constStr=require("const/const.js");
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getSPAccount:function(cb){
     var that = this
    if(this.globalData.spAccount){
      typeof cb == "function" && cb(this.globalData.spAccount)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.spAccount = res.userInfo;
             
              typeof cb == "function" && cb(that.globalData.spAccount)
            }
          })
        }
      })
    }
  }
  ,
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口,获取关联帐号
      wx.request({
        url:constStr.getUrl("user/getUserInfoBySPAccount"),
        method:"GET",
        data:{appCode:"weixin",spAccount:this.globalData.spAccount.nickName,token:""},
        success:function(res){
          var data=res.data;
          if(data.Success){
            this.globalData.userInfo=data;
            typeof cb == "function" && cb(this.globalData.userInfo,res);
          }else{
            typeof cb == "function" && cb(null);
          }

        }
      });
      
      //typeof cb == "function" && cb({account:"admin",name:"admin",orgs:{main:{name:"中交三航局",code:"zjshj"}}});
    }
  },
  globalData:{
    userInfo:null,
    spAccount:null
  }
})