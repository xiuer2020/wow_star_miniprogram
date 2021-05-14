const app = getApp();
import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast';
import {request} from '../../../utils/index.js';
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
        detailAddress: '',
        // 详细地址
        currentAddress: false,
        // 是否为当前收货地址
        emitAddress: null,
        // 编辑的地址
    },
    Toast,
    defaultAddressUpdate: function (e) {
        this.setData({
            currentAddress: e.detail
        });
    },
    // 切换默认地址
    navBarClickLeft: function () {
        wx.navigateTo({
            url: '/pages/me/address/address',
        })
    },
    // 页面导航
    save: function () {
        request({
            url: '/updateAddress',
            method: 'POST',
            data: {
                name: this.data.name,
                region: this.data.region,
                detail_address: this.data.detailAddress,
                current_address: Number(this.data.currentAddress),
                phone: this.data.name,
                address_id: this.data.emitAddress.id
            }
        }).then(res => {
            return request({
                url: '/getAddress',
                method: 'POST'
            })
        }).then(res => {
            app.user.addresses = res;
            Toast('更新地址成功');
            setTimeout(() => {
                wx.navigateTo({
                    url: '/pages/me/address/address',
                })
            }, 400);
            
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
        this.setData({
            emitAddress: app.user.emitAddress,
            name: app.user.emitAddress.name,
            phone: app.user.emitAddress.phone,
            region: app.user.emitAddress.region,
            detailAddress: app.user.emitAddress.detail_address,
            currentAddress: Boolean(app.user.emitAddress.current_address)
        })
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