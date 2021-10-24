import React from 'react';
import { useDispatch } from 'react-redux';
import { selectAll } from '../../redux/actions/actionCreator';
import Checkbox from '../Checkbox';

const TableHead = ({data, columns, isAllRowSelected}) => {
    const dispatch = useDispatch();

    const toggleSelectAll = (e) => {
        /** set data to empty when uncheked 
         * and dispatch and action to reducer
        */
        const selectedRows = e.target.checked ? data : [];
        dispatch(selectAll(selectedRows));
    }

    return (
        <thead className="table__header">
            <tr>
                <th role="columnheader" scope="col" className="table__checkbox">
                    <Checkbox updateCheckbox={(e) => toggleSelectAll(e)} checked={isAllRowSelected} />
                </th>
                {columns.map((column) => {
                    return <th role="columnheader" scope="col" key={column}>
                        {column}
                    </th>
                })}
                <th role="columnheader" scope="col">
                    Actions
                </th>
            </tr>
        </thead>
    )
}

export default TableHead;