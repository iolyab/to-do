import React from 'react';
import { useNavigate } from "react-router-dom";
import classes from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();
    return(
        <header className={classes.header}>
            <img src="/assets/logo.png" alt="Logo" className={classes.logo} onClick={() => navigate("/")}/>
            <div className={classes.authButtons}>
                <img src="/assets/auth.png" alt="favicon" className={classes.favicon} />
                <button className={classes.logIn} onClick={() => navigate("/login")}>Log In</button>
                <button className={classes.signUp} onClick={() => navigate("/signup")}>Sign Up</button>
            </div>
        </header>
    )
}
export default Header;