<template>
	<view class="fenlei">
		<!-- 搜索框 -->
		<view class="search">
			<uni-easyinput prefixIcon="search" placeholder="点击搜索您感兴趣的产品" @focus="onFocus" />
		</view>

		<view class="list" :style="'height:' + listHeight + 'px'">
			<!-- 左侧滑动（竖向） -->
			<scroll-view class="list-left">
				<view v-for="item in sorts" :key="item.id" :class="`list-left-item ${item.id === selected ? 'active':''}`" @click="onSelect(item)">
					<image style="width: 16px; height: 30px;" mode="aspectFit" :src="item.id === selected ? verlineact : verline"></image>
					<text>{{item.text}}</text>
				</view>
			</scroll-view>
			<!-- 右侧滑动（竖向） -->
			<scroll-view class="list-right">
				<template v-if="products.length > 0">
					<view v-for="item in products" class="list-right-item">
						<image mode="aspectFit" style="width: 88px; height: 88px; border-radius: 5px;" :src="item.img"></image>
						<view class="describe">
							<text>{{item.name}}</text>
							<view class="price-buy">
								<view class="price">
									<text class="yangjiao">￥</text>
									<text>{{item.price}}</text>
								</view>
								<button class="mini-btn" type="warn" size="mini">加入购物车</button>
							</view>
						</view>
					</view>
				</template>
				<view v-if="!products?.length" class="empty">
					<image src="../../static/img/meiyou.svg" mode="aspectFit"></image>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import verline from '@/static/img/verline.png';
	import verlineact from '@/static/img/verlineact.png';
	import huangqi from '@/static/img/product/mmexport1680569297168.jpg';
	import hongzhao from '@/static/img/product/mmexport1680569320707.jpg';
	export default {
		data() {
			return {
				verline,
				verlineact,
				huangqi,
				hongzhao,
				listHeight: 0,
				sorts: [
					{ id: 'quanbu', text:'全部分类' },
					{ id: 'chajiu', text:'茶酒' },
					{ id: 'ganhuo', text:'干货' },
					{ id: 'haixian', text:'海鲜' },
					{ id: 'shuiguo', text:'水果' },
					{ id: 'roudanly', text:'肉蛋粮油' },
					{ id: 'lihe', text:'礼盒' },
					{ id: 'qita', text:'其他' },
				],
				selected: 'quanbu',
				products: [
					{
						id: '001',
						name: '有机内蒙古黄芪超细粉(5罐送1罐花冠茶)',
						desc: '有机黄芪，低温破壁超细粉，好吸收',
						price: 128,
						img: huangqi,
					},
					{
						id: '002',
						name: '沙漠红枣',
						desc: '一款吃了就停不下来的沙漠自然吊干的红枣！',
						price: 55,
						img: hongzhao,
					},
				],
			};
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.listHeight = res.windowHeight - this.getClientHeight();
				}
			})
		},
		methods: {
			// 获取可视区域高度
			getClientHeight() {
				const res = uni.getSystemInfoAsync();
				const system = res.platform;
				console.log('system: ', system);
				if(system === 'ios') {
					return 44 + res.statusBarHeight;
				} else if(system === 'android') {
					return 48 + res.statusBarHeight;
				} else {
					return 58;
				}
			},
			onSelect({id}) {
				this.selected = id;
				if(id === 'lihe') {
					this.products = [];
				} else if(!this.products.length) {
					this.products = [
						{
							id: '001',
							name: '有机内蒙古黄芪超细粉(5罐送1罐花冠茶)',
							desc: '有机黄芪，低温破壁超细粉，好吸收',
							price: 128,
							img: huangqi,
						},
						{
							id: '002',
							name: '沙漠红枣',
							desc: '一款吃了就停不下来的沙漠自然吊干的红枣！',
							price: 55,
							img: hongzhao,
						},
					];
				}
			}
		}
	}
</script>

<style lang="scss">
.fenlei {}
.search {
	background: #FFFFFF;
	padding: $uni-padding;
	border-bottom: 1px solid #b9b9b9;
}
:deep(.is-input-border) {
	border-color: #f33e54 !important;
	border-radius: 36rpx;
}

.list {
	display: flex;
}
.list-left {
	width: 188rpx;
	background: #f0f0f0;
	text-align: center;
}
.list-left-item {
	height: 88rpx;
	line-height: 88rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	&.active {
		color: #f33e54;
		font-weight: 500;
		background: #fafafa;
	}
	& text {
		width: 122rpx;
		font-size: 30rpx;
	}
}

.list-right {
	flex: 1;
	padding-top: 4rpx;
	background: #fafafa;
	.empty {
		margin-top: 8%;
		& image {
			width: 100%;
		}
	}
}
.list-right-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 6px;
	background: #FFFFFF;
	border-bottom: 1px solid #d9d9d9;
	& .describe {
		height: 88px;
		font-size: 28rpx;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 10rpx;
		& .price-buy {
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
		}
	    & .price {
			color: #f33e54;
			display: flex;
			align-items: baseline;
		}
		& .price .yangjiao {
			font-size: 24rpx;
		}
	}
}
</style>
