const app = getApp();
import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast';
Page({
    /**
     * 页面的初始数据
     */
    data: {
        cPLg: app.project.cPLg,
        // 主题色
        name: '',
        // 收货人
        phone: '',
        // 收货人手机号
        region: '',
        // 地区
        detailAddr: '',
        // 详细地址
        currentAddr: false,
        // 是否为当前收货地址
    },
    Toast,
    defaAddrUpda: function (e) {
        this.setData({
            currentAddr: e.detail
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
        wx.request({
            url: 'http://127.0.0.1:8000/api/setAddr',
            data: {
                token: app.user.token,
                name: this.data.name,
                region: this.data.region,
                detailAddr: this.data.detailAddr,
                currentAddr: Number(this.data.currentAddr),
                phone: this.data.name
            },
            success: res => {
              Toast('添加地址成功');
              setTimeout(() => {
                wx.navigateBack();
              }, 400)
            },
            fail: err => {
                wx.showToast({
                  title: 'err',
                })
            }
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