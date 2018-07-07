<template>
  <div>
    <header>
      cilico
    </header>
    <div class="banner" @mousemove="show()">
       {{content}}
    </div>
    <i-Switch v-model="switch1" @on-change="change1" size="large"></i-Switch>
  </div>
</template>
<style scoped>
header{
  width: 100%;
  height: 2.4rem;
  line-height: 2.4rem;
  background: #00a9df;
  color: #fff;
  font-size: 0.906667rem;
  font-weight: bold;
  text-align: center;
}
.banner{
  width: 100%;
  height: 5.333333rem;
  background: pink;
  line-height: 300px;
  font-weight: bold;
  font-size: 1.333333rem;
  color: #33c179;
  text-align: center;

}
</style>
<script>
export default {
  data(){
    return {
     switch1:false,//开关状态
     count: 1,
     settime: '',//定时器
     content: 'zlc',
     settest: '',
    }
  },
  created(){
     //  let op = 10; //设置用户未操作时间
     // this.settest = setInterval(()=>{ //倒计时检测
     //      op--;
     //      console.log(op);
     //       if(op==0){
     //          op = 10;
     //         };
     //    },1000);
    function  getTime(callback, second) { //second是检测未操作的时间，秒为单位，callback是该时间段未点击需要执行的函数
        let status = true;  //声明变量;
        let timer;          //定义常量;
        document.body.onmousedown = function () { //鼠标点击事件
            status = true;
        }
        document.body.onmouseup = function () { //鼠标离开事件
            countTime();
        }
        function countTime() {
            setInterval(function() { //定时器
                if (!status) {
                    callback();
                    status = true;
                }
            }, 1);
            if(timer){
                clearInterval(timer);  //清除定时器
            }
            timer = setInterval(function () {
                status = false;
            }, second);
        }
        countTime();
    };
     function timee() { 
          // console.log('120s用户没操作！');
          // alert('10s用户没进行操作');
      }
      getTime(timee, 120000);
  },
  mounted:function(){
        
  },
  methods:{
    show(e){
      e = event || window.event;
      let lefy = this.switch1; //当前开关状态赋值给变量
      // console.log(e);
      // console.log(this.switch1);
      // console.log(lefy);
      if(lefy == true){//获取当前鼠标坐标
          let x = event.offsetX || event.originalEvent.layerX;
          let y = event.offsetY || event.originalEvent.layerY;
          console.log('我的坐标是：'+"x:"+x+"; y:"+y);
      }else if(lefy == false){
        console.log('不执行');
      }
    },
    change1(status){
      // 打开开关执行事件
      if(status == true){ //当开关打开时
        console.log('我打开了');
        // this.$nextTick(function(){ 
        //   setInterval(this.timer,2000); //执行timer事件
        // })
        this.settime = setInterval(()=>{ //定时器模拟定时刷新界面
          this.timer();
        },2000)
      }else{   //当开关关闭时
        console.log('我关闭了');
        clearInterval(this.settime);  //清除定时器
        this.count = 1;
        this.content = '默认了';
      }
    },
    timer(){
      let self = this;
      if(self.count>0){
        self.count++;
        console.log(self.count);
        if(self.count%3 == 0){ //假设3秒刷新一次
          console.log('我发请求了');
          this.content = '我刷新了';
        }else if(self.count%3 !== 0){
          this.content = "我刷新啊";
        }
      }
    },
  }
}
</script>
