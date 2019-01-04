// pages/myLove/index.js
import {myLoveModel} from '../../model/myLove.js'
const my=new myLoveModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      loveBooks:[],
      userInfo:{},
      defaultImage:"/imags/click.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //判断是否授权
    this.userIogin()
    // wx.getUserInfo({
    //   success:data=>{
    //     this.setData({
    //       userInfo:data.userInfo
    //     })
    //   }
    // })
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
    my.getfavor().then((res)=>{
      this.setData({
        loveBooks:res
      })
    })
   
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

  },
  getUser(e){
      this.setData({
        userInfo:e.detail.userInfo
      })
  },
  userIogin(){
    wx.getSetting({
      success:data=>{
        console.log(data)
           if(data.authSetting['scope.userInfo']){
              wx.getUserInfo({
                success:data=>{
                  console.log(data)
                  this.setData({
                    userInfo:data.userInfo
                  })
                }
              })
           }
      }
    })
  }
})