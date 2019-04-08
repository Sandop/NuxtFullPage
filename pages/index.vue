<template>
	<section class="container">
		<div class="page-wrap">
			<page :currentPage='currentPage'>
				<div class="page-box">
					<h1 class="text-center">项目介绍</h1>
					<section class="animate" ref="section1">
						<p class="demo-intro">Nuxt-FullPage是一个使用Nuxt制作的全屏页面模板，是为了学习Nuxt而制作的一个Nuxt项目</p>
						<p class="demo-intro">支持：导航条滚动，滚轮滚动，触摸滚动</p>
					</section>
				</div>
			</page>
			<page :currentPage='currentPage'>
				<div class="page-box">
					<h1 class="text-center">配置说明</h1>
					<section class="animate move-left">
						<p>在index.vue中修改data函数返回的内容，即为修改相应的配置。现在可以配置三个属性：currentPage、controllerOption和options</p>
						<dl>
						<dt>currentPage:</dt>
						<dd>表示当前显示的页面，通过设置currentPage可以改变初始显示的界面</dd>
						</dl>
						<dl>
						<dt>controllerOption:</dt>
						<dd>该属性表示控制器的配置属性，可以自由扩展
							<ul>
							<li>arrowsTypePre/arrowsTypeNext表示页面控制器的上下箭头显示类型;、arrowsType:animate（显示有动画效果的箭头）</li>
							</ul>
						</dd>
						</dl>
						<dl>
						<dt>options:</dt>
						<dd>该属性是一个数组，数组的每一项都是一个对象，通过设置对象内的值，可以改变对应的page组件的样式，可以自由扩展
							<ul>
							<li>
								<span class="text-bold">background:</span> 表示相应page的背景样式</li>
							<li>
								<span class="text-bold">color:</span> 表示相应page的文字颜色（可以手动设置css样式覆盖）</li>
							<li>
								<span class="text-bold">isCenter:</span> 表示相应page的内容是否居中（水平和垂直都包括）</li>
							<li>下一页介绍options内的方法属性</li>
							</ul>
						</dd>
						</dl>
					</section>
				</div>
			</page>
			<page :currentPage='currentPage'>
				<div class="page-box">
					<h1 class="text-center">方法说明</h1>
					<section class="animate move-left">
						<p>在每个options的对象中，可以设置两种方法：beforeLeave 和 afterEnter</p>
						<ul>
						<li>beforeLeave 方法表示在离开当前页面前所做的操作</li>
						<li>afterEnter 方法表示在进入当前页面后所做的操作</li>
						</ul>
					</section>
				</div>
			</page>
			<page :currentPage='currentPage'>
				<div class="page-box">
					<h1 class="text-center">百度地图</h1>
					<section class="animate move-left">
						<div class="map-wrap">
							<div class="map-box">
								<baidu-map :mapData="mapData"></baidu-map>
							</div>
						</div>
					</section>
				</div>
			</page>
			<page-controller :pageNum="pageNum" :currentPage="currentPage" @changePage="changePage" :option="controllerOption"></page-controller>
		</div>
	</section>
</template>

