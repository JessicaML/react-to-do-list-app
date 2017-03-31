import React from 'react';

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
                {task}
                <button class="btn-success" onClick={this.props.toggleTask.bind(this, this.props.task)}>Complete</button>
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
