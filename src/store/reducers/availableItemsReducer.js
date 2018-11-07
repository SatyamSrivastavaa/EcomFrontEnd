const itemsReducer = (defStore = [], action) => {
    switch(action.type){
        case 'FETCH_AVAILABLE_ITEMS':
            console.log('fetched AvailableItems:', action.response);
            defStore = action.response[0].items;
            return defStore;

        default: 
            return defStore;
    }
};

export default itemsReducer;