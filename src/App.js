import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './pages/index';
export default class App extends Component {

  render() {
    return (

        <BrowserRouter>
          <Route component={ScrollToTop} />
            <Index />
        </BrowserRouter>

    );
  }
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};
