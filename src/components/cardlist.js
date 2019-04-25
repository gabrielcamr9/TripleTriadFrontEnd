import React, { Component } from 'react';
import { Card } from './card';
import './cardlist.css';

const card1 = {
    name: 'Cloud',
    up: 'A',
    down: 7,
    left: 4,
    right: 6,
}

export default class CardList extends Component {
    render() {
        return (
            <div className="column">
                <Card info={card1} >7</Card>
                <Card info={card1} >8</Card>
                <Card info={card1} >9</Card>
                <Card info={card1} >/</Card>
                <Card info={card1} >/</Card>
            </div>
        );
    }
}