import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrementCounter, incrementCounter } from '../actions';
import { AppState } from '../reducers';

export interface HeaderProps {
    counter: number;
}

class Footer extends React.Component<HeaderProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <ul>
            <li>Number of movies:  {this.props.counter}</li>
        </ul>;
    }
}

const mapStateToProps = (state: AppState) => {
    return { counter: state.counter.value };
};

export default connect(mapStateToProps)(Footer);