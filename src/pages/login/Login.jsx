import React from "react";
import classes from './Login.module.scss';

const Login = () => {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <form className={classes.form}>
          <h2>Log In</h2>
          <div className={classes.email}>
            <p>Email</p>
            <input type="email" placeholder="Enter your email..." className={classes.input} required />
          </div>
          <div className={classes.password}>
            <p>Password</p>
            <input type="password" placeholder="Enter your password..." className={classes.input} required />
          </div>
          <button type="submit" className={classes.btn}>Log In</button>
        </form>
      </div>
    </div>
  );
};


export default Login;