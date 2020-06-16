import axios  from  'axios'

export function request(config){
//1创建axios实例
	const instance =axios.create({
      baseURL:'http://localhost:8888',
      timeout:5000
	})


//2 axios的拦截器
instance.interceptors.request.use(config =>{
	return config
},err => {
	console.log(err);

})
//3发送真正的网络请求
//返回的是一个promise  其他调用的地方可以直接 。then
 return instance(config)

}