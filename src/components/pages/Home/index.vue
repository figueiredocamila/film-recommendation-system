<template>
  <div>
    <h4 v-if="loading">loading...</h4>
    <film-card v-else :movie="Movie[0]" />
  </div>
</template>

<script>
// @ is an alias to /src
import FilmCard from '@/components/molecules/FilmCard/index.vue';
import { MOVIES } from '@/constants/graphql';

export default {
  name: 'Home',

  data: () => ({
    Movie: [],
    loading: 0,
  }),

  components: {
    FilmCard,
  },

  apollo: {
    Movie: {
      query: MOVIES,
    },
  },
};
</script>
