<template>
  <div class="singer">

  </div>
</template>

<script type="text/ecmascript-6">
import {getSingerList} from 'api/singer';
import {ERR_OK} from 'api/config';
import Singer from 'common/js/singer.js'

const HOT_NAME = '热门数据';
const HOT_SINGER_LEN = 10;

export default {
  data() {
    return {
      singer: [],
    }
  },
  created() {
    this._getSingerList();
  },
  methods: {
    // 获取不到数据 接口变了
    _getSingerList() {
      this.singers = [];
      // getSingerList().then((res)=>{
      //   if(res.code === ERR_OK){
      //     this.singers = res.data.list;
      //   }
      // })
    },
    _normalizeSinger(list) {
      let map = {
        hot: {
          title:HOT_NAME,
          items: [],
        }
      }
      list.forEach((item,index)=>{
        if(index < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        }
        const key = item.Findex;
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
          id: item.Fsinger_mid,
          name: item.Fsinger_name
        }))
      })
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>