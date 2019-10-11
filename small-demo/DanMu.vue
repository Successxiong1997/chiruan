<template>
  <!--<div class="hello">
			<ul v-for="(item,index) in mindata" :key="index" :style="`animation: danmu 60s 2s;top:0px;`">
					<li>
							<div class="min"><div class="yuan"><h5>{{item.touxiang}}</h5></div><div class="span">{{item.t}}</div></div>
					</li>f
			</ul>
  </div>-->
  <div>
      <div class="hello" ref="hello" id="hello">

      <input type="text" v-model="message">

      <button @click="fasong">发送弹幕</button>
      </div>
      
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
       maxdatalength:0,
       mydata:0,
       fubox:this.$refs.hello,
       move:0,
       message:'',
       returnData:[],
       clkBool:0
    }
  },
  created() {

    this.$ajax.all([this.$ajax.get('https://www.chiruan.net/hainaborui/tfqg/data')
                    ,
                    this.$ajax.get('https://www.chiruan.net/hainaborui/tfqg/getBarrage')
                    ,
                    this.$ajax.get('https://www.chiruan.net/hainaborui/tfqg/getBarrage')
    ]).then((this.$ajax.spread((data,getbarrage,res)=>{
      console.log('one',data);

      console.log('two',getbarrage);

      console.log('redata' , res);

      if(res.data.code){
        let _this = this;
        _this.returnData = res.data.data;

        console.log(_this.returnData)
      }

    })));

  }
  ,
  methods:{

    fasong(){
      this.shuiji(this.message);
      this.clkBool=1;
      if(this.clkBool) console.log('点击了')

      //AJAX
      this.$ajax.post('https://www.chiruan.net/hainaborui/tfqg/putBarrage',{

        content:this.message

        }).then((res)=>{
          
          console.log(res);
      }).catch((err)=>{

        console.log(err);
      })
    },





  	shuiji(wenzi){
  			var maxBox = document.createElement('div');
  			var minBox = document.createElement('div');
  			
  			minBox.className = 'span';
  			maxBox.className = 'min';
        minBox.innerHTML= wenzi;
        
        var _h = this.$refs.hello.offsetHeight / 10
        maxBox.style.top = (Math.random()*10|0)*_h + 'px'
        // console.log((Math.random()*10|0)*_h)
  			maxBox.appendChild(minBox);
  			document.getElementById('hello').appendChild(maxBox);
  			
  			this.cssmaxBox(maxBox);
  	  	var timeer = setInterval(()=>{

          var start = maxBox.offsetLeft;
          
          start -= 2;
          
          maxBox.style.left = start + 'px'
          //console.log(maxBox.offsetLeft,-(this.move));

          if(-(this.move) > maxBox.offsetLeft + maxBox.offsetWidth){
            clearInterval(timeer);

            maxBox.remove();
          }
  			},16)
		}
  	,
  	cssmaxBox(maxBox){
  		 
  	  }
  }
  ,
  mounted() {
    setInterval(() => {
      if(!this.clkBool){
        console.log('还没有人提交弹幕');
        for(var i=0;i<this.returnData.length;i++){
          this.shuiji(this.returnData[i].nickname)
        }
      }else{
        console.log('在5s内已经有人提交了弹幕');
        this.clkBool = 0;
      }
    }, 5000); 


    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
		*{
			padding: 0;
			margin: 0;
		}


		.hello{
			position: absolute;
			width: 100%;
			height: 100%;
			background-size: 100% auto;
			overflow-x: hidden;
      /* background: yellow; */
		}
		.min{
			width: auto;
			height: 30px;
			position: absolute;
			left: 100%;
		}
		.span{
			height: 25px;
			line-height: 25px;
			white-space:nowrap;
			border-radius:20px;
			text-align: center;
			color: #fff;
			background-color:rgba(0,0,0,0.2) ;
			float: left;
			font-size:8px;
			padding-left: 40px;
			padding-right: 10px;
			margin-top: 3px;
		}
	.span::before{
		  content: "";
			width:30px;
			height: 30px;
			border-radius:50%;
			position: absolute;
			top: 0px;
			left: 0px;
			background-color: #fff;
		}
		

</style>
