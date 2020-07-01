<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
		<home-swiper :banners="banners" />
		<recommend-view  :recommends="recommends"/>
	</div>
</template>
<script>
	//import axios  from  'axios'
	import NavBar  from 'components/common/navbar/NavBar'
	import HomeSwiper  from './childComps/HomeSwiper'
     import RecommendView  from './childComps/RecommendView'
 


	import {getHomeBanners,getHomeCommends} from 'network/home'
//import Swiper from 'components/common/swiper/Swiper'
//import SwiperItem from 'components/common/swiper/SwiperItem'
//使用一个组件 swiper 中使用 index 引用 swiper swiperitem好处 只要引用一次



	export default{
		name:'home',
		components:{
			NavBar,
			HomeSwiper,
			RecommendView 
			
		},
		data(){
          return {
          	banners:[] ,
          	recommends:[]
          }
		},
		created(){
			//1.请求多个数据
			//2.要确保函数gethomemultidata执行完后数据不会被释放 用result去接收
			getHomeBanners().then(res => {

				
				this.banners = res.data.data;
				
			   
				// list转成数组 数据
				
			}) 
			//gethomemultidata是异步操作  如果后面   console.log(this.result)
			//会先执行  console.log(this.result) 此时数据为空
			getHomeCommends().then(res => {
				
				this.recommends = res.data.data;
				
				
			}) 
       }
     /*        axios.get('http://localhost:8888/recommends.json',{}).then(res =>{
             	console.log(res.data.data);
             this.recommends = res.data.data;
             
             	
             });
            
                   axios.get('http://localhost:8888/banners.json',{}).then(res =>{
             
             	console.log(res.data.data);
             this.banners = res.data.data;
               console.log(this.banners);
             	
             });*/	
	}
</script>
<style scoped>
	
.home-nav{
	background-color: var(--color-tint);
	color:#fff;
}
</style>