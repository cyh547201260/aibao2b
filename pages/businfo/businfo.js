// pages/businfo/businfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choosePopState:false,
  },
  //点击弹出地址选择
  popChooseAdd:function(){
    this.setData({
      choosePopState:true
    })
  },
  //选择二级菜单
  addressTapFun2:function(){
    this.hidChooseAdd()
  },
  //点击隐藏地址选择
  hidChooseAdd:function(){
    this.setData({
      choosePopState: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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