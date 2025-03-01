import React from 'react';
import classes from'./Nav.module.css';

const Nav = () => {
    return(
        <nav className={classes.navbar}>
            <div className={classes.navContainer}>
                    <button className={classes.btn}>
                        <img className={classes.icon} src="/assets/search.png" alt="Search"/>
                        Search
                    </button>
                <a href="/">
                    <button className={classes.btn}>
                        <img className={classes.icon} src="/assets/home.png" alt="Home"/>
                        Home
                    </button>
                </a>
                <button className={classes.btn}>
                    <img className={classes.icon} src="/assets/dashboard.png" alt="Dashboard"/>
                    Dashboard
                </button>
                <button className={classes.btn}>
                    <img className={classes.icon} src="/assets/upcoming.png" alt="Upcoming"/>
                    Upcoming
                </button>
                <button className={classes.btn}>
                    <img className={classes.icon} src="/assets/calendar.png" alt="Calendar"/>
                    Calendar
                </button>
            </div>
        </nav>
    )
}
export default Nav;

