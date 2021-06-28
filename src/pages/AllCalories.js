import { useState, useEffect } from 'react';

import CalorieList from '../components/calories/CalorieList';
import { db } from '../services/firebase';

function AllCaloriesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCalories, setLoadedCalories] = useState([]);

  useEffect(() => {
    setIsLoading(true);  
    db.ref('calories').on('value', snap => {
      const data = snap.val();
      const loadedCalories = [];
      for (const key in data) {
        const calorie = {
          id: key,
          ...data[key]
        };
        loadedCalories.push(calorie);
      }
      setIsLoading(false);
      setLoadedCalories(loadedCalories);
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