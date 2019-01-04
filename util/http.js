import config from '../congig.js'
class Http{
  constructor(){
    this.baseUrl=config.baseUrl;
  }
  request(parmes){
      let url=this.baseUrl+parmes.url
      console.log(parmes)
      wx.request({
          url:url,
          method:parmes.methods || 'get',
          data:parmes.data || {},
          header: {
            'content-type': 'application/json',
            'appkey':config.appkey
          },
         success:function(data){
           parmes.success(data)
        },
        fail:function(error){
           params.fail && params.fail(err)
      }
    })
  }
  
}
export {Http}



  

// /***获取classisc 数据***/
//   export const load=function(url,callback){
//     wx.request({
//         url:url,
//         header:{
//           appkey:'mA6M85Wrs4kkM4fo'
//         },
//         success:function(data){
//              callback(data)
//         },
//         fail:function(error){
            
//         }
//       })
      
//   }
//   /***点赞***/
//   export const features=function(url,parmes,callback){
//     wx.request({
//         url:url,
//         header:{
//           appkey:'mA6M85Wrs4kkM4fo'
//         },
//         method:'post',
//         data:{
//           "art_id":parmes.id,
//           "type":parmes.type
//         },
//         success:function(data){
//              callback(data)
//         },
//         fail:function(error){
            
//         }
//       })
      
//   }