import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { increment,delButton,decrement,setActiveHobby } from '../actions/hobby'
import './index.css'

HoobyList.propTypes = {
    hobbyList: PropTypes.array,
    activeId : PropTypes.number,
    onHobbyClick: PropTypes.func, 
}
HoobyList.defaultProps = {
    hobbyList : [],
    activeId: null,
    onHobbyClick:null
}
function HoobyList(props) {
    const {hobbyList,activeId,onHobbyClick} = props
    const dispatch = useDispatch ();
    
    const handleClick = (hobby) =>{
        if(onHobbyClick){
            onHobbyClick(hobby);
        }
    }
    const handleIncrement = (hobby,index) => {
            const action = increment(index)
            dispatch(action) 
       
    }
    const handleDecrement = (hobby,index) => {
            const action = decrement(index)
            dispatch(action)      
    }
    const hadleClickButton = (hobby,index) =>{
            const action = delButton(index)
            dispatch(action)
    }
        return (
            <div>
                <ul>
                {
                    hobbyList.map((hobby,index) => (
                        <React.Fragment>
                        <li key={index} 
                        className={hobby.id === activeId ? "active" : ''}
                        onClick ={ () => handleClick(hobby)}
                        >{hobby.id}</li>
                        <ul className="button">
                            <li> <button onClick= {() => handleIncrement(hobby,index)}>+</button></li>
                            <li><button onClick={() => handleDecrement(hobby,index)} >-</button></li>
                            <li><button onClick = {() => hadleClickButton(hobby,index)} >x</button></li>
                        </ul>
                    </React.Fragment>
                    ))
                }
                </ul>
            </div>
        )

}
export default HoobyList
