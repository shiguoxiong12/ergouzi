// component/control/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      title:String,
      classic:Object,
      latest:Boolean,
      firstLast:Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {
     
     preveIcon:"./images/triangle@left.png",
     dispreveIcon:"./images/triangle.dis@left.png",
     nextIcon:"./images/triangle@right.png",
     disNextIcon:"./images/triangle.dis@right.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    next:function(event){
      if(this.properties.latest){
          return false
      }
      this.triggerEvent("next")
    },
    prev:function(event){
      if(this.properties.firstLast){
        return false
     }
      this.triggerEvent("prev")
    }
    
  }
})
