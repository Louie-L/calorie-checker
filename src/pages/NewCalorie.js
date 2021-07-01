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
      <h1 className="mb-5">新增卡路里</h1>
      <NewCalorieForm onAddCalorie={addCalorieHandler}/>
    </section>
  );
}

export default NewCaloriePage;