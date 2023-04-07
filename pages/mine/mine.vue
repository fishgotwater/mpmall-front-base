<template>
	<view class="mine">
		<view class="top">
			<view class="userInfo">
				<!-- 头像 -->
				<image class="touxiang" mode="aspectFill" :src="isLogged ? avatar : ''" />
				<view class="describe">
					<text class="title">{{isLogged ? '未登录' : '未登录'}}</text>
					<text class="subTitle">{{isLogged ? '点击账号登录' : '点击账号登录'}}</text>
				</view>
			</view>
			<view class="order">
				<view class="orderTop">
					<text>我的订单</text>
					<text>全部 ></text>
				</view>
				<uni-grid :showBorder="false" :square="false" :column="5">
					<uni-grid-item v-for="(item, index) in orders" :index="index" :key="index">
						<view class="grid-item-box">
							<uni-icons :type="item.icon" :size="30" color="#777" />
							<text class="text">{{item.text}}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</view>
		<view class="middle">
			<text>我的服务</text>
			<uni-grid :showBorder="false" :square="false" :column="5">
				<uni-grid-item v-for="(item, index) in services" :index="index" :key="index">
					<view class="grid-item-box">
						<uni-icons :type="item.icon" :size="30" color="#777" />
						<text>{{item.text}}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="bottom"></view>
	</view>
</template>

<script>
	import avatar from '@/static/img/avatar.png';
	export default {
		data() {
			return {
				avatar,
				isLogged: true,
				orders: [
					{text: '待付款', icon: 'wallet'},
					{text: '待发货', icon: 'shop'},
					{text: '待收货', icon: 'gift'},
					{text: '待评价', icon: 'chat'},
					{text: '退款/售后', icon: 'headphones'},
				],
				services: [
					{text: '优惠券', icon: 'color'},
					{text: '礼品卡', icon: 'images'},
					{text: '积分', icon: 'heart'},
					{text: '地址管理', icon: 'location'},
					{text: '设置', icon: 'gear'},
					{text: '帮助中心', icon: 'help'},
				],
			};
		}
	}
</script>

<style lang="scss">
page {
	background: #d9d9d9;
}
.mine {}

.top {
	padding-top: 60px;
	background-image: url('~@/static/img/minetopbg.png');
	background-size: contain;
	background-position: center;
}
.userInfo {
	display: flex;
	align-items: center;
	.touxiang {
		width: 150rpx;
		height: 150rpx;
		margin-left: 30rpx;
	}
	.describe {
		margin-left: 20rpx;
		color: #ffffff;
		font-size: 32rpx;
		font-weight: 600;
		line-height: 48rpx;
		& > .subTitle {
			display: block;
			font-size: 24rpx;
			font-weight: 400;
			line-height: 40rpx;
		}
	}
}
.order {
	background: #ffffff;
	border-radius: 20rpx;
	margin: 0 10rpx;
	padding: 20rpx 10rpx;
	position: relative;
	bottom: -50rpx;
}
.orderTop {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 24rpx;
}
.orderTop > text:first-child {
	color: #1f1f1f;
	font-size: 30rpx;
	font-weight: 550;
}
.orderTop > text:last-child {
	font-size: 28rpx;
	color: #8c8c8c;
}
:deep(.uni-grid) {
	justify-content: space-between;
}
.grid-item-box {
	flex: 1;
	// position: relative;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
	align-items: center;
}
.grid-item-box > text {
	font-size: 28rpx;
}

.middle {
	background: #ffffff;
	border-radius: 20rpx;
	margin: 0 10rpx;
	margin-top: 80rpx;
	padding: 20rpx 10rpx;
	:deep(.uni-grid-item) {
		height: auto;
		margin-bottom: 20rpx;
	}
}
.middle > text {
	display: block;
	color: #1f1f1f;
	font-size: 30rpx;
	font-weight: 550;
	margin-bottom: 24rpx;
}

.bottom {}
</style>
