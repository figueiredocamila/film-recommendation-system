<template>
  <ApolloQuery
    :query="require('@/graphql/movies/GetMoviesByGenre.gql')">
    <template v-slot="{ result: { loading, error, data } }">
      <div v-if="loading" class="loading apollo">Carregando...</div>
      <div v-else-if="error" class="error apollo">Um erro ocorreu :(</div>
      <div v-else-if="data" class="result apollo">
        <film-list :movies="data.data.Genre" />
      </div>
    </template>
  </ApolloQuery>
</template>

<script>
import FilmList from '@/components/organisms/FilmList/index.vue';

export default {
  name: 'Home',

  components: {
    FilmList,
  },
};
</script>
