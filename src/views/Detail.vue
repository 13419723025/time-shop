<template>
  <div style="padding:1.5rem 1.5rem;" class="home">
    <h3>{{movie.name}}</h3>
    <img style="width:100%" :src="movie.img" alt="">
    <!-- <video style="width:100%" controls :src="movie.video ? movie.video.hightUrl :''"></video> -->
    <p>{{movie.story}}</p>
     <video style="width:100%" controls :src="movie.video ? movie.video.hightUrl :''"></video>
  </div>
</template>

<script>
import { getDetail } from "../services/movies";
export default {
  name: "Detail",
  data() {
    return {
      movie: {}
    };
  },
  created() {
    getDetail(this.$route.query.id).then(res => {
      console.log(res);
      this.movie = res.data.data.basic;
    });
    // console.log(this.$route.query.id)
  }
};
</script>
