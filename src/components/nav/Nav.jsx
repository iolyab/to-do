import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.scss";

const Nav = () => {
  return (
    <aside className={classes.navbar}>
      <nav className={classes.navContainer}>
        <ul className={classes.list}>
          <li>
            <NavLink to="/">
              <button className={classes.btn}>
                <img
                  className={classes.icon}
                  src="/assets/home.png"
                  alt="Home"
                />
                Home
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">
              <button className={classes.btn}>
                <img
                  className={classes.icon}
                  src="/assets/dashboard.png"
                  alt="Dashboard"
                />
                Dashboard
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/upcoming">
              <button className={classes.btn}>
                <img
                  className={classes.icon}
                  src="/assets/upcoming.png"
                  alt="Upcoming"
                />
                Upcoming
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar">
              <button className={classes.btn}>
                <img
                  className={classes.icon}
                  src="/assets/calendar.png"
                  alt="Calendar"
                />
                Calendar
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default Nav;
