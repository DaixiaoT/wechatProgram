
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
      url: 'https://www.fastmock.site/mock/75790fd0727f52e50d5d0695131f448b/dxt/message',
      method: 'GET',
      success: (res) => {
        console.log(res)
        this.setData({
          MessageList: [...this.data.MessageList, ...res.data],
          total: res.data.length
          
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