export const addNewHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        payload: hobby,
    }
}
export const setActiveHobby = (hobby ) => {
    return {
        type: 'SET_ACTIVE_HOBBY' ,
        payload: hobby
    }
}
export const delButton = (hobby ) => {
    return {
        type: 'DEL_HOBBY' ,
        payload: hobby
    }
}
export const increment = (index) =>{
    return {
        type: 'INCREMENT',
        payload: index
    }
}
export const decrement = (index) =>{
    return {
        type: 'DECREMENT',
        payload: index
    }
}
