// ./src/store/types.ts

import { Action } from 'redux';

// Response object for GET /people
//https://testapi.io/api/raghulXander/api/task/v1/people
export interface People {
    rating: number
    name: string
    img: string
    Description: string
    attack_type: string
    Likes: string[]
    Dislikes: string[]
  }
  
  export type ApiResponse = Record<string, any>
  
  export const enum PeoplesActionTypes {
    FETCH_REQUEST = '@@peoples/FETCH_REQUEST',
    FETCH_SUCCESS = '@@peoples/FETCH_SUCCESS',
    FETCH_ERROR = '@@peoples/FETCH_ERROR',
    SELECTED = '@@peoples/SELECTED'
  }
  
  // Declare state types with `readonly` modifier to get compile time immutability.

  export interface peoplesState {
    readonly loading: boolean
    readonly data: People[]
    readonly errors?: string
  }

  export interface peoplePayload {
    loading: boolean;
    data: any;
    timestamp: Date
  }

  export interface PeopleFetchAction extends Action {
    type: PeoplesActionTypes.FETCH_REQUEST;
    payload: {
      loading: boolean
    };
  }
  
  export interface PeopleRecievedAction extends Action {
    type: PeoplesActionTypes.FETCH_SUCCESS;
    payload: peoplePayload
  }

  export interface PeopleRecievedError extends Action {
    type: PeoplesActionTypes.FETCH_ERROR;
    payload: {
      loading: boolean,
      error: string,
      timestamp: Date
    }
  }
  

  export type PeopleActions = PeopleFetchAction | PeopleRecievedAction | PeopleRecievedError;