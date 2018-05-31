import * as React from 'react';

export interface CounterState {
    numberA: number;
}

export interface CounterProps {
    min?: number;
    max?: number;
}

export default class NumberPicker extends React.Component<CounterProps, CounterState> {
    constructor(props) {
        super(props);
        this.state = {
            numberA: 0
        };
        this.addClick = this.addClick.bind(this);
        this.minusClick = this.minusClick.bind(this);
    }

    addClick() {
        this.setState({
            numberA: this.state.numberA + 1
        });
        if (this.props.max !== undefined && this.state.numberA > this.props.max) {
            this.setState({
                numberA: this.state.numberA - 1
            });
        }

    }

    minusClick() {
        this.setState({
            numberA: this.state.numberA - 1
        });
        if (this.props.min !== undefined && this.state.numberA < this.props.min) {
            this.setState({
                numberA: this.state.numberA + 1
            });
        }
    }

    render() {
        return <div>
            <button onClick={this.addClick}>+</button>
            <button>{this.state.numberA}</button>
            <button onClick={this.minusClick}>-</button>
            </div>;
    }
}