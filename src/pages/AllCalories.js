import { useState, useEffect } from 'react';

import CalorieList from '../components/calories/CalorieList';

function AllCaloriesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCalories, setLoadedCalories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://calorie-checker-bc80f-default-rtdb.asia-southeast1.firebasedatabase.app/calories.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const calories = [];

        for (const key in data) {
          const calorie = {
            id: key,
            ...data[key]
          };

          calories.push(calorie);
        }

        setIsLoading(false);
        setLoadedCalories(calories);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Calories</h1>
      <CalorieList calories={loadedCalories} />
    </section>
  );
}

export default AllCaloriesPage;