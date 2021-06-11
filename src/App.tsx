import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './pages/index';

import {IProps} from "./Interface";


const App: React.FC<IProps> = ({}) => {

    return (

        <BrowserRouter>
          <Route component={ScrollToTop} />
            <Index />
        </BrowserRouter>

    );

}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};
export default App;
