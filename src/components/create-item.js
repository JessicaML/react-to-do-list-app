import React from 'react';

export default class CreateItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    renderError() {
      /*Set text decoration as strikethrough when state is 'completed'*/
      return <div style={{ textDecorationLine: 'none' }}>{this.state.error}</div>;

    }

    render() {
        return (
          /*run handleCreate to create task'*/
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="task" ref="createInput" />
                <button>Create</button>
            </form>
        );
    }

    handleCreate(event) {
      /*Prevent page refresh when button clicked*/
        event.preventDefault();
        //this.refs.createInput is user input, create variable of user input
        const createInput = this.refs.createInput;
        //create task variable from createInput.value
        const task = createInput.value;

        this.setState({ });
        this.props.createTask(task);
    }
}
