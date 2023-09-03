// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
  //通过编程式导航跳转到tabBar页面
  gotoMessage(){
    wx.switchTab({
      url: '/pages/search/search',
    })
  },
  //通过编程式导航跳转到list页面
  gotoList(){
    wx.navigateTo({
      url: '/pages/list/list',
    })
  },
  //编程式导航传参
  gotoLogs(){
    wx.navigateTo({
      url: '/pages/logs/logs?name=dxt&age=55',
    })
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