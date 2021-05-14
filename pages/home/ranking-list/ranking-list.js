const { request } = require("../../../utils/index.js");
import _ from 'lodash';
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {

    },
    navBarClickLeft: function () {
        wx.navigateTo({
            url: '/pages/home/good/good',
        })
    },
    // 返回商品页

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // console.log(app.order.selectedGood);
        request({
            url: '/getRankingList',
            method: 'post',
            data: {
                // good_id: app.order.selectedGood.id
                good_id: 1
            }
        }).then(res => {
            console.log();
           this.setData({
               rankingList: res,
               topThresRankingList: res.slice(0,3),
               forwardRankingList: res.slice(3, 100)
           })
        })
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