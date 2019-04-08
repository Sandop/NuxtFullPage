<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div class="container">
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide" :style="'background-image:url(\''+background.bg1+'\')'" >
                <div class="page-wrap"  :style="{background: backgroundColor.bgColor1}">
                  <div class="page-box">
                    <page-one></page-one>
                  </div>
                </div>
            </div>
            <div class="swiper-slide" :style="'background-image:url(\''+background.bg2+'\')'">
                <div class="page-wrap"  :style="{background: backgroundColor.bgColor2}">
					<div class="page-box">
						<div class="title">
							<p class="title-cn">中信消费金融有限公司 > 股东简介</p>
							<p class="title-en">CITIC Consumer Finance Co.,Ltd. > Shareholder introduction</p>
						</div>
						<div class="content">
							<ul>
								<li class="list" v-for=" (list,index) in pageTwoCons" :key="index">
									<page-two-list :pageTwoCon="list"></page-two-list>
								</li>
							</ul>
						</div>
					</div>
                </div>
            </div>
            <div class="swiper-slide" :style="'background-image:url(\''+background.bg3+'\')'">
                <div class="page-wrap"  :style="{background: backgroundColor.bgColor3}">
					<div class="page-box">
						<div class="company-title">
							<p class="title-cn">中信消费金融有限公司 > 公司大事记</p>
							<p class="title-en">CITIC Consumer Finance Co.,Ltd. > Company Events</p>
						</div>
						<div class="company-content">
							<ul>
								<li class="comp-list" v-for=" (list,index) in compDevolpments" :key="index">
									<page-company-devolp :compDev="list"></page-company-devolp>
								</li>
							</ul>
						</div>
					</div>
					<div class="page-footer">
						<v-footer></v-footer>
					</div>
                </div>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
        <!-- <div class="swiper-button-prev"></div>左箭头 -->
        <div class="swiper-button-next">
			<img src="~/assets/images/index/next-btn.png">	
		</div><!--右箭头-->
    </div>
  </div> 
</template>

<script>
	import PageOne from "~/components/index/PageOne"
	import PageTwoList from "~/components/index/PageTwoList"
	import PageCompanyDevolp from "~/components/index/PageCompanyDevolp"
	import VFooter from '~/components/common/footer'
	  
	export default {
		data () {
			return {				
				swiperOption: {
					direction: 'vertical',
					slidesPerView: 1,
					spaceBetween: 30,
					mousewheel: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					on: {
						slideChange() {
							console.log('onSlideChangeEnd', this);
						},
						tap() {
							console.log('onTap', this);
						},
						slideChangeTransitionEnd: function(){
							if(this.isEnd){
								this.navigation.$nextEl.css('display','none');
							}else{
								this.navigation.$nextEl.css('display','block');  
							}
						},
					}
				},
				background: {
					bg1: require("~/assets/images/index/bg1.png"),
					bg2: require("~/assets/images/index/bg2.png"),
					bg3: require("~/assets/images/index/bg3.png")
				},
				backgroundColor: {
					bgColor1: 'rgba(255,255,255,0)',
					bgColor2: 'rgba(147,58,58,0.9)',
					bgColor3: 'rgba(242,242,242,0.85)'
				},
				pageTwoCons: [
					{
						img: require("~/assets/images/index/page2-1.png"),
						titleCn: '中信集团',
						titleEn: 'CITIC Group',
						content: [
							'中国中信集团有限公司是在邓小平同志支持下，由荣毅仁同志于1979年创办的；',
							'中信集团现已发展成为一家国有大型综合性跨国企业集团，业务涉及金融、资源能源、制造、工程承包、房地产和其他领域；',
							'2018年中信集团连续第10年上榜美国《财富》杂志世界500强，位居第149位'
						]
					},{
						img: require("~/assets/images/index/page2-2.png"),
						titleCn: '中信信托',
						titleEn: 'CITIC Trust',
						content: [
							'中信信托有限责任公司是中国银行业监督管理委员会监管的全国性非银行金融机构，获评中国信托公司行业最高评级，为中信集团系统重要性成员企业；',
							'中信信托同时担任中国信托业协会会长单位、中国信托业保障基金理事长单位、中国信托登记有限责任公司股东；',
							'2018年，中信信托服务投资者数量超过15万，管理资产规模近2亿元，稳居信托第一梯队'
						]
					},{
						img: require("~/assets/images/index/page2-3.png"),
						titleCn: '金蝶国际',
						titleEn: 'Kingdee',
						content: [
							'金蝶国际软件集团始创于1993年，是香港联交所主板上市公司（股票代码：0268），已为超过680万家企业和政府组织提供企业管理软件及云服务，致力于改变亿万人的工作方式； ',
							'金蝶用户已超过2.6亿，超过2000家合作伙伴，连续14年位居中国成长型企业市场占有率第一，成为连续两年在中国企业级SaaS云服务领域超越国际厂商的软件公司'
						]
					}
				],
				compDevolpments: [
					{	
						num: '01',
						time: '2017年03月27日',
						title: '公司筹备启动',
						desc: '中信消费金融公司筹备设立工作自2017年03月27日开始启动，成立筹备领导小组和消金公司筹备组',
						arrow: true
					},
					{
						num: '02',
						time: '2017年08月17日',
						title: '公司获批筹建',
						desc: '2018年08月17日，中信消金取得中国银监会筹建批复，成为我国第26家获准筹建的消费金融公司',
						arrow: true
					},
					{
						num: '03',
						time: '2019年01月08日',
						title: '公司创立',
						desc: '公司创立大会胜利召开，完成“三会一层”组建工作',
						arrow: true
					},
					{
						num: '04',
						time: '2019年04月17日',
						title: '获得开业批复',
						desc: '2019年04月17日，中信消金取得中国银保监会开业批复',
						arrow: true
					},
					{
						num: '05',
						time: '2019年06月01日',
						title: '公司正式开业',
						desc: '2019年06月01日，中信消费金融有限公司正式开业',
						arrow: false
					}
				]
			}
		},
		mounted() {
		//   console.log('app init', this)
		//   setTimeout(() => {
		//     this.banners.push('/5.jpg')
		//     console.log('banners update')
		//   }, 3000)
		//   console.log(
		//     'This is current swiper instance object', this.mySwiper, 
		//     'I will slideTo banners 3')
		//    this.mySwiper.slideTo(3)
		},
		layout: 'indexDefault',
		components: {
			PageOne,
			PageTwoList,
			PageCompanyDevolp,
			VFooter
		},
	}
