export const addCart = (index) => {
    return {
        type: 'ADD_TO_CART',
        payload: index
    }
}
export const increment = (item) => {
    return {
        type: 'INCREMENT',
        payload: item
    }
}
export const decrement = (item) => {
    return {
        type: 'DECREMENT',
        payload: item
    }
}
export const deleteproduct = (item) => {
    return {
        type: 'DELETE',
        payload: item
    }
}
