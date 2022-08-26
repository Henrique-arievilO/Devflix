import React from 'react';
import { ContainerError, Title, Subtitle, Text } from './NotFoundS';

export default class MyList extends React.Component {
  render() {
    return (
      <ContainerError>
        <Title>404</Title>
        <Subtitle>Page not found!</Subtitle>
        <Text>
          Ops! Parece que algo está errado. Verifique o endereço digitado e
          tente novamente. ;&#41;
        </Text>
      </ContainerError>
    );
  }
}
