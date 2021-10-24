import React, { useEffect } from 'react';
import Table from '../Table/Table';
import { useSelector, useDispatch, RootStateOrAny} from 'react-redux'
import {fetchData} from '../../redux/middleware/middleware';
import Pagination from '../Pagination';
import Search from '../Search';
import './_userDetails.scss';
import { deleteSelectedItems } from '../../redux/actions/actionCreator';

const ITEMSPERPAGE = 10;

const UserDetails = () => {
    const dispatch = useDispatch();
    let state = useSelector((state:RootStateOrAny )=> {
        return state;
    })

    let pageNumber = state.pageNumber;
    let tableData = state.filteredText ? state.filteredData : state.data;
    let selectedData = state.selectedData;

    const getTableData = () => {
        const startIndex = (pageNumber -1) * ITEMSPERPAGE;
        const endIndex = (pageNumber * ITEMSPERPAGE);
        // Return tableData based on page selected
        return tableData.slice(startIndex, endIndex);
    }

    const getTotalPages = () => {
        return Math.floor(tableData.length / ITEMSPERPAGE);
    }

    const deleteSelectedRows = () => {
        dispatch(deleteSelectedItems())
    }

    useEffect(() => {
        const url = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
        dispatch(fetchData(url));
    }, [])

    return (
        <div className="gt__main">
            <div className="gt__main__toolbar">
                <button onClick={() => deleteSelectedRows()} 
                className={`btn btn--danger ${selectedData.length === 0 ? 'btn--disabled': ''}`}>
                    Delete Selected
                </button>
                <Search filteredText={state.filteredText} />
            </div>
            
            { tableData && tableData.length > 0 ? 
                <Table data={getTableData()} selectedItems={selectedData} />
                : 
                <div>No Results Found</div>
            }
            <Pagination totalPages={getTotalPages()} selectedPage={pageNumber} />
        </div>
    )
}

export default UserDetails;