<template>
	<view class="home">
		<!-- 搜索框 -->
		<uni-easyinput prefixIcon="search" placeholder="点击搜索您感兴趣的产品" @focus="onFocus" />
		<!-- 轮播图？？？ -->
		<!-- 分类导航 -->
		<view class="navigation">
			<scroll-view class="scroll-view" scroll-x="true" :scroll-left="offsetLeft">
				<view class="scroll-view-item" v-for="item in navs" :id="item.id" @click="onNavItem">
					<text :class="selected === item.id ? 'navactive':''">{{item.text}}</text>
				</view>
			</scroll-view>
			<view class="nav-popup" @click="onNavpopup">
				<uni-icons custom-prefix="custom-icon" type="bars" size="20"></uni-icons>
			</view>
		</view>
		<!-- 列表 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navs: [
					{ id: 'shouye', text:'首页' },
					{ id: 'chajiu', text:'茶酒' },
					{ id: 'ganhuo', text:'干货' },
					{ id: 'haixian', text:'海鲜' },
					{ id: 'shuiguo', text:'水果' },
					{ id: 'roudanly', text:'肉蛋粮油' },
					{ id: 'lihe', text:'礼盒' },
					{ id: 'dujia', text:'独家' },
					{ id: 'qita1', text:'其他' },
					{ id: 'qita2', text:'其他' },
				],
				selected: 'shouye',
				offsetLeft: 0,
				isFolded: true,
			};
		},
		methods: {
			// TODO 输入框获取焦点跳转至搜索页面
			onFocus() {},
			//
			onNavItem(e) {
				console.log('a,b,c,d: ', e);
				this.selected = e.currentTarget.id;
				this.offsetLeft = e.currentTarget.offsetLeft < 200 ? 0 : 300;
			},
			// 分类导航展开
			onNavpopup() {
				this.isFolded = !this.isFolded;
			}
		}
	}
</script>

<style lang="scss">
.home {
	padding: $uni-padding;
}
:deep(.is-input-border) {
	border-color: #f33e54 !important;
	border-radius: 18px;
}

.navigation {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.scroll-view {
	width: calc(100vw - 88rpx);
	white-space: nowrap;
}
.scroll-view-item {
	display: inline-block;
	height: 90rpx;
	line-height: 90rpx;
	text-align: center;
	font-size: 30rpx;
	margin-right: 20rpx;
}
.scroll-view-item text {
	display: inline-block;
	height: 2.2rem;
}
.navactive {
	border-bottom: 2px solid #f33e54;
}
.nav-popup {
	// width: 60rpx;
}
</style>
