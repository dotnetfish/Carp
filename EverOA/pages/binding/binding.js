//binding.js try to bind wx user to oa account
var app=getApp();
Page({
  data:{
    wxUserInfo:{},
    userInfo:{}

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
       console.log('binding onLoad')
    //setData()
    //if(app.getUserInfo())
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    console.log('binding onshow');
    var that=this;
    app.getUserInfo(function(userInfo){
        //if(userInfo==null){
        //    wx.navigateTo({url:"../common/error/error.js"});
        //}
        that.setData({wxUserInfo:userInfo.spAccount});
    })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindAccount:function(e){
     // alert(e.detail.value);
  }
})