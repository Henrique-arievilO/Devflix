import React from 'react';
import { ContainerList, Subtitle, Text } from './MyListS';

export default class MyList extends React.Component {
  render() {
    return (
      <ContainerList>
        <Subtitle>Minha Lista</Subtitle>
        <Text>Adicione à sua lista os seus filmes e séries favoritos.</Text>
      </ContainerList>
    );
  }
}
