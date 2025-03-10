import React from "react";
import classes from "./Upcoming.module.scss";
import { Title } from "../../components/shared/title/Title";
import { Layout } from "../../components/layout/Layout";

const Upcoming = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Upcoming;
