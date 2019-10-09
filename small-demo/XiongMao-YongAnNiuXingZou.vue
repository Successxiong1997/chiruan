<template>
  <div class="box" ref="home">
    <div class="lu" ref="lu"></div>

    <div class="ren" :class="ren">
      <img src="../assets/image/ren1.png" />
    </div>

    <div class="btn">
      <!--    <button >左移动</button>       不写，同理右移动  -->
      <button @touchstart="gotouchstart" @touchmove="gotouchmove" @touchend="gotouchend">移动</button>
    </div>



    <p v-show="isshow">恭喜走完全程</p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      timeOutEvent:0,
      yidong:0,
      ren: "ren1",
      renLoad:1,
      bianju:0,
      isshow:0,
    };
  },
  components: {

  },

  mounted() {

    this.bianju =- (this.$refs.lu.offsetWidth - this.$refs.home.offsetWidth)

    console.log(this.bianju)
  },
  methods: {
    gotouchstart() {
      let that = this;
      clearTimeout(that.timeOutEvent);
      that.timeOutEvent = 0;
      if(that.renLoad){
        that.renLoad = 0

        that.xiongmaomove(2,3);
        that.timeOutEvent = setInterval(()=>{
          that.yidong -= 5;

          that.$refs.lu.style.transform ="translateX(" + that.yidong + "px)"; 

          that.bianju < that.yidong ? that.yidong = that.yidong : that.yidong = that.bianju + 5;

          if(that.yidong == that.bianju + 5){
            that.isshow = true;
          }
        }, 20);
      }

    },



    gotouchend() {
      this.renLoad = 1;
      this.ren = "ren1";
      clearTimeout(this.timeOutEvent);
      if (this.timeOutEvent != 0) {
        console.log('结束长按')
      }
    },



    gotouchmove() {
      clearTimeout(this.timeOutEvent); 
      this.timeOutEvent = 0;
    },

    xiongmaomove(i,type){
      if(this.renLoad) return;
      this.ren = "ren" + i;
  
      setTimeout(() => {
        if(i==2 || i==3){
          this.xiongmaomove(1,type);
        }else if(i==1 && type==3){
          this.xiongmaomove(3,2)
        }else if(i == 1 && type == 2){
          this.xiongmaomove(2,3)
        }
      }, 260);

    }

  }
};
</script>

<style lang="scss">
.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .lu {
    position: absolute;
    bottom: 0;
    left: 0;
    background: url("../assets/image/lu.png") left top;
    background-size: auto 100%;
    width: 6000px;
    height: 200px;
  }

  .ren{
    position: fixed;
    left: 20px;
    bottom: 0;
    background-size: auto 100% !important;
    img {
      width: 100px;
      height: 200px;
      visibility: hidden;
    }
  }

        .ren1{
            background: url("../assets/image/ren1.png") no-repeat center;
        }
        .ren2{
            background: url("../assets/image/ren2.png") no-repeat center;
        }
        .ren3{
            background: url("../assets/image/ren3.png") no-repeat center;
        }


  .btn {
    button {
      &:nth-child(1) {
        position: fixed;
      }

      &:nth-child(2) {
        position: fixed;
        left: 60px;
      }
    }
  }

  p{
    font-size: 50px;
  }
}
</style>
