import React from 'react';
import Nav from '../Pages/Nav/Nav';
import { ContainerHeader, Title } from './style';

export default class Header extends React.Component {
  render() {
    return (
      <ContainerHeader>
        <Title>DEVFLIX</Title>
        <Nav />
      </ContainerHeader>
    );
  }
}
