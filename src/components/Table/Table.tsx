import React from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';
import './_table.scss';

const Table = ({data, selectedItems}) => {
    const dataKeys = Object.keys(data[0]);
    let columns = dataKeys.filter((key) => key !== 'id');
    const isAllRowsSelected = data.length === selectedItems.length;    

    return (
        <table className="table">
            <TableHead columns={columns} data={data} isAllRowSelected={isAllRowsSelected}></TableHead>
            <TableBody columns={columns} data={data} selectedItems={selectedItems}></TableBody>
        </table>
    )
}

export default Table;