<template>
  <div>
   <!-- <header>{{title}} </header> -->
  	<swiper :options="swiperOption">
      <swiper-slide>
      	<img src="../assets/img/head.jpg" class="img"/>
      </swiper-slide>
      <swiper-slide>
      	<img src="../assets/img/02.jpg" class="img"/>
      </swiper-slide>
      <swiper-slide>
      	<img src="../assets/img/03.jpg" class="img"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
     </swiper>
     <!-- 促销价格 -->
     <div class="index_account">
       <div class="index_account_left">
         {{index_account_left1}}
       </div>
       <div class="index_account_center">
         <div class="index_account_center_top">
           {{index_account_center_top}}
         </div>
         <div class="index_account_center_bottom">
           {{index_account_center_bottom}}
         </div>
       </div>
     </div>
     <!-- 商品介绍 -->
     <div class='banner_text'>
        <div class='banner_text1'>{{banner_text1}}</div>
        <div class='banner_text2'>
          <div>快递：{{banner_text2_text1}}</div>
          <div>月销量：{{banner_text2_text2}}件</div>
          <div>{{banner_text2_text3}}</div>
        </div>
        <div class='banner_text3'>
          <div class='banner_text3_text1'>{{banner_text3}}</div>
          <div class='banner_text3_text'>{{banner_text4}}</div>
        </div>
      </div>
      <!-- footer -->
      <div class='footer'>
        <div class='footer_left'>
          <div class='footer_left_bottom'>
            <img src="../assets/img/main_login.png" class="footer_left_bottom_img"/>
            <div>店铺</div>
          </div>
          <div class='footer_left_bottom'>
            <img src="../assets/img/customer.png" class="footer_left_bottom_img"/>
            <div>客服</div>
          </div>
            <div class='footer_left_bottom'>
            <img src="../assets/img/more1.png" class="footer_left_bottom_img"/>
            <div>收藏</div>
          </div>
        </div>
        <div class='footer_center' @click="toGoodsCar()">
          <div>{{footer_center2}}</div>
        </div>
        <div class='footer_center1'>
          <div>{{footer_center1}}</div>
        </div>
      </div>
  </div>
</template>
<style scoped>
header{
	width: 100%;
	height: 1.6rem;
	background: #33c179;
  line-height: 1.6rem;
  text-align: center;
  color: #fff;
  font-size: 0.64rem;
}
.swiper-wrapper{
  height: 7.733333rem;
}
.img{
	width: 100%;
	height: 300px;
}
.index_account{
  width: 100%;
  height: 1.386667rem;
  background: rgb(250,33,95);
  display: flex;
  flex-direction: row;
}
.index_account_left{
  width: 1.706667rem;
  height: 100%;
  line-height: 1.386667rem;
  font-size: 0.426667rem;
  text-align: center;
  color: #fff;
}
.index_account_center{
  width: 1.76rem;
  height: 100%;
  position: relative;
}
.index_account_center_top{
  width: 100%;
  height: 0.266667rem;
  line-height: 0.266667rem;
  color: rgb(253,148,178);
  position: absolute;
  top: 0.266667rem;
}
.index_account_center_bottom{
  width: 100%;
  height: 0.373333rem;
  line-height: 0.373333rem;
  color: #fff;
  position: absolute;
  bottom: 0.32rem;
}
/* 产品介绍 */
.banner_text{
  width: 100%;
  height: 228px;
  position: relative;
  box-sizing: border-box;
  padding-top: 0.373333rem;
}
.banner_text1{
  width: 100%;
  height: 0.346667rem;
  font-size: 0.346667rem;
  color: #000;
  line-height: 0.346667rem;
  box-sizing: border-box;
  padding-left: 0.44rem;
  padding-right: 0.533333rem;
}
.banner_text2{
  width: 100%;
  height: 0.293333rem;
  font-size: 0.293333rem;
  color: #666;
  line-height: 0.293333rem;
  box-sizing: border-box;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding-left: .44rem;
  padding-right: .44rem;
}
.banner_text3{
  width: 100%;
  height: 0.32rem;
  margin-top: .4rem;
  display: flex;
  padding-left: 0.44rem;
  color: #000;
  justify-content: space-between;
  padding-right: 0.266667rem;
  font-size: 0.266667rem;
  line-height: 0.266667rem;
  flex-direction: row;
  box-sizing: border-box;
}
.banner_text3_text{
  border-radius: 25px;
  /* background: red; */
  display: flex;
  width: 1rem;
  text-align: center;
  justify-content: center;
  border: solid 2px #ccc; 
  color: #666;
  margin-right: 0.213333rem;
}
.banner_text3_text1{
  display: flex;
  width: 200px;
}
.footer{
  width: 100%;
  height: 1.306667rem;
  /* background: pink; */
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
}
.footer_left{
  width: 300px;
  height: 100%;
  /* background: red; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.footer_center{
  width: 5.973333rem;
  height: 100%;
  background: rgb(255, 149, 0);
  line-height: 1.306667rem;
  font-size: 0.346667rem;
  color: #fff;
  text-align: center;
}
.footer_center1{
  width: 5.973333rem;
  height: 100%;
  background: rgb(255, 0, 54);
  line-height: 1.306667rem;
  font-size: 0.266667rem;
  color: #fff;
  text-align: center;
}
.footer_left_bottom{
  width: 1.28rem;
  height: 100%;
  /* background: pink; */
  padding-top: 0.266667rem;
  font-size: 0.266667rem;
}
.footer_left_bottom_img{
  width: 0.45rem;
  height: 0.45rem;
  /* background: #33c179; */
  margin-left: 0.16rem;
}
</style>
<script>
import 'swiper/dist/css/swiper.css' 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	components:{
	  		swiper,
	  		swiperSlide,
	  	},
  data(){
    return {
      title: 'cilico',
       swiperOption: {
       	  pagination:{
       	  	el: '.swiper-pagination'
       	  },
       	  // autoplay:{
       	  // 	delay:2000,
       	  // 	disableOnInteraction: false,
       	  // },
       	  loop: true,
        },
        index_account_left1: '￥99.9',//促销价格
        index_account_center_top: '￥100000000000000000000000',//原价
        index_account_center_bottom: '9999人想买',//多少人想买
        banner_text1: '医护 周祎婷',
        banner_text2_text1: '包邮',
        banner_text2_text2: '0',
        banner_text2_text3: '陕西西安',
        banner_text3: '全天猫商品通用',
        banner_text4: '领取',
        footer_center1: '即将售罄',
        footer_center2: '加入购物车',
    }
   
  },
   methods:{
      //点击加入购物车
      toGoodsCar(){
        this.$router.push('/count');
      }
    }
}
</script>
