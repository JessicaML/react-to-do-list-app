import _ from 'lodash';
import React from 'react';
import ListHeader from './list-header';
import ListItem from './list-item';

export default class List extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'todos');

        return _.map(this.props.todos, (todo, index) => <ListItem key={index} {...todo} {...props} />);
    }

    render() {
        return (
            <table>
                <ListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}
