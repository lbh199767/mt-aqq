<template>
  <div class="layout-default">
      <el-container>
          <el-header height="">
              <my-header/>
          </el-header>
          <el-main>Main</el-main>
          <el-footer height="">Footer</el-footer>
      </el-container>
  </div>
</template>

<script>
import MyHeader from "@/components/header/index.vue"
export default {
    components:{
        MyHeader,
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/layout.scss';
</style>