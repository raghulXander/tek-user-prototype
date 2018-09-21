// ./src/store/index.ts

import { combineReducers, Dispatch, Reducer } from 'redux';

import { peoplesState } from './people/types';
import peopleReducer from './people/peopleReducer';

export interface ApplicationState {
  people: peoplesState;
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  people: peopleReducer
});