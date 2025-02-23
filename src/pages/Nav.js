import React from 'react';
import '../styles/Nav.css';

function Nav() {
    return(
        <nav className='navbar'>
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