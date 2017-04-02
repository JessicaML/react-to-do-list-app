import React from 'react';
 const btnStyle = {
        margin: '5px',
    };


export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

   
    renderTaskSection() {
        const { task, isCompleted } = this.props;

        const taskStyle = {
            textDecorationLine: isCompleted ? 'line-through' : 'none',
        };



        return (
            <div style={taskStyle}
            >
            <button className="btn btn-success" onClick={this.props.toggleTask.bind(this, this.props.task)} style={btnStyle}>Complete</button>

                {task}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderTaskSection()}
            </div>
        );
    }

}
