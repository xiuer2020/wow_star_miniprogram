// app.js
import './utils/fix.js'
const loda = require('lodash');

App({
  user: {
    openid: null,
    // 用户openid
    token: null,
    // 验证信息
    addrs: null,
    // 默认地址
    emitAddr: null,
    // 编辑的地址
    encryptedData: null,
    // 用户加密数据
    iv: null,
    // 用于解密
    code: null,
    // 用户code
  },

  project: {
    cPLg: '#2c2c2c',
    //  主题色
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
    const promise = new Promise(resolve => {
      wx.login({
        success: res => {
          this.user.code = res.code;
          resolve()
        },
        fail: err => {
          wx.showToast({
            title: '获取登录code失败'
          })
        }
      })
    })
    promise.then(() => {
      wx.request({
        url: 'http://127.0.0.1:8000/api/getOpenid',
        data: {
          code: this.user.code
        },
        success: res => {
          this.user.openid = res.data.data.openid;
          this.user.sessionKey = res.data.data.session_key;
        },
        fail: err => {
          wx.showToast({
            title: '获取openid失败',
          })
        }
      })
    }).then(() => {
      wx.getUserInfo({
        success: res => {
          this.user.iv = res.iv;
          this.user.encryptedData = res.encryptedData
        },
        fail: err => {
          wx.showToast({
            title: '获取用户信息失败',
          })
        }
      })
    }).then(() => {
      var data = {
        openid: this.user.openid,
        iv: this.user.iv,
        encryptedData: this.user.encryptedData
      }
      console.log(data, this.user);
      wx.request({
        url: 'http://127.0.0.1:8000/api/login',
        method: 'POST',
        data: {
          openid: this.user.openid,
          iv: this.user.iv,
          encryptedData: this.user.encryptedData
        },
        success: res => {
          console.log(res);
        },
        fail: err => {
          wx.showToast({
            title: '登录失败',
          })
        }
      })
    });

    return;

    promise.then(() => {
      wx.request({
        url: 'http://127.0.0.1:8000/api/getAddr',
        data: {
          token: this.user.token
        },
        success: res => {
          this.user.addrs = res.data.data
        }
      })
    })
  },
  onHide() {

  }
})