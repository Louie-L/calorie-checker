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

import { Table } from 'react-bootstrap'

function Datatable({ data }) {
    const columns = data[0] && Object.keys(data[0])

    return (
        <Table striped hover>
            <thead>
                <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
            </thead>
            <tbody>
                {data.map(row => (
                    <tr> {
                        columns.map((column) => (
                            <td>{row[column]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default Datatable;