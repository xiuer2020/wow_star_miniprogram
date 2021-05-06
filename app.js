// app.js
import './utils/fix.js'
const loda = require('lodash')
import Toast from '@vant/weapp/toast/toast.js';

App({
  onLaunch() {
    wx.request({
      url:"http://127.0.0.1:8000/login",
      method: 'get',
      data: {
        code: '123'
      },
      success: (res) => {
        wx.setStorage({
          key: '_abc',
          data: res.data.data,
          fail: err => {
            wx.showToast({
              title: err,
            })
          }
        })
      },
      fail: (err) => {
        wx.showToast({
          title: err
        })
      },
    })

    

    return
    wx.login({
      success: (res) => {
        console.log(res.code);
    
      } 
    })
    
  },
  globalData: {
    cPLg: '#2c2c2c',
    //  主题色
    Toast,
    // 轻提示
    loda,
    // @tabb-heig: 50px;
    token: null
    // 验证信息
  },
  home: {
    // seleItem: '',
    // 选中的商品
    purcQuan: 0,
    // 购买数量
  }
})