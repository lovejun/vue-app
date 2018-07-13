<template>
  <div>
    <header>{{named}}({{title}})
      <div class="head_control">
        {{control}}
      </div>
    </header>
    <div class="count_good">
      <!-- 店铺信息 -->
      <div class="count_good_top"  v-for="( item,index ) in List" :key="item.index">
        <!-- <input type="radio" class="count_good_choose"/> -->
        <Checkbox :checked.sync="single" class="count_good_choose" 
        
        ></Checkbox>
        <img src="" class="count_img">
        <span class="count_good_name">
          {{item.count_good_content}}
        </span>
        <span class="conut_good_neck">
          {{item.conut_good_neck}}
        </span>
      </div>
      <!-- 同店铺商品 -->
      <div class="count_good_content" v-for="( item,index ) in goodsList" :key="item.index">
        <!-- <input type="radio" class="count_good_content_radio" @change="choose(index)"> -->
        <Checkbox class="count_good_content_radio"
       
        ></Checkbox>
        <!-- <Checkbox :checked.sync="single1" class="count_good_choose"></Checkbox> -->
        <img src="../../assets/img/count_head.jpg" class="count_good_content_img"/>
        <div class="count_good_content_top">
          {{item.describe}}
        </div>
        <div class="count_good_content_top_left">
          {{item.color1}}{{item.account}}{{item.style}};{{item.size1}}
        </div>
        <div class="count_good_content_bottom_left">
          ￥{{item.price}}
        </div>
        <div class="count_good_content_bottom_right">
          <div class="count_add" @click="add(index)">
            +
          </div>
          {{item.result}}
          <div class="count_subtract" @click="subtract(index)">
            -
          </div>
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="line">
      {{advertising1}}
      <img src="../../assets/img/heart.png" class="line_img">
      {{advertising}}
    </div>
    <!-- 猜你喜欢的商品列表 -->
    <div class="count_goods">
      <div class="count_goodList" v-for="( item,index ) in goodsListshow" :key="item.index">
        <img src="../../assets/img/count_head.jpg" class="count_goodList_img">
        <div class="count_goodList_text">
          {{item.count_goodList_text}}
        </div>
        <div class="count_goods_bot">
          <span class="count_goods_bot1">￥{{item.count}}</span>
          <span class="count_goods_bot2">{{item.account}}人已购买</span>
          <span class="count_goods_bot3">{{item.search}}</span>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div class="footer">
      <div class="footer_top">
        <Checkbox :checked.sync="single" class="footer_inp"></Checkbox>
        <!-- <input type="radio" class="footer_inp"/> -->
        <span class="allChoose">全选</span>
        <span class="allAdd">合计:</span>
        <span class="result">￥{{$store.state.count}}</span>
        <span class="winup">结算({{winup}})</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
