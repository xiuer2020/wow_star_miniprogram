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
    postType: null,
    // 寄件类型
    buyIntrodutionShowStatus: false,
    // 购买说明
    good: {},
    // 购买的产品
    currentAddress: null,
    // 当前收货地址
  },
  toAddress: function () {
  
    wx.navigateTo({
      url: '/pages/me/address/address',
    })
  },
  // 设置收货地址
  navBarClickLeft: function () {
    wx.navigateTo({
      url: '/pages/home/good/good',
    })
  },
  // 页面导航栏
  postTypeUpdate: function (e) {
    this.setData({
      postType: e.detail
    })
  },
  // 寄件类型更新
  comfirmOrder: function () {
    console.log(this.data.good, app.order.purchaseQuantity, this.data.postType, this.data.currentAddress);
    if(this.data.good && app.order.purchaseQuantity && this.data.postType && this.data.currentAddress){
      request({
        url: '/comfirmOrder',
        method: 'POST',
        data: {
          good_id: this.data.good.id,
          quantity: app.order.purchaseQuantity,
          region: this.data.currentAddress.region,
          detail_address: this.data.currentAddress.detail_address,
          post_type: this.data.postType
        }
      }).then(res => {
        wx.navigateTo({
          url: '/pages/me/order/order',
        })
      })
    }else{
      Toast('请填写完整信息');
    }

   
  },
  // 确认订单
  buyIntrodutionShow: function () {
    this.setData({
      buyIntrodutionShowStatus: true
    })
  },
  // 购买说明展示
  buyIntrodutionClose: function () {
    this.setData({
      buyIntrodutionShowStatus: false
    })
  },
  // 购买说明关闭
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let currentAddress
    if(app.user.addresses){
      currentAddress = app.user.addresses.find(x => x.current_address == 1);
    }else{
      currentAddress = null;
    }
    this.setData({
      good: app.order.selectedGood,
      currentAddress,
      purchaseQuantity: app.order.purchaseQuantity
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