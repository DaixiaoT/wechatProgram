
Page({
  data: {
    query: {},
    MessageList: [],
    page: 1,
    pageSize: 10,
    total: 0,
    isloading: false
  },
  onLoad: function () {
    this.getMessageList();
  },

  getMessageList(cb) {
    this.setData({
      isloading: true
    })
    wx.showLoading({
      title: '数据加载中',
    })
    wx.request({
      url: 'https://mock.presstime.cn/mock/64f2a6002b33b5907f433714/linux/yiyan',
      method: 'GET',
      success: (res) => {
        console.log(res)
        this.setData({
          MessageList: [...this.data.MessageList, ...res.data],
          // total: res.data.length
          
        })
      },
      complete: () => {
        wx.hideLoading()
        this.setData({
          isloading:false
        })
        wx.stopPullDownRefresh()
        cb&&cb()
      }
    })
  },
});