export default (state=[],action)=>{
    switch(action.type){
        case 'ADD':
            return [...state,{...action.payload,status:'undone'}];
        case 'CLEAR_DONE':
            const newState = state.filter(item=>item.status === 'undone');
            return [...newState];
        case 'EDIT':
            state[action.payload.index] = action.payload.newState;
            return [...state];
        case 'DONE':
            const index = state.indexOf(action.payload);
            state[index] = {...action.payload,status:'done'};
            return [...state];
        default:
            return state;
    }
}