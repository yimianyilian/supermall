<template>
	<div id="home" class="wrapper">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
		
       <scroll  class="content">
		<home-swiper :banners="banners" />
		<recommend-view  :recommends="recommends"/>
		<feature-view  />
		<tab-control  class="tab-control"  :titles ="['流行','新款','精选']"  @tabClick="tabClick" />
		<good-list   :goods="showGoods"/>
       </scroll>
    
	</div>
</template>
<script>
	//import axios  from  'axios'

	import HomeSwiper  from './childComps/HomeSwiper'
     import RecommendView  from './childComps/RecommendView'
      import FeatureView from './childComps/FeatureView'

     import NavBar  from 'components/common/navbar/NavBar'
     import TabControl from 'components/content/tabControl/TabControl'
      import GoodList from  'components/content/goods/GoodList'

//网络请求
	import {getHomeBanners,getHomeCommends,getHomeGoods} from 'network/home'

//import Swiper from 'components/common/swiper/Swiper'
//import SwiperItem from 'components/common/swiper/SwiperItem'
//使用一个组件 swiper 中使用 index 引用 swiper swiperitem好处 只要引用一次
	import Scroll from 'components/common/scroll/Scroll'


	export default{
		name:'home',
		components:{
			NavBar,
			HomeSwiper,
			RecommendView ,
			FeatureView,
			TabControl,
			GoodList,
			Scroll
			
		},
		data(){
          return {
          	banners:[] ,
          	recommends:[],
          	titles:[],
          	goods:{
          		1001 :{page :0,list :[]},
          		1002 :{page :0,list :[]},
          		1003 :{page :0,list :[]},
          	},
          	currentType:1001
          }
		},
		computed:{
			showGoods(){
              return this.goods[this.currentType].list
			}
		},
		methods:{
          
        /* 事件监听相关方法
         * 
         */
            tabClick(index){
            	switch(index){
            		case 0:
            		this.currentType = 1001
            		break
            		case  1:
            		this.currentType = 1002
            		break
            		case  2:
            		this.currentType =1003
                     break 
            	}
           
            },



			/**
            *
            *网络请求相关的
            */
            //请求商品信息   
           getHomeGoods(type){
           	 const page= this.goods[type].page+1;
           	 getHomeGoods(type,page).then(res =>{

           	 	//  将获取的res.data.data.item是数组    数组全部导入到  新数组中
           	 	this.goods[type].list.push(...res.data.data.item);
           	 	this.goods[type].page += 1;
           	 })
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

	      this.getHomeGoods(1001);
	      this.getHomeGoods(1002);
	      this.getHomeGoods(1003);

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
#home{
/*	padding-top: 44px;  这个padding让 home没有占满100%个视口*/
	height:100vh;

}	
.home-nav{
	background-color: var(--color-tint);
	color:#fff;
	position : fixed;
	left: 0;
	right:0;
	top :0;
	z-index: 9;

}
.tab-control{
	position:sticky;
	top:44px;
	z-index: 9;
}

.content{

   height: calc(100%-98px);


}
</style>