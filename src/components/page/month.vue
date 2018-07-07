<template>
  <!-- 背景 -->
  <div class="month">
  	<div class="head">
      丶伽蓝寺听雨声盼永恒丶
    </div>
    <div class="btn">
      <p class="btn_left">因果轮回</p>
      <p class="btn_left">化蝶不能飞</p>
    </div>
  </div>
</template>
<style scoped>
.month{
  width: 100%;
  height: 100%;
  background-image: url(../../assets/img/777.png);
  background-size: 100% auto;
  background-position: 60% 40%;
  background-repeat: no-repeat; 
}
.head{
  width: 100%;
  height: 1.2rem;
  background: rgb(116,216,245);
  text-align: center;
  line-height: 1.2rem;
  font-size: 0.533333rem;
  font-weight: bold;
  font-family: '楷体';
  position: relative;
  margin-bottom: 0.133333rem;
  /*color: rgb(116,216,245);*/
  color: #fff;
}
.btn{
  width: 9.333333rem;
  height: 1.066667rem;
  /*background-color: pink;*/
  margin: auto;
  position: fixed;
  bottom: 0.533333rem;
  left: .4rem;
  display: flex;
  justify-content: space-around;
}
.btn_left{
  line-height: 1.066667rem;
  height: 1.066667rem;
  font-size: 0.426667rem;
  color: rgb(14,138,245);
  font-family: '楷体';
  background: rgb(116,216,245);
  /*background-color: rgb(14,138,245);*/
  padding-left: 0.426667rem;
  padding-right: 0.426667rem;
  border-radius: 0.666667rem;
}
</style>
<script>
export default {
  data(){
    return {
    
    }
  },
  methods:{
  
  }
}
</script>
