import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, selectItem, unselectItem, updateItem } from '../../redux/actions/actionCreator';
import Checkbox from '../Checkbox';
import ActionToolbar from './ActionToolbar';

const TableBody = ({data, columns, selectedItems}) => {
    const [editRowId, setEditRowId] = useState(null);

    // Redux dispatch to update state
    const dispatch = useDispatch();

    const deleteRow = (row) => {
        dispatch(deleteItem(row.id));
    }

    const toggleCheckbox = (e, row) => {
        if (e.target.checked) {
            dispatch(selectItem(row.id));
        } else {
            dispatch(unselectItem(row.id));
        }
    }

    const isRowSelected = (row) => {
        // SelectedIems contains Id of rows which are selected
        return selectedItems.includes(row.id);
    }

    const updateRow = (e, row, column, index) => {
        row[column] = e.target.value;
        dispatch(updateItem({index: index, column: column, value: e.target.value}))
    }

    const editRow = (row) => {
        setEditRowId(row.id);
    }

    return (
        <tbody className="table__body">
            {data.map((row, rowIndex) => {
                const rowSelected = isRowSelected(row);

                return <tr key={row.id} className={`table__body__row  ${rowSelected ? 'row-selected' : ''}`}>
                    <td className="table__checkbox">
                        <Checkbox updateCheckbox={(e) => toggleCheckbox(e,row)} checked={rowSelected} />
                    </td>

                    {columns.map((column, index) => {
                        return <td key={`${row.id}_${index}`}>
                            { typeof row[column] !== 'object' ? 
                            row.id === editRowId ? 
                            <input type="text" value={row[column]} onChange={(e) => updateRow(e, row, column, rowIndex)} /> : row[column] : 
                            '' 
                            }
                        </td>
                    })}

                    <td>
                        <ActionToolbar editData={() => editRow(row)} deleteData={() => deleteRow(row)} />
                    </td>
                </tr>
            })}
        </tbody>
    )
}

export default TableBody;