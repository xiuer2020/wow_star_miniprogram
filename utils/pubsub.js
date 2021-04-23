export default class PubSub {
    constructor() {
        this.PubSubCache = {
            $uid: 0
        };
    }
    on(type, handler) {
        let cache = this.PubSubCache[type] || (this.PubSubCache[type] = {});
        // 将cache与this.PubSubCache[type]指向同一个堆
        handler.$uid = handler.$uid || this.PubSubCache.$uid++;
        // 给方法handler添加属性
        cache[handler.$uid] = handler;
        // 将方法挂载到this.PubSubCache[type]
    }
    emit(type, ...param) {
        let cache = this.PubSubCache[type],
        // 将cache与this.PubSubCache[type]指向同一个堆
            key,
            tmp;
        if (!cache) return;
        for (key in cache) {
            tmp = cache[key];
            cache[key].call(this, ...param);
        }
        // 更改this
    }
    off(type, handler) {
        let counter = 0,
            $type,
            cache = this.PubSubCache[type];
             // 将cache与this.PubSubCache[type]指向同一个堆
        if (handler == null) {
            if (!cache) return true;
            return !!this.PubSubCache[type] && (delete this.PubSubCache[type]);
            // 清除绑定
        } 
        // 如果handler未定义
        else {
            !!this.PubSubCache[type] && (delete this.PubSubCache[type][handler.$uid]);
            // 清除绑定
        }
        // 如果handler定义
        for ($type in cache) {
            counter++;
        }
        // conter = cache.length-1
        return !counter && (delete this.PubSubCache[type]);
        // 清除绑定
    }
}
// 事件总栈 通过订阅发布实现通信