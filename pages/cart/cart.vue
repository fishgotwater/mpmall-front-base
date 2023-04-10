<template>
	<view>
		<image v-if="isEmpty" class="kongde" src="../../static/img/cartempty.svg"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isEmpty: true,
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page {
	background: #f2f2f2;
}

.kongde {
	width: 100%;
	margin: 125rpx auto;
}
</style>
