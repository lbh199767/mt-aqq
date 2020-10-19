<template>
  <div class="m-geo">
      <div class="position">
          <i class="el-icon-location"/>
          四川
          <router-link class="changeCity" :to="{name:'changeCity'}">
              切换城市
          </router-link>
          [
            <a href="#">阿坝藏族羌族自治州</a>
            <a href="#">理县</a>
            <a href="#">毕棚沟</a>
          ]
      </div>
      <div class="m-user">
          <router-link class="login" :to="{name:'login'}">
              立即登录
          </router-link>
          <router-link class="register" :to="{name:'register'}">
              注册
          </router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>