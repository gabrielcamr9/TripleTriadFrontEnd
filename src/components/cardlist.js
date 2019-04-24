import React, { Component } from 'react';
import { Card } from './card';
import './cardlist.css';


export default class CardList extends Component {
    render() {
        return (
            <div className="column">
                <Card handleClick={this.addToInput}>7</Card>
                <Card handleClick={this.addToInput}>8</Card>
                <Card handleClick={this.addToInput}>9</Card>
                <Card handleClick={this.addToInput}>/</Card>
            </div>
        );
    }
}