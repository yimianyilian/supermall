import {request}  from './request'
import {getGoods} from './getGoods'

export function getHomeBanners(){
	return request({
		url:'/banners.json'
	})
}
export function getHomeCommends(){
	return request({
		url:'/recommends.json'
	})
}

export function getHomeGoods(tabId,page){
   return getGoods({
   	url:"/goods",
   	params:{
   		tabId,
   		page
   	}
   })

   
}