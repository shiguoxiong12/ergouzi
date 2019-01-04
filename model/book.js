import {
    Http
} from '../util/http_1.js'
class bookModel extends Http {
    getBookList(){
       // return this.request(url,method,data)
       return this.request({
           url:"v1/book/hot_list"
          
       })
    }
}
export {bookModel}