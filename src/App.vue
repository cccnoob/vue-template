<template>
	<div id="app" class="main-wrap" :class="$store.state.theme">
    <top-header />
		<router-view class="main-content" />
	</div>
</template>

<script>

import TopHeader from './components/TopHeader.vue';

export default {
	name: "App",
  components:{
    TopHeader,
  },
	careate() {},
	mounted() {},
	methods: {
  /**
   * @description: 大屏窗口缩放
   * @param {*}
   * @return {*}
   */  
		bigScreenResize() {
			var defaultSize = {
				w: 1920,
				h: 1080,
			};
			function rescreenResize() {
				var resW = window.innerWidth,
					newH = window.innerHeight,
					scale = newH / defaultSize.h,
					bodyEle = document.getElementsByClassName("main-wrap")[0],
					marginLeft = (resW - defaultSize.w * scale) / 2;
				bodyEle.style =
					"transform:scale(" +
					scale +
					");transform-origin: left top;margin-left:" +
					marginLeft +
					"px;";
			}
			rescreenResize();
			window.onresize = rescreenResize;
		},
	},
};
</script>

<style lang="scss">
#app{
  min-height: 100%;
}
</style>
