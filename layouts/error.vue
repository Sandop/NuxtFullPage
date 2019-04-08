<template>
	<div class="container">
		<div v-if="error.statusCode === 404" class="page">
			<div class="page-wrap">
				<not-found></not-found>
			</div>
		</div>
		<div v-else class="page">
			<nuxt-link to="/">
				<img src="http://img.binlive.cn/upload/1525016935287" alt="">
			</nuxt-link>
		</div>
	</div>
</template>

<script>
	import NotFound from '~/components/common/NotFound'
	export default {
		props: ['error'],
		layout: 'errPage',
		components: {
			NotFound
		}
	}
</script>

<style lang='scss' scoped>
	.container {
		width: 100%;
		height: 100%;
		background:rgba(245,245,245,1);

		.page {
			overflow: hidden;
			width: 100%;
			height: 100%;

			.page-wrap {
				overflow: hidden;
				width: 1200px;
				height: 100%;
				margin: 0 auto;
			}

			img{
				width: 80%;
				padding-top: 60px; 
				display: block; 
				margin:0 auto
			}
		}
	}
	
</style>