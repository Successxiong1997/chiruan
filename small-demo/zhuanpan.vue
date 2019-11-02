<template>

		<div  @click="xuanzhuan" >
			<img src="../assets/image/zhuanpan2.png" class="zhuanpan"  :class="zt" :style="ks">
		</div>

</template>
<script>
    
	export default {
		//定义数据
		data() {
			return {
				ks:'',
				zt:''
			}
		},

		//组件引入
		components: {
           
        },

		//在实例创建完成后被立即调用
		created() {
		},
		methods:{
			xuanzhuan(){
				this.zt = "gddh";
				this.ks = ""
				this.aaa();
			},

			aaa(){
				setTimeout(() => {
					this.zt = "";
					setTimeout(() => {
					let _r = 360 * 3 + 30;  
					let _s = 0.6 * (4 + 30 / 360);
					this.ks = "transform: rotate(" + _r +"deg);transition: all " + _s + "s ease-out;";
					}, 18);
				}, 3000);
			}
		},
		//添加真实dom，不一定所有的子组件也都一起被挂载才回调
		mounted() {
			//都被挂载后回调
			this.$nextTick(function () {

			})
		},

		//监听对象及对应值的变化
		watch: {}
	};
</script>

<style lang="scss" scoped>
.zhuanpan{
	width: 260px;
	height: 260px;
	border-radius: 100%;
	img{
		width: 260px;
		height: 260px;
	}
	&.gddh {
    	animation: zhuanQuan 0.4s linear infinite;
  }
}
@keyframes zhuanQuan {
    0% {transform:rotate(0deg);}
    100% {transform:rotate(360deg);}
}


</style>
