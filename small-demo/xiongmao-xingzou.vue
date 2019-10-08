<template>
  <div id="home" @touchmove="move" @touchend="end">
    <Page1 />

    <!-- 熊猫 -->
    <div class="ren" :class="ren">
      <img src="../assets/image/ren1.png" />
    </div>
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
    return {
      ren: "ren1",
      renLoad: 1
    };
  },
  components: {
    Page1,
    Page2,
    Page3,
    Page4
  },
  methods: {
    move(event) {
      if (this.renLoad) {
        this.renLoad = 0;
        this.xiongmaomove(2,3);
      }
    },

    end() {
      this.renLoad = 1;
      this.ren = "ren1";
    },
    xiongmaomove(i,type) {
      if (this.renLoad) return;
      this.ren = "ren" + i;

      setTimeout(() => {
        if (i == 1 && type == 2) {
          this.xiongmaomove(2,3);
        } else if (i == 1 && type == 3) {
          this.xiongmaomove(3, 2);
        } else if (i == 2 || i == 3) {
          this.xiongmaomove(1, type);
        }
      }, 240);
    }
  }
};
</script>

<style lang="scss">
#home {
  position: absolute;
  top: 0;
  left: 0;
  width: 5000px;
  height: 365px;
  // overflow: auto;
}
.ren {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50%;
  z-index: 3;
  background-size: auto 100% !important;
  img {
    visibility: hidden;
  }
}
.ren1 {
  background: url("../assets/image/ren1.png") no-repeat center;
}
.ren2 {
  background: url("../assets/image/ren2.png") no-repeat center;
}
.ren3 {
  background: url("../assets/image/ren3.png") no-repeat center;
}
</style>