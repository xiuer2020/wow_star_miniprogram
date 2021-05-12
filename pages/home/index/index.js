import Toast from '@vant/weapp/toast/toast';
import {request} from '../../../utils/request.js';
const app = getApp();
Page({
  data: {
    footTabbarIndex: 0,
    // 底部选项栏下标
    indicatorText: '1',
    // 轮播图指示文字
    allGoodList: [],
    // 所有商品
    hotGoodList: [],
    // 热门商品
    cPLg: app.project.cPLg,
  },
  debounce: app.project.lodash.debounce,
  Toast,
  swiperChange: function (e) {
    this.setData({
      indicatorText: `${e.detail.current+1}`
    })
  },
  // 轮播图切换
  toGoodDetail: function (e) {
    app.order.selectedGood = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: `/pages/home/good/good`
    })
  },
  // 进入商品详情
  onShow() {

  },
  onLoad() {

    request({
      url: '/getGoodList'
    }).then(res => {
      this.setData({
        allGoodList: res,
        hotGoodList: res.slice(0, 4)
      })
    });
  }
})