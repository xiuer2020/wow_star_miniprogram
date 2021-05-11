// app.js
import './utils/fix.js'
import {
  request
} from "./utils/request.js"
const lodash = require('lodash');

App({
  user: {
    openid: null,
    // 用户openid
    token: null,
    // 验证信息
    addresses: null,
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
    lodash,
    // @tabb-heig: 50px;
  },
  order: {
    selectedGood: null,
    // 选中的商品
    purchaseQuantity: 0,
    // 购买数量
    postType: ''
    // 快递类型
  },

  onLaunch() {

   

    /*  promise.then(() => {
       wx.request({
         url: 'http://127.0.0.1:8000/api/getAddr',
         data: {
           token: this.user.token
         },
         success: res => {
           this.user.addresses = res.data.data
         }
       })
     }) */
  },
  onHide() {

  }
})