import { ActionCreator } from 'redux';
import axios from 'axios';

import {
  PeopleRecievedError,
  PeopleRecievedAction,
  peoplePayload,
  PeopleFetchAction,
  PeoplesActionTypes
} from './types';


export const getPeoplelist: ActionCreator<PeopleFetchAction> = () => ({
  type: PeoplesActionTypes.FETCH_REQUEST,
  payload: {
    loading: true,
  },
});

export const getPeopleListSuccess: ActionCreator<PeopleRecievedAction> = (
  data: peoplePayload,
) => ({
  type: PeoplesActionTypes.FETCH_SUCCESS,
  payload: {
    timestamp: new Date(),
    data: getPeopleData(),
    loading: false
  },
});

export const getPeopleListError: ActionCreator<PeopleRecievedError> = (
  error: string,
) => ({
  type: PeoplesActionTypes.FETCH_ERROR,
  payload: {
    timestamp: new Date(),
    error,
    loading: false
  },
});

const getPeopleData = () => {
  axios.get("https://testapi.io/api/raghulXander/api/task/v1/people")
  .then(res => res.data)
}

