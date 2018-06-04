import * as React from 'react';

export interface NewMovieStates {
    name: string;
}

export default class ControlledNewMovie extends React.Component<{}, NewMovieStates> {

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`Creando nueva película: ${this.state.name}`);
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name='name' type='text' value={this.state.name} onChange={this.handleChange}/>
                </label>
                <input type='submit' value='Submit'/>
            </form>
        </div>;
    }
}