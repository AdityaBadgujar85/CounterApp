import React, { Component } from 'react';
import classes from './ClassComponents.module.css';

class ClassComponents extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }

    increament = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    }

    render() {
        return (
            <div className={classes.card}>
                <h2 className={classes.title}>Class Component</h2>
                <div className={classes.count}>{this.state.count}</div>
                <div className={classes.buttons}>
                    <button className={classes.decrement} onClick={this.decrement}>-</button>
                    <button className={classes.increment} onClick={this.increament}>+</button>
                </div>
            </div>
        );
    }
}

export default ClassComponents;
