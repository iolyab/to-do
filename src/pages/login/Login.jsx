import React, { useState } from "react";
import classes from "./Login.module.scss";
import { Btn } from "../../components/shared/button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasTyped, setHasTyped] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setHasTyped(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setHasTyped(true);
  };

  const isEmailValid = email.trim() !== "" && email.includes("@");
  const isPasswordValid = password.trim() !== "";

  const isFormValid = isEmailValid && isPasswordValid;

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
              value={email}
              onChange={handleEmailChange}
              className={classes.input}
            />
          </label>

          <label className={classes.password}>
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter your password..."
              value={password}
              onChange={handlePasswordChange}
              className={classes.input}
            />
          </label>

          <Btn
            label="Log In"
            size="small"
            className={classes.btn}
            disabled={hasTyped && !isFormValid}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
