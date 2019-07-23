import pkg from './package'
// const apiConfig = require('./api.config')
// const isProdMode = Object.is(process.env.NODE_ENV, 'production')
export default {
	mode: 'universal',

	head: {
		title: pkg.name,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [
			/** 
			 * 静态打包需要将href: './favicon.ico';其余时候是href: '/favicon.ico'
			*/
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		],
		script: [
			{src: 'http://api.map.baidu.com/api?v=2.0&ak=MDdqxkqhQzfdBzfu2tfGiidGbHgTfGrB'}
		]
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#FC0000' },

	/*
	** Global CSS
	*/
	css: [
		'swiper/dist/css/swiper.css',
		// 项目里要使用的 SCSS 文件
		'@/assets/css/main.scss'
	],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		// { src: '~/plugins/axios.js' }
		{ src: '~/plugins/swiper.js', ssr: false },
	],
	// dev: isProdMode,
	// env: {
	// 	baseUrl: apiConfig.baseUrl,
	// 	HOST_URL: apiConfig.socketHost
	// },
	// env: {
	// 	baseUrl: process.env.BASE_URL || 'http://localhost:3000'
	// },
	/*
	** Nuxt.js modules
	*/
	modules: [
		'@nuxtjs/axios'
	],
	//设置缓存
	cache: true,
	//禁止预加载效果
	performance: {
	  prefetch: false
	},
	// axios: {
	// 	proxy: true,
	// 	prefix: '/api/',
	// 	credentials: true
	// },
	// proxy: {
	// 	'/api/': {
	// 		target: 'http://visney.cn:81/',
	// 		pathRewrite: {
	// 			'^/api/': '/',
	// 			changeOrigin: true
	// 		}    
	// 	}
	// },
	/*
	** 使用npm run generate打包静态页面修改相对路径需使用，使用npm run build打包或者npm run dev启动不需要配置这个
	*/
	// router: {
	//     base: './'
	// },
	/*
	** Build configuration
	*/
	build: {
		/**
		 * 将查看源代码中的css采用外部引入方式
		 */
		extractCSS: {
			allChunks: true
		},
		vender: ['axios'],
		extend(config, ctx) {
		}
	}
}
