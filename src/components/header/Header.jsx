import React from "react";
import classes from "./Header.module.scss";
import { Button } from "../shared/button/Button";

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="/" className={classes.logo}>
        <img src="/assets/logo.png" alt="Logo" />
      </a>

      <div className={classes.authButtons}>
        <img src="/assets/auth.png" alt="favicon" className={classes.favicon} />
        <a href="login">
          <Button label="Log In" size="small" />
        </a>
        <a href="signup">
          <Button label="Sign Up" size="small" />
        </a>
      </div>
    </header>
  );
};
export default Header;
