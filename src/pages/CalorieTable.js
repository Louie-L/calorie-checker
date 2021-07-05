import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap'
import CalorieDatatable from '../components/calories/CalorieDatatable';
import { db } from '../services/firebase';

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
            <Form>
                <Form.Group className="mb-3" controlId="formSearch">
                    <Form.Control type="text" placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} />
                    <div key={'inline-checkbox'} className="mt-3">
                        {columns && columns.map(column => (
                            <Form.Check
                                inline
                                type="checkbox"
                                label={column}
                                checked={searchColumns.includes(column)}
                                onChange={(e) => {
                                    const checked = searchColumns.includes(column)
                                    setSearchColumns(prev => checked
                                        ? prev.filter(sc => sc !== column)
                                        : [...prev, column])
                                }}
                            />
                        ))}
                    </div>
                </Form.Group>
            </Form>
            <CalorieDatatable data={search(loadedCalories)} />
        </section>
    );
}

export default CalorieTablePage;