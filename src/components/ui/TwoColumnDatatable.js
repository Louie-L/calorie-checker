/*
[
    {
        'column1': 'column2',
    },
    {
        'row1': 'value1',
        'row2': 'value2'
    }
]
*/

import { Table } from 'react-bootstrap'

function TwoColumnDatatable({ data }) {
    return (
        <Table className="mt-3 mb-3" striped hover>
            <thead> {
                Object.keys(data[0]).map((key, index) => (
                    <tr><td>{key}</td><td>{data[0][key]}</td></tr>
                ))}
            </thead>
            <tbody> {
                Object.keys(data[1]).map((key, index) => (
                    <tr><td>{key}</td><td>{data[1][key]}</td></tr>
                ))}
            </tbody>
        </Table>
    );
}

export default TwoColumnDatatable;