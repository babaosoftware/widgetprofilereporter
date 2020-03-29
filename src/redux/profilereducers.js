const profileReducer = (state = {sort: 'time', result: [], loading: false}, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'SORT_BY_NAME':
            return {...state, sort: 'name'};
        case 'SORT_BY_COUNT':
            return {...state, sort: 'count'};
        case 'SORT_BY_TIME':
            return {...state, sort: 'time'};
        case 'LOADING':
            return {...state, loading: true, result: []};
        case 'LOADED':
            return {...state, loading: false, result: action.result};
        default:
            return state;
    }
}
  
export default profileReducer;