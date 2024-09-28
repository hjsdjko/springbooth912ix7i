import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import sheyinghuodong from '@/views/modules/sheyinghuodong/list'
    import discusssheyingzuopin from '@/views/modules/discusssheyingzuopin/list'
    import zuopinchushou from '@/views/modules/zuopinchushou/list'
    import forum from '@/views/modules/forum/list'
    import zuopinfenlei from '@/views/modules/zuopinfenlei/list'
    import yonghu from '@/views/modules/yonghu/list'
    import huodongbaoming from '@/views/modules/huodongbaoming/list'
    import chat from '@/views/modules/chat/list'
    import discussnews from '@/views/modules/discussnews/list'
    import discusssheyinghuodong from '@/views/modules/discusssheyinghuodong/list'
    import sheyingzuopin from '@/views/modules/sheyingzuopin/list'
    import orders from '@/views/modules/orders/list'
    import discusszuopinchushou from '@/views/modules/discusszuopinchushou/list'
    import config from '@/views/modules/config/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '社团资讯',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/sheyinghuodong',
        name: '摄影活动',
        component: sheyinghuodong
      }
      ,{
	path: '/discusssheyingzuopin',
        name: '摄影作品评论',
        component: discusssheyingzuopin
      }
      ,{
	path: '/zuopinchushou',
        name: '作品出售',
        component: zuopinchushou
      }
      ,{
	path: '/forum',
        name: '摄影论坛',
        component: forum
      }
      ,{
	path: '/zuopinfenlei',
        name: '作品分类',
        component: zuopinfenlei
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/huodongbaoming',
        name: '活动报名',
        component: huodongbaoming
      }
      ,{
	path: '/chat',
        name: '留言板',
        component: chat
      }
      ,{
	path: '/discussnews',
        name: '社团资讯',
        component: discussnews
      }
      ,{
	path: '/discusssheyinghuodong',
        name: '摄影活动评论',
        component: discusssheyinghuodong
      }
      ,{
	path: '/sheyingzuopin',
        name: '摄影作品',
        component: sheyingzuopin
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/discusszuopinchushou',
        name: '作品出售评论',
        component: discusszuopinchushou
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/newstype',
        name: '社团资讯分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
