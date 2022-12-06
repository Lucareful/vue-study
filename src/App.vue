<!--
 * @Author: Luenci
 * @Date: 2022-12-05 10:53:31
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-06 17:35:50
 * @FilePath: /demo-frist/src/App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Luenci, All Rights Reserved.  
-->
<template>
  <div>
    <h1>标题</h1>
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
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less"></style>
