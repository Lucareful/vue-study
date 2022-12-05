/*
 * @Author: Luenci
 * @Date: 2022-12-05 10:53:31
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-05 18:30:31
 * @FilePath: /demo-frist/src/main.js
 * @Description:
 *
 * Copyright (c) 2022 by Luenci, All Rights Reserved.
 */
import App from '@/App.vue'
import router from '@/router'
import axios from 'axios'
import ElementUI from 'element-plus'
import 'element-ui/lib/theme-chalk/index.css'
import { createApp } from 'vue'

export const vueApp = createApp(App)

vueApp.config.globalProperties.$http = axios

vueApp.use(ElementUI)

vueApp.use(router)

vueApp.mount('#app')
