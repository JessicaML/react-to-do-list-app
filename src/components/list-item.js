import React from 'react';

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderTaskSection() {
        const {task} = this.props;

        return (
            <div>
                {task}
                <button>Complete</button>
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
