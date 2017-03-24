/*import llodash library*/
import _ from 'lodash';
import React from 'react';
import ListHeader from './list-header';
import ListItem from './list-item';

export default class List extends React.Component {
    renderItems() {
    /* omit -lodash method returns new object from parent, todos */
        const props = _.omit(this.props, 'todos');
        /*loops through todos to render _ syntax is for lodash.  */
        return _.map(this.props.todos, (todo, index) => <ListItem key={index} {...todo} {...props} />);
    }

    render() {
        return (
            <div>
                <ListHeader />
                <div>

                    {this.renderItems()}
                </div>
            </div>
        );
    }
}
