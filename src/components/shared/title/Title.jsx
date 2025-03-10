import classes from "./title.module.scss";

const Title = ({ titleHeadClassName }) => {
  return (
    <div className={`${classes.titleHead} ${titleHeadClassName}`}>
      <p className={classes.titleDay}>Today</p>
    </div>
  );
};

export { Title };
