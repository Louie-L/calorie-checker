import classes from './RedTag.module.css'

function RedTag(props) {
    return (
        <span className={classes.tag}>
            {props.text}
        </span>
    );
}

export default RedTag;