// component/music/index.js

var appInstance = getApp()
const mg=wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageUrl:String,
    text:String,
    classisc:Object
  },
  
  /**
   * 组件的初始数据
   */
  data: {
      play:false,
      playImage:"./image/bo.png",
      pause:false,
      stopImage:"./image/stop.png"
  },
  detached(){
    //mg.stop()
  },
  attached(){
    console.log(mg)
    if(mg.src==this.properties.classisc.url&&!mg.paused){
       this.setData({
          play:true 
       })
    }
  },
  ready:function(){
    
    mg.onPause(()=>{
      console.log(this)
      this.setData({
        play:false
      })
    })
    mg.onPlay(()=>{
      this.setData({
        play:true
      })
    })
   
   
  },
  /**
   * 组件的方法列表
   */
  methods: {
    togger(){
       
          this.setData({
               play:!this.data.play
          })
         // console.log( this.data.play)
          if(this.data.play&&!this.data.pause){ 

            //appInstance.globalData.audioCtx.src= this.properties.classisc.url;
            //appInstance.globalData.audioCtx.play();
            mg.title=this.properties.classisc.title;
            mg.src=this.properties.classisc.url;

          }else if(this.data.play&&this.data.pause){
            mg.play()
          }
          else{
            this.setData({
               pause:true
            })
            mg.pause()
          }
     
     }
  }
})
