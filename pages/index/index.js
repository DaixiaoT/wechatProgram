// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存放轮播图数据
    swiperList:[],
    //存放9宫格数据
    gridList:[]
  },
  //获取轮播图数据的方法
  // getSwiperList(){
  //   wx.request({
  //     url: 'https://mock.presstime.cn/mock/64f2a6002b33b5907f433714/dxt/slides',
  //     method: 'GET',
  //     success:(res)=>{
  //       console.log(res)
  //       this.setData({
  //         swiperList:res.data
  //       })
  //     }
  //   })
  // },
  //获取九宫格数据的方法
  // getGridList(){
  //   wx.showLoading({
  //     title: '数据加载中',
  //   })
  //   wx.request({
  //     url: 'https://mock.presstime.cn/mock/64f2a6002b33b5907f433714/dxt/categories',
  //     method: 'GET',
  //     success:(res)=>{
  //       console.log(res)
  //       this.setData({
  //         gridList:res.data
  //       })
  //     },
  //     complete:()=>{
  //       wx.hideLoading()
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.getSwiperList()
    // this.getGridList()
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