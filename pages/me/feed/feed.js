import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast';
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cPLg: app.project.cPLg,
    feed: '',
    // 反馈信息
  },
  Toast,
  navBarClickLeft: function () {
    wx.switchTab({
      url: '/pages/me/index/index',
    })
  },
  // 页面导航
  feedbackInput: function(e){},
  // 反馈信息输入
  submit: function () {
    wx.request({
      url: 'http://127.0.0.1:8000/api/setFeedback',
      data: {
        token: app.user.token,
        description:  this.data.feed
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
    return 
    wx.switchTab({
      url: '/pages/me/index/index',
    })
  },
  // 反馈信息提交
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