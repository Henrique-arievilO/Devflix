import React from 'react';
import axios from 'axios';
import {
  ContainerSection,
  CardMovie,
  CardPicture,
  MoviePicture,
  CardInfo,
} from './MovSerStyle';

const MyApi_Movie = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/movie/popular?api_key=de305bb0e6191c5447e66e6df6033450&language=en-US&page=1',
});

export default class Movies extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.getApi();
  }

  getApi = async () => {
    const MyApi = await MyApi_Movie.get();

    const Infos = MyApi.data.results.map((item) => {
      return {
        name: item.title,
        poster: `https://image.tmdb.org/t/p/w400/${item.poster_path}`,
        sinopsis: item.overview,
      };
    });

    this.setState({ movies: Infos });

    console.log(MyApi);
  };
  render() {
    return (
      <>
        <h2>Movies</h2>
        <ContainerSection>
          {this.state.movies.map((item) => (
            <CardMovie>
              <CardPicture>
                <MoviePicture src={item.poster} alt="poster movie" />
              </CardPicture>
              <CardInfo>
                <h2>{item.name}</h2>
                <p>{item.sinopsis}</p>
              </CardInfo>
            </CardMovie>
          ))}
        </ContainerSection>
      </>
    );
  }
}
