import {
    Http
} from '../util/http_1.js'
class bookSearchModel extends Http {
    getHotBookList(url={},method="GET",data={}){
        return this.request({
            url:"v1/book/hot_keyword",
            method:method,
            data:data
        })
    }
    searchBooks(data={}){
       
        return this.request({
            url:"v1/book/search",
            data:data
        })

    }
    _searchBooks(url,data){
        // start: 开始记录数，默认为0
        // count: 记录条数，默认为20,超过依然按照20条计算
        // summary: 返回完整或简介,默认为0,0为完整内容,1为简介
        // q:搜索内容,比如你想搜索python相关书籍,则输入python    
            return this.request(url,data)
    }
}
export {bookSearchModel}