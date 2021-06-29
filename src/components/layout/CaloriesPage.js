import { useState, useEffect } from 'react';

import CalorieList from '../calories/CalorieList';
import { db } from '../../services/firebase';

function CaloriesPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCalories, setLoadedCalories] = useState([]);

  useEffect(() => {
    setIsLoading(true);  
    db.ref(props.id).on('value', snap => {
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
      <h1>{props.title}</h1>
      <CalorieList calories={loadedCalories} />
    </section>
  );
}

export default CaloriesPage;