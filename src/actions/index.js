export const addTask = task => {
    return {
        type: 'ADD',
        payload: task
    }
}

export const editTask = (index,newState) => {
    return {
        type: 'EDIT',
        payload: {index,newState}
    }
}

export const doneTask = task => {
    return{
        type: 'DONE',
        payload: task
    }
}

export const clearTask = () => {
    return {
        type: 'CLEAR_DONE',
        payload: null
    }
}