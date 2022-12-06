<!--
 * @Author: Luenci
 * @Date: 2022-12-05 10:53:31
 * @LastEditors: Luenci
 * @LastEditTime: 2022-12-06 14:28:16
 * @FilePath: /demo-frist/src/components/shop/Shop.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Luenci, All Rights Reserved. 
-->
<template>
    <div class="common-layout">
      <el-container>
        <el-header>
          <Headers></Headers>
        </el-header>
        <el-container>
          <el-main>
            <Goods v-for="item in goods" :id="item.id" :key="item.id" :title="item.goods_name" :price="item.goods_price" :image="item.goods_img" :is-checked="item.goods_state" @stateChange="getState"></Goods>
          </el-main>
        </el-container>
        <el-footer>
          <Footers></Footers>
        </el-footer>
      </el-container>
    </div>
  </template>
  
  <script>
  import Footers from '@/components/Footer/Footer.vue'
  import Goods from '@/components/Goods/Goods.vue'
  import Headers from '@/components/Header/Headers.vue'
  
  export default {
    components: {
      Headers,
      Goods,
      Footers,
    },
    data() {
      return { goods: [] }
    },
    created() {
      this.getGoods()
    },
    methods: {
      async getGoods() {
        const { data: res } = await this.$http.get('https://www.escook.cn/api/cart')
        if (res.status === 200) {
          this.goods = res.list
        }
      },
      getState(e) {
        // 监听子组件的传值，然后触发的逻辑
        this.goods.some((item) => {
          if (item.id === e.id) {
            item.goods_state = e.value
            return true
          }
        })
      },
    },
  }
  </script>
  
  <style lang="less"></style>
  