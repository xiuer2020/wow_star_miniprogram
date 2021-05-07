const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        cPLg: app.globalData.cPLg,
        // 主题色
        defaAddrChec: false,
        // 默认地址选中状态
    },
    Toast: app.globalData.Toast,
    defaAddrUpda: function(e){
        this.setData({
            defaAddrChec: e.detail
        })
    },
    // 切换默认地址
    navBarClickLeft: function () {
        wx.navigateTo({
            url: '/pages/me/addr/addr',
        })
    },
    // 页面导航
    save: function () {
        wx.navigateTo({
            url: '/pages/me/addr/addr',
        })
    },
    // 保存
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