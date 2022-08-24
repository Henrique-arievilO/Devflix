import React from 'react';
import { ContainerFooter, Copyright } from './style';

export default class Footer extends React.Component {
  render() {
    return (
      <ContainerFooter>
        <Copyright>
          &copy;All Rights Reserved. Developed By Henrique Oliveira - Vai na Web
          - 2022
        </Copyright>
      </ContainerFooter>
    );
  }
}
