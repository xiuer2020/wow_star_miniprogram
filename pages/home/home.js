const app = getApp();
Page({
  data: {
    footTabbInde: 0
    // 底部选项栏下标
  },
  Toast: app.globalData.Toast,
  naviTo: function (e) {
    switch (e.detail) {
      case 0:
      wx.reLaunch({
        url: '/pages/home/home',
      });
      break;
      case 1:
        wx.reLaunch({
          url: '/pages/me/me',
        })
    }
  },

  onShow() {
    this.setData({
      cPLg: app.globalData.cPLg
    })
  }
})