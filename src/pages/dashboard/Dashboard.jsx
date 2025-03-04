import React from "react";
import classes from './Dashboard.module.scss';

const Dashboard = () => {
    return (
        <div className={classes.container}>
            <div className={classes.titleHead}>
                <p className={classes.titleDay}>Today</p>
            </div>
            <div className={classes.tasks}>
                <p className={classes.tasksTitle}>In progress</p>
            </div>
            <div className={classes.tasks}>
                <p className={classes.tasksTitle}>Completed</p>
            </div>
            <div className={classes.workPersonalContainer}>
                <div className={classes.tasks}>
                    <p className={classes.tasksTitle}>Work</p>
                </div>
                <div className={classes.tasks}>
                    <p className={classes.tasksTitle}>Personal</p>
                </div>
            </div>
        </div>
    )
};


export default Dashboard;