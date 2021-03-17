import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	//指挥调度
	{
		path: "/",
		name: "index",
		component: () => import(/* webpackChunkName: "dispatch" */ "../views/index.vue"),
	},
  //浏览器更新提示
	{
		path: "/updatebrowser",
		name: "UpdateBrowser",
		component: () => import(/* webpackChunkName: "UpdateBrowser" */ "../views/UpdateBrowser.vue"),
	},
	{
		path: "*",
		redirect: "/dispatch",
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
