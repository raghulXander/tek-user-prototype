// ./stc/configureStore.ts

import { createStore, applyMiddleware, Store } from 'redux';


import { routerMiddleware } from 'react-router-redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { History } from 'history';


import { ApplicationState, reducers } from './rootReducer';

export default function configureStore(
  history: History,
  initialState: ApplicationState,
): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({});

  return createStore<ApplicationState>(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(
      routerMiddleware(history),
    )),
  );
}