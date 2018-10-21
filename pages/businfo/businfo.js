// pages/businfo/businfo.js
var app = getApp();
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
// 实例化API核心类
var MapObj = new QQMapWX({
  key: app.data.mapKey // 必填
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverUrl: app.data.serverUrl,
    choosePopState:false,
    truename:'',
    companyname:'',
    companyaddress:'',
    showMap:false,
    locationLat:'',
    locationLon:'',
    addressText:'',
    addressProvince:'',
    addressCity:'',
    imageUrl:'',
    tradeareaid:'',
    businesslicense:'',
    customermoble:'',
    fulladdress:''
  },
  //客服电话输入
  mobileInput:function(e){
    this.setData({
      customermoble:e.detail.value
    })
  },
  //详细地址输入
  fulladdressInput:function(e){
    this.setData({
      fulladdress:e.detail.value
    })
  },
  //输入客服电话
  mobileInput:function(e){
    this.setData({
      customermoble:e.detail.value,
      mobile:app.data.userMobile
    })
  },
  //下一步
  subData:function(){
    var _this = this;
    if (this.data.truename.length == 0){
      wx.showToast({
        title: '请输入真实姓名',
        icon:'none'
      });
      return false;
    }
    if (this.data.companyname.length == 0){
      wx.showToast({
        title: '请输入公司名称',
        icon: 'none'
      });
      return false;
    }
    wx.request({
      url: _this.data.serverUrl + '/app/perfectInfo',
      method: 'POST',
      data: {
        truename: _this.data.truename,
        mobile: _this.data.customermoble,
        companyname: _this.data.companyname,
        companyaddress: _this.data.locationLat + "," + _this.data.locationLon,
        fulladdress: _this.data.fulladdress,
        tradeareaid: _this.data.tradeareaid,
        businesslicense: _this.data.businesslicense,
        customermoble: _this.data.customermoble
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        // if (res.data.code == 0) {
          //完善企业信息
          wx.navigateTo({
            url: '../audit/audit?type=3',
          })
        // } else {
        //   // if(this.data.)
        //   wx.showToast({
        //     title: res.data.msg,
        //     icon: 'none'
        //   })
        // }
      }
    })
  },
  //选择图片
  chooseImage:function(){
    var _this = this;
    wx.chooseImage({
      count:1,
      sourceType: ['album', 'camera']	,
      success: function(res) {
        wx.uploadFile({
          url: _this.data.serverUrl +'/app/upload', //仅为示例，非真实的接口地址
          filePath: res.tempFilePaths[0],
          name: 'file',
          formData: {
            file: res.tempFilePaths[0]
          },
          success(res) {
            var result = JSON.parse(res.data);
            _this.setData({
              businesslicense: result.path
            })
            //do something
          }
        })



        _this.setData({
          imageUrl: res.tempFilePaths[0]
        })

      },
      fail:function(e){

      },
      complete:function(e){

      }
    })
  },
  //选择公司所在地
  chooseMap:function(){
    var _this = this;
    this.setData({
      showMap:true
    });
    wx.getLocation({
      success: function(res) {
        _this.setData({
          locationLat: res.latitude,
          locationLon: res.longitude
        })
      }
    });

    var MapContext = wx.createMapContext('map', this)
    MapContext.moveToLocation();
  },
  //确定选择公司地址
  addressConfirm:function(){
    var _this = this;
    var MapContext = wx.createMapContext('map', this)
    MapContext.getCenterLocation({
      success: function (res){
        _this.setData({
          locationLat: res.latitude,
          locationLon: res.longitude
        })
      }
    });
    MapObj.reverseGeocoder({
      location: {
        latitude: _this.data.locationLat,
        longitude: _this.data.locationLon
      },
      success: function (res) {
        
      },
      fail: function (res) {

      },
      complete: function (res) {
        console.log(2)
        console.log(res)
        _this.setData({
          addressText: res.result.address,
          addressProvince: res.result.address_component.province,
          addressCity: res.result.address_component.city,
        })
      }
    });

    this.setData({
      showMap: false
    })
  },
  //输入姓名
  truenameInput:function(e){
    this.setData({
      truename:e.detail.value
    })
  },
  //输入公司名称
  companynameInput: function (e) {
    this.setData({
      companyname: e.detail.value
    })
  },
  //选择公司地址
  chooseComAddress:function(){

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