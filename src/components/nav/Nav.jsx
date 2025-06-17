import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.scss";
import { Btn } from "../shared/button/Button";

const Nav = () => {
  return (
    <aside className={classes.navbar}>
      <nav className={classes.navContainer}>
        <ul className={classes.list}>
          <li>
            <NavLink to="/">
              <img src="/assets/home.png" alt="Home" className={classes.icon} />
              <Btn
                label="Home"
                className={classes.btn}
                sx={{ backgroundColor: "#45304d" }}
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">
              <img
                src="/assets/dashboard.png"
                alt="Dashboard"
                className={classes.icon}
              />
              <Btn
                label="Dashboard"
                className={classes.btn}
                sx={{ backgroundColor: "#45304d" }}
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/upcoming">
              <img
                src="/assets/upcoming.png"
                alt="Upcoming"
                className={classes.icon}
              />
              <Btn
                label="Upcoming"
                className={classes.btn}
                sx={{ backgroundColor: "#45304d" }}
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar">
              <img
                src="/assets/calendar.png"
                alt="Calendar"
                className={classes.icon}
              />
              <Btn
                label="Calendar"
                className={classes.btn}
                sx={{ backgroundColor: "#45304d" }}
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default Nav;
