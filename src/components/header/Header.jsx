import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return(
        <header className={classes.header}>
            <a href="/" className={classes.logo}>
                <img src="/assets/logo.png" alt="Logo"/>
            </a>

            <div className={classes.authButtons}>
                <img src="/assets/auth.png" alt="favicon" className={classes.favicon} />
                <a href="login">
                    <button className={classes.logIn}>Log In</button>
                </a>
                <a href="signup">
                    <button className={classes.signUp}>Sign Up</button>
                </a>
            </div>
        </header>
    )
}
export default Header;