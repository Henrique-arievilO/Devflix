import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Components/Pages/Home';
import Movies from '../Components/Pages/Movies';
import Series from '../Components/Pages/Series';
import MyList from '../Components/Pages/MyList';
import NotFound from '../Components/Pages/NotFound';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

export default class AppRoutes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/myList" element={<MyList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}
