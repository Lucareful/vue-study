<!--
 * @Author: Luenci
 * @Date: 2022-12-02 11:10:10
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-02 14:05:15
 * @FilePath: \vue-study\src\components\Footer\Footer.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Luenci, All Rights Reserved. 
-->
<template>
  <div class="footer">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-checkbox>全选</el-checkbox>
      </el-col>
      <el-col :span="6">
        <el-main>结算</el-main>
      </el-col>
      <el-col :span="6">
        <el-button type="primary">结算</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  min-height: 100px;
  background-color: rgb(202, 226, 253);
  .el-row {
    margin-bottom: 20px;

    .el-col {
      border-radius: 4px;
    }
  }
}
</style>
