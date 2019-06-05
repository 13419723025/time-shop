<template>
  <div class="home">
    <h1>热门影片</h1>
    <van-card
      v-for="movie in movies "
      :key="movie.id"
      :desc="movie.type"
      :title="movie.title"
      :thumb="movie.image"
      :thumb-link="'#/detail?id='+movie.id"
    />
  </div>
</template>




<script>
import { getComingSoon } from "../services/movies";

export default {
  name: "List",
  data() {
    return {
      movies: []
    };
  },
  created() {
    getComingSoon().then(res => {
      //  console.log(res.data.moviecomings)
      this.movies = res.data.moviecomings;
    });
  }
};
</script>
