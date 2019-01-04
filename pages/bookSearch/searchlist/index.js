// pages/bookSearch/searchlist/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     hotbooks:Array
  },
  attached(){
    console.log(this.properties.hotbooks)
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    searchList(event){
      let name=event.currentTarget.dataset.name;
      this.triggerEvent("searchOne",{name:name})
    }
  }
})
