import React, { useState } from 'react';
import classes from './FunctionalComponent.module.css';

function FunctionalComponent() {
    const [count, setCount] = useState(0);

    const increament = () => setCount(count + 1);
    const decreament = () => {
        if (count > 0) setCount(count - 1);
    }

    return (
        <div className={classes.card}>
            <h2 className={classes.title}>Functional Component</h2>
            <div className={classes.count}>{count}</div>
            <div className={classes.buttons}>
                <button className={classes.decrement} onClick={decreament}>-</button>
                <button className={classes.increment} onClick={increament}>+</button>
            </div>
        </div>
    );
}

export default FunctionalComponent;
