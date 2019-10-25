<template>
    <div class="container">
        <div class="main">
            <div
                v-for="(item2,i2) in jia" :key="i2"
                class="box"             
                :style="`transform:scale(${item2.s}) translate(${item2.x}px,${item2.y}px)`" 
                :ref="`tiezi_${i2}`" 
                @click.stop="iptArIdx = i2" 
                @touchstart.stop="start" 
                @touchmove.stop="move"
                @touchend.stop="end">
                
                    <img :src="item2.src" />

                
                <a href="javascript:;" class="shanchu" @click.stop="shanchu(i2)">
                    <img src="../assets/image/shanchu.png"/>
                </a>
                <a href="javascript:;" class="fangda" @touchstart.stop="fddj" @touchmove.stop="fdhd(i2)">
                    <img src="../assets/image/fangda.png"/>
                </a>
            </div>
        </div>

        <div class="menu" >
            <div v-for="(item,i) in zhuangshi" :key=i @click="tianjia(i)">
                <a href="javascript:;">
                    <img :src="item">
                </a>
            </div>      
        </div>
    </div>
</template>

<script>


    export default {
        //定义数据
        data() {
            return {
                zhuangshi:[
                    require("../assets/image/zs-mianju2.png"),
                    require("../assets/image/zs-mianju3.png"),
                    require("../assets/image/zs-nangua.png"),
                    require("../assets/image/zs-shangkou.png"),
                    require("../assets/image/zs-xue1.png"),
                    require("../assets/image/zs-xue2.png"),
                    require("../assets/image/zs-yanjing.png"),
                    require("../assets/image/zs-youling.png")
                ],
                jia:[],
                fd:{
                    x:0,
                    y:0,
                    num:{}
                },
                iptArIdx:null,
                _ksx:0,
                _ksy:0,
                _movex:0,
                _movey:0,
            }
        },
        methods:{
            tianjia(i){
                this.jia.push({
                    domW:0,
                    domH:0,
                    x:0,
                    y:0,
                    s:1,
                    src:this.zhuangshi[i]
                })
                this.iptArIdx = this.jia.length - 1;
            },
            shanchu(k){
                this.iptArIdx = null;
                this.jia.splice(k,1);
            },  
            fddj(e){
                this.fd ={
                    x: e.changedTouches[0].pageX,
                    y:e.changedTouches[0].pageY,
                    num: this.jia[this.iptArIdx],
                }
            },
            fdhd(j){
                let _point = event.changedTouches[0];
                let _y     = _point.pageY;
                let _x     = _point.pageX;
                if(this.fd.y > _y || this.fd.x > _x){
                    this.jia[j].s += .01
                }else{
                    this.jia[j].s -= .01   
                }
                this.fd.y = _y;
                this.fd.x = _x;
            },
            start(e){
                if(e.touches.length == 1){
                let _iptAr = this.jia[this.iptArIdx];
                let _dom   = this.$refs["tiezi"+"_"+this.iptArIdx][0];
                _iptAr.domW = _dom.offsetWidth / 2;
                _iptAr.domH = _dom.offsetHeight / 2;
            //    let _main = event.changedTouches[0];
            //    this._ksx=_main.pageX;
            //    this._ksy=_main.pageY;
                }
            },
            move(e){  //移动
                e.preventDefault(); 
                e.stopPropagation();
                // let _main = event.changedTouches[0];
                // this._movex = _main.pageX;
                // this. _movey =_main.pageY;
                // this.jia[0].x +=((this._movex - this._ksx) / 2) |0;
                // this.jia[0].y += ((this._movey - this._ksy) / 2) |0;
                // this._ksy = this._movey;
                // this._ksx = this._movex;
                if(e.touches.length == 1){
                    let _iptAr = this.jia[this.iptArIdx];
                    let _dom   = this.$refs["tiezi" +"_"+ this.iptArIdx][0];
                    let _point = e.changedTouches[0];
                    let _rect  = _dom.getBoundingClientRect();

                    _iptAr.x += _point.clientX - _rect.left - _iptAr.domW;
                    _iptAr.y += _point.clientY - _rect.top - _iptAr.domH;
                }
            },
            end(){

            }
        }
    }
</script>

<style lang="less">
    .container{
        position: absolute;
        top: 0;
        left: 0;
        width: 7.5rem;
        height: 100%;
        background-color: rgb(225, 255, 255);
        .main{
            position: absolute;
            width: 90%;
            height: 75%;
            transform: translate(-50%);
            top: 5%;
            left: 50%;
            .box{
                position: absolute;
                top: 10%;
                left: 10%;
                img{
                    width: 1.21rem;
                    height:1.19rem;
                }
                .shanchu{
                    position: absolute;
                    top:-.1rem;
                    left:-.1rem;
                    img{
                        width: .31rem;
                        height: .31rem;
                    }
                }
                .fangda{
                    position: absolute;
                    top:-.1rem;
                    right:-.1rem;
                    img{
                        width: .31rem;
                        height: .31rem;
                    }
                }
            }
        }
        .menu{
            position: absolute;
            bottom: 5%;
            width: 80%;
            height: 10%;
            border: 1px solid rgb(170, 161, 228);
            transform: translate(-50%);
            left: 50%;
            white-space:nowrap;
            overflow: auto;
            div{
                width: 20%;
                height: 100%;
                display: inline-block; 
                a:active{  
                    img{
                      transform:scale(0.8);    
                    }
                }  
            }
        }
    }
</style>


