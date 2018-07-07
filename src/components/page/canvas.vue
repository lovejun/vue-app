<template>
  <!-- 背景 -->
  <div class="month">
    <canvas id="canvas"></canvas>
  </div>
</template>
<style scoped>
.canvas{
  width: 5.333333rem;
  height: 2.666667rem;
  border: 0.026667rem solid #d3d3d3;
}
</style>
<script>
export default {
  data(){
    return {
    
    }
  },
  //初始化
  mounted(){
    let self = this;
    let c = document.getElementById("canvas"); //得到canvas
    let ctx = c.getContext("2d");  //拿到画笔
    ctx.fillStyle = "#33c179";
    ctx.fillRect(20,60,100,60);
  },
  methods:{
  
  }
}
</script>
