// pages/classic/classic.js

var appInstance = getApp()
import {load} from '../../util/http.js'
import {classisc} from '../../model/classiscModel.js'
const classiscModel=new classisc()
let type12={
  100:"电影。",
  200:"音乐。",
  300:"句子。"
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
      classic:{},
      time:{},
      play:"stop",
      latest:true,
      firstLast:false,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    classiscModel.getlatest("v1/classic/latest",(res)=>{
      let index=res.data.index;
      classiscModel.setStoragelatest("latest",index)
      that.setData({
         classic:res.data,
        
         
      })
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
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },


   
    // next:function(){
    //   let that=this;
    //   let index=this.data.classic.index;
    //   classiscModel.getlatest("v1/classic/"+index+"/next",(res)=>{
    //       let currrentIndex=res.data.index;
    //       that.setData({
    //           classic:res.data,
    //           latest: classiscModel.getStoragelatest("latest")==currrentIndex ? true : false,
    //           firstLast:1==currrentIndex ? true : false,
    //       })
        
    //   })
    // },
   
  getPrevClassisc:function(){
    let that=this;
   // let index=this.data.classic.index;
    console.log("左边")
    this._action("previous")
  },
  getNextClassisc:function(){
     let that=this;
     let index=this.data.classic.index;
     this._action("next")
 },
  _action:function(type){
    let that=this;
    let index=this.data.classic.index;
     classiscModel.getClassisc(index,type,(res)=>{
         let currrentIndex=res.data.index;
         console.log(res)
         that.setData({
             classic:res.data,
             latest: classiscModel.getStoragelatest("latest")==currrentIndex ? true : false,
             firstLast:1==currrentIndex ? true : false,
         })
   })
 },
  // prev:function(){
  //   let that=this;
  //   let index=this.data.classic.index;
  //     classiscModel.getlatest("v1/classic/"+index+"/previous",(res)=>{
  //        let currrentIndex=res.data.index;
  //        that.setData({
  //             classic:res.data,
  //             latest: classiscModel.getStoragelatest("latest")==currrentIndex ? true : false,
  //             firstLast:1==currrentIndex ? true : false,
  //        })
  //     })
  
  // },
  toggleLove:function(){
    let that=this;
    let action=this.data.classic.like_status==1 ? "v1/like/cancel" : "v1/like"
    let actionType=this.data.classic.like_status==1 ? 0 : 1
    classiscModel.giveLike(action,{
          "art_id":this.data.classic.id,
          "type":this.data.classic.type
     },(res)=>{
       that.setData({
          classic:Object.assign({},this.data.classic,{like_status:actionType})
       })
   })
 },
  start:function(){
    this.setData({
      play:"bo"
    })
    var animation =wx.createAnimation({
      duration: 4000,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "50% 50%",
    
    })
    var n=1;
    this.setData({
      time:setInterval(function(){
        animation.rotate(360*n).step()
        this.setData({
          animationData:animation.export()
        })
        n++
        console.log(n)
      }.bind(this),2000)
    })
  
    
    
  

  }, 
  stop:function(){
   
    this.setData({
      time:{},
      animationData:{}
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
  
  }
})