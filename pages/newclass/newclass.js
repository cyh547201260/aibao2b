// pages/newclass/newclass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    specialList: [""],
    imagesList: [""],
    showEditName: false,

    coursename:'',
    popType:'0',
    courseprice:'',
    chooseValObj:{
      1:{
        data:['幼儿', '学龄前', '青少年', '成人'],
        name:'适合人群'
      },
      2: {
        data: ['不限', '初学者', '中级', '高级'],
        name: '适合基础'
      },
      3: {
        data: ['1-5人', '5-7人', '7-10人', '10人以上'],
        name: '上课人数'
      }
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  //弹出框显示
  popUpShow:function(e){
    var type = e.currentTarget.dataset.type;

    this.setData({
      showEditName:true,
      popType:type
    })
  },

  //弹出框隐藏
  popUpHid:function(){
    this.setData({
      showEditName: false
    })
  },

  //增加办学特色输入框
  addSepcialInput: function (e) {
    var curIdx = e.currentTarget.dataset.id;
    var arr = this.data.specialList;
    arr.splice(curIdx + 1, 0, '');
    console.log(arr)
    this.setData({
      specialList: arr
    });
  },
  //删除办学特色输入框
  delSepcialInput: function (e) {
    var curIdx = e.currentTarget.dataset.id;
    var arr = this.data.specialList;
    arr.splice(curIdx, 1);
    this.setData({
      specialList: arr
    });
    console.log(arr)
  },
  //办学特色输入绑定
  specialInput: function (e) {
    var text = e.detail.value;
    if (text.length == 20) {
      wx.showToast({
        title: '仅可输入20字',
        icon: 'none'
      })
    } else {
      var curIndex = e.currentTarget.dataset.id;
      var arr = this.data.specialList;
      arr[curIndex] = text;
      this.setData({
        specialList: arr
      });
    }
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