import { useState, useEffect } from 'react';

import Datatable from '../components/ui/Datatable';
import { db } from '../services/firebase';

import classes from './CalorieTable.module.css';

function CalorieTablePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCalories, setLoadedCalories] = useState([]);
    const [q, setQ] = useState("");
    const [searchColumns, setSearchColumns] = useState(['name', 'catagory'])

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

    const columns = ['name','catagory','calorie']

    return (
        <section>
            <div>
                Search : <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>            
            <div>
                {columns && columns.map(column => <label className={classes.filter_item}>
                    <input type="checkbox" checked={searchColumns.includes(column)} className={classes.filter_item}
                    onChange={(e) => {
                        const checked = searchColumns.includes(column)
                        setSearchColumns(prev => checked
                            ? prev.filter(sc => sc !== column)
                            : [...prev, column])
                    }} />
                    {column}</label>)}
            </div>
            <Datatable data={search(loadedCalories)} />
        </section>
    );
}

export default CalorieTablePage;