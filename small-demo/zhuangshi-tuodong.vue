<template>
    <div id="home">
        <!-- 图片预加载,需要改成ws链接,具体问涛哥 -->
        <div id="load">
            <!-- <img src="https://img.chiruan.net/vueCode/lianzhong/zydspzm1/static/img/bg.jpg" hidden/> -->
        </div>
            <div v-for="(item ,i ) in zhuangshi" :key="i" class="aaa" @click="tianjia(i)">
                <img :src="item">
            </div>
<!-- :style="`transform:translate(${item2.x}px,${item2.y}px);`" -->
            <div v-for="(item2, i2) in wutai" :key="i2"
                :ref="`tiezi_${i2}`"
                class="movezj" 
                :style="`transform:translate(${item2.x}px,${item2.y}px) ;`"
                @click.stop="iptArIdx = i2" 
                @touchstart.stop="czClick" 
                @touchmove.stop="czYidong">

                <img :src="item2.src"/>
            </div>
            
        <!-- 图片剪切 -->
        <!-- <JianQie ref="clipper" v-show="visible" :img="imgUrl" :clipper-img-width="jqW" :clipper-img-height="jqH" @ok="ok" @cancel="visible = false"/> -->
    </div>
</template>

<script>
    //图片截取
    // import JianQie from "./JianQie";

    export default {
        //定义数据
        data() {
            return {
                //图片截取
                // jqW: 0,
                // jqH: 0,
                // visible: false,
                // imgUrl: "",
                //按钮音效
                // ts:''   
                //阻止重复点击变量
                // load: 0,
                zhuangshi:[
                    require("../assets/image/zs-yanjing.png"),
                    require("../assets/image/zs-youling.png"),
                    ],
                wutai: [],
                iptArIdx: null,
                }
            },
        

        //组件
        components: {
            //图片截取
            // JianQie
        },


        //自定义方法
        methods: {
            // btnaudio:function() {
            //     let _audio = new Audio();
            //     _audio.onloadedmetadata = ()=>{  //音频的元数据已加载
            //         this.ts = _audio;
            //     };
            //     _audio.src = 'http://ysb.yisell.com/yisell/ybys2018050819052088/sound/yisell_sound_2014041023020267849_88366.mp3'
            // },

            tianjia(i){
                this.wutai.push({
                    domW: 0,
                    domH: 0,
                    x   : 0,
                    y   : 0,
                    src : this.zhuangshi[i]
                })
                this.iptArIdx = this.wutai.length - 1;
                
            },

            czClick(e){
                if(e.touches.length == 1){
                    let _iptAr = this.wutai[this.iptArIdx];
                    let _dom   = this.$refs["tiezi_"+this.iptArIdx][0];
                    _iptAr.domW = _dom.offsetWidth / 2;
                    _iptAr.domH = _dom.offsetHeight / 2;
                }
            },
            czYidong(e){
                e.preventDefault(); 
                e.stopPropagation();

                this.changdu = 100000;

                if(e.touches.length == 1){
                    let _iptAr = this.wutai[this.iptArIdx];
                    let _dom   = this.$refs["tiezi_"+this.iptArIdx][0];
                    let _point = e.changedTouches[0];
                    let _rect  = _dom.getBoundingClientRect();
                    
                    _iptAr.x += _point.clientX - _rect.left - _iptAr.domW;
                    _iptAr.y += _point.clientY - _rect.top - _iptAr.domH;
                }
                
            },
            // ok(data) {
            //   setTimeout(() => {
            //     this.visible = 0;
            //   }, 300);
            // },

            // jisuan() {
            //   setTimeout(() => {
            //     this.jqW = this.jqH = Math.ceil(document.documentElement.clientWidth * (window.devicePixelRatio / 1.4));
            //     this.$refs.clipper._initClipper();
            //   }, 160);
            // }
          },
        //在实例创建完成后被立即调用
        created() {
            //图片剪切框大小调整
              // this.jisuan();
            //  this.btnaudio();
        },
        mounted(){
            
            


            
              // let resizeEvt = "orientationchange" in window ? "orientationchange" : "resize";
              // if (!document.addEventListener) return;
              // window.addEventListener(resizeEvt, this.jisuan, false);
              // document.addEventListener("DOMContentLoaded", this.jisuan, false);
        },
        destroyed() {
              // let resizeEvt ="orientationchange" in window ? "orientationchange" : "resize";
              // if (!document.addEventListener) return;
              // window.removeEventListener(resizeEvt, this.jisuan, false);
              // document.removeEventListener("DOMContentLoaded", this.jisuan, false);
        }
  }
  
</script>

<style lang="less">
    #load{
        position: absolute;
        top: -999px;  
    }
    .aaa{
        width: 100px;
        height: auto;
        
    }
    .movezj{
        margin: 0 auto;
        width: 50px;
        height: 50px;
    }
    
    
</style>


