import React from 'react';
import { useState } from 'react';
import  classes from './Main.module.css';

const Main = () => {

    const[inputValue, setInputValue] = useState("");
    const[displayValue, setDisplayValue] = useState([]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        setDisplayValue([...displayValue, inputValue]);
        setInputValue("");
    }

    return(
        <div className={classes.main}>
            <div className='head-title'>
                <p>Today</p>
            </div>
            <div className={classes.inputContainer}>
                <input type="text" placeholder='To-do...' value={inputValue} onChange={handleChange}></input>
                <button onClick={handleClick}>Add</button>
            </div>
            <div className={classes.tasksContainer}>
                <div className='tasks-to-do'>
                    <p>Tasks</p>
                    <ul>
                        {displayValue.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Main;