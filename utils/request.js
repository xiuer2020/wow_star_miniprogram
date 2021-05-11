//全局加载提示框


export const request = (params) => {
    var ajaxTimes = 0;
    let app = getApp();
    ajaxTimes++
    wx.showLoading({
        title: '加载中',
        mask: true
    })
    const baseUrl = 'http://api.wow.com/api';
    const token = app.user.token;
    let header;
    if (token) {
        header = {
            "Authorization": 'Bearer ' + token
        }
    }
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            url: baseUrl + params.url,
            header: header,
            success: (result) => {
                resolve(result.data.data)
            },
            dail: (err) => {
                reject(err)
            },
            complete: () => {
                ajaxTimes--
                if (ajaxTimes === 0) {
                    wx.hideLoading()
                }
            }
        })
        header = null;
    })
}