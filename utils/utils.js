    function counDownFormDate(num) {
        const date = Math.floor(num / (60 * 60 * 24)),
            hour = Math.floor((num / (60 * 60)) % 24),
            min = Math.floor((num / 60) % 60),
            seco = Math.floor(num % 60);
        return `${date}天${hour}时${min}分${seco}秒`
    }
    // 倒计时整理
    module.exports = {
        counDownFormDate
    }