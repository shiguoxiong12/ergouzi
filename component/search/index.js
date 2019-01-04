// component/search/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      searchCanel:Boolean
  },
  attached(){
    console.log(this.properties.searchCanel)
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
    canceLSearch(event){
      console.log('noSearch')
       this.triggerEvent('noSearch')
    }
  }
})
