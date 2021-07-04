import { useState, useEffect } from 'react';

import CalorieDatatable from '../components/calories/CalorieDatatable';
import { db } from '../services/firebase';

import classes from './CalorieTable.module.css';

function CalorieTablePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCalories, setLoadedCalories] = useState([]);
    const [q, setQ] = useState("");
    const [searchColumns, setSearchColumns] = useState(['name', 'catagory'])
    const columns = ['name', 'catagory', 'calorie']

    function search(rows) {
        return rows.filter((row) =>
            searchColumns.some(
                (column) => row[column].toLowerCase().indexOf(q.toLowerCase()) > -1)
        )
    }

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
            // console.log(loadedCalories)
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
                Search : <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <div>
                {columns && columns.map(column => <label style={{ margin: '1rem 0.6rem 1rem 0' }}>
                    <input type="checkbox" checked={searchColumns.includes(column)} style={{ margin: '0 0.3rem 0 0' }}
                        onChange={(e) => {
                            const checked = searchColumns.includes(column)
                            setSearchColumns(prev => checked
                                ? prev.filter(sc => sc !== column)
                                : [...prev, column])
                        }} />
                    {column}</label>)}
            </div>
            <CalorieDatatable data={search(loadedCalories)} />
        </section>
    );
}

export default CalorieTablePage;