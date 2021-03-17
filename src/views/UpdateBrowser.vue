<template>
    <div class="tv-http-error-page">
		<div class="tv-http-error-page__message-wrap tv-layout-width">
			<div class="tv-layout-padding tv-text tv-text--darkbg i-align_center">
				<div class="tv-http-error-icon tv-http-error-icon--size_big">
					<div class="tv-http-error-icon__content">
						<div class="tv-http-error-icon__dots"></div>
						<div class="tv-http-error-icon__dots"></div>
						<div class="tv-http-error-icon__dots"></div>
						<span class="tv-http-error-icon__error-code">╯︵╰</span>
					</div>
					<div class="tv-http-error-icon__circle tv-http-error-icon__circle--position_bottom-right"><svg viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg" width="13px" height="13px"><path fill="currentcolor" d="M2.546 12.15l9.603-9.604A1.198 1.198 0 0 0 10.452.85L.85 10.455a1.198 1.198 0 0 0 1.696 1.695zm9.603-1.696L2.544.85A1.198 1.198 0 0 0 .85 2.547l9.604 9.603a1.198 1.198 0 0 0 1.695-1.696z"/></svg></div>
				</div>
				<h1>哎呀，您的浏览器不被支持！</h1>
				<p class="tv-text__paragraph--additional-bottom-margin_double">
					请升级您的浏览器到最新版本，或者使用以下浏览器
				</p>
			</div>
			<div class="tv-supported-browsers">
				<a href="https://www.google.com/chrome/" target="_blank" class="tv-supported-browsers__browser">
					<div class="tv-supported-browsers__browser-icon">
                        <img src="@/static/img/chrome.png" />   
                    </div>
					<strong class="tv-supported-browsers__browser-title">Chrome</strong>
				</a>
				<a href="https://www.mozilla.org/firefox/new/" target="_blank" class="tv-supported-browsers__browser">
					<div class="tv-supported-browsers__browser-icon">
                        <img src="@/static/img/firefox.png" />  
                    </div>
					<strong class="tv-supported-browsers__browser-title">Firefox</strong>
				</a>
				<a href="http://www.apple.com/safari/" target="_blank" class="tv-supported-browsers__browser">
					<div class="tv-supported-browsers__browser-icon">
                        <img src="@/static/img/safari.png" />  
                    </div>
					<strong class="tv-supported-browsers__browser-title">Safari</strong>
				</a>
				<a href="http://www.opera.com/" target="_blank" class="tv-supported-browsers__browser">
					<div class="tv-supported-browsers__browser-icon">
                        <img src="@/static/img/opera.png" />  
                    </div>
					<strong class="tv-supported-browsers__browser-title">Opera</strong>
				</a>
				<!-- <a href="https://www.microsoft.com/windows/microsoft-edge" target="_blank" class="tv-supported-browsers__browser">
					<div class="tv-supported-browsers__browser-icon"><svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M9.17 11.74C5.244 14.184 3 17.657 3 17.657s.581-7.282 6.17-11.543C11.392 4.42 14.43 3 18.517 3c1.536 0 4.755.267 7.655 2.055 2.9 1.788 4.072 3.286 5.379 5.478.563.946 1.022 2.162 1.309 3.334.537 2.197.602 4.825.602 4.825v3.46H12.736s-.506 6.964 9.025 6.964c3.315 0 4.476-.52 5.567-.844 1.706-.505 3.354-1.632 3.354-1.632l.004 6.957S26.785 36 20.89 36c-1.66 0-3.408-.14-5.095-.686-1.474-.479-4.56-1.768-6.626-4.791-.731-1.07-1.523-2.493-1.915-3.883-.424-1.503-.42-2.963-.42-3.767 0-3.009 1.029-5.882 2.812-7.958 2.31-2.69 5.23-3.874 5.23-3.874s-.95 1.11-1.535 2.49c-.586 1.38-.746 2.77-.746 2.77H24.3s.685-6.994-6.622-6.994c-2.753 0-6.134.956-8.507 2.433" fill="currentColor"/></svg></div>
					<strong class="tv-supported-browsers__browser-title">Edge</strong>
				</a> -->
			</div>
		</div>
	</div>
</template>
<script>
export default {
    layout: "browser_layout",
    data(){
        return{
        }
    },
}
</script>
<style scoped>
.tv-layout-width {
    width: 1020px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box
}

.tv-text ol,.tv-text p,.tv-text ul {
    font-size: 14px;
    margin-bottom: 12px;
}

.tv-text h1 {
    font-size: 45px;
    margin-bottom: 30px;
    margin-top: 30px
}


.tv-text__font--bold {
    font-weight: 700
}

.tv-text--darkbg,.tv-text--darkbg ol,.tv-text--darkbg p,.tv-text--darkbg ul {
    color: #fff
}



.i-align_left {
    text-align: left!important
}


.i-align_center {
    text-align: center!important
}

.tv-http-error-page {
    height: 100%;
    width: 100%;
    padding-top: 58px;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #131722;
    position: absolute;
    left: 0;
    top: 0;
}


.tv-http-error-page__message-wrap {
    height: 100%;
    padding: 200px 0 20px;
}

.tv-supported-browsers {
    padding: 30px 0 0;
    text-align: center
}

.tv-supported-browsers__browser {
    display: inline-block;
    color: #fff;
}

.tv-supported-browsers__browser-icon {
    height: 64px;
    line-height: 64px;
    width: 64px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    text-align: center;
    background-color: #fff;
    margin: 0 20px 6px;
}
.tv-supported-browsers__browser-icon img{
    width: 40px;
    height: 40px;
    vertical-align: middle;
}

.tv-http-error-icon {
    display: inline-block;
    position: relative;
    border-radius: 3px;
    background: #131722;
}

.tv-http-error-icon--size_big {
    font-size: 30px
}

.tv-http-error-icon__content {
    position: relative;
    padding: 20px 35px;
    border: .15em solid #fff;
    border-radius: 3px;
    vertical-align: middle;
    margin: 0 -3px -3px 0;
    width: 150px;
}

.tv-http-error-icon__error-code {
    font-size: 20px;
    vertical-align: middle;
}

.tv-http-error-icon__dots {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff
}
.tv-http-error-icon__dots:nth-child(2){
    left: 15px;
}
.tv-http-error-icon__dots:nth-child(3){
    left: 24px;
}

.tv-http-error-icon__circle {
    position: absolute;
    box-sizing: border-box;
    background-color: #131722;
    border: 4px solid #fff;
    color: #2196f3;
    fill: #2196f3;
    border-radius: 50%;
    height: 48px;
    width: 48px;
    z-index: 3
}

.tv-http-error-icon__circle svg {
    width: 24px;
    height: 24px;
}

.tv-http-error-icon__circle--position_bottom-right {
    bottom: -16px;
    right: -16px;
}
</style>
