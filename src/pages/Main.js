import React from 'react';
import { useState } from 'react';
import '../styles/Main.css';

function Main() {

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
        <div className='main'>
            <div className='head-title'>
                <p>Today</p>
            </div>
            <div className='input-container'>
                <input type="text" placeholder='To-do...' value={inputValue} onChange={handleChange}></input>
                <button onClick={handleClick}>Add</button>
            </div>
            <div className='tasks-container'>
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