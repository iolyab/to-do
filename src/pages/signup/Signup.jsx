import React from "react";
import classes from "./Signup.module.scss";
import { Button } from "../../components/shared/button/Button";

const Signup = () => {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <form className={classes.form}>
          <h2>Sign Up</h2>
          <label className={classes.email}>
            <p>Email</p>
            <input
              type="email"
              placeholder="Enter email..."
              className={classes.input}
              required
            />
          </label>
          <label className={classes.password}>
            <p>Password</p>
            <input
              type="password"
              placeholder="Create password..."
              className={classes.input}
              required
            />
          </label>
          <label className={classes.confirmPassword}>
            <p>Confirm Password</p>
            <input
              type="password"
              placeholder="Confirm password..."
              className={classes.input}
              required
            />
          </label>
          <Button label="Sign Up" size="medium" className={classes.btn} />
        </form>
      </div>
    </div>
  );
};

export default Signup;
