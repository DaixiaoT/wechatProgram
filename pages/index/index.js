// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //发起Get数据请求
  getInfo() {
    wx.request({
      url: 'https://mock.presstime.cn/mock/64f2a6002b33b5907f433714/dxt/test',
      method: 'GET',
      data: {
        name: 'dxt',
        age: 30
      },
      success: (res) => {
        console.log(res.data)
      }
    })
  },
  //发起post请求
  postInfo() {

    wx.request({
      url: "https://mock.presstime.cn/mock/64f2a6002b33b5907f433714/dxt/test",
      method: "POST",
      data: {
        name: "dxt",
        age: 22
      },
      success:(res)=>{
        console.log(res.data)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getInfo()
    this.postInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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
})