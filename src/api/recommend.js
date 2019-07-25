// var url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'

export function getRecommend(){
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
    let data = Object.assign({},commonParams,options);
    return jsonp(url,data,options);
}
