import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast';
const app = getApp();
// pages/me/me.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        footTabbarIndex: 1,
        // 底部选项栏下标
        cPLg: null
        // 主题色
    },
    Toast,
    navigateOrder: function(){
      if(wx.getStorageSync('token')){
        wx.navigateTo({
          url: '/pages/me/order/order',
        })
      }else{
        wx.navigateTo({
          url: '/pages/login/login',
        })
      }
      
    },
    // 进入我的订单
    navigateAddress: function(){
        if(wx.getStorageSync('token')){
          wx.navigateTo({
            url: '/pages/me/address/address',
          });
        }else{
          wx.navigateTo({
            url: '/pages/login/login'
          });
        }
        
    },
    // 进入我的地址
    navigateFeed: function(){
        if(wx.getStorageSync('token')){
          wx.navigateTo({
            url: '/pages/me/feed/feed',
          })
        }else{
          wx.navigateTo({
            url: '/pages/login/login',
          })
        }
        
    },
    // 进入意见反馈
    navigatePostPay: function(){
      if(wx.getStorageSync('token')){
        wx.navigateTo({
          url: '/pages/me/post-pay/post-pay',
        })
      }else{
        wx.navigateTo({
          url: '/pages/login/login',
        })
      }
        
    },
    // 进入邮费补缴
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