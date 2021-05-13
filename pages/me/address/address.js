import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast';
import {request, returnToPreviousPage} from '../../../utils/index.js';
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cPLg: app.project.cPLg,
    // 主题色
    addresses: [],
    // 收货地址
  },
  Toast,
  emitAddress: function (e) {
    app.user.emitAddress = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '/pages/me/emit-address/emit-address',
    })
  },
  navBarClickLeft: function () {
    const redirectTargetList = ['pages/me/index/index', 'pages/home/order/order'];
    returnToPreviousPage(redirectTargetList);
  },
  // 页面导航
  addAddress: function () {
    wx.navigateTo({
      url: '/pages/me/add-address/add-address',
    })
  },
  // 添加收货地址
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
    if (app.user.addresses) {
      this.setData({
        addresses: app.user.addresses
      })
    } else {
      request({
        url: '/getAddress',
        method: 'POST',
      }).then(res => {
        app.user.addresses = res;
        this.setData({
          addresses: res
        })
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