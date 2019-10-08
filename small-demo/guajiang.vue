<template>
  <div class="box">
      <canvas id="mycan" class="mycan" width="240" height="65">这个浏览器不支持canvas</canvas>
  </div>
</template>

<script>
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Page1,
    Page2,
    Page3,
    Page4
  },

  mounted() {
    let cvs = document.getElementById('mycan');
    let ctx = cvs.getContext('2d');

    ctx.fillStyle = "#ccc";//背景颜色为#ccc
    ctx.rect(0,0,240,65);
    ctx.fill();//填充
    ctx.fillStyle="#000";//字体颜色为#000
    ctx.font ="40px Arial";//字体和字体大小
    ctx.fillText("点击刮奖",40,50);

    ctx.globalCompositeOperation = 'destination-out';//在源图像外显示目标图像。只有源图像外的目标图像部分会被显示，源图像是透明的。
    ctx.lineWidth = 20;  //设置”画笔“粗细
    ctx.lineJoin = "round";//设置线的接头为圆型
    ctx.lineCap = "round";//设置线的两端为圆型
    function move(){
        ctx.lineTo(event.changedTouches[0].clientX,event.changedTouches[0].clientY);
        ctx.stroke();
        console.log(event.changedTouches[0].clientX)
    }
    //鼠标事件
    cvs.addEventListener("touchstart",function () {
        ctx.beginPath();
        ctx.moveTo(event.changedTouches[0].clientX,event.changedTouches[0].clientY);
        cvs.addEventListener("touchmove",move)
    });
    cvs.addEventListener("touchend",function () {
        cvs.removeEventListener("touchmove",move);
    });
  },
  methods: {

  }
};
</script>

<style lang="scss">
.box {
  width:240px;
  height: 65px;
  background: red;

}
</style>
