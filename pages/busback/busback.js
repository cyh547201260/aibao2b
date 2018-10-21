// pages/busback/busback.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  //跳转页面
  goPage:function(e){
    var ptype = e.currentTarget.dataset.type;
    var pageObj = {
      1:'../classlist/classlist',
      2:'../mechinfo/mechinfo',
      3:'../videolist/videolist'
    }
    wx.navigateTo({
      url: pageObj[ptype],
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'token',
      success: function(res) {console.log(res)},
      complete:function(res){
        if (!res.data) {
          wx.redirectTo({
            url: '../login/login',
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