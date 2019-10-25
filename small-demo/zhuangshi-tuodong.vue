<template>
    <div id="home">

            <div v-for="(item ,i ) in zhuangshi" :key="i" class="aaa" @click="tianjia(i)">
                <img :src="item">
            </div>

            <div v-for="(item2, i2) in wutai" :key="i2"
                :ref="`tiezi_${i2}`"
                class="movezj" 
                :style="`transform:translate(${item2.x}px,${item2.y}px) ;`"
                
                @touchstart.stop="czClick(i2)" 
                @touchmove.stop="czYidong(i2)">


                <img :src="item2.src"/>


            </div>
        
    </div>
</template>

<script>


    export default {
        //定义数据
        data() {
            return {

                zhuangshi:[
                    require("../assets/image/zs-yanjing.png"),
                    require("../assets/image/zs-youling.png"),
                    ],
                wutai: [],
                
                }
            },
        


        components: {

        },


        //自定义方法
        methods: {

            tianjia(i){
                this.wutai.push({
                    domW: 0,
                    domH: 0,
                    x   : 0,
                    y   : 0,
                    src : this.zhuangshi[i]
                })
                
                
            },

            czClick(index){
                if(event.touches.length == 1){
                    let _iptAr = this.wutai[index];  //选中第几个元素
                    let _dom   = this.$refs["tiezi_"+index][0];// 控制第几个dom
                    _iptAr.domW = _dom.offsetWidth / 2;   //获取元素宽
                    _iptAr.domH = _dom.offsetHeight / 2;       //获取元素高
                }
            },
            czYidong(index){
                event.preventDefault(); 
                event.stopPropagation();


                if(event.touches.length == 1){
                    let _iptAr = this.wutai[index];   //移动时的第几个元素
                    let _dom   = this.$refs["tiezi_"+index][0];  //移动时控制第几个dom
                    let _point = event.changedTouches[0];
                    let _rect  = _dom.getBoundingClientRect();  //返回元素的边距
                    
                    _iptAr.x += _point.clientX - _rect.left - _iptAr.domW;  
                    _iptAr.y += _point.clientY - _rect.top - _iptAr.domH;
                }
                
            },

          },
        //在实例创建完成后被立即调用
        created() {

        },
        mounted(){

        },
        destroyed() {

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


