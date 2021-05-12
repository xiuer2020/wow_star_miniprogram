    function getCountDown(num) {
        const date = Math.floor(num / (60 * 60 * 24)),
            hour = Math.floor((num / (60 * 60)) % 24),
            min = Math.floor((num / 60) % 60),
            seco = Math.floor(num % 60);
        return `${date}天${hour}时${min}分${seco}秒`
    }

    function returnToPreviousPage(redirectTargetList, ) {
        const routes = getCurrentPages();
        let delta;
        for (let i = routes.length - 1; i >= 0; i--) {
            if (redirectTargetList.includes(routes[i].route)) {
                delta = routes.length - 1 - i;
                break;
            }
        }
        console.log(delta);
        wx.navigateBack({
            delta
        });
    }

    function convertToString(value) {
        if (value.toString() === '[object Object]') {
            return JSON.stringify(value);
        } else {
            return value;
        }
    }

    function convertToJson(value) {
        if (value.toString() === '[object Object]') {
            return value;
        } else {
            return JSON.parse(value);
        }
    }
    // 倒计时整理
    export default {
        getCountDown,
        returnToPreviousPage,
        // 返回上一页
        convertToString,
        // 转换成字符串
        convertToJson,
        // 转换成json
    }