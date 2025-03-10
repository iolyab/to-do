import React from "react";
import classes from "./Login.module.scss";
import { Button } from "../../components/shared/button/Button";

const Login = () => {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <form className={classes.form}>
          <h2>Log In</h2>
          <label className={classes.email}>
            <p>Email</p>
            <input
              type="email"
              placeholder="Enter your email..."
              className={classes.input}
              required
            />
          </label>
          <label className={classes.password}>
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter your password..."
              className={classes.input}
              required
            />
          </label>
          <Button label="Log In" size="medium" className={classes.btn} />
        </form>
      </div>
    </div>
  );
};

export default Login;
