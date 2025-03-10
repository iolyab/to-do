import React from "react";
import classes from "./Main.module.scss";
import { Button } from "../shared/button/Button";
import { Input } from "../shared/input/Input";
import { Layout } from "../layout/Layout";
import { Title } from "../shared/title/Title";

const Main = () => {
  return (
    <Layout>
      <div className={classes.main}>
        <Title
          titleHeadClassName={classes.customTitleStyle}
          customStyles={{ gridColumn: "2" }}
        />
        <div className={classes.inputContainer}>
          <Input />
          <Button label="Add" size="medium" />
        </div>
        <div className={classes.tasksContainer}>
          <div className="tasks-to-do"></div>
        </div>
      </div>
    </Layout>
  );
};
export default Main;
