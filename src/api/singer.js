import jsonp from 'common/js/jsonp';
import { commonParams, options } from './config';

export function getSingerList(){
  // const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';
  const url = "https://u.y.qq.com/cgi-bin/musicu.fcg";
  
  const data = Object.assign({},commonParams,{
    channel: 'single',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platfrom: 'yqq',
    g_tk: 1664029744,
  })

  return jsonp(url,data,options);
}