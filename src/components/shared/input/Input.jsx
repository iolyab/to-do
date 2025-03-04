import { useState } from 'react';
import classes from './input.module.scss';

const Input = ({ handleChange = () => {} }) => {
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        if(value.trim() === '') {
            setError('Input cannot be empty.');
        } else {
            setError('');
        }
        handleChange(e);
    };

    return (
        <div className={classes.inputContainer}>
                <input type="text" placeholder='To-do...' onChange={handleInputChange} className={`${classes.input} ${error ? classes.error : ""}`}></input>
                {error && <p className={classes.errorMessage}>{error}</p>}
        </div>
    )
}

export { Input }