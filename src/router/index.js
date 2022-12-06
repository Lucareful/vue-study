/*
 * @Author: Luenci
 * @Date: 2022-12-05 17:27:44
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-06 17:24:55
 * @FilePath: /demo-frist/src/router/index.js
 * @Description:
 *
 * Copyright (c) 2022 by Luenci, All Rights Reserved.
 */

import Shop from '@/components/Shop/Shop.vue'
import Ip from '@/components/study/getIp.vue'
import Left from '@/components/study/Left.vue'
import Right from '@/components/study/Right.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/shop' },
  { path: '/shop', component: Shop },
  { path: '/left', component: Left, children: [{ path: 'ip', component: Ip }] },
  { path: '/right', component: Right },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, //这个参数的key 一定要与官方文档名字保持一致
})

export default router
