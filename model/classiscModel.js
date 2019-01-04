import {Http} from '../util/http.js'
class classisc extends Http {
    getlatest(url,callback){
        this.request({
            url:url,
            success:(res)=>{
                callback(res)
            },
            fail:()=>{

            }
        })
    }
    /*****引入缓存机制****/
    getClassisc(index,type,callback){
       
        let currentIndex=index;

        if(type=="next"){
            currentIndex=currentIndex+1
        }else{
            currentIndex=currentIndex-1
        }
        let actions= type=="next" ? wx.getStorageSync(this._getKey(currentIndex)) : wx.getStorageSync(this._getKey(currentIndex))
        if(!actions){
            this.request({
                url:"v1/classic/"+index+"/"+type,
                success:(res)=>{
                   
                    wx.setStorageSync(this._getKey(currentIndex),res)
                    callback(res)
                },
                fail:()=>{
    
                }
            })
        }else{
            callback(actions)
        }
        
    }
    setStoragelatest(name,index){
        wx.setStorageSync(name,index)
    }
    getStoragelatest(name){
        let index;
        index=wx.getStorageSync(name);
        return index;
    }
    //点赞
    giveLike(url,parames,callback){
        this.request({
            url:url,
            methods:"post",
            data:parames,
            success:(res)=>{
                callback(res)
            },
            fail:()=>{

            }
        })
    }
    _getKey(index){
        return "_classisc"+index;
    }
  
}
export {classisc}