header{
  width: 100%;
  height: 1.2rem;
  background: rgb(254,195,210);
  text-align: center;
  line-height: 1.2rem;
  font-size: 0.533333rem;
  font-weight: bold;
  font-family: '楷体';
  position: relative;
  margin-bottom: 0.133333rem;
}
.head_control{
  position: absolute;
  top: 0;
  right: 0.426667rem;
}
.count_good{
  width: 100%;
  min-height: 3.413333rem;
  box-sizing: border-box;
}
.count_good_top{
  width: 100%;
  height: 0.533333rem;
  position: relative;
  margin-bottom: 0.4rem;
}
.count_good_content{
  width: 100%;
  min-height: 2.293333rem;
  margin-top: 0.266667rem;
  position: relative;
}
.count_good_choose{
  width: 0.453333rem;
  height: 0.453333rem;
  position: absolute;
  left: 0.346667rem;
  bottom: 0.053333rem;
}
.count_img{
  width: 0.453333rem;
  height: 0.453333rem;
  position: absolute;
  left: 1.2rem;
  bottom: 0.053333rem;
}
.count_good_name{
  height: 0.266667rem;
  line-height: 0.266667rem;
  font-size: 0.266667rem;
  position: absolute;
  left: 2.0rem;
  top: 0.16rem;  
}
.conut_good_neck{
  height: 0.266667rem;
  line-height: 0.266667rem;
  font-size: 0.266667rem;
  position: absolute;
  right: 0.32rem;
  top: 0.16rem;
}
.count_good_content_radio{
  width: 0.453333rem;
  height: 0.453333rem;
  position: absolute;
  left: 0.346667rem;
  top: 0.933333rem;
}
.count_good_content_img{
  width: 1.866667rem;
  height: 2.293333rem;
  position: absolute;
  left: 1.493333rem;

}
.count_good_content_top{
  width: 5.466667rem;
  height: 0.8rem;
  font-size: 0.32rem;
  position: absolute;
  left: 3.946667rem;
  top: 0.266667rem;
}
.count_good_content_top_left{
  position: absolute;
  left: 4.08rem;
  font-size: 0.32rem;
  color: #ccc;
  top: 1.12rem;
}
.count_good_content_bottom_left{
  height: 0.266667rem;
  line-height: 0.266667rem;
  font-size: 0.266667rem;
  position: absolute;
  left: 4.0rem;
  bottom: 0.053333rem;
}
.count_good_content_bottom_right{
  width: 2.133333rem;
  height: 0.533333rem;
  position: absolute;
  bottom: 0;
  right: 0.32rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.count_add{
  width: 0.613333rem;
  height: 100%;
  text-align: center;
  border: solid #ccc 0.026667rem;
}
.count_subtract{
  width: 0.613333rem;
  height: 100%; 
  text-align: center;
  border: solid #ccc 0.026667rem;
}
.line{
  width: 100%;
  height: 0.533333rem;
  display: flex;
  justify-content: center;
  line-height: 0.533333rem;
  margin-top: 0.533333rem;
}
.line_img{
  width: 0.453333rem;
  height: 0.453333rem;
  margin-bottom: 0.266667rem;
}
.count_goods{
  width: 100%;
  min-height: 6.8rem;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
}
.count_goodList{
  width: 4.906667rem;
  height: 6.8rem;
  position: relative;
  box-sizing: border-box;
}
.count_goodList_img{
  width: 100%;
  height: 184px;
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
  height: 1.226667rem;
  background: red;
  position: fixed;
  bottom: 0;
}
.footer_top{
  width: 100%;
  height: 1.226667rem;
  background: pink;
  display: flex;
  flex-direction: row;
  position: relative;
}
.footer_inp{
  width: 0.48rem;
  height: 0.48rem;
  /*background: silver;*/
  position: absolute;
  top: 0.426667rem;
  left: 0.373333rem;
}
.allChoose{
  height: 0.32rem;
  line-height: 0.32rem;
  color: #666;
  position: absolute;
  left: 1.066667rem;
  top: 0.533333rem;
}
.allAdd{
  height: 0.32rem;
  line-height: 0.32rem;
  color: #000;
  position: absolute;
  left: 4.96rem;
  top: 0.533333rem;
}
.result{
  width: 1.386667rem;
  height: 0.32rem;
  line-height: 0.32rem; 
  position: absolute;
  left: 5.866667rem;
  top: 0.533333rem;
  text-align: center;
  font-size: 0.266667rem;
}
.winup{
  width: 2.773333rem;
  height: 100%;
  background: linear-gradient(to right, rgb(254,140,0) , rgb(252,84,0));
  position: absolute;
  right: 0.0rem;
  font-size: 0.373333rem;
  text-align: center;
  line-height: 1.226667rem;
  color: #fff;
}
</style>
<script>
import store from '../../store/store'
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return {
      named: '购物车',//界面名称
      advertising: ' 猜你喜欢 -----',//猜你喜欢
      advertising1: '----',
      title: '2',//购物车参数
      control: '管理',//管理 ,
      result: '0',//合计
      winup: '0',//结算
      // choose: false,
      op: null,
      single: false,
      List:[
        {
          count_good_content: '暖男专卖店',
          conut_good_neck: '领券',
          src1: '../../assets/img/002.jpg'
        },
      ],
      goodsList:[
        {
          color1: '肉色', //颜色
          account: '(170)',
          style: '[软件开发]',
          size1: '洗衣做饭,上班带娃',
          price: '9',
          describe: '最新捕获----特价大处理(zlc)',
          result: '1'
        },
        {
          color1: '肉色', //颜色
          account: '(170)',
          style: '[web]',
          size1: '会挡酒会暖床',
          price: '8',
          describe: '2018最火---抖音同款（zlc）',
          result: '1'
        },
      ],
      goodsListshow:[
        {
          count_goodList_text: '游历在大街和楼房 心中是骏马和猎场',
          account: '9999',
          count: '1.1',
          search: '找相似'
        },
        {
          count_goodList_text: '把烦恼痛了吞了算了不对别人讲',
          account: '2',
          count: '9.9',
          search: '找相似'
        }
      ]
    }
  },
  mounted(){
    
  },
  methods:{
    // 点击+号
    add(index){
      let self = this;
      // console.log(index);
      self.goodsList[index].result++; //点击+1
      // console.log(self.goodsList[index].price);
      let op = self.goodsList[index].price;
      // console.log(op);
      
      self.goodsList[index].price = op * self.goodsList[index].result;
      // console.log(self.goodsList[index].price);

    },
    //点击减号
    subtract(index){
      let self = this;
      if( self.goodsList[index].result == 0 ){ //判断数字是否为0，为0不能再减
        self.goodsList[index].result = 0;
      }else if( self.goodsList[index].result !== 0){ //判断数字是否为0，不为0可以再减
        self.goodsList[index].result --;
      };
    },
    choose(index){
      let self = this;
      console.log(self.goodsList[index].result);
      console.log(self.goodsList[index].price);
      self.goodsList[index].price = parseInt(self.goodsList[index].price) * parseInt(self.goodsList[index].result);
    },
    handleCheckAll(){
      if (this.indeterminate) {
            this.checkAll = false;
        } else {
            this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;
    }
  }
}
</script>
