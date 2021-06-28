import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewCalorieForm.module.css';

function NewCalorieForm(props) {
  const nameInputRef = useRef();
  const catagoryInputRef = useRef();
  const calorieInputRef = useRef();
  const unitInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCatagory = catagoryInputRef.current.value;
    const enteredCalorie = calorieInputRef.current.value;
    const enteredUnit = unitInputRef.current.value;

    const calorieData = {
      name: enteredName,
      catagory: enteredCatagory,
      calorie: enteredCalorie,
      unit: enteredUnit,
    };

    props.onAddCalorie(calorieData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Food name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='catagory'>Food Catagory</label>
          <input type='text' required id='catagory' ref={catagoryInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='calorie'>Food Calorie</label>
          <input type='text' required id='calorie' ref={calorieInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='unit'>Calorie Unit</label>
          <input type='text' required id='unit' ref={unitInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Calorie</button>
        </div>
      </form>
    </Card>
  );
}

export default NewCalorieForm;