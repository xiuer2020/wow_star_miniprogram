// app.js
import './utils/fix.js'
const loda = require('lodash')
import Toast from '@vant/weapp/toast/toast.js';
import { reject } from 'lodash';

App({
  user: {
    token: null,
    // 验证信息
    addrs: null,
    // 默认地址
    emitAddr: null,
    // 编辑的地址
  },

  project: {
    cPLg: '#2c2c2c',
    //  主题色
    Toast,
    // 轻提示
    loda,
    // @tabb-heig: 50px;
  },
  orde: {
    seleItem: null,
    // 选中的商品
    purcQuan: 0,
    // 购买数量
    mailType: ''
  },
  onLaunch() {
    let promise = new Promise((resolve, reject) => {
      wx.request({
        url: "http://127.0.0.1:8000/api/login",
        method: 'get',
        data: {
          code: '123'
        },
        success: (res) => {
          this.user.token = res.data.data;
          resolve();
        },
        fail: (err) => {
          wx.showToast({
            title: err
          })
        },
      })
    })

    promise.then(() => {
      wx.request({
        url: 'http://127.0.0.1:8000/api/getAddr',
        data: {
          token: this.user.token
        },
        success: res => {
          this.user.addrs =  res.data.data
        }
      })
    })




    return
    wx.login({
      success: (res) => {
        console.log(res.code);

      }
    })

  },
  onHide() {

  }
})