const app = getApp();
import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast';
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
    emitAddress: function(e){
      app.user.emitAddress = e.currentTarget.dataset.item;
      wx.navigateTo({
        url: '/pages/me/emit-address/emit-address',
      })
    },
    navBarClickLeft:function(){
      const routes = getCurrentPages();
      const redirectTargetList = ['pages/me/add-address/add-address',  'pages/home/order/order'];
      let delta;
      for(let i = routes.length-1; i>=0; i--){
        if(redirectTargetList.includes(routes[i].route)){
          delta = routes.length-1 - i;
          break;
        }
      }
      console.log(delta);
      wx.navigateBack({
        delta
      })
        
    },
    // 页面导航
    addAddress:function(){
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
      console.log(getCurrentPages());
      this.setData({
        addresses: app.user.addresses
      })
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