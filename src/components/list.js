import React from 'react';
import ListHeader from './list-header';

export default class List extends React.Component {
    render() {
        return (
            <table>
                <ListHeader />
                <h1>List.js renders</h1>

            </table>
        );
    }
}
