import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
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
    // 项目里要使用的 SCSS 文件
		'@/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

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
