/*
 * @Author: Luenci
 * @Date: 2022-12-05 10:53:31
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-06 17:20:57
 * @FilePath: /demo-frist/src/main.js
 * @Description:
 *
 * Copyright (c) 2022 by Luenci, All Rights Reserved.
 */
import App from '@/App.vue'
import MyCount from '@/components/study/Count.vue'
import router from '@/router/index'
import axios from 'axios'
import ElementUI from 'element-plus'
import 'element-ui/lib/theme-chalk/index.css'
import { createApp } from 'vue'

export const vueApp = createApp(App)

vueApp.config.globalProperties.$http = axios

// 全局组件注册
vueApp.component('Mycount', MyCount)

vueApp.use(ElementUI)

vueApp.use(router)

vueApp.mount('#app')
