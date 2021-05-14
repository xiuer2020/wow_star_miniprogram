const {
    getCountDown
} = require('../../../utils/index.js')
import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast';
import Dialog from '../../../miniprogram_npm/@vant/weapp/dialog/dialog';
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        cPLg: app.project.cPLg,
        // 主题色
        orderShow: false,
        // 订单展示状态
        price: '',
        // 订单额
        purchaseQuantity: 1,
        // 订单数   
        countDownText: '0天0时0分0秒',
        // 倒计时剩余时间
        loadingShow: false,
        // 加载样式展示状态
        good: null
        // 选中商品
    },
    purchaseQuantityUpdate: function (e) {
        this.setData({
            purchaseQuantity: e.detail
        })
    },
    // 数量更新
    enteRankingList: function () {
        // wx.navigateTo({
        wx.navigateTo({
            url: '/pages/home/ranking-list/ranking-list',
        })
    },
    // 进入排行榜
    navBarClickLeft: function () {
        wx.switchTab({
            url: '/pages/home/index/index',
        })
    },
    // 进入首页
    popupTap: function () {
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
    toOrder: function () {
        if (!wx.getStorageSync('token')) {
            Dialog.confirm({
                title: '温馨提示',
                message: '请先进行登录',
            }).then(res => {
                wx.navigateTo({
                    url: '/pages/login/login',
                })
            }, () => {})
            return;
        }

        if (this.data.purchaseQuantity) {
            app.order.purchaseQuantity = this.data.purchaseQuantity;
            // 更新购买数量
            wx.navigateTo({
                url: '/pages/home/order/order',
            })
        } else {
            return Toast('请选择购买数量');
        }


    },
    // 进入订单页
    viewDetail: function () {
        Toast.fail('未定义');
    },
    // 查看详情
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {


    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        let timeStamp = Math.floor((new Date(app.order.selectedGood.deadline).getTime() - Date.now()) / 1000);
        timeStamp = timeStamp <= 0 ? 0 :timeStamp; 
        const promise = new Promise(resolve => {
            this.setData({
                good: app.order.selectedGood,
                countDownText: getCountDown(timeStamp)
            });
            wx.showLoading({
                title: '加载中'
            });
            resolve();
        }).then(() => {
            wx.hideLoading();
        })
        

        let timer = setInterval(() => {
            if (timeStamp <= 0) {
                clearInterval(timer);
                timer = null;
                timeStamp = null;
            }
            this.setData({
                countDownText: getCountDown(timeStamp)
            })
            timeStamp--
        }, 1000)
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