import config from '../congig.js'
class Http{
    request({url,method="GET",data={}}){
        return new Promise((resolve,reject)=>{
           this._request({
                url:url,
                resolve:resolve,
                reject:reject,
                method:method,
                data:data
           })
        })
    }
    
    _request({url,resolve,reject,method="GET",data={}}){
            wx.request({
                url:config.baseUrl+url,
                data:data,
                method:method,
                header: {
                    'content-type': 'application/json',
                    'appkey':config.appkey
                },
                success:res=>resolve(res.data),
                fail:(error)=>{

                    reject()
                }
            })
       
    }


}
export {Http}