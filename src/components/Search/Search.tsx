import React from "react";
import { useDispatch } from "react-redux";
import { setFilteredText } from "../../redux/actions/actionCreator";
import './_search.scss';

const Search = ({filteredText}) => {
    const dispatch = useDispatch();

    const updateFilteredText = (e) => {
        dispatch(setFilteredText(e.target.value))
    }

    return (
        <input type="text" className="gt__searchbar" placeholder="Search by name, email or role"
        value={filteredText} onChange={(e) => updateFilteredText(e)} />
    )
}

export default Search;