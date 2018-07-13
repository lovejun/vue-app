<template>
  <!-- 背景 -->
  <div>
    <div @click="demo1()">for循环--对象</div>
    <div @click="demo2()">for循环--数组</div>
  </div>
</template>
<style scoped>

</style>
<script>
export default {
  data(){
    return {
    
    }
  },
  //初始化
  mounted(){
    
  },
  methods:{
    //for---in---对象
    demo1(){
      let op = {
        name: 'jack',
        age: '23',
        city: '西安'
      };
      for( let key in op){
        if(op.hasOwnProperty(key)){
          console.log(key);
        };
      };
    },
    //for---in---数组
    demo2(){
      let op = ['1','2','3','4'];
      for( let i in op){
        // console.log(i);
        console.log(op[i]);
      };
    },
  }
}
</script>
