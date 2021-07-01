import { Card } from 'react-bootstrap';
import classes from './CalorieItem.module.css';

function CalorieItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <Card.Body>
          <div className={classes.content}>
            <h3>{props.catagory} - {props.name}</h3>
            <span>{props.unit} - {props.calorie}cal</span>
          </div>
        </Card.Body>
      </Card>
    </li>
  );
}

export default CalorieItem;