import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addCart} from '../actions/cart'
import CartDetail from './CartDetail'

function Cart (props) {
   const dispatch = useDispatch();
    const cart = useSelector(state => state.product.cart);
    const handleClickCart = (item,index) =>{
        const newProduct = {...item,qty:1};
        const action = addCart(newProduct)
        dispatch(action)
       
    }
    // console.log(cart)
        return (
            <div className="container">
                <div className="row pt-5">
                <div className= "col-8">
                    <div className="row">
                        {
                            cart.map((item,index) => (
                                <React.Fragment>
                                    <div className="col-3" key={index}>
                                        <p>{item.name}</p>
                                        <p>Giá: {item.price} $</p>
                                        <button id={item.id} onClick={() => handleClickCart(item,index)}>Add to cart</button>
                                    </div>
                                 </React.Fragment>
                             
                            ))
                        }
                    </div>
                </div>
                <div className="col-4">
                   <CartDetail />
                </div>
                </div>
            </div>
        )
    
}
export default Cart
