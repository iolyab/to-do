import './button.module.scss';

const Button = ({handleClick}) => {
    return (
        <button onClick={handleClick}>Add</button>
    )
}

export {Button}