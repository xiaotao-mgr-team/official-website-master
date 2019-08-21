import Vue from 'vue'
import Router from 'vue-router'
// 网站首页
import WebsiteIndex from '@/pages/index/index'
// 新闻列表
import NewsList from '@/pages/news/index'
// 新闻详情
import NewsDetail from '@/pages/news/content'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WebsiteIndex',
      component: WebsiteIndex
    },
    {
      path: '/newslist/:name',
      name: 'NewsList',
      component: NewsList,
    },
    {
      path: '/newsdetail/:id',
      name: 'NewsDetail',
      component: NewsDetail
    }
  ]
})
