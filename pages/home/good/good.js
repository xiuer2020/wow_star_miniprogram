const {
    counDownFormDate
} = require('../../../utils/index.js')
import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast';
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
        numb: null,
        // 订单数   
        countDownText: '',
        // 倒计时剩余时间
        loadShow: false,
        // 加载样式展示状态
        good: null
        // 选中商品
    },
    numbUpda: function (e) {
        this.setData({
            numb: e.detail
        })
    },
    // 数量更新
    enteRankList: function () {
        // wx.navigateTo({
        wx.navigateTo({
            url: '/pages/home/rank-list/rank-list',
        })
    },
    navBarClickLeft: function () {
        wx.switchTab({
            url: '/pages/home/index/index',
        })
    },
    // 进入首页
    popupOverClic: function () {
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
    toorder: function () {
        if (this.data.numb) {
            app.order.purchaseQuantity = this.data.numb;
            // 更新购买数量
            wx.navigateTo({
                url: '/pages/home/order/order',
            })
        } else {
            return Toast('请选择购买数量');
        }


    },
    // 进入订单页
    viewDetail: function(){
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
        let timeRema = Math.floor((new Date(app.order.selectedGood.deadline).getTime() - Date.now()) / 1000);
        this.setData({
            good: app.order.selectedGood,
            countDownText: counDownFormDate(timeRema)
        })

        let timer = setInterval(() => {
            if (timeRema <= 0) {
                clearInterval(timer);
                timer = null;
                timeRema = null;
            }
            this.setData({
                countDownText: counDownFormDate(timeRema)
            })
            timeRema--
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