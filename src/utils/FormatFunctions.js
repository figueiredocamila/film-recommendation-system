export default {
  formatRating(imdbRating) {
    return Math.round(((imdbRating * 10) * 5) / 100).toFixed(1);
  },
};
