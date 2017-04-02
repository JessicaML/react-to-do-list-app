/*import llodash library*/
import _ from 'lodash';
import React from 'react';
import ListHeader from './list-header';
import ListItem from './list-item';

export default class List extends React.Component {
    renderItems() {
      /*this method creates an object composed of the own and inherited enumerable property paths of object that are not omitted. */

      /*var object = { 'a': 1, 'b': '2', 'c': 3 }; */

      /* _.omit(object, ['a', 'c']); */
      /*  => { 'b': '2' } */

      /* Doesn't rerender todos already rendered */
      /* omit -lodash method returns new object from parent, todos */
        const props = _.omit(this.props, 'todos');
        /*loops through todos to render _ syntax is for lodash. (only renders new todos) */
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
