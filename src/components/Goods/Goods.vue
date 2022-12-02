<!--
 * @Author: Luenci
 * @Date: 2022-12-01 16:39:39
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-02 14:39:12
 * @FilePath: \vue-study\src\components\Goods\Goods.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Luenci, All Rights Reserved. 
-->

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-checkbox :checked="isChecked" @change="changeState"></el-checkbox>
        <img :src="image" alt="" />
      </el-aside>
      <el-main>{{ title }}</el-main>
      <el-main>{{ price }}</el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      default: 0,
      type: Number,
    },
    title: {
      default: "",
      type: String,
    },
    isChecked: {
      default: false,
      type: Boolean,
    },
    image: {
      default: "",
    },
    id: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {};
  },
  methods: {
    changeState(newState) {
      // 触发自定义事件，向父组件传值
      this.$emit("stateChange", { id: this.id, value: newState });
    },
  },
};
</script>

<style></style>
