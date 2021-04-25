// app.js
import './utils/fix.js'
const loda = require('lodash')
import Toast from '@vant/weapp/toast/toast.js';

App({
  onLaunch() {

  },
  globalData: {
    cPLg: '#2c2c2c',
    //  主题色
    Toast,
    // 轻提示
    loda
    // @tabb-heig: 50px;
  },
  home: {
    seleId: '',
    // 选中的商品id
    purcQuan: 0,
    // 购买数量
  }
})