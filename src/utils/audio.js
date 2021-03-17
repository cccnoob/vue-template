import Vue from 'vue'
import { Howl } from "howler";
//背景音乐 
var bgmSound = new Howl({
	src: ["./media/bgm01.mp3"],
	autoplay: true,
	loop: true,
	volume: 0.5,
});

var enterSound = new Howl({
	src: ["./media/mouseover01.mp3"],
});

var clickSound = new Howl({
	src: ["./media/click01.mp3"],
});
//自定义 sound 指令，鼠标经过 或者点击 播放声音， 使用 v-sound
Vue.directive('sound', function (el, binding) {
    el.onmouseenter = () => {
        enterSound.play()
    };
    el.onclick = () => {
        clickSound.play()
    }
})
