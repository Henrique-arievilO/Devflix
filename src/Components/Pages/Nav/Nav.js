import React from 'react';
import { Link } from 'react-router-dom';
import {
  ContainerNav,
  Navigation,
  Search,
  SubTitle,
  BtnLogin,
  BoxSearch,
} from './style';

export default class Nav extends React.Component {
  render() {
    return (
      <ContainerNav>
        <Navigation>
          <Link to="/">
            <SubTitle>home page</SubTitle>
          </Link>
          <Link to="/movies">
            <SubTitle>movies</SubTitle>
          </Link>
          <Link to="/series">
            <SubTitle>series</SubTitle>
          </Link>
          <Link to="/myList">
            <SubTitle>minha lista</SubTitle>
          </Link>
        </Navigation>
        <Search>
          <div>
            <label htmlFor="search">Pesquisar</label>
            <BoxSearch type="text" id="search" />
          </div>
          <BtnLogin id="submit"></BtnLogin>
        </Search>
      </ContainerNav>
    );
  }
}
