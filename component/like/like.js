// component/like/like.js
import {features} from '../../util/http.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     love:Number,
     isLike:Number,
     idN:Number,
     type:Number
  },
  
  /**
   * 组件的初始数据
   */
  data: {
       likeSrc:"images/likeicon@2x.png",
       unlikeSrc:"images/unlikeicon@2x.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleLive:function(){
      this.triggerEvent("toggleLove")
        // let like=this.properties.isLike;
        // let count=this.properties.love;
        // let action=like==0 ? "like" : "like/cancel"
        // console.log(this.properties)
        // features("http://bl.7yue.pro/v1/"+action,{
        //    id:this.properties.idN,
        //    type:this.properties.type
        // },function(){
          
        // })
        // this.setData({
        //    isLike:like==0 ? 1 : 0,
        //    love:like==0 ? this.properties.love+1: this.properties.love-1,
        // })
    }
  }
})
