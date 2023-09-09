// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:{},
    navtitle:"",
    detail:"",
    isloading:false
  },
  getDetail(cb) {
    this.setData({
      isloading:true
    })
    wx.showLoading({
      title: '数据加载中',
    })
    // 
    wx.request({
      url: 'https://mock.presstime.cn/mock/64fbf515ad51c7ed941b6c89/ComputerOrganization/' + this.data.query.first + '/'+this.data.query.second,
      method: 'GET',
      data: {

      },
      success: (res) => {
        console.log(res)
        this.setData({
          detail:res.data.detail,
          navtitle:res.data.title
        })
      },
      complete: () => {
        wx.hideLoading()
        this.setData({
          isloading:false
        })
        cb&&cb()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query: options
    })
    this.getDetail()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.navtitle
    })
    // console.log(this.data);

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
    this.getShopList(()=>{
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    
      wx.showToast({
        title: '数据加载完毕！',
        icon:'none'
      })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})