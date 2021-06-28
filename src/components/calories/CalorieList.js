import CalorieItem from './CalorieItem';
import classes from './CalorieList.module.css';

function CalorieList(props) {
  return (
    <ul className={classes.list}>
      {props.calories.map((calorie) => (
        <CalorieItem
          key={calorie.id}
          id={calorie.id}
          image={calorie.image}
          title={calorie.title}
          description={calorie.description}
        />
      ))}
    </ul>
  );
}

export default CalorieList;