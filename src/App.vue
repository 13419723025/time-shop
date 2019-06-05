<template>
  <div id="app">

    <router-view/>
    <van-tabbar v-model="active"  active-color="green"
  inactive-color="#000">
      <van-tabbar-item icon="home-o" :to="{ name:'home' }">首页</van-tabbar-item>
      <van-tabbar-item icon="search" :to="{ name:'List' }">热映</van-tabbar-item>
      <van-tabbar-item icon="friends-o" :to="{ name:'ShopCart' }">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" :to="{ name:'User' }">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
