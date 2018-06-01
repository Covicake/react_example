import * as React from 'react';

export interface CounterState {
    numberA: number;
}

export interface CounterProps {
    min?: number;
    max?: number;
    initialValue?: number;
}

export default class NumberPicker extends React.Component<CounterProps, CounterState> {

   private static checkProps(props: CounterProps) {
        if (props.initialValue !== undefined) {
            if (props.min !== undefined && props.min > props.initialValue) {
                throw new Error('Error');
            }
            if (props.max !== undefined && props.max < props.initialValue) {
                throw new Error('Error');
            }
        }
    }

    constructor(props) {
        super(props);

       NumberPicker.checkProps(this.props);

        if (this.props.initialValue !== undefined) {
            this.state = {
                numberA: this.props.initialValue
            };
        } else {
            this.state = {
                numberA: 0
            };
        }
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
        return <div className='number-picker'>
            <button className='number-picker-button add' onClick={this.addClick}>+</button>
            <button className='display'>{this.state.numberA}</button>
            <button className='number-picker-button minus' onClick={this.minusClick}>-</button>
            </div>;
    }
}