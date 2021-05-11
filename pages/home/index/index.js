import Toast from '@vant/weapp/toast/toast';
import typeConv from '../../../utils/type_conv.js';
import {request} from '../../../utils/request.js';
const app = getApp();
Page({
  data: {
    footTabbInde: 0,
    // 底部选项栏下标
    indiText: '1',
    // 轮播图指示文字
    allGoodList: [],
    // 所有商品
    hotGoodList: [],
    // 热门商品
    cPLg: app.project.cPLg,
  },
  debounce: app.project.lodash.debounce,
  Toast,
  swipChan: function (e) {
    this.setData({
      indiText: `${e.detail.current+1}`
    })
  },
  // 轮播图切换
  toGoodDeta: function (e) {
    app.order.selectedGood = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: `/pages/home/good/good`
    })
  },
  // 进入商品详情
  bindGetUserInfo:function(e) {
    console.log(e.detail.userInfo);//这里就有你想要的信息
 },
  onShow() {

  },
  onLoad() {

    request({
      url: '/getGoodList',
      success: res => {
        console.log(res);
        this.setData({
          allGoodList: res.data.data,
          hotGoodList: res.data.data.slice(0, 4)
        })
      },
      fail: err => {
        console.log(err);
      }
    });
  }
})