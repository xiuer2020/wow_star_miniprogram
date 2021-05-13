import {
    returnToPreviousPage,
    request
} from '../../utils/index.js';
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        popupShowStatus: true,
        // 遮罩层状态
    },
    popupShow: function () {
        this.setData({
            popupShowStatus: true
        })
    },
    // 遮罩层展示
    // 轻提示
    login: function (e) {
        wx.login({
            success: res => {
                app.user.code = res.code;
                request({
                    url: '/getOpenid',
                    method: 'POST',
                    data: {
                        code: app.user.code
                    }
                }).then(res => {
                    app.user.openid = res.openid;
                    app.user.sessionKey = res.session_key;
                    return new Promise(resolve => {
                        wx.getUserInfo({
                            success: res => {
                                app.user.iv = res.iv;
                                app.user.encryptedData = res.encryptedData;
                                resolve();
                            },
                            fail: err => {
                                wx.showToast({
                                    title: '获取用户信息失败',
                                })
                            }
                        })
                    });
                }).then(() => {
                    return request({
                        url: '/login',
                        method: 'POST',
                        data: {
                            openid: app.user.openid,
                            iv: app.user.iv,
                            encryptedData: app.user.encryptedData
                        }
                    })
                }).then(res => {
                    wx.setStorageSync('token', res.token);
                    return request({
                        url: '/getAddress',
                        method: 'POST',
                        data: {
                            openid: app.user.openid
                        }
                    })
                }).then(res => {
                    app.user.addresses = res;
                    const routes = getCurrentPages();
                    const redirectTargetList = routes.map(x => x.route);
                    returnToPreviousPage(redirectTargetList);
                });
            },
            fail: err => {
                wx.showToast({
                    title: '获取登录code失败'
                })
            }
        })

    },
    // 登录
    navBarClickLeft: function () {
        wx.navigateBack()
    },
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