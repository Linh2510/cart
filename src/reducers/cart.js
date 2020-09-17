import { object } from "prop-types";

const initialState = {
     cart : [
        {
            id:1,
            name: "san pham a",
            price:100,
            // qty:1
        },
        {
            id:2,
            name:"san pham b",
            price:200,
        },
        {
            id:3,
            name:"san pham c",
            price:150,
        },
        {
            id:4,
            name:"san pham d",
            price:100,
        }
    ],
    listCart:[]
    
}
const addToCart = (state = initialState, action) => {
    console.log(action)
    switch (action.type){
        case 'ADD_TO_CART': {
            let updateCart = [...state.listCart]
            let index = updateCart.findIndex(item => item.id === action.payload.id );
            if(index !== -1) {
                updateCart[index].qty += 1;
            }
            else{
                updateCart.push(action.payload)
            }
            state.listCart = updateCart;
            return {...state}
        }
        case 'INCREMENT' : {
            let updateCart = [...state.listCart]
            let index = updateCart.findIndex(item => item.id === action.payload.id );
            updateCart[index].qty += 1;
            state.listCart = updateCart;
            return {...state}
           
        }
        case 'DECREMENT': {
            let updateCart = [...state.listCart]
            let index = updateCart.findIndex(item => item.id === action.payload.id );
            updateCart[index].qty -= 1;
            state.listCart = updateCart;
            return {...state}
        }
        case 'DELETE':{
            let fil = state.listCart.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                listCart: fil
            }
        }
        default:
            return state;
    }
    
}
export default addToCart;