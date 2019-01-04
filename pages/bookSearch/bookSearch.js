// pages/bookSearch/bookSearch.js
import { bookSearchModel } from "../../model/booksearch";
const books=new bookSearchModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotbooks:[],
    q:"",
    pageIndex:1,
    totalPage:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    books.getHotBookList().then((res)=>{
       this.setData({
          hotbooks:res.hot
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
    console.log(this.data.pageIndex)
    console.log(this.data.totalPage)
    const q=this.data.q;
    if(this.data.pageIndex>this.data.totalPage){
       return false;
    }
    this.searchBooks(q)
    wx.pageScrollTo({
      scrollTop: this.data.pageY,
      duration: 300
    })
  },
  onPageScroll(e){
    this.setData({
       pageY:e.scrollTop
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goback:function(){
    wx.navigateBack({
        delta: 1
    })
  },
  getBooks(e){
    const q=e.detail.name
    this.searchBooks(q)
  },
  searchBooks(e){
     const page=this.data.pageIndex 
     let data={
      start:(page-1)*10,
      count:10,
      summary:1,
      q:e
     }
    books.searchBooks(data).then(res=>{
      
       this.setData({
          books:res.books,
          pageIndex:++this.data.pageIndex,
          totalPage:Math.floor(res.total/res.count),
          q:e
       })
    })
  }
})