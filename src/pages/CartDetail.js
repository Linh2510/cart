import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, deleteproduct, increment } from '../actions/cart'

CartDetail.propTypes = {
    listCart: PropTypes.array,
    
}
CartDetail.defaultProps = {
    listCart : []
}
function CartDetail() {
    let tong = 0;
    const listCart = useSelector(state => state.product.listCart) ;
    const dispatch = useDispatch();
   
    const handleClickInc = (item,index) =>{
        const action = increment(item);
        dispatch(action);
    }
    const handleClickDec =(item,index ) =>{
        const action = decrement(item);
        dispatch(action);
    }
    const handleClickDel = (item,index) =>{
        const action = deleteproduct(item);
        dispatch(action)
    }
    const tongTien = (listCart) =>{
        console.log(listCart)
        let tong = 0;
        listCart.map((item,index) => {
            tong += item.price * item.qty ;
        })
        return tong
    }
        return (
            
            <div>
                <p>Chi tieets gio hang</p>
                <table >
                <tbody><tr>
                        <th>Ten san pham</th>
                        <th>gia sp</th>
                        <th>so luong</th>
                        <th >Total</th>   
                        <th>Action</th>                 
                    </tr>
                {
                    
                  listCart.map((item,index) => (
                      <React.Fragment>
                    <tr >
                        <td>  {item.name}</td>
                        <td>${item.price}</td>
                        <td><button className="inc" onClick={() => handleClickInc(item,index)}>+</button>{item.qty}<button className="dec" onClick={() => handleClickDec(item,index)}>-</button></td>
                        <td>${item.price * item.qty}</td>
                        <td><button onClick={() => handleClickDel(item,index)}>X</button></td>
                    </tr>
                    </React.Fragment>
                   
                ))
                }
                </tbody>
                </table>
               
            <p className="pt-5">TONG GIA TIEN: ${tongTien(listCart)} </p>
            </div>
        )
    
}
export default CartDetail
