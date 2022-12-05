<!--
 * @Author: Luenci
 * @Date: 2022-12-05 10:53:31
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-05 18:18:25
 * @FilePath: /demo-frist/src/components/Footer/Footer.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Luenci, All Rights Reserved. 
-->
<template>
  <div>
    <el-page-header :icon="null">
      <el-checkbox type="checkbox"></el-checkbox>
      <template #content>
        <span> 总金额 </span>
      </template>
      <template #extra>
        <el-button>结算</el-button>
      </template>
    </el-page-header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  background-color: rgb(202, 226, 253);
}
</style>
