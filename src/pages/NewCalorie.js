import { useHistory } from 'react-router-dom';

import NewCalorieForm from '../components/calories/NewCalorieForm';

function NewCaloriePage() {  
  const history = useHistory();

  function addCalorieHandler(calorieData) {
    fetch(
      'https://calorie-checker-bc80f-default-rtdb.asia-southeast1.firebasedatabase.app/calories.json',
      {
        method: 'POST',
        body: JSON.stringify(calorieData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h2>新增卡路里</h2>
      <NewCalorieForm onAddCalorie={addCalorieHandler}/>
    </section>
  );
}

export default NewCaloriePage;