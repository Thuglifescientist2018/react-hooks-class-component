
const initialState = {
    searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
    console.log("action from reducer: ", action);
    switch(action.type) {
        case 'CHANGE_SEARCH_FIELD':
            return {...state, searchField: action.payload};
        default:
            return state;
    }
}