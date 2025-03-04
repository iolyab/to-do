import React from 'react';
import { useState } from 'react';
import  classes from './Main.module.scss';
import { Button } from '../shared/button/Button';
import { Input } from '../shared/input/Input';

const Main = () => {
    return(
        <div className={classes.main}>
            <div className={classes.titleHead}>
                <p className={classes.titleDay}>Today</p>
            </div>
            <div className={classes.inputContainer}>
                <Input />
                <Button />
            </div>
            <div className={classes.tasksContainer}>
                <div className='tasks-to-do'>
                </div>
            </div>
        </div>
    )
}
export default Main;