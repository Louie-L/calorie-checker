import { useState, useEffect } from 'react';

import Datatable from '../components/ui/Datatable';
import { db } from '../services/firebase';

function CalorieTablePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCalories, setLoadedCalories] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        db.ref().on('value', snap => {

            const data = snap.val();
            const loadedCalories = [];
            for (const key in data) {
                for (const id in data[key]) {
                    const calorie = {
                        id: id,
                        ...data[key][id]
                    };
                    loadedCalories.push(calorie);
                }
            }
            // const loadedCalories = JSON.stringify(data, null, 3)
            console.log(loadedCalories)
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
            <div>
                <Datatable data={loadedCalories} />
            </div>
        </section>
    );
}

export default CalorieTablePage;