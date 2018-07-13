<template>
<div>
  <header>{{title}}</header>
  <swiper :options="swiperOption">
    <swiper-slide>
    	<img src="../../assets/img/11256.jpg" class="img" @click="tea()"/>
    </swiper-slide>
    <swiper-slide>
    	<img src="../../assets/img/33233.jpg" class="img"/>
    </swiper-slide>
    <swiper-slide>
    	<img src="../../assets/img/66565.jpg" class="img"/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
   <div class="line">{{title1}}</div>
   <div class="count_goods">
      <div class="count_goodList" v-for="( item,index ) in goodsListshow" :key="item.index">
        <img src="../../assets/img/8.jpg" class="count_goodList_img">
        <div class="count_goodList_text">
          {{item.count_goodList_text}}
        </div>
        <div class="count_goods_bot">
          <span class="count_goods_bot1">￥{{item.count}}</span>
          <span class="count_goods_bot2">{{item.account}}人已购买</span>
        </div>
      </div>
    </div>
    <div class="line">{{title2}}</div>
    <!-- <div class="footer">
      <img src="../../assets/img/153145167482565.png" class="footer_img"/>
    </div> -->
</div>
</template>
<style scoped>
header{
  width: 100%;
  height: 1.28rem;
  line-height: 1.28rem;
  background: linear-gradient(to right, rgb(254,140,0) , rgb(252,84,0));
  color: #fff;
  font-size: 0.533333rem;
  font-weight: bold;
  text-align: center;
}	
.swiper-wrapper{
  height: 7.733333rem;
}
.img{
  width: 100%;
  height: 300px;
}
.line{
  width: 100%;
  height: 1.066667rem;
  background-color: #ccc;
  line-height: 1.066667rem;
  padding-left: 0.4rem;
  /*color: #fff;*/
}
.count_goods{
  width: 100%;
  min-height: 6.8rem;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.266667rem;
  /*overflow-y: auto;*/
  margin-bottom: 0.133333rem;
}
.count_goodList{
  width: 4.906667rem;
  height: 6.8rem;
  position: relative;
  box-sizing: border-box;
}
.count_goodList_img{
  width: 100%;
  height: 4.906667rem;
}
.count_goodList_text{
  width: 100%;
  height: 0.746667rem;
  font-size: 0.266667rem;
  display: flex;
  padding-left: 0.32rem;
  padding-right: 0.533333rem;
}
.count_goods_bot{
  width: 100%;
  height: 0.32rem;
  padding-left: 0.266667rem;
  padding-right: 0.133333rem;
  display: flex;;
  justify-content: space-around;
  position: absolute;
  bottom: 0.08rem;
}
.count_goods_bot1{
  font-size: 0.32rem;
  color: rgb(208,108,35);
}
.count_goods_bot2{
  font-size: 0.266667rem;
  color: #666;
}
.count_goods_bot3{
  font-size: 0.266667rem;
  color: #000;
}
.footer{
  width: 100%;
  height: 3.173333rem;
  /*background-color: pink;*/
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
  padding-left: 0.8rem;
  position: fixed;
  bottom: 0;
}
.footer_img{
  width: 90%;
  position: absolute;
  bottom: 0.8rem;
  /*left: 0.8rem;*/

}
</style>
<script>
export default {
  data () {
    return {
     title: '阿琛的小店',
     title1: '热销商品',
     title2: '广告专区',
     swiperOption: {
          pagination:{
            el: '.swiper-pagination',
          },
          // autoplay:{
          //  delay:2000,
          //  disableOnInteraction: false,
          // },
          loop: true,
        },
     goodsListshow:[
        {
          count_goodList_text: '花茶（去火）',
          account: '9999',
          count: '1.1',
        },
        {
          count_goodList_text: '苹果（好吃滴）',
          account: '2',
          count: '9.9',
        },
        {
          count_goodList_text: '把烦恼痛了吞了算了不对别人讲',
          account: '2',
          count: '9.9',
        },
        {
          count_goodList_text: '把烦恼痛了吞了算了不对别人讲',
          account: '2',
          count: '9.9',
        }
      ],
    }
  },
  // 计算属性
 computed: {
   
 },
  // 方法
  methods: {
    tea(){
      this.$router.push('/index');
    }
  }
}
</script>