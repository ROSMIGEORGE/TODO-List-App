export default (state=true,action) => {
    switch(action.type){
        case 'CLEAR_DONE':
            return true;
        case 'DONE':
            return false;
        default:
            return state
    }
}