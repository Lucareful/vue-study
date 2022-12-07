<!--
 * @Author: Luenci
 * @Date: 2022-12-06 17:44:04
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-07 10:47:00
 * @FilePath: /demo-frist/src/components/study/Movie.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Luenci, All Rights Reserved. 
-->
<template>
  <div class="movie">
    <button @click="showThis">打印 This</button>
    <hr />
    <router-link to="/main"> 去 main </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    showThis: function () {
      console.log(this.$route.params.id)
    },
  },
}
</script>

<style lang="less" scoped>
.movie {
  background-color: chocolate;
  min-height: 250px;
}
</style>
