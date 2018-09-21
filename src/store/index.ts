import { Dispatch } from 'react-redux';

export interface ConnectedReduxProps<S> {
    dispatch: Dispatch<S>;
  }