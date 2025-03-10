import classes from "./title.module.scss";

const Title = ({ titleHeadClassName, customStyles }) => {
  return (
    <div
      className={`${classes.titleHead} ${titleHeadClassName}`}
      style={customStyles}
    >
      <p className={classes.titleDay}>Today</p>
    </div>
  );
};

export { Title };
