import axios from 'axios';

export const SignIn = (body) => {
    var request = axios.post('http://localhost:3000/api/Users/login?access_token=ZOSTVXB6rfgnQWwJ6uGVFdJY6Wp3tnU6OzZYYaPYMPBBZsGu17Zbexr3AokZAJUq', body, {
        headers: { 'Content-Type': 'application/json' } 
    });

    return (dispatch) => {
        request.then(
            (response) => {
                dispatch({
                    type: 'SIGN_IN',
                    response: response.data
                })
            }
        );
    }
};

export const SignUp = (body) => {
    var request = axios.post('http://localhost:3000/api/Users?access_token=ZOSTVXB6rfgnQWwJ6uGVFdJY6Wp3tnU6OzZYYaPYMPBBZsGu17Zbexr3AokZAJUq', body, {
        headers: { 'Content-Type': 'application/json' } 
    });

    return (dispatch) => {
        request.then(
            (response) => {
                dispatch({
                    type: 'SIGN_UP',
                    response: response.data
                })
            }
        );
    }
};

export const SignOut = (id) => {
    var request = axios.post('http://localhost:3000/api/Users/logout?access_token=' + id, {}, {
        headers: { 'Content-Type': 'application/json' }
    });

    return (dispatch) => {
        request.then(
            (response) => {
                dispatch({
                    type: 'SIGN_OUT',
                    response: response.data
                })
            }
        );
    }
};