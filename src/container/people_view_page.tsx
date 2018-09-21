// ./src/containers/ChatWindow.tsx

import * as React from 'react';
import { connect } from 'react-redux';
import { ConnectedReduxProps } from '../store';
import { peoplesState } from '../store/people/types';
import { ApplicationState } from '../store/rootReducer';


interface PeopleWindowProps extends ConnectedReduxProps<peoplesState> {}{
}

type AllProps = PeopleWindowProps & ApplicationState;

const PeopleWindow: React.SFC<AllProps> = ({  }) => (
    <div className="container">
      <div className="text">Welcome</div>
    </div>
);

const mapStateToProps = (state: ApplicationState) => state.people;

export default connect(mapStateToProps)(PeopleWindow);