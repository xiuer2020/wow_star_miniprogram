//全局加载提示框
var ajaxTimes = 0
export const request = (params) => {
    ajaxTimes++
    wx.showLoading({
        title: '加载中',
        mask: true
    })
    const urlbase = 'https://equip.dghclw.com/api';
    const token = wx.getStorageSync('token');
    if (token) {
        var header = {
            "Authorization": 'Bearer ' + token
        }
    }
    console.log(params.url)
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            url: urlbase + params.url,
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
    })
}