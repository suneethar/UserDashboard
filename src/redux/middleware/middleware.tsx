import { setData } from '../actions/actionCreator';

export const fetchData = (url) => (dispatch) => {
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        return dispatch(setData(data))
    })
    .catch(error => console.log(error))
}