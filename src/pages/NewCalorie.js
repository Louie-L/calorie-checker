import NewCalorieForm from '../components/calories/NewCalorieForm';

function NewCaloriePage() {
  function addMeetupHandler(calorieData) {
    fetch(
      'https://calorie-checker-bc80f-default-rtdb.asia-southeast1.firebasedatabase.app//calories.json',
      {
        method: 'POST',
        body: JSON.stringify(calorieData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  return (
    <section>
      <h1>Add New Calorie</h1>
      <NewCalorieForm onAddCalorie={addMeetupHandler}/>
    </section>
  );
}

export default NewCaloriePage;