import gql from 'graphql-tag';

export const MOVIES = gql`
  query {
    Movie{
      movieId,
      title,
      poster,
      year,
      imdbVotes,
      runtime
      in_genre {
        _id,
        name,
      },
      imdbRating,
    }
  }
`;

export const MOVIES_BY_GENRE = gql`
  query{
    Genre {
      _id,
      name,
      movies {
        movieId,
        title,
        poster,
        year,
        imdbVotes,
        runtime
        in_genre {
          _id,
          name,
        },
        imdbRating,
      }
    }
  }
`;
