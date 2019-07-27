<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
export default {
  props: {
    probeType:{
      type:Number,
      default:1
    },
    click: {
      type:Boolean,
      default: true,
    },
    data: {
      type: Array,
      default: null,
    }
  },
  mounted() {

  },
  methods: {
    _initScroll() {
      if(!this.$refs.wrapper) {
        return;
      }
      this.scroll = new Bscroll(this.$refs.wrapper,{
        probeType: this.probeType,
        click: this.click
      })
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    disbale() {
      this.scroll && this.scroll.disbale();
    },
    refresh() {
      this.scroll && this.scroll.resfesh();
    }
  },
  watch:{
    data(){
       setTimeout(()=>{
         this.resfesh();
       },20)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>