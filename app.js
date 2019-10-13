App({


  onLaunch: function () {
    wx.login({
      success:function(){
        wx.getUserInfo({
          success:function(res){
            console.log(res)
          }
        })
      }
    })
  },


  onShow: function (options) {
    console.log(options)
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
    }
  },


  onHide: function () {
    
  },

  onError: function (msg) {
    
  },
  globalData:{
    name:'coderWhy',
    age:18
  }
})
