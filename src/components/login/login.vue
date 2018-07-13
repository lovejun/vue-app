<template>
  <!-- 背景 -->
  <div class="login_bg">
  	<!-- header -->
  	<div class="login_head">
  		<!-- 头像 -->
  		<div class="login_head_img" @click="head()">
  			<img src="../../assets/img/count_head.jpg" class="login_head_img" />
  		</div>
  	</div>
  	<!-- 账号输入框 -->
  	<div class="login_user">
  		<div class="login_user_left">{{userName}}</div>
  		<input class="login_user_right" placeholder="请输入账号" type="tel" v-model="username" :change="changeuser()"/>
  	</div>
  	<!-- 密码输入框 -->
  	<div class="login_pass">
  		<div class="login_user_left">{{passWord}}</div>
  		<input class="login_user_right" placeholder="请输入密码" type="passWord" v-model="password" />
  	</div>
  	<!-- 登录按钮 -->
  	<div class="login_login" @click="tohome()">{{login}}</div>
  	<!-- 忘记密码 -->
  	<div class="login_forget">
      <span @click="instance('info')">{{login_forget}}</span>
    </div>
  </div>
</template>
<style scoped>
/*背景*/
.login_bg{
   width: 100%;
   height: 17.786667rem;
   background: rgb(107,186,225);
}
.ivu-modal-body .ivu-btn-primary{
  background-color: rgb(107,186,225) !important;
  border: none;
}
/*头像*/
.login_head{
	width: 100%;
	height: 4.106667rem;
	background: rgb(138,199,230);
	padding-top: .8rem;
}
.login_head_img{
	width: 2.4rem;
	height: 2.4rem;
	background: #33c179;
	border-radius: 0.4rem;
	margin: auto;
}
/*账号输入框*/
.login_user{
	width: 9.333333rem;
	height: 1.6rem;
	background: pink;
	margin: auto;
	border-radius: 0.666667rem;
	margin-top: 1.333333rem;
	display: flex;
	flex-direction: row;
	overflow: hidden;
}
/*密码输入框*/
.login_pass{
	width: 9.333333rem;
	height: 1.6rem;
	background: pink;
	margin: auto;
	border-radius: 0.666667rem;
	margin-top: 0.666667rem;
	display: flex;
	flex-direction: row;
	overflow: hidden;
}
.login_user_left{
	width: 2.0rem;
	height: 100%;
	background: #33c179;
	line-height: 1.6rem;
	text-align: center;
  color: #fff;
}
.login_user_right{
	width: 7.6rem;
	height: 100%;
	background: #fff;
	line-height: 1.6rem;
	text-align: center; 
	border: 0;
	outline: none;
}
.login_login{
	width: 4.4rem;
	height: 1.066667rem;
	line-height: 1.066667rem;
	text-align: center;
	background: rgb(138,199,230);
	margin: auto;
	margin-top: 1.333333rem;
	border-radius: 0.4rem;
	color: #fff;
}
.login_forget{
	widows: 100%;
	height: 0.373333rem;
	line-height: 0.373333rem;
	font-size: 0.373333rem;
	color: #666;
	margin-top: 1.066667rem;
	padding-left: 10%;
  color: #fff;
}
</style>
<script>
export default {
  data(){
    return {
    	userName: '账号：', //账号输入框
    	passWord: '密码：', //密码输入框
    	login: 'LOGIN',	   //登录按钮
    	login_forget: '忘记密码？', //忘记密码按钮
    	username: '',  //账号value
    	password: '',  //密码value
      modal7: true,
      modal8: true, //弹窗
    }
  },
  methods:{
  	// 点击登录
   tohome(){
        console.log('点击了登录');
   	  	let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/; //手机号正则验证
   	  	if( this.username == '' || this.password == ''){ //用户名为空或者密码为空
          // const title = '格式';
          const content = '<p style="text-align: center; ">请输入账号</p>';
   	  		console.log('请输入正确的手机号或密码');
          this.$Modal.info({
          // title: title,
          content: content
      });
   	  	}else if(!reg.test(this.username)){  //检测手机号格式
          const content = '<p style="text-align: center; ">请输入正确的密码格式</p>';
   	  		console.log('手机号码或密码格式不正确')
   	  	}else{
   	  		this.$router.push('/shoplist');
   	  	};
   },
   changeuser(){
   		// console.log(this.username)
   },
   // 点击忘记密码
   instance (type){
    const title = '忘了密码了？';
    const content = '<p>此密码无法找回</p>';
    switch (type){
       case 'info':
      this.$Modal.info({
          title: title,
          content: content
      });
      break;
    }
   },
   //数组反转
   // head(){
   //  let arr = ['1', '5', '7' ,'9', 11];
   //  console.log(arr.reverse());
   // },
   //splice(从数组下标开始删除，接受两个参数，第二个删除的个数，第一个开始的下标)
   // head(){
   //  let arr = ['1', '5', '7' ,'9', 11];
   //  console.log(arr.splice(2,2));
   // },
   //join-----添加拼接符
   head(){
      let arr = ['1', '5', '7' ,'9', 11];
      console.log(arr.join('--'));
   },
  }
}
</script>
