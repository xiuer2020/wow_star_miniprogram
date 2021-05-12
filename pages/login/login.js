const app = getApp();
import {
    request
} from '../../utils/request.js';
import {
    returnToPreviousPage
} from '../../utils/index.js';
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
                console.log('获取code成功', app.user);
                request({
                    url: '/getOpenid',
                    method: 'POST',
                    data: {
                        code: app.user.code
                    }
                }).then(res => {
                    console.log('获取openid成功');
                    app.user.openid = res.openid;
                    app.user.sessionKey = res.session_key;
                    return Promise.resolve();
                }).then((statu) => {
                    return new Promise(resolve => {
                        wx.getUserInfo({
                            success: res => {
                                app.user.iv = res.iv;
                                app.user.encryptedData = res.encryptedData;
                                console.log('获取用户信息成功');
                                resolve();
                            },
                            fail: err => {
                                wx.showToast({
                                    title: '获取用户信息失败',
                                })
                            }
                        })
                    });

                }).then((statu) => {
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
                    app.user.token = res.token;
                    const routes = getCurrentPages();
                    const redirectTargetList = routes.map(x => x. route);
                    returnToPreviousPage(redirectTargetList);
                });
            },
            fail: err => {
                wx.showToast({
                    title: '获取登录code失败'
                })
            }
        })
        // const promise = new Promise(resolve => {
        //     wx.login({
        //         success: res => {
        //             console.log(res);
        //             app.user.code = res.code;
        //             resolve()
        //         },
        //         fail: err => {
        //             wx.showToast({
        //                 title: '获取登录code失败'
        //             })
        //         }
        //     })
        // }).then(() => {
        //     return new Promise(resolve => {
        //         wx.request({
        //             url: 'http://127.0.0.1:8000/api/getOpenid',
        //             method: 'POST',
        //             data: {
        //                 code: app.user.code
        //             },
        //             success: res => {
        //                 app.user.openid = res.data.data.openid;
        //                 app.user.sessionKey = res.data.data.session_key;
        //                 resolve('获取openid成功');
        //             },
        //             fail: err => {
        //                 wx.showToast({
        //                     title: '获取openid失败',
        //                 })
        //             }
        //         })
        //     });
        // }).then((statu) => {
        //     console.log(statu);
        //     return new Promise(resolve => {
        //         wx.getUserInfo({
        //             success: res => {
        //                 app.user.iv = res.iv;
        //                 app.user.encryptedData = res.encryptedData
        //                 resolve('获取用户信息成功');
        //             },
        //             fail: err => {
        //                 wx.showToast({
        //                     title: '获取用户信息失败',
        //                 })
        //             }
        //         })
        //     });

        // }).then((statu) => {
        //     console.log(statu);

        //     wx.request({
        //         url: 'http://127.0.0.1:8000/api/login',
        //         method: 'POST',
        //         data: {
        //             openid: app.user.openid,
        //             iv: app.user.iv,
        //             encryptedData: app.user.encryptedData
        //         },
        //         success: res => {
        //             app.user.token = res.data.data.token;
        //             wx.setStorage({
        //                 key: 'token',
        //                 data: res.data.data.token
        //             }, )
        //         },
        //         fail: err => {
        //             wx.showToast({
        //                 title: '登录失败',
        //             })
        //         }
        //     })
        // })
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