Page({
  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["数据结构", "操作系统", "计算机网络", "计算机组成结构"],
    currentNavtab: "0",
    type: [
      'view', 'content', 'form', 'interact', 'nav', 'media', 'map', 'canvas'
    ],
    DatastructureChapterList: [],
    isloading: false,
    isSelect: false,
    OperateSystemChapterList: [],
    ComputerNetworkChapterList: [],
    ComputerOrganizationChapterList: []
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
      for (var i = 0, len = this.data.DatastructureChapterList.length; i < len; ++i) {
        this.data.DatastructureChapterList[i].viewShow = false;
      }
    } else {
      this.data.viewShow = false;
      let num = id - 1;
      this.data.DatastructureChapterList[num].viewShow = !this.data.DatastructureChapterList[num].viewShow;
      console.log('data.DatastructureChapterList[num]', this.data.DatastructureChapterList[num].viewShow);
      for (var i = 0, len = this.data.DatastructureChapterList.length; i < len; ++i) {
        if (i !== num) {
          this.data.DatastructureChapterList[i].viewShow = false;
        }
      }
    }
    this.setData(this.data);
  },
  widgetsToggle_oprateSystem: function (e) {
    var id = e.currentTarget.id
    console.log(id);
    if (id === 'view') {
      this.data.viewShow = !this.data.viewShow;
      for (var i = 0, len = this.data.OperateSystemChapterList.length; i < len; ++i) {
        this.data.OperateSystemChapterList[i].viewShow = false;
      }
    } else {
      this.data.viewShow = false;
      let num = id - 1;
      this.data.OperateSystemChapterList[num].viewShow = !this.data.OperateSystemChapterList[num].viewShow;
      console.log('data.OperateSystemChapterList[num]', this.data.OperateSystemChapterList[num].viewShow);
      for (var i = 0, len = this.data.OperateSystemChapterList.length; i < len; ++i) {
        if (i !== num) {
          this.data.OperateSystemChapterList[i].viewShow = false;
        }
      }
    }
    this.setData(this.data);
  },
  widgetsToggle_computerNetwork: function (e) {
    var id = e.currentTarget.id
    console.log(id);
    if (id === 'view') {
      this.data.viewShow = !this.data.viewShow;
      for (var i = 0, len = this.data.ComputerNetworkChapterList.length; i < len; ++i) {
        this.data.ComputerNetworkChapterList[i].viewShow = false;
      }
    } else {
      this.data.viewShow = false;
      let num = id - 1;
      this.data.ComputerNetworkChapterList[num].viewShow = !this.data.ComputerNetworkChapterList[num].viewShow;
      console.log('data.ComputerNetworkChapterList[num]', this.data.ComputerNetworkChapterList[num].viewShow);
      for (var i = 0, len = this.data.ComputerNetworkChapterList.length; i < len; ++i) {
        if (i !== num) {
          this.data.ComputerNetworkChapterList[i].viewShow = false;
        }
      }
    }
    this.setData(this.data);
  },
  widgetsToggle_computerOrganization: function (e) {
    var id = e.currentTarget.id
    console.log(id);
    if (id === 'view') {
      this.data.viewShow = !this.data.viewShow;
      for (var i = 0, len = this.data.ComputerOrganizationChapterList.length; i < len; ++i) {
        this.data.ComputerOrganizationChapterList[i].viewShow = false;
      }
    } else {
      this.data.viewShow = false;
      let num = id - 1;
      this.data.ComputerOrganizationChapterList[num].viewShow = !this.data.ComputerOrganizationChapterList[num].viewShow;
      console.log('data.ComputerOrganizationChapterList[num]', this.data.ComputerOrganizationChapterList[num].viewShow);
      for (var i = 0, len = this.data.ComputerOrganizationChapterList.length; i < len; ++i) {
        if (i !== num) {
          this.data.ComputerOrganizationChapterList[i].viewShow = false;
        }
      }
    }
    this.setData(this.data);
  },
  



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getOperateSystemChapters()
    this.getDataStructureChapters()
    this.getComputerNetworkChapters()
    this.getComputerOrganizationChapters()
    console.log(this.data.currentNavtab);
  },
  getDataStructureChapters() {
    this.setData({
      isloading: true
    })
    //展示loading效果
    wx.showLoading({
      title: '数据加载中',
    })
    wx.request({
      url: 'https://mock.presstime.cn/mock/64fb2592ad51c7ed941b5690/computerBasic/dataStructure/chapter',
      method: 'get',
      success: ({
        data: res
      }) => {

        this.setData({
          DatastructureChapterList: [...this.data.DatastructureChapterList, ...res]
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
  getOperateSystemChapters() {
    this.setData({
      isloading: true
    })
    //展示loading效果
    wx.showLoading({
      title: '数据加载中',
    })
    wx.request({
      url: 'https://mock.presstime.cn/mock/64fb2592ad51c7ed941b5690/computerBasic/operateSystem/chapter',
      method: 'get',
      success: ({
        data: res
      }) => {

        this.setData({
          OperateSystemChapterList: [...this.data.OperateSystemChapterList, ...res]
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
  getComputerNetworkChapters() {
    this.setData({
      isloading: true
    })
    //展示loading效果
    wx.showLoading({
      title: '数据加载中',
    })
    wx.request({
      url: 'https://mock.presstime.cn/mock/64fb2592ad51c7ed941b5690/computerBasic/computerNetwork/chapter',
      method: 'get',
      success: ({
        data: res
      }) => {

        this.setData({
          ComputerNetworkChapterList: [...this.data.ComputerNetworkChapterList, ...res]
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
  getComputerOrganizationChapters() {
    this.setData({
      isloading: true
    })
    //展示loading效果
    wx.showLoading({
      title: '数据加载中',
    })
    wx.request({
      url: 'https://mock.presstime.cn/mock/64fb2592ad51c7ed941b5690/computerBasic/computerOrganization/chapter',
      method: 'get',
      success: ({
        data: res
      }) => {

        this.setData({
          ComputerOrganizationChapterList: [...this.data.ComputerOrganizationChapterList, ...res]
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

  // getCommands() {
  //   this.setData({
  //     isloading: true
  //   })
  //   //展示loading效果
  //   wx.showLoading({
  //     title: '数据加载中',
  //   })
  //   wx.request({
  //     url: 'https://mock.presstime.cn/mock/64f2a6002b33b5907f433714/linux/command/chapter',
  //     method: 'get',
  //     success: ({
  //       data: res
  //     }) => {

  //       this.setData({
  //         commandList: [...this.data.commandList, ...res]
  //       })

  //     },
  //     complete: () => {
  //       wx.hideLoading()
  //       this.setData({
  //         isloading: false
  //       })
  //     }
  //   })
  // },
  // getBooks() {
  //   this.setData({
  //     isloading: true
  //   })
  //   //展示loading效果
  //   wx.showLoading({
  //     title: '数据加载中',
  //   })
  //   wx.request({
  //     url: 'https://mock.presstime.cn/mock/64f2a6002b33b5907f433714/linux/book/list',
  //     method: 'get',
  //     success: ({
  //       data: res
  //     }) => {

  //       this.setData({
  //         bookList: [...this.data.bookList, ...res]
  //       })

  //     },
  //     complete: () => {
  //       wx.hideLoading()
  //       this.setData({
  //         isloading: false
  //       })
  //     }
  //   })
  // },
  // getExperiences() {
  //   this.setData({
  //     isloading: true
  //   })
  //   //展示loading效果
  //   wx.showLoading({
  //     title: '数据加载中',
  //   })
  //   wx.request({
  //     url: 'https://mock.presstime.cn/mock/64f2a6002b33b5907f433714/linux/experience/list',
  //     method: 'get',
  //     success: ({
  //       data: res
  //     }) => {

  //       this.setData({
  //         experienceList: [...this.data.experienceList, ...res]
  //       })

  //     },
  //     complete: () => {
  //       wx.hideLoading()
  //       this.setData({
  //         isloading: false
  //       })
  //     }
  //   })
  // },

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