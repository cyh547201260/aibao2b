// pages/login/login.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverUrl : app.data.serverUrl,
    mobile:'',
    codeTime:0,
    vercode:'',
  },
  //登录提交
  subLogin:function(){
    var _this = this;
    if(this.data.mobile.length == 0){
      wx.showToast({
        title: '请输入手机号',
        icon:'none'
      })
      return false;
    }
    if(this.data.vercode.length == 0){
      wx.showToast({
        title: '请输入验证码',
        icon: 'none'
      })
      return false;
    }
    wx.request({
      url: _this.data.serverUrl + '/app/login',
      method: 'POST',
      data: {
        mobile: _this.data.mobile,
        code: _this.data.vercode
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.msg == 'success') {
          app.data.token = res.data.token;
          app.globalData.token = res.data.token;
          wx.setStorage({
            key: 'token',
            data: res.data.token,
          })
          wx.redirectTo({
            url: '../busback/busback',
          })
          
        } else if (res.data.msg == '验证码错误'){
          wx.showToast({
            title: '验证码错误',
          })
          return false;
        } else if (res.data.msg == '待完善企业信息'){
          //完善企业信息
          wx.redirectTo({
            url: '../businfo/businfo',
          })
        } else if (res.data.msg == '审核中'){
          wx.redirectTo({
            url: '../audit/audit?type=3',
          })
        } else if (res.data.msg == '审核失败') {
          wx.redirectTo({
            url: '../audit/audit?type=4',
          })
        }else {
          // if(this.data.)
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      }
    })
  },
  //验证码输入
  vercodeInput:function(e){
    this.setData({
      vercode: e.detail.value
    })
  },
  //手机号输入
  mobileInput:function(e){
    this.setData({
      mobile : e.detail.value
    })
  },
  //获取验证码
  getVercode:function(){
    var _this = this;
    if (this.data.codeTime != 0){
      return false;
    }
    if(this.data.mobile.lenth == 0){
      wx.showToast({
        title: '请输入手机号',
        icon: 'none'
      })
      return false;
    }
    if (!(/^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/.test(this.data.mobile))){
      wx.showToast({
        title: '请输入正确的手机号',
        icon:'none'
      })
    }else{
      wx.request({
        url: _this.data.serverUrl + '/app/getcode' ,
        method: 'POST',
        data: {
          mobile: _this.data.mobile
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          if(res.data.code == 0){
            _this.setData({
              codeTime:60
            })
            var timeStep = setInterval(function(){
              var time = _this.data.codeTime;
              time--;
              if (_this.data.codeTime == 0){
                clearInterval(timeStep);
              }else{
                _this.setData({
                  codeTime:time
                })
              }
            },1000)
          }else{
            wx.showToast({
              title: res.data.msg,
              icon:'none'
            })
          }
        }
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.serverUrl)
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