<template>
  <v-card
    max-width="180"
    height="380"
  >
    <v-scroll-y-transition>
      <div v-show="!show">
        <v-img
          :src="movie.poster"
        ></v-img>

        <v-card-title>
          {{movie.title}}
        </v-card-title>

        <v-card-actions>

          <v-icon
            color="yellow darken-3"
          >
          mdi-star
          </v-icon>
          <small>{{format.formatRating(movie.imdbRating)}}</small>

          <v-spacer></v-spacer>

          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
        </v-card-actions>
      </div>
    </v-scroll-y-transition>

    <v-scroll-y-reverse-transition>
      <div v-show="show" class="more-info">

        <v-card-title>
          {{movie.title}}
        </v-card-title>

        <v-card-subtitle>
          {{movie.year}}
        </v-card-subtitle>

        <v-card-text>

          <div class="genre-wrapper">
            <div v-for="genre in movie.in_genre" :key="genre._id">
              <v-chip label outlined x-small color="blue">{{genre.name}}</v-chip>
            </div>
          </div>

          <div class="rating">
            <div class="d-flex justify-space-between">
              <span>Rating</span>
              <span>{{`${format.formatRating(movie.imdbRating)}/5`}}</span>
            </div>
            <v-rating
              :value="format.formatRating(movie.imdbRating)"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              dense
              max-width="180"
              class="d-flex justify-space-between"
            ></v-rating>
            <div class="d-flex justify-start">
              <small color="grey--text">{{`${movie.imdbVotes} votes`}}</small>
            </div>
          </div>

        </v-card-text>

        <v-card-actions>

          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>

        </v-card-actions>
      </div>
    </v-scroll-y-reverse-transition>
  </v-card>
</template>
<script>
import FormatFunctions from '@/utils/FormatFunctions';

export default {
  props: ['movie'],

  data: () => ({
    show: false,
    format: FormatFunctions,
  }),
};
</script>
<style lang="scss">
small {
  color: #757575;
}

.more-info {
  position: absolute;
  top: 0;
  height: 380px;
  width: 180px;
  background: white;

  .v-card__text {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .v-card__actions {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}

.genre-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

</style>
