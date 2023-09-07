Page({
  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["推荐", "命令", "书籍", "经验"],
    currentNavtab: "0",
    type: [
      'view', 'content', 'form', 'interact', 'nav', 'media', 'map', 'canvas'
    ],
    chapterList: [],
    isloading: false,
    isSelect: false
  },


  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  widgetsToggle: function (e) {
    var id = e.currentTarget.id

    if (id === 'view') {
      this.data.viewShow = !this.data.viewShow;
      for (var i = 0, len = this.data.chapterList.length; i < len; ++i) {
        this.data.chapterList[i].viewShow = false;
      }
    } else {
      this.data.viewShow = false;
      let num = id - 1;
      this.data.chapterList[num].viewShow = !this.data.chapterList[num].viewShow;
      console.log('data.chapterList[num]', this.data.chapterList[num].viewShow);
      for (var i = 0, len = this.data.chapterList.length; i < len; ++i) {
        if (i !== num) {
          this.data.chapterList[i].viewShow = false;
        }
      }
    }
    this.setData(this.data);
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    this.getChapters()
    console.log(this.data.currentNavtab);
  },
  getChapters() {
    this.setData({
      isloading: true
    })
    //展示loading效果
    wx.showLoading({
      title: '数据加载中',
    })
    wx.request({
      url: 'https://mock.presstime.cn/mock/64f2a6002b33b5907f433714/linux/recommend/chapter',
      method: 'get',
      success: ({
        data: res
      }) => {

        this.setData({
          chapterList: [...this.data.chapterList, ...res]
        })

      },
      complete: () => {
        wx.hideLoading()
        this.setData({
          isloading: false
        })
      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  get() {
    console.log(this.data.chapterList);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
}




)