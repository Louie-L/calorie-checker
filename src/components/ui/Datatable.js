/*
[
    {
        'column1': 'value1',
        'column2': 'value2'
    },
    {
        'column1': 'value3',
        'column2': 'value4'
    },
]
*/


function Datatable({ data }) {
    const columns = data[0] && Object.keys(data[0])

    return (
        <table striped hover border>
            <thead>
                <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
            </thead>
            <tbody>
                {data.map(row => (
                    <tr>
                        {
                            columns.map((column) => (
                                <td>{row[column]}</td>
                            ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Datatable;