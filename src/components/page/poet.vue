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
  overflow-y: auto;
  padding-bottom: 0.4rem;
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
      title: '这首歌唱给你听', //页面标题
      list:[
        {
          text1: '檀香惊醒笔尖，画风人守白卷',
        },
        {
          text1: '城南花已开',
        },
        {
          text1: '或许爱能穿越时间 到达永远',
        },
        {
          text1: '我想给你我的所有'
        },
        {
          text1: '这是爱情'
        },
        {
          text1: '喜欢你，那双眼动人，笑声更迷人'
        },
        {
          text1: '可惜不是你，陪我到最后'
        },
        {
          text1: '多少人曾爱慕你年轻时的容颜，可是谁能承受岁月无情的变迁'
        },
        {
          text1: '雪白明月照在大地,藏著你最深处的秘密'
        },
        {
          text1: '不问你为何流眼泪，不在乎你心里还有谁'
        },
        {
          text1: '仍然倚在失眠夜望天边星宿'
        },
        {
          text1: '让青春吹动了你的长发，让它牵引你的梦'
        },
        {
          text1: '你说你最爱丁香花，因为你的名字就是它'
        },
        {
          text1: '早知道伤心总是难免的，你又何苦一往情深'
        },
        {
          text1: '真的好想你，我在夜里呼唤黎明'
        },
        {
          text1: '我想要怒放的生命,就象飞翔在辽阔天空'
        },
        {
          text1: '有多少爱可以重来，有多少人愿意等待'
        },
        {
          text1: '浮沉浪似人潮，那会没有思念'
        },
        {
          text1: '万水千山总是情，聚散也有天注定'
        },
        {
          text1: '我看到了他的心，演的全是他和她的电影'
        },
        {
          text1: '最爱你的人是我，你怎么舍得我难过'
        },
        {
          text1: '月落乌啼总是千年的风霜，涛声依旧不见当初的夜晚'
        },
        {
          text1: '我们彼此都保存着那份爱，不管风雨再不再来'
        },
        {
          text1: '想到你想起我，胸口依然温柔'
        },
        {
          text1: '终于看开爱回不来，而你总是太晚明白'
        },
        {
          text1: '终于看开爱回不来，而你总是太晚明白'
        },
        {
          text1: '就是爱到深处才怨他，舍不舍得都断了吧'
        },
        {
          text1: '长亭外，古道边，芳草碧连天'
        },
        {
          text1: '长亭外，古道边，芳草碧连天'
        },
        {
          text1: '长亭外，古道边，芳草碧连天'
        },
        {
          text1: '长亭外，古道边，芳草碧连天'
        },
        {
          text1: '长亭外，古道边，芳草碧连天'
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
