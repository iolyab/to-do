import React from 'react';
import classes from'./Nav.module.css';

const Nav = () => {
    return(
        <nav className={classes.navbar}>
            <p>Nav</p>
            <ul>
                <li>Search</li>
                <li>Home</li>
                <li>Dashboard</li>
                <li>Calendar</li>
            </ul>
        </nav>
    )
}
export default Nav;