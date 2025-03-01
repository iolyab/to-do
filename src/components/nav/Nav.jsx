import React from 'react';
import classes from'./Nav.module.css';

const Nav = () => {
    return(
        <nav className={classes.navbar}>
            <div className={classes.navContainer}>
                <ul className={classes.list}>
                    <li>
                        <button className={classes.btn}>
                            <img className={classes.icon} src="/assets/search.png" alt="Search"/>
                            Search
                        </button>
                    </li>
                    <li>
                        <a href="/">
                            <button className={classes.btn}>
                                <img className={classes.icon} src="/assets/home.png" alt="Home"/>
                                Home
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="dashboard">
                            <button className={classes.btn}>
                                <img className={classes.icon} src="/assets/dashboard.png" alt="Dashboard"/>
                                Dashboard
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="upcoming">
                            <button className={classes.btn}>
                                <img className={classes.icon} src="/assets/upcoming.png" alt="Upcoming"/>
                                Upcoming
                            </button>
                        </a>
                    </li>
                    <li>
                        <button className={classes.btn}>
                            <img className={classes.icon} src="/assets/calendar.png" alt="Calendar"/>
                            Calendar
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;






