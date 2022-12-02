<!--
 * @Author: Luenci
 * @Date: 2022-11-29 16:16:56
 * @LastEditors: Luenci
 * @LastEditTime: 2022-11-29 17:37:57
 * @FilePath: /demo-frist/src/components/count.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Luenci, All Rights Reserved. 
-->
<template>
  <div>
    <h5>Count 组件</h5>
    <p>count 的值是 {{ count }}</p>

    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
  // props 是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
  // 自定义属性的名称，是封装者自定义的（只要名称合法就行）
  // props 中的数据，可以直接在模板结构中直接被使用
  // 注意：props 是只读的。
  props: {
    // 自定义属性名称:{/* 配置选项 */}
    init: {
      // default 指定默认值
      default: 0,
      // init 值类型必须为 number 数字
      type: Number,
      // 必传项校验
      required: true,
    },
  },

  data() {
    return {
      count: this.init,
    };
  },
};
</script>

<style></style>
