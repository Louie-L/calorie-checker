import CalorieItem from './CalorieItem';
import classes from './CalorieList.module.css';

function CalorieList(props) {
  return (
    <ul className={classes.list}>
      {props.calories.map((item) => (
        <CalorieItem
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          catagory={item.catagory}
          calorie={item.calorie}
          unit={item.unit}
        />
      ))}
    </ul>
  );
}

export default CalorieList;