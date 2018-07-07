<template>
  <!-- 背景 -->
  <div class="poet">
    <header>{{title}}</header>
    <div class="content">
      <p class="text" v-for="(index,item) in list" :key="index.item">{{index.text1}}</p>
    </div>
    <footer>
      <img src="../../assets/img/prev.png" class="btn_prev">
      <img src="../../assets/img/next.png" class="btn_next">
      <img src="../../assets/img/pause.png" class="btn_pause">
    </footer>
  </div>
</template>
<style scoped>
header{
  width: 100%;
  text-align: center;
  height: 1.28rem;
  line-height: 1.28rem;
  font-size: 0.426667rem;
  font-family: '楷体';
  font-weight: bold;
  /*background-color: #33c179;*/
  background: linear-gradient(to right,rgb(107,186,225),#33c179); 
  color: #fff;
}
footer{
  width: 100%;
  height: 1.333333rem;
  /*background-color: #33c179;*/
  background: linear-gradient(to right,#33c179,pink); 
  position: fixed;
  bottom: 0;
}
.btn_prev{
  width: 0.48rem;
  height: 0.48rem;
  position: absolute;
  top: 0.4rem;
  left: 2.133333rem;
}
.btn_next{
  width: 0.48rem;
  height: 0.48rem;
  position: absolute;
  top: 0.4rem;
  right: 2.133333rem;
}
.btn_pause{
  width: 0.48rem;
  height: 0.48rem;
  position: absolute;
  top: 0.4rem;
  right: 4.8rem;
}
.content{
  width: 100%;
  height: 15.333333rem;
  background-color: red;
  padding-top: 0.266667rem;
}
.text{
  width: 100%;
  height: 0.533333rem;
  line-height: 0.533333rem;
  font-size: 0.373333rem;
  color: #fff;
  text-align: center;
  font-family: '楷体';
}
</style>
<script>
export default {
  data(){
    return {
      title: '当然是琛琛琛琛啊', //页面标题
      list:[
        {
          text1: '檀香惊醒笔尖，画风人守白卷',
        },
        {
          text1: '城南花已开',
        },
        {
          text1: '或许爱能穿越时间 到达永远',
        }
      ]
    }
  },
  //初始化
  mounted(){
    
  },
  methods:{
  
  }
}
</script>
