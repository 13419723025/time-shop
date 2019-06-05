<template>

  <div class="home" style="padding: 0.8rem">
    <h2>首页</h2>
   <van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item>
    <img style="width:100%;" src="http://img5.mtime.cn/mg/2019/06/02/094302.73880818.jpg" alt="">
  </van-swipe-item>
  <van-swipe-item>
<img style="width:100%;" src="http://img5.mtime.cn/mg/2019/05/31/090316.77885903.jpg" alt="">
  </van-swipe-item>
  <van-swipe-item>
<img style="width:100%;" src="http://img5.mtime.cn/mg/2019/06/02/094302.73880818.jpg" alt="">
  </van-swipe-item>
  <van-swipe-item>
<img style="width:100%;" src="http://img5.mtime.cn/mg/2019/05/31/090316.77885903.jpg" alt="">
  </van-swipe-item>
</van-swipe>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
