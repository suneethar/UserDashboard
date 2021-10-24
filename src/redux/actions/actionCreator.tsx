import {ACTION_TYPES} from './actionTypes';

export const getData = (payload) => {
    return {
        type: ACTION_TYPES.getData,
        payload: payload
    }
}

export const setData = (payload) => {
    return {
        type: ACTION_TYPES.setData,
        payload: payload
    }
}

export const setPageNumber = (payload) => {
    return {
        type: ACTION_TYPES.setPageNumber,
        payload: payload
    }
}

export const setFilteredText = (payload) => {
    return {
        type: ACTION_TYPES.setFilteredText,
        payload: payload
    }
}

export const updateSelectedItem = (payload) => {
    return {
        type: ACTION_TYPES.updateSelectedItem,
        payload: payload
    }
}

export const deleteItem = (payload) => {
    return {
        type: ACTION_TYPES.deleteItem,
        payload: payload
    }
}

export const selectAll = (payload) => {
    return {
        type: ACTION_TYPES.selectAll,
        payload: payload
    }
}

export const selectItem = (payload) => {
    return {
        type: ACTION_TYPES.selectItem,
        payload: payload
    }
}

export const unselectItem = (payload) => {
    return {
        type: ACTION_TYPES.unselectItem,
        payload: payload
    }
}

export const updateItem = (payload) => {
    return {
        type: ACTION_TYPES.updateItem,
        payload: payload
    }
}

export const deleteSelectedItems = () => {
    return {
        type: ACTION_TYPES.deleteSelectedItems,
        payload: []
    }
}

