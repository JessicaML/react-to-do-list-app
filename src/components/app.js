import React from 'react';
import CreateTodo from './create-item';
import List from './list';

const todos = [
{
    task: 'make  tutorial',
    isCompleted: false
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
                <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
                <List
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                />
            </div>
        );
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

}
