import React from 'react';
 const btnStyle = {
        margin: '5px',
    };



export default class CreateItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    renderError() {
      return <div style={{ textDecorationLine: 'none' }}>{this.state.error}</div>;

    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="task" ref="createInput" />
                <button className="btn btn-info" style={btnStyle}>Create</button>
            </form>
        );
    }

    handleCreate(event) {
      /*Prevent page refresh when button clicked*/
        event.preventDefault();
        const createInput = this.refs.createInput;
        const task = createInput.value;

        this.setState({ });
        this.props.createTask(task);
    }
}
