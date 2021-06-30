
import Datatable from "../components/ui/Datatable";

const data = [
    {
        'column1': 'value1',
        'column2': 'value2'
    },
    {
        'column1': 'value3',
        'column2': 'value4'
    },
]

function BMIPage() {
    return (
        <section>
            <h1>BMI</h1>
            <Datatable data={data} />
        </section>
    );
}

export default BMIPage;