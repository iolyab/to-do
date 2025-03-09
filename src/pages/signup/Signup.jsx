import React from "react";
import classes from './Signup.module.scss';

const Signup = () => {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <form className={classes.form}>
          <h2>Sign Up</h2>
          <label className={classes.email}>
            <p>Email</p>
            <input type="email" placeholder="Enter email..." className={classes.input} required />
          </label>
          <label className={classes.password}>
            <p>Password</p>
            <input type="password" placeholder="Create password..." className={classes.input} required />
          </label>
          <label className={classes.confirmPassword}>
            <p>Confirm Password</p>
            <input type="password" placeholder="Confirm password..." className={classes.input} required />
          </label>
          <button type="submit" className={classes.btn}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};


export default Signup;