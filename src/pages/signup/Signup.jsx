import React from "react";
import classes from './Signup.module.css';

const Signup = () => {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <form className={classes.form}>
          <h2>Sign Up</h2>
          <div className={classes.email}>
            <p>Email</p>
            <input type="email" placeholder="Enter your email..." className={classes.input} required />
          </div>
          <div className={classes.password}>
            <p>Password</p>
            <input type="password" placeholder="Create your password..." className={classes.input} required />
          </div>
          <button type="submit" className={classes.btn}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};


export default Signup;