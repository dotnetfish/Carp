//index.js
//获取应用实例
var app = getApp();
var formHelper = require( "../../utils/form.js" );
var iCorp = require( "../../utils/iCorp.js" );
Page( {
  data: {
    motto: 'Hello World',
    userInfo: {},
    wxInfo: {},
    showBindingError: { hidden: false, message: "" },
    process: { hidden: true, message: "" },
    modal: { title: "info", cancel: "cancel", confirm: "confirm", message: "", hidden: true }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs.js'
    })
  },
  hidToast: function() {
    this.setData( { showBindingError: { hidden: true } });
  }
  , modal: function( data ) {
    this.setData( { modal: iCorp.extend( {}, this.data.modal, data ) });
  },
  bindAccount: function( e ) {
    //console.log(''+e.detail.value.account)
    //console.log(''+e.detail.value.password)
    var form = formHelper.getValue( e );
    var account = form[ "account" ];
    var password = form[ "password" ];
    var that = this;
    that.setData( { process: { hidden: false, message: "verify account and password.please waiting" } });
    wx.request( {
      url: "http://qsms.ccshj.net:8081/api/sqcp/user/login",
      data: { useruid: account, password: password, deviceMacId: "uiuiui" },
      method: "POST",
      header: {
        "Content-Type": "application/json",
        "usertoken": ""
      },
      complete: function() {
        that.setData( { process: { hidden: true, message: "" } });

      },
      success: function( res ) {
        var data = res.data;
        console.log( "" + data.Success );
        if( data.Success ) {
          that.setData( { userInfo: data });
          that.setData( { showBindingError: { hidden: false, message: "Success" } })
          

        } else {
          //extends("","")
          that.modal( { hidden: false, message: "invalid account or password" });
        }
        wx.redirectTo({url:"../oa/default",});
      }
    });
  },
  modalChange: function() {
    this.modal( { hidden: true });
  },
  modalCancel: function() {
    this.modal( { hidden: true });
  }
  ,
  onLoad: function() {
    console.log( 'onLoad' )
    var that = this;

    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //如果未绑定用户则跳转至绑定界面

      that.setData( {
        userInfo: userInfo.account,
        wxInfo: userInfo.spAccount
      })
      if( that.data.userInfo.account == null ) {
        //wx.navigateTo( { url: "../binding/binding.js" });
        return;
      }
    })

  },

  onReady: function() {

  }
})
