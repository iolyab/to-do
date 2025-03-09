import React from "react";
import classes from './Upcoming.module.scss';
import { Title } from '../../components/shared/title/Title';

const Upcoming = () => {
    return (
        <div className={classes.container}>
            <Title />
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