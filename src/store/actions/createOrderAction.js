import axios from 'axios';

export const CreateOrder = (order) => {
    var request = axios.post('link to create order', order, {
        headers: { 'Content-Type': 'application/json' } 
    });

    return (dispatch) => {
        request.then(
            (response) => {
                dispatch({
                    type: 'FETCH_ORDERS',
                    response: response.data
                })
            }
        );
    }
};

export function FetchAvailableItems() {
    var request = axios.get('https://api.myjson.com/bins/1g1bxa');

    return (dispatch) => {
        request.then(
            (response) => {
                dispatch({
                    type: 'FETCH_AVAILABLE_ITEMS',
                    response: response.data
                })
            }
        );
    }
}

export function FetchOrders() {
    var request = axios.get('https://api.myjson.com/bins/18g8wm');

    return (dispatch) => {
        request.then(
            (response) => {
                dispatch({
                    type: 'FETCH_ORDERS',
                    response: response.data
                })
            }
        );
    }
}

export function DeleteOrder(id) {
    var request = axios.delete('link to delete orders?id=' + id);

    return (dispatch) => {
        request.then(
            (response) => {
                dispatch({
                    type: 'FETCH_ORDERS',
                    response: response.data
                })
            }
        );
    }
};