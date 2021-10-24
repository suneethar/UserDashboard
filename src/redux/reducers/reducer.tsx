import {ACTION_TYPES} from '../actions/actionTypes';

const initialState = {
    data: [],
    loading: false,
    error: false,
    pageNumber: 1,
    filteredText: '',
    filteredData: [],
    selectedData: []
}

const dataReducer = (state = initialState, action) => {
    let payload = action.payload;

    switch(action.type) {
        case ACTION_TYPES.setData:
            return { ...state, data: payload };

        case ACTION_TYPES.setPageNumber:
            return { ...state, pageNumber: payload };

        case ACTION_TYPES.setFilteredText:
            let filteredData = state.data.filter(item => 
                Object.keys(item).some(key => 
                item[key].toLowerCase().includes(payload.toLowerCase())
            ))
            return { ...state, filteredText: payload, filteredData: filteredData };

        case ACTION_TYPES.updateSelectedItem:
            return { ...state, slectedData: [...state.selectedData, payload] };

        case ACTION_TYPES.deleteItem:
            let data = state.data.filter((item) => item.id !== payload)
            return { ...state, data: data };

        case ACTION_TYPES.deleteSelectedItems: 
            let newData = state.data.filter((item) => !state.selectedData.includes(item.id));
            return { ...state, data: newData, selectedData: [] };

        case ACTION_TYPES.selectAll: 
            let selectedData = [];
            payload.forEach((item) => selectedData.push(item.id));
            return { ...state, selectedData: selectedData };

        case ACTION_TYPES.selectItem:
            return { ...state,  selectedData: [...state.selectedData, payload]};

        case ACTION_TYPES.unselectItem:
            let selectedItems = state.selectedData.filter((item) => item !== payload);
            return { ...state, selectedData: selectedItems };

        case ACTION_TYPES.updateItem:
            let tableData = [...state.data];
            tableData[payload.index][payload.column] = payload.value;
            return { ...state, data: tableData  };

        default:
            return state;
    }
}

export default dataReducer;