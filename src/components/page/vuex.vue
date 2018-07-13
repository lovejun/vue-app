<template>
  <div>
    <header>{{title}}</header>
    <div>
      <h1>{{$store.state.count}}</h1>
    </div>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
    <div class="footer">
      
    </div>
  </div>
</template>
<style scoped>
header{
  width: 100%;
  height: 1.2rem;
  background: linear-gradient(to right,rgb(107,186,225),#33c179); 
  text-align: center;
  line-height: 1.2rem;
  font-size: 0.533333rem;
  font-weight: bold;
  /*font-family: '楷体';*/
  position: relative;
  margin-bottom: 0.133333rem;
  color: #fff;
}
.footer{
  width: 100%;
  height: 1.226667rem;
  background: red;
  position: fixed;
  bottom: 0;
}
</style>
<script>
import store from '../../store/store'
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  name: 'count1',
  data () {
    return {
     title: 'vuex --- test'
    }
  },
  // 计算属性
 computed: {
    ...mapState([
       "count",
      ]),
    ...mapGetters([
        "count",
      ]),
 },
  // 方法
  methods: {
    ...mapMutations([
      'add',
      'reduce'
      ]),
  }
}
</script>
