// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      infomation:'Hello World!',
      imgSrc:'/images/zjy.jpg',
      randomNum1:Math.random()*10,
      randomNum2:Math.random().toFixed(2),
      count:0,
      msg:'你好',
      type:1,
      flag:true
  },
  //定义按钮的事件处理函数
  btnTapHandler(e){
    console.log(e)
  },
  //加一按钮的点击事件处理函数
  btnAddHandler(){
    this.setData({
      count:this.data.count + 1
    })
  },
  btnAddHandler2(e){
    this.setData({
      count:this.data.count + e.target.dataset.info
    })
  },
  //输入框的事件处理函数
  //文本框与数据同步
  inputHandler(e){
    // console.log(e.detail.value)
    this.setData({
      msg:e.detail.value
    })
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