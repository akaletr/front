import classes from "./Navigation.module.css";

const Navigation = () => {
    return (
        <div className={classes.container}>
            <ul className={classes.list}>
                <li className={classes.item}><a href="#">Profile</a></li>
                <li className={classes.item}><a href="#">Friends</a></li>
                <li className={classes.item}><a href="#">Places</a></li>
                <li className={classes.item}><a href="#">Feed</a></li>
                <li className={classes.item}><a href="#">Settings</a></li>
            </ul>
        </div>
    )
}

export default Navigation