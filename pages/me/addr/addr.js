const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
      cPLg: app.globalData.cPLg,
      // 主题色
      addrs: []
      // 收获地址
    },
    Toast: app.globalData.Toast,
    emitAddr: function(){
      wx.reLaunch({
        url: '/pages/me/add-addr/add-addr',
      })
    },
    navBarClickLeft:function(){
        wx.reLaunch({
          url: '/pages/me/index/index',
        })
    },
    // 页面导航
    addAddr:function(){
      console.log('ente');
      wx.reLaunch({
        url: '/pages/me/add-addr/add-addr',
      })
    },
    // 添加收获地址
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})