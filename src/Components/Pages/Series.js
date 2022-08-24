import React from 'react';
import axios from 'axios';
import {
  ContainerSection,
  CardMovie,
  CardPicture,
  MoviePicture,
  CardInfo,
} from './MovSerStyle';

const MyApi_Series = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/tv/popular?api_key=de305bb0e6191c5447e66e6df6033450&language=en-US&page=1',
});

export default class Series extends React.Component {
  state = {
    series: [],
  };

  componentDidMount() {
    this.getApi();
  }

  getApi = async () => {
    const MyApi = await MyApi_Series.get();

    const Infos = MyApi.data.results.map((item) => {
      return {
        name: item.name,
        poster: `https://image.tmdb.org/t/p/w400/${item.poster_path}`,
        sinopsis: item.overview,
      };
    });

    this.setState({ series: Infos });

    console.log(MyApi);
  };
  render() {
    return (
      <>
        <h2>Series</h2>
        <ContainerSection>
          {this.state.series.map((item) => (
            <CardMovie>
              <CardPicture>
                <MoviePicture src={item.poster} alt="poster series" />
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
