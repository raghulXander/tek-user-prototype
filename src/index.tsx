import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from './App';
import './index.css';
import configureStore from "./store/configureStore";
import registerServiceWorker from './registerServiceWorker';

const configuredStore = configureStore();

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
