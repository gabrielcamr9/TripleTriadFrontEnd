import React, { Component } from 'react';
import { Card } from './card';
import './board.css';

const card1 = {
    name: 'Squall',
    up: 'A',
    down: 7,
    left: 4,
    right: 6,
}

const emptyCard = {
    name: '',
    up: '',
    down: '',
    left: '',
    right: '',
}

export default class Board extends Component {
    render() {
        return (
            <div class="inner-grid">
                <Card info={card1} >7</Card>
                <Card info={card1} >8</Card>
                <Card info={card1} >9</Card>
                <Card info={card1} >/</Card>
                <Card info={card1} >/</Card>
                <Card info={card1} >8</Card>
                <Card info={card1} >9</Card>
                <Card info={card1} >/</Card>
                <Card info={emptyCard} >/</Card>
            </div>
        );
    }
}