<template>
	<div class="wrap">
		<v-header></v-header>
		<nuxt />
		<v-footer></v-footer>
	</div>
</template>

<script>
	import VHeader from '~/components/common/header'
  	import VFooter from '~/components/common/footer'

	export default {
		components: {
			VHeader,
			VFooter
		}
	}
</script>


<style lang="scss">
	html {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
	body{
		width: 100%;
		height: 100%;
		background:#fff;
		color:#000;
		font-size:14px;
		font-family: 'Microsoft yahei',Verdana, Arial, Helvetica, sans-serif;
	}
	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	.wrap {
		width: 100%;
		// height: 100%;
	}
</style>
