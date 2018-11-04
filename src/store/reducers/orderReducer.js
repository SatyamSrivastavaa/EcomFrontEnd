const ordersReducer = (defStore = [], action) => {
    switch(action.type){
        case 'FETCH_ORDERS':
            console.log('fetched orders: ', action.response);
            defStore = action.response;
            return defStore;

        default: 
            return defStore;
    }
};

export default ordersReducer;