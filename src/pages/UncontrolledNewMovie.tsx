import * as React from 'react';

export default class UncontrolledNewMovie extends React.Component<{}, {}> {
    input: HTMLInputElement;

    handleSubmit(event) {
        event.preventDefault();
        alert(`Creando nueva película: ${this.input.value}`);
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input ref={c => this.input = c} type='text'/>
                </label>
                <input type='submit' value='Submit'/>
            </form>
        </div>;
    }
}