<script>
	import axios from 'axios'
	// import service from '~/plugins/axios'
	import page from "~/components/Page"
	import PageController from "~/components/PageController"
  	import BaiduMap from '~/components/BaiduMap'

	export default {
		data (){
			return {
				currentPage: 1,
				options: [
					{
						background: require("~/assets/images/index/bg1.png"),
						backgroundColor: 'rgba(255,255,255,0.3)',
						isCenter: true,
						afterEnter: this.afterEnterAnimate,
						beforeLeave: this.beforeLeaveAnimate
					},{
						background: require("~/assets/images/index/bg2.png"),
						backgroundColor: 'rgba(147,58,58,0.9)',
						isCenter: true,
						afterEnter: this.afterEnterAnimate,
						beforeLeave: this.beforeLeaveAnimate
					},{
						background: require("~/assets/images/index/bg3.png"),
						backgroundColor: 'rgba(22,42,22,0.85)',
						isCenter: true,
						afterEnter: this.afterEnterAnimate,
						beforeLeave: this.beforeLeaveAnimate
					},{
						background: require("~/assets/images/index/bg3.png"),
						backgroundColor: 'rgba(22,2,22,0.85)',
						isCenter: true,
						afterEnter: this.afterEnterAnimate,
						beforeLeave: this.beforeLeaveAnimate
					}
				],
				controllerOption: {
					arrowsTypePre: false,
					arrowsTypeNext: true,
					arrowsType: false,
					navbar: true,
					highlight: true,
					loop: false
				},
				mapData: {
					longitude:  116.403847,
					latitude: 39.915526,
					title: '天安门',
					description: '地址：北京市东城区长安街'
				}
			}
		},
		computed: {
			// 总page数
			pageNum() {
				return this.options.length;
			}
		},
		components: {
			page,
			PageController,
			BaiduMap
		},
		mounted() {
			this.$children.forEach((child, index) => {
				// 动态设置各个page内的options
				if (child.option === null) {
					let childOption = this.options[index];
					this.$set(childOption, 'index', index + 1);
					child.option = childOption;
				}
			});
		},
		methods: {
			changePage(index) {
				// beforeLeave Hook
				let beforeIndex = this.currentPage - 1;
				let leaveFunction = this.options[beforeIndex].beforeLeave;
				
				typeof leaveFunction === 'function' && leaveFunction.call(this, this.$children[beforeIndex]);
				// change page
				this.currentPage = index;
				// afterEnter Hook
				let nextIndex = index - 1;
				let enterFunction = this.options[nextIndex].afterEnter;
				this.$nextTick(function() {
					typeof enterFunction === 'function' && enterFunction.call(this, this.$children[nextIndex]);
				})
			},
			/** 
			 * 可实现飞入飞出动画效果，需要此动画部分在data（）中的options需要添加的对象中传入，并且添加类名animate、move-left、move-right
			 * 如下：
			 * {
						background: require("~/assets/images/index/bg3.png"),
						backgroundColor: 'rgba(242,242,242,0.85)',
						afterEnter: this.afterEnterAnimate,
        				beforeLeave: this.beforeLeaveAnimate
					}
			*/
			afterEnterAnimate($child) {
				$child.$el.querySelector('.animate').classList.remove('move-left', 'move-right');
				
			},
			beforeLeaveAnimate($child) {
				let moveType = Math.random() > 0.5 ? 'move-left' : 'move-right';
				$child.$el.querySelector('.animate').classList.add(moveType);
			}
		},
		async asyncData ({params,store}){
            
            //banner数据动态获取
            let banner = await axios('http://visney.cn:81/NavigationMeta/get/2');
            console.log(banner);
			
            return {
                bannerData: banner.data,
			}
        }
	}
</script>

<style lang="scss" scoped>
.container {
	overflow: hidden;
	width: 100%;
	height: 100%;

	.page-wrap {
		position: relative;
		width: 1200px;
		height: 100%;
		margin: 0 auto;

		.page-box {

			overflow: hidden;
			width: 1200px;
			height: 100%;
			margin: 0 auto;
			padding-top: 250px;
			color: #fff;
		
			.map-wrap {
				width: 703px;
				height: 323px;
				margin: 0 auto;
				background: #fff;

				.map-box {
					width: 100%;
					height: 100%;
					padding: 12px;
				}
			}
			.animate {
				transition: all 1s ease-out 0s;
			}

			.move-left {
				transform: translateX(-1000%);
			}

			.move-right {
				transform: translateX(1000%);
			}

		}


	}
}

@media screen and (max-width:1366px) {
	.container {
		.page-wrap {
			.page-box {
				padding-top: 160px;

			}
		}
	}
}
</style>
