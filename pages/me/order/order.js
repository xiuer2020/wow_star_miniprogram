import {request} from '../../../utils/index.js';
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
    },
    navBarClickLeft:function(){
        wx.switchTab({
          url: '/pages/me/index/index',
        })
    },
    // 页面导航

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
      if(app.user.orders){
        this.setData({
          order: app.user.orders
        });
      }else{
        request({
          url: "/getMyOrders",
          method: 'post'
        }).then(res => {
          this.setData({
            orders: res.orders
          });
        })
      }
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