<template>
  <div class="box" ref="bigbox">
     <canvas id="mycanvas"></canvas>
  </div>
</template>

<script>



export default {
  name: "home",
  data() {
    return {
        gaodu:0,
    };
  },
  components: {
      
  },

  mounted() {

    this.gaodu = this.$refs.bigbox.clientHeight;
      
    
      var mycanvas = document.getElementById('mycanvas');
      var ctx = mycanvas.getContext('2d')
      var w = 100;
      var h = 100;
      var suijiy=200;
      var suijiz = 200;
      var ar = [];
      mycanvas.width=document.documentElement.clientWidth;
      mycanvas.height=document.documentElement.clientHeight;
     
      function draw(zbz,zby,w,h,i){

        setTimeout(()=>{
          ar.push({
            x:zbz,
            y:zby, 
            w:w, 
            h:h,
            s: (Math.random()*9+1)|0
          })
        },i*1000)

      }

      

      function fullWindow(){
          for(var i=0;i<1;i++){
              draw(suijiz*Math.random(),0,w*Math.random(),h*Math.random(),i);
          }
      }


      function sc(){


         setInterval(function(){
           
            ctx.clearRect(0,0,mycanvas.width,mycanvas.height);
            
            for(var i = 0,len = ar.length; i < len; i++){
                ar[i].y += ar[i].s;
                
                ctx.fillRect(ar[i].x,ar[i].y, ar[i].w, ar[i].h);

                if(ar[i].y> this.gaodu){
                  //splice(i,n) 【1，3，5，6，7】
                  ar.splice(i ,1);
                  --i;
                  --len;
                }
            }
          }, 50);
      }


      function reDraw(){

        setInterval(()=>{
          fullWindow();
        },1000);

        sc();

      }

      reDraw();
  },
  methods: {
    
  }
};
</script>

<style lang="scss">
    .box{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>