const app = getApp();
Page({
  data: {
    footTabbInde: 0,
    // 底部选项栏下标
    indiText: '1',
    // 轮播图指示文字
    cPLg: app.globalData.cPLg,
  },
  Toast: app.globalData.Toast,
  swipChan: function(e){
    this.setData({
      indiText: `${e.detail.current+1}`
    })
  },
  // 轮播图切换
  naviTo: function (e) {
    switch (e.detail) {
      case 0:
        wx.reLaunch({
          url: '/pages/home/home/home',
        });
        break;
      case 1:
        wx.reLaunch({
          url: '/pages/me/me/me',
        })
    }
  },
  // 底部选项栏导航
  toGoodDeta: function (para) {
    console.log(para);
    wx.reLaunch({
      url: '/pages/home/good/good'
    })
  },
  // 进入商品详情
  onShow() {

  }
})