import {
    Http
} from '../util/http_1.js'
class myLoveModel extends Http{
  getfavor(){
      return this.request({
         url:"/v1/classic/favor",
         data:{
            start:1,
            count:10
         }
      })
  }
}
export {myLoveModel}