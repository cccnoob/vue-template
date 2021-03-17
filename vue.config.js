module.exports = {
	devServer: {
		port: "8051",
		open: true,
		overlay: {
			warnings: false,
			errors: true,
		},
		// proxy: {
		// 	"/api": {
		// 		target: "http://1.1.1.1:5500",
		// 		changeOrigin: true,
		// 		pathRewrite: {
		// 			"^/api": "/api",
		// 		},
		// 	},
		// },
	},
	productionSourceMap: false,
};
