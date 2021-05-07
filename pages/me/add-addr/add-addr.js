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
        name: '',
        // 收货人
        phone: '',
        // 收货人手机号
        site: '',
        // 地区
        detailSite: '',
        // 详细地址
        currentAddr: false,
        // 是否为当前收货地址
    },
    Toast: app.globalData.Toast,
    defaAddrUpda: function (e) {
        if (e.detail) {
            this.setData({
                defaAddrChec: 1
            })
        } else {
            this.setData({
                defaAddrChec: 0
            })
        }

    },
    // 切换默认地址
    navBarClickLeft: function () {
        wx.navigateTo({
            url: '/pages/me/addr/addr',
        })
    },
    // 页面导航
    save: function () {
        wx.request({
            url: 'http://127.0.0.1:8000/setAddr',
            data: {
                name: this.data.name,
                addr: this.data.site + this.data.detailSite,
                currentAddr: this.data.currentAddr,
                phone: this.data.name,
                currentAddr: this.data.defaAddrChec
            },
            success: res => {
                console.log(res);
            }
        })

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