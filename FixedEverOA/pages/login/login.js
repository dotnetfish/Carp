//index.js
//获取应用实例
var constStr = require( "../../const/const.js" );
var app = getApp()
Page( {
  data: {
    motto: '正在获取帐号信息，请稍候....',
    userInfo: {},
    spAccount: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../binding/binding'
    })
  },
  onLoad: function() {

    var that = this;
    app.getSPAccount( function( userInfo ) {
      that.setData( {
        userInfo: userInfo
      });
      app.getUserInfo( function( userInfo ) {
        //更新数据
        if( userInfo != null ) {
          console.log( 'onLoad ' );
          that.setData( {
            spAccount: userInfo
          })
        } else {
          console.log( 'on redirect to:' );
          wx.navigateTo( { url: "../binding/binding" });
        }


      })
    });
    //调用应用实例的方法获取全局数据

  }
})
