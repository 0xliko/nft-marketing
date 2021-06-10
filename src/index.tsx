import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './services/reduxServices'
import {Provider} from 'react-redux';
import {Web3ReactProvider} from "@web3-react/core";
import Web3 from 'web3'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/fontawesome.min.css';
import './assets/css/animate.min.css';
import '@blueprintjs/core/lib/css/blueprint.css'
import 'mdbreact/dist/css/mdb.css';
import './assets/scss/style.scss';

function getLibrary(provider:any) {
    return new Web3(provider)
}
ReactDOM.render(

      <Provider store={store}>
          <Web3ReactProvider getLibrary={getLibrary}>
              <App/>
          </Web3ReactProvider>
      </Provider>

  ,
  document.getElementById('root')
);
