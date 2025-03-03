import classes from './title.module.scss'

const Title = () => {
    return (
        <div className={classes.titleHead}>
            <p className={classes.titleDay}>Today</p>
        </div>
    )
}

export { Title }