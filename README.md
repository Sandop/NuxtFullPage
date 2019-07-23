# NuxtFullPage

> 在Nuxt项目中实现整屏滚动的效果

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).


## 说明

> 1.`index` 页面中自己写的组件在测试时候发现有兼容性问题，在火狐中兼容性问题已经解决，但是在IE中还存在兼容性问题，所以暂时无法使用，更换为swiper做得FullPage；

> 2.swiper做得FullPage兼容性方面主流浏览器全部兼容，IE只兼容10及以上。

## 打包

> 1.`npm run generate`打包为静态文件时候，会出现css、图片、favicon路径错误问题，需要在`nuxt.config.js`中配置如下：

```javascript
export default {
    head: {
		
		link: [
			/** 
			 * 静态打包需要将href: './favicon.ico';其余时候是href: '/favicon.ico'
			*/
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		],
    },
    /*
	** 使用npm run generate打包静态页面修改相对路径需使用，使用npm run build打包或者npm run dev启动不需要配置这个
	*/
    router: {
        base: './'
    },
}
```

> 2.运行`npm run dev`或者`npm run build`时候，需要更改回原来配置。

> 3.打包之后的静态文件直接放在服务器上就可以预览，若无服务器，可以在`XAMPP`等本地服务上预览效果。
