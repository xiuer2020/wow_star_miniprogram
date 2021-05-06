import Toast from '@vant/weapp/toast/toast';
import typeConv from '../../../utils/type_conv.js';
const app = getApp();
Page({
  data: {
    footTabbInde: 0,
    // 底部选项栏下标
    indiText: '1',
    // 轮播图指示文字
    allGoodList: null,
    cPLg: app.globalData.cPLg,
  },
  debounce: app.globalData.loda.debounce,
  Toast: app.globalData.Toast,
  swipChan: function (e) {
    this.setData({
      indiText: `${e.detail.current+1}`
    })
  },
  // 轮播图切换
  toGoodDeta: function (e) {
    // app.home.seleItem = e.currentTarget.dataset.item;
    const item = typeConv.string(e.currentTarget.dataset.item);
    wx.navigateTo({
      url: `/pages/home/good/good?item=${item}`
    })
  },
  // 进入商品详情
  onShow() {

  },
  onLoad() {
    let token = wx.getStorageSync('_abc');
    console.log(token);
    wx.request({
      url: 'http://127.0.0.1:8000/getGoodList',
      data: {
        token
      },
      success: res => {
        this.setData({
          allGoodList: res.data.data
        })
      },
      fail: err => {
        console.log(err);
      }
    });
    token = null;
  }
})