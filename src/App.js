import React from 'react';
import AppRoutes from './routes/App.routes';
import { GlobalStyle } from './Styles/GlobalStyles';

export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <AppRoutes />
      </>
    );
  }
}
