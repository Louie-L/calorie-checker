import { useState, useEffect } from 'react';

import CalorieList from '../calories/CalorieList';
import { db } from '../../services/firebase';

function CaloriesPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCalories, setLoadedCalories] = useState([]);

  useEffect(() => {
    setIsLoading(true);  
    db.ref(props.id).on('value', snap => {
      const loadedCalories = snap.val();
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
      <h1 className="mb-5">{props.title}</h1>
      <CalorieList calories={loadedCalories} />
    </section>
  );
}

export default CaloriesPage;