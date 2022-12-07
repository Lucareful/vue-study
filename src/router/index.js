/*
 * @Author: Luenci
 * @Date: 2022-12-05 17:27:44
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-07 14:08:00
 * @FilePath: /demo-frist/src/router/index.js
 * @Description:
 *
 * Copyright (c) 2022 by Luenci, All Rights Reserved.
 */

import Login from '@/components/MyLogin.vue'
import Shop from '@/components/Shop/Shop.vue'
import Ip from '@/components/study/getIp.vue'
import Left from '@/components/study/Left.vue'
import Main from '@/components/study/Main.vue'
import Movie from '@/components/study/Movie.vue'
import Right from '@/components/study/Right.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/main' },
  { path: '/shop', component: Shop },
  { path: '/right', component: Right },
  { path: '/movie/:id', component: Movie },
  { path: '/login', component: Login },
  { path: '/main', component: Main },
  { path: '/left', component: Left, children: [{ path: 'ip', component: Ip }] },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, //这个参数的key 一定要与官方文档名字保持一致
})

// 调用路由实例对象的 beforEach 方法，即可声明 “全局前置守卫”
// 每次发生路由导航的时候，都会自动触发 fn 这个 “回调函数”
router.beforeEach((to, from, next) => {
  // to 是将要访问的路由信息的对象
  // console.log(to)
  // from 是将要离开的路由的信息对象
  // console.log(from)
  // next 是一个函数，调用next表示放行，允许这次路由导航

  if (to.path === '/login') {
    next()
    return
  }

  const token = localStorage.getItem('token')

  if (token) {
    next()
    return
  } else {
    next('/login')
    return
  }
})

export default router
