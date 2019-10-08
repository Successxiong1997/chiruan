<template>
  <div id="home" @touchstart='start' @touchmove='move' @touchend='end' ref="home"></div>
</template>

<script>
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
export default {
  name: "home",
  data() {
    return {
        load:0, //手指触摸状态
        kaishiWeizhiY:0,    //手指触摸那一刻的Y轴坐标位置

        chumoWeizhiY:0,  //手指开始滑动Y轴的坐标位置

        yidongjuli:0  //移动了的距离
    };
  },
  components: {
    Page1,
    Page2,
    Page3,
    Page4
  },

  mounted(){
    document.body.scrollTop = document.documentElement.scrollTop = 0; //回到顶部
    console.log(this.$refs.home.offsetHeight);
  },
  methods: {
        //  开始
      start(event){
          this.load = 1;
          this.kaishiWeizhi = event.changedTouches[0].clientY ;
      },




      move(event){
            this.chumoWeizhiY = event.changedTouches[0].clientY;
            this.yidongjuli += this.chumoWeizhiY - this.kaishiWeizhi;
            this.kaishiWeizhi = this.chumoWeizhiY;
            console.log(this.yidongjuli);
            if(-(this.yidongjuli) >= 1000) console.log(1);
            if(-(this.yidongjuli) >= 3000) console.log(2);
            if(-(this.yidongjuli) >= 5000) console.log(3);
      },



      end(event){
          this.load=0;
      }
  }
};
</script>

<style lang="scss">
    #home{
        width: 100%;
        height: 6000px;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>