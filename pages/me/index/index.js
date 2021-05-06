const app = getApp();
// pages/me/me.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        footTabbInde: 1,
        // 底部选项栏下标
        cPLg: null
        // 主题色
    },
    Toast: app.globalData.Toast,
    naviOrde: function(){
        wx.navigateTo({
          url: '/pages/me/orde/orde',
        })
    },
    // 进入我的订单
    naviAddr: function(){
        console.log('ente');
        wx.navigateTo({
          url: '/pages/me/addr/addr',
        })
    },
    // 进入我的地址
    naviFeed: function(){
        wx.navigateTo({
          url: '/pages/me/feed/feed',
        })
    },
    // 进入意见反馈
    naviPostPay: function(){
        console.log('ente');
        wx.navigateTo({
          url: '/pages/me/post-pay/post-pay',
        })
    },
    // 进入邮费补缴
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
        this.setData({
            cPLg: app.globalData.cPLg
        })
        // 更新全局变量
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