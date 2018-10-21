// pages/classlist/classlist.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverUrl:app.data.serverUrl,
    classList:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getClassList()
    console.log(app.globalData.token)
  },

  //新建课程
  newClass:function(){
    wx.navigateTo({
      url: '../newclass/newclass',
    })
  },
  //获取课程列表
  getClassList:function(){
    var _this = this;
    wx.request({
      url: _this.data.serverUrl + '/app/getcourseList?token=' + app.globalData.token,
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.code == 0) {
          
        } else {
          // if(this.data.)
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})