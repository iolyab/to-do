import React from "react";
import classes from "./Nav.module.scss";

const Nav = () => {
  return (
    <aside className={classes.navbar}>
      <nav className={classes.navContainer}>
        <ul className={classes.list}>
          <li>
            <a href="">
              <button className={classes.btn}>
                <img
                  className={classes.icon}
                  src="/assets/search.png"
                  alt="Search"
                />
                Search
              </button>
            </a>
          </li>
          <li>
            <a href="/">
              <button className={classes.btn}>
                <img
                  className={classes.icon}
                  src="/assets/home.png"
                  alt="Home"
                />
                Home
              </button>
            </a>
          </li>
          <li>
            <a href="dashboard">
              <button className={classes.btn}>
                <img
                  className={classes.icon}
                  src="/assets/dashboard.png"
                  alt="Dashboard"
                />
                Dashboard
              </button>
            </a>
          </li>
          <li>
            <a href="upcoming">
              <button className={classes.btn}>
                <img
                  className={classes.icon}
                  src="/assets/upcoming.png"
                  alt="Upcoming"
                />
                Upcoming
              </button>
            </a>
          </li>
          <li>
            <a href="">
              <button className={classes.btn}>
                <img
                  className={classes.icon}
                  src="/assets/calendar.png"
                  alt="Calendar"
                />
                Calendar
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default Nav;
