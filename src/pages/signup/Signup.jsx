import React, { useState } from "react";
import classes from "./Signup.module.scss";
import { Btn } from "../../components/shared/button/Button";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isEmailValid = email.trim() !== "";
  const isPasswordValid = password.trim() !== "";
  const isConfirmPasswordValid = confirmPassword.trim() !== "";
  const doPasswordsMatch = password === confirmPassword;

  const isFormValid =
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    doPasswordsMatch;

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
              onChange={(e) => setEmail(e.target.value)}
              className={classes.input}
              required
            />
          </label>
          <label className={classes.password}>
            <p>Password</p>
            <input
              type="password"
              placeholder="Create password..."
              onChange={(e) => setPassword(e.target.value)}
              className={classes.input}
              required
            />
          </label>
          <label className={classes.confirmPassword}>
            <p>Confirm Password</p>
            <input
              type="password"
              placeholder="Confirm password..."
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={classes.input}
              required
            />
          </label>
          <Btn
            label="Sign Up"
            size="small"
            className={classes.btn}
            disabled={!isFormValid}
          />
          {!doPasswordsMatch && confirmPassword && (
            <p style={{ color: "red" }}>Passwords do not match.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
