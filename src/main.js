/*
 * @Author: Luenci
 * @Date: 2022-11-28 17:55:24
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-02 11:29:58
 * @FilePath: \vue-study\src\main.js
 * @Description:
 *
 * Copyright (c) 2022 by Luenci, All Rights Reserved.
 */
/*
 * @Author: Luenci
 * @Date: 2022-11-28 17:55:24
 * @LastEditors: Luenci
 * @LastEditTime: 2022-11-29 16:14:13
 * @FilePath: /demo-frist/src/main.js
 * @Description:
 *
 * Copyright (c) 2022 by Luenci, All Rights Reserved.
 */
import { createApp } from "vue";
import App from "@/App.vue";
import ElementUI from "element-plus";
import "element-ui/lib/theme-chalk/index.css";

export const vueApp = createApp(App);

vueApp.use(ElementUI);

vueApp.mount("#app");
