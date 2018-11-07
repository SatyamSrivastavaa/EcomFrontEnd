const authReducer = (defStore = [], action) => {
    switch (action.type) {
        case 'SIGN_IN':
            console.log('Signed in successfull:', action.response);
            defStore = action.response;
            return defStore;

        case 'SIGN_UP':
            console.log('Signed up successfull:', action.response);
            defStore = action.response;
            return defStore;

        case 'SIGN_OUT':
            console.log('Signed out successfull:', action.response);
            defStore = action.response;
            return defStore;

        default:
            return defStore;
    }
};

export default authReducer;