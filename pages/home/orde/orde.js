const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cPLg: app.globalData.cPLg,
    // 主题色
    mailType: null,
    // 寄件类型
    buyIntrShowStat: false,
    // 购买说明
    good: {},
  },
  Toast: app.globalData.Toast,
  setAddr: function () {
    wx.navigateTo({
      url: '/pages/me/addr/addr',
    })
  },
  // 设置收货地址
  navBarClickLeft: function () {
    wx.navigateTo({
      url: '/pages/home/good/good',
    })
  },
  // 页面导航栏
  mailTypeUpda: function (e) {
    this.setData({
      mailType: e.detail
    })
  },
  // 寄件类型更新
  login: function () {
    wx.navigateTo({
      url: '/pages/logi/logi',
    })
  },
  // 登录
  buyIntrShow: function () {
    this.setData({
      buyIntrShowStat: true
    })
  },
  // 购买说明展示
  buyIntrClos: function () {
    this.setData({
      buyIntrShowStat: false
    })
  },
  // 购买说明关闭
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      good: app.orde.seleItem
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})