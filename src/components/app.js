import React from 'react';
import List from './list';

const todos = [
{
    task: 'make  tutorial',
    isCompleted: true
},
{
    task: 'eat a fish',
    isCompleted: false
}
];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }

    render() {
        return (
            <div>
                <h1>React To Dos List App</h1>
                <List
                    todos={this.state.todos}
                />
            </div>
        );
    }


}
