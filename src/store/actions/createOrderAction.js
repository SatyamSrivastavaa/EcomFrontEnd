import axios from 'axios';

export const CreateOrder = (order, id) => {
    var request = axios.post('http://localhost:3000/api/orders?access_token=' + id, order, {
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

export function FetchAvailableItems(id) {
    var request = axios.get('http://localhost:3000/api/ItemsInStocks?access_token=' + id);

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

export function FetchOrders(id) {
    var request = axios.get('http://localhost:3000/api/orders?access_token=' + id);
    

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