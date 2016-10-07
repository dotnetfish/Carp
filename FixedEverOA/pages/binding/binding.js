//index.js
//获取应用实例
var app = getApp();
var utils=require("../../utils/util.js");
var constStr=require("../../const/const.js");
var iCorp=require("../../utils/iCorp.js")
Page({
  data: {
    motto: 'Hello World',
    bindAccount:false,
    userInfo: {},
    wxUserInfo:{},
    toast:{title:"info",message:"",duration:1000,icon:"info",hidden:true},
    defaultToast:{title:"info",message:"",duration:1000,icon:"info",hidden:true}
  },
  bindAccount:function(e){
var frm=utils.getValue(e);
var account=frm["account"];
var password=frm["password"];
var that=this;
wx.request({
  url:constStr.getUrl("user/bindAccount"),
  method:"POST",
  success:function(res){
    //if(res.data.Success){
      //that.redirectTo({url:"../index/index.js"});
     that.setData({bindAccount:true});
   //}else{
     // that.toast("失败",res.data);
    //}
  },error:function(){
    that.toast("失败","404");
  }
})
  },
  redirectTo:function(){
     wx.redirectTo({url:"../index/index.js"});
  }
  ,
  toast:function(title,msg){
    this.setData({toast:iCorp.extend({},this.data.defaultToast,{title:title,message:msg,hidden:false})});
  },
  toastChange:function(){
    this.setData({toast:iCorp.extend({},this.data.defaultToast,{hidden:true})});
  }
  ,
newAccount:function(){
 iCorp.post(constStr.getUrl("user/newAccount"),{spAccount:this.data.wxUserInfo.token,name:this.data.wxUserInfo.nickName},function(res){
 if(res.data.Success){
   wx.redirectTo({url:"../index/index.js"});
 }
 });
}
  ,
  onLoad: function () {
    console.log('onLoad binding')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getSPAccount(function(userInfo){
      //更新数据
      that.setData({
        wxUserInfo:userInfo
      })
    })
  }
})