</script>


<style lang="scss" scoped>

.container {
	width: 100%;
	height: 100%;
	margin-top: -110px;

	.swiper-container {
		width: 100%;
		height: 100%;
		margin-left: auto;
		margin-right: auto;

		.swiper-slide {
			text-align: center;
			font-size: 18px;
			background: #fff;
			/* Center slide text vertically */
			display: -webkit-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			-webkit-justify-content: center;
			justify-content: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			-webkit-align-items: center;
			align-items: center;
			background-position: center;
			background-repeat: no-repeat;
			transition: all 0.5s ease 0s;

			.page-wrap {
				overflow: hidden;
				width: 100%;
				height: 100%;

				.page-box {
					overflow: hidden;
					width: 1200px;
					height: 100%;
					margin: 0 auto;
					padding-top: 250px;

					.title {
						width: 100%;
						height: auto;
						padding-left: 50px;
						color: #fff;
						text-align: left;

						p.title-cn {
							height: 37px;
							font-size:26px;
							font-family:PingFangSC-Semibold;
							font-weight:600;
							line-height:37px;
						}

						p.title-en {
							height: 17px;
							margin-top: 6px;
							font-size:12px;
							font-family:PingFangSC-Light;
							font-weight:300;
							line-height:17px;
						}
					}

					.content {
						width: 100%;
						padding-top: 130px;

						ul {
							display: flex;
							overflow: hidden;
							width: 100%;
							justify-content: space-around;

							.comp-list {
								width: 352px;
							}
						}
					}

					.company-title {
						width: 100%;
						height: auto;
						padding-left: 10px;
						color: rgba(52,52,52,1);;
						text-align: left;

						p.title-cn {
							height: 37px;
							font-size:26px;
							font-family:PingFangSC-Semibold;
							font-weight:600;
							line-height:37px;
						}

						p.title-en {
							height: 17px;
							margin-top: 6px;
							font-size:12px;
							font-family:PingFangSC-Light;
							font-weight:300;
							line-height:17px;
						}
					}

					.company-content {
						width: 100%;
						padding-left: 10px;

						ul {
							overflow: hidden;
							width: 100%;

							.comp-list {
								float: left;
								width: 352px;
								margin-top: 80px;
								margin-right: 42px;
							}
						}
					}
				}

				.page-footer {
					position: absolute;
					bottom: 0;
					width: 100%;
					background: #fff;
				}
			}
		} 

		.swiper-pagination {
			right: 25px;

			> .swiper-pagination-bullet {
				width: 12px;
				height: 12px;
				border-radius: 50%;
				margin-top: 16px;
				cursor: pointer;
			}
		}
		
		.swiper-button-next {
			top: auto;
			right: 50%;
			bottom: 65px;
			transform: translateX(50%);
			width: 26px;
			height: 28px;
			background: none;

		}
		.swiper-pagination-bullet {
			width: 8px;
			height: 8px;
			display: inline-block;
			background:rgba(255,255,255,1);
			box-shadow:0px 0px 4px 0px rgba(0,0,0,0.2);
			border-radius:6px;
		}
		button.swiper-pagination-bullet {
			border: none;
			margin: 0;
			padding: 0;
			-webkit-box-shadow: none;
			box-shadow: none;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
		}
		.swiper-pagination-clickable .swiper-pagination-bullet {
			cursor: pointer;
			transition:all 0.3s ease-in;
			-webkit-transition:all 0.3s ease-in;
			-moz-transition:all 0.3s ease-in;
			-ms-transition:all 0.3s ease-in;
			-o-transition:all 0.3s ease-in;
		}
		.swiper-pagination-bullet-active {
			width:8px;
			height:36px;
			background:rgba(255,255,255,1);
			box-shadow:0px 0px 4px 0px rgba(0,0,0,0.2);
			border-radius:6px;
		}
	}
}

@media screen and (max-width:1366px) {
	.container {
		.swiper-container{
			.swiper-slide {
				.page-wrap {
					.page-box {
						padding-top: 160px;

						.content{
							padding-top: 80px;
						}
						.company-content {

							ul {
								.comp-list {
									margin-top: 40px;
								}
							}
						}
					}
				}
			}
		}
		
	}
}    
  // .my-swiper {
  //   height: 300px;
  //   width: 100%;
  //   .swiper-slide {
  //     text-align: center;
  //     font-size: 38px;
  //     font-weight: 700;
  //     background-color: #eee;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //   }
  //   .swiper-pagination {
  //     > .swiper-pagination-bullet {
  //       background-color: red;
  //     }
  //   }
  // }
</style>