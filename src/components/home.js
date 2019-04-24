import React, { Component } from 'react';
import CardList from './cardlist';
import Board from './board';


export default class Home extends Component {
    render() {
        return (
            <div>
                <CardList />
                <Board />
                <CardList />
            </div>
        );
    }
}