import React from 'react';
import { useDispatch } from 'react-redux';
import { selectAll, setPageNumber } from '../../redux/actions/actionCreator';
import './_pagination.scss';

const Pagination = ({totalPages, selectedPage}) => {
    const dispatch = useDispatch();

    const pageList = Array.from({length: totalPages}, (_, i) => i + 1);

    const updatePageNumber = (selectedPage) => {
        dispatch(setPageNumber(selectedPage));
        // Clear all selection when page changes
        dispatch(selectAll([]));
    }

    const gotoPreviousPage = () => {
        if (totalPages > 0) {
            dispatch(setPageNumber(selectedPage-1));
        }
        
    }

    const gotoNextPage = () => {
        if (totalPages > 0) {
            dispatch(setPageNumber(selectedPage+1));
        }
    }

    return (
        <div className="pagination">
            <div></div>
            <ul className="pagination__lists">
                <li>
                    <button className={`btn ${selectedPage === 1 || totalPages == 0 ? 'btn--disabled': ''}`} onClick={() => gotoPreviousPage()}>
                        Previous
                    </button>
                </li>
                {pageList.map((pageNo) => {
                    return <li key={pageNo}>
                        <button className={`btn ${selectedPage === pageNo ? 'btn--primary': ''}`} 
                        onClick={() => updatePageNumber(pageNo)}>
                            {pageNo}
                        </button>
                    </li>
                })}
                <li>
                    <button className={`btn ${selectedPage ===  totalPages || totalPages === 0? 'btn--disabled': ''}`} onClick={() => gotoNextPage()}>
                        Next
                    </button>
                </li>
            </ul>
        </div>
        
    )
}

export default Pagination;