// ./src/store/chat/reducer.ts

import { Reducer } from 'redux';
import { peoplesState, PeoplesActionTypes, PeopleActions } from './types';

// Type-safe initialState!
export const initialState: peoplesState = {
    loading: true,
    data: [],
    errors: ""
};

const peopleReducer: Reducer<peoplesState> = (state: peoplesState = initialState, action) => {

  switch ((action as PeopleActions).type) {
    case PeoplesActionTypes.FETCH_REQUEST:
      return { ...state, loading: true };
    case PeoplesActionTypes.FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case PeoplesActionTypes.FETCH_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default peopleReducer;
