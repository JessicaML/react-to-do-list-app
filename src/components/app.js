/* use react module */
import React from 'react';

/* import modules for creating items and list - modular design */
import CreateTodo from './create-item';
import List from './list';

/*create some dummy-example tasks */
const todos = [
{
    task: 'do  tutorial',
    isCompleted: false
},
{
    task: 'eat a fish',
    isCompleted: false
}
];
/*export App module (referenced in index.js, the start file) */
export default class App extends React.Component {
   /* 'props' pass the properties from the parent element */
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

    /*set state from complete to incomplete (or vice versa) */
    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    /*create a */
    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

}
