import { addNewHobby } from "../actions/hobby";

const initialState = {
    list:[],
    activeId:null,
    del: null,
}
const hobbyReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type){
        case 'ADD_HOBBY': {
           return {
               ...state,
               list:[...state.list,action.payload],
           };
           
        }
        case 'SET_ACTIVE_HOBBY': {
            const newActiveId = action.payload.id;
            return {
                ...state,
                activeId: newActiveId
            };
        }
      
        case 'INCREMENT': {
        let a = state.list.map((item,index)=>{
        if(index === action.payload){
            return ({ 
                id: item.id +1,
                title : ``
            })
            }
            else{
                return item
            }
        })

            return {
              ...state,
              list : a
            }
        }
        case 'DEL_HOBBY':{
             let a = state.list.filter((item,index)=> index !== action.payload)
             return {
                ...state,
                list : a
              }
        }
        case 'DECREMENT':{
            let a = state.list.map((item,index) => {
                if(index === action.payload){
                    return ({ 
                        id: item.id - 1,
                        title : ``
                    })
                    }
                    else{
                        return item
                    }
                })
        
                    return {
                      ...state,
                      list : a
                    }
        
        }
        default:
            return state;
    }
    
}
export default hobbyReducer;