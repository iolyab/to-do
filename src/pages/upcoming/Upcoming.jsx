import React from "react";
import classes from './Upcoming.module.scss';

const Upcoming = () => {
    return (
        <div className={classes.container}>
            <div className={classes.headTitle}>
                <p className={classes.dayTitle}>Today</p>
            </div>
            <div className={classes.priority}>
                <p className={classes.priorityTitle}>High priority</p>
            </div>
            <div className={classes.priority}>
                <p className={classes.priorityTitle}>Medium priority</p>
            </div>
            <div className={classes.priority}>
                <p className={classes.priorityTitle}>Low priority</p>
            </div>
        </div>
    );
};

export default Upcoming