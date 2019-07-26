import originJSONP from 'jsonp'

export default function(url,data,options){

    url += (url.indexOf('?') < 0 ? '?' : '&') + para(data);
    return new Promise((reslove,reject)=>{
        originJSONP(url,options,(err,data)=>{
            if(!err){
                reslove(data);
            }else{
                reject(err);
            }
        })
    })
}

function para(data){
    let url = '';
    for(var key in data){
        let value = data[key] !== undefined ? data[key] : '';
        url += `&${key}=${encodeURIComponent(value)}`;
    }
    return url ? url.substring(1) : "";
}