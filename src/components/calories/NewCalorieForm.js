import Card from '../ui/Card';
import classes from './NewCalorieForm.module.css';

function NewCalorieForm() {
  function submitHandler(event) {
    event.preventDefault();

    
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Calorie Title</label>
          <input type='text' required id='title' />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Calorie Image</label>
          <input type='url' required id='image' />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5'></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Calorie</button>
        </div>
      </form>
    </Card>
  );
}

export default NewCalorieForm;