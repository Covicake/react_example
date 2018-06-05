import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrementCounter, incrementCounter } from '../actions';
import { AppState } from '../reducers';

export interface HeaderProps {
    counter: number;
    incrementCounter?: (value: number) => {};
    decrementCounter?: (value: number) => {};
}

class Header extends React.Component<HeaderProps, {}> {

    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.props.incrementCounter(2);
    }

    decrement() {
        this.props.decrementCounter(2);
    }

    render() {
        return <ul>
            <li>Number of movies:  {this.props.counter}</li>
            <li>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </li>
        </ul>;
    }
}

const mapStateToProps = (state: AppState) => {
    return { counter: state.counter.value };
};

const mapDispatchToProps = (dispatch) => ({
    incrementCounter: (value: number) => dispatch(incrementCounter(value)),
    decrementCounter: (value: number) => dispatch(decrementCounter(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);