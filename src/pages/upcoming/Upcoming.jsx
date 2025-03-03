import React from "react";
import classes from './Upcoming.module.scss';

const Upcoming = () => {
    return (
        <div className={classes.container}>
            <div className={classes.titleHead}>
                <p className={classes.titleDay}>Today</p>
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