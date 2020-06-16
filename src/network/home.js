import {request}  from './request'

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