import React from 'react';

export default class TodosListItem extends React.Component {
    constructor(props) {
      /* 'props' pass the properties from the parent element */
        super(props);

        this.state = {
        };
    }

    renderTaskSection() {
      /* set task */
        const { task, isCompleted } = this.props;
        /* task style has no strike through if the task in not complete */
        const taskStyle = {
            textDecorationLine: isCompleted ? 'line-through' : 'none',
        };



        return
            /*on click button, toggleTask toggles strikethrough styling*/
                (

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
