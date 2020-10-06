<template>
<div>
  <div v-for="movie in movies" :key="movie._id">
    <span>{{movie}}</span>
  </div>
</div>
<!-- <v-sheet>
  <v-slide-group
    v-model="model"
    class="pa-4"
    show-arrows
  >
    <v-slide-item
      v-for="movie in movies"
      :key="movie._id"
    >

    </v-slide-item>
  </v-slide-group>
</v-sheet> -->
</template>
<script>
// import FilmCard from '@/components/molecules/FilmCard/index.vue';

export default {
  props: ['movies'],

  // components: {
  //   FilmCard,
  // },

  mounted() {
    console.log(this.movies);
  },

  data: () => ({
    model: null,
  }),

};
</script>
