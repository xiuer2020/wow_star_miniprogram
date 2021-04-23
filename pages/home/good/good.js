const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        temp: null,
        cPLg: app.globalData.cPLg,
        // 主题色
        orderShow: false,
        // 订单展示状态
        price: '',
        // 订单额
        toasMass: '未定义',
        // 轻提示文字
        numb: null,
        // 订单数量
    },
    numbUpda: function (e) {
        this.setData({
            numb: e.detail
        })
    },
    // 数量更新
    enteRankList: function () {
        // wx.reLaunch({
        wx.navigateTo({
            url: '/pages/home/rank-list/rank-list',
        })
    },
    navBarClickLeft: function () {
        wx.reLaunch({
            url: '/pages/home/index/index',
        })
    },
    // 进入首页
    popuOverClic: function () {
        this.setData({
            orderShow: false
        })
    },
    // 遮罩层点击
    buyGood: function () {
        this.setData({
            orderShow: true
        })
    },
    // 立即购买
    toOrde: function () {
        wx.reLaunch({
            url: '/pages/home/orde/orde',
        })
    },
    // 进入订单页
    Toast: app.globalData.Toast,
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        this.setData({
            temp: options.temp
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},
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