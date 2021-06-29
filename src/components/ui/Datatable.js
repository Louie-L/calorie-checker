import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import 'react-bootstrap-table/css/react-bootstrap-table.css';
import classes from './Datatable.module.css';
export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BootstrapTable data={this.props.data} striped hover>
                <TableHeaderColumn dataField='id' isKey hidden>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name' width='40%' tdStyle={{'whiteSpace':'normal'}}>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='catagory' tdStyle={{'whiteSpace':'normal'}}>Catagory</TableHeaderColumn>
                <TableHeaderColumn dataField='calorie' tdStyle={{'whiteSpace':'normal'}}>Calorie</TableHeaderColumn>
                <TableHeaderColumn dataField='unit' tdStyle={{'whiteSpace':'normal'}}>Unit</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}
