<template>
<div class="wrapper"   ref="wrapper">
	<div class="content">
	<slot></slot>
	</div>
</div>
</template>
<script>
	import BScroll from '@better-scroll/core'
	import PullDown from "@better-scroll/pull-down"
	import Pullup from '@better-scroll/pull-up'
	export default{
		name:"scroll",
		data(){
          return {
          	scroll:null
          }
		},
		mounted(){
            BScroll.use(Pullup)
			BScroll.use(PullDown)
			this.scroll = new BScroll(this.$refs.wrapper , {
               probeType: 3,
               pullUpLoad:true
			})
		}

	}
</script>

<style scoped>


</style>