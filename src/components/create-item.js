import React from 'react';

export default class CreateItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    renderError() {
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="task" ref="createInput" />
                <button>Create</button>
            </form>
        );
    }

    handleCreate(event) {
      //Prevent page refresh when button clicked
        event.preventDefault();
        const createInput = this.refs.createInput;
        const task = createInput.value;

        this.setState({ });
        this.props.createTask(task);
    }
}
