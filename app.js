// app.js
import Toast from '@vant/weapp/toast/toast.js';
import Pubsub from 'utils/pubsub.js';
App({
  onLaunch() {

  },
  globalData: {
    cPLg: '#2c2c2c',
    //  主题色
    Toast,
    // 轻提示
    //    @c-p-lg: #2c2c2c;
    // @tabb-heig: 50px;
  },
  pubSub: new Pubsub(),
  // 总栈
  counter: 0
})