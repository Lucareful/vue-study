<!--
 * @Author: Luenci
 * @Date: 2022-12-07 10:15:10
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-07 11:15:26
 * @FilePath: /demo-frist/src/components/study/Main.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Luenci, All Rights Reserved. 
-->
<template>
  <div class="main">
    <h1 align="center">标题</h1>

    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <router-link to="/shop">shop tab</router-link>
      </el-menu-item>

      <el-menu-item index="2">
        <router-link to="/left">左边 tab</router-link>
      </el-menu-item>

      <el-menu-item index="3">
        <router-link to="/right">右边 tab</router-link>
      </el-menu-item>

      <el-menu-item index="4">
        <router-link to="/movie/1">movie tab</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
