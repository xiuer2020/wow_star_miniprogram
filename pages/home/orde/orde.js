const app = getApp();
import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cPLg: app.project.cPLg,
    // 主题色
    postType: null,
    // 寄件类型
    buyIntrShowStatus: false,
    // 购买说明
    good: {},
    // 购买的产品
    currentAddr: {},
    // 当前收货地址
  },
  Toast,
  toAddr: function () {
    wx.navigateTo({
      url: '/pages/me/addr/addr',
    })
  },
  // 设置收货地址
  navBarClickLeft: function () {
    wx.navigateTo({
      url: '/pages/home/good/good',
    })
  },
  // 页面导航栏
  postTypeUpda: function (e) {
    this.setData({
      postType: e.detail
    })
  },
  // 寄件类型更新
  comfirmorder: function () {
    if(this.data.good && app.order.purchaseQuantity && this.data.postType && this.data.currentAddr){
      wx.request({
        url: 'http://127.0.0.1:8000/api/comfirmorder',
        data: {
          token: app.user.token,
          goodId: this.data.good.id,
          goodQuantity: app.order.purchaseQuantity,
          addr: `${this.data.currentAddr.region}${this.data.currentAddr.detail_addr}`,
          mailingType: this.data.postType
        },
        success: res => {
          console.log(res);
        },
        fail: err => {
          wx.showToast({
            title: 'err',
          })
        }
      })
    }else{
      Toast('请填写完整信息');
    }

    return
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  // 确认订单
  buyIntrShow: function () {
    this.setData({
      buyIntrShowStatus: true
    })
  },
  // 购买说明展示
  buyIntrClos: function () {
    this.setData({
      buyIntrShowStatus: false
    })
  },
  // 购买说明关闭
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
    const currentAddr = app.user.addresses.find(x => x.current_addr == 1);
    this.setData({
      good: app.order.selectedGood,
      currentAddr,
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