import React from 'react';
import { useState } from 'react';
import  classes from './Main.module.scss';
import { Button } from '../shared/button/Button';

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
            <div className={classes.titleHead}>
                <p className={classes.titleDay}>Today</p>
            </div>
            <div className={classes.inputContainer}>
                <input type="text" placeholder='To-do...' value={inputValue} onChange={handleChange} className={classes.input}></input>
                <Button />
            </div>
            <div className={classes.tasksContainer}>
                <div className='tasks-to-do'>
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