import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import AddrList from '../pages/shop-address/list'
import AddrAdd from '../pages/shop-address/addOrUpdate'
import Order from '../pages/shop-order/list'
import OrderConfirm from '../pages/shop-order/confirm'
import Cart from '../pages/shop-cart/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import zuopinfenleiList from '../pages/zuopinfenlei/list'
import zuopinfenleiDetail from '../pages/zuopinfenlei/detail'
import zuopinfenleiAdd from '../pages/zuopinfenlei/add'
import sheyingzuopinList from '../pages/sheyingzuopin/list'
import sheyingzuopinDetail from '../pages/sheyingzuopin/detail'
import sheyingzuopinAdd from '../pages/sheyingzuopin/add'
import sheyinghuodongList from '../pages/sheyinghuodong/list'
import sheyinghuodongDetail from '../pages/sheyinghuodong/detail'
import sheyinghuodongAdd from '../pages/sheyinghuodong/add'
import huodongbaomingList from '../pages/huodongbaoming/list'
import huodongbaomingDetail from '../pages/huodongbaoming/detail'
import huodongbaomingAdd from '../pages/huodongbaoming/add'
import zuopinchushouList from '../pages/zuopinchushou/list'
import zuopinchushouDetail from '../pages/zuopinchushou/detail'
import zuopinchushouAdd from '../pages/zuopinchushou/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import discusssheyingzuopinList from '../pages/discusssheyingzuopin/list'
import discusssheyingzuopinDetail from '../pages/discusssheyingzuopin/detail'
import discusssheyingzuopinAdd from '../pages/discusssheyingzuopin/add'
import discusssheyinghuodongList from '../pages/discusssheyinghuodong/list'
import discusssheyinghuodongDetail from '../pages/discusssheyinghuodong/detail'
import discusssheyinghuodongAdd from '../pages/discusssheyinghuodong/add'
import discusszuopinchushouList from '../pages/discusszuopinchushou/list'
import discusszuopinchushouDetail from '../pages/discusszuopinchushou/detail'
import discusszuopinchushouAdd from '../pages/discusszuopinchushou/add'
import discussnewsList from '../pages/discussnews/list'
import discussnewsDetail from '../pages/discussnews/detail'
import discussnewsAdd from '../pages/discussnews/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
                {
                    path: 'shop-address/list',
                    component: AddrList
                },
                {
                    path: 'shop-address/addOrUpdate',
                    component: AddrAdd
                },
				{
					path: 'shop-order/order',
					component: Order
				},
				{
					path: 'cart',
					component: Cart
				},
				{
					path: 'shop-order/orderConfirm',
					component: OrderConfirm
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'zuopinfenlei',
					component: zuopinfenleiList
				},
				{
					path: 'zuopinfenleiDetail',
					component: zuopinfenleiDetail
				},
				{
					path: 'zuopinfenleiAdd',
					component: zuopinfenleiAdd
				},
				{
					path: 'sheyingzuopin',
					component: sheyingzuopinList
				},
				{
					path: 'sheyingzuopinDetail',
					component: sheyingzuopinDetail
				},
				{
					path: 'sheyingzuopinAdd',
					component: sheyingzuopinAdd
				},
				{
					path: 'sheyinghuodong',
					component: sheyinghuodongList
				},
				{
					path: 'sheyinghuodongDetail',
					component: sheyinghuodongDetail
				},
				{
					path: 'sheyinghuodongAdd',
					component: sheyinghuodongAdd
				},
				{
					path: 'huodongbaoming',
					component: huodongbaomingList
				},
				{
					path: 'huodongbaomingDetail',
					component: huodongbaomingDetail
				},
				{
					path: 'huodongbaomingAdd',
					component: huodongbaomingAdd
				},
				{
					path: 'zuopinchushou',
					component: zuopinchushouList
				},
				{
					path: 'zuopinchushouDetail',
					component: zuopinchushouDetail
				},
				{
					path: 'zuopinchushouAdd',
					component: zuopinchushouAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'discusssheyingzuopin',
					component: discusssheyingzuopinList
				},
				{
					path: 'discusssheyingzuopinDetail',
					component: discusssheyingzuopinDetail
				},
				{
					path: 'discusssheyingzuopinAdd',
					component: discusssheyingzuopinAdd
				},
				{
					path: 'discusssheyinghuodong',
					component: discusssheyinghuodongList
				},
				{
					path: 'discusssheyinghuodongDetail',
					component: discusssheyinghuodongDetail
				},
				{
					path: 'discusssheyinghuodongAdd',
					component: discusssheyinghuodongAdd
				},
				{
					path: 'discusszuopinchushou',
					component: discusszuopinchushouList
				},
				{
					path: 'discusszuopinchushouDetail',
					component: discusszuopinchushouDetail
				},
				{
					path: 'discusszuopinchushouAdd',
					component: discusszuopinchushouAdd
				},
				{
					path: 'discussnews',
					component: discussnewsList
				},
				{
					path: 'discussnewsDetail',
					component: discussnewsDetail
				},
				{
					path: 'discussnewsAdd',
					component: discussnewsAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
