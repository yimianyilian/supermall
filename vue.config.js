module.exports ={
	  lintOnSave: false,
  devServer: {
    port: 8888,
    open: true,
    overlay: {
      warning: false,
      errors: false
    }
  },
	configureWebpack :{
		resolve:{
			alias:{
				'assets':'@/assets',
				'common':'@/common',
				'components':'@/components',
				'network':'@/network',
				'views':'@/views'
			}
		}
	}
}