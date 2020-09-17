import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HoobyList from './HoobyList';
import {addNewHobby, setActiveHobby} from '../actions/hobby'

HomePage.propTypes ={};
const RandomNumber = () =>{
    return  1000 + Math.trunc((Math.random() * 9000)) ;
}
function HomePage (props) {
    //strict comparision
    // shallow comparison
    const dispatch = useDispatch ();
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId)
    const newId = RandomNumber();
    const handleClickAddHobbyClick = () =>{
        const newHobby = {
            id : newId,
            title: `Hobby ${newId}`,
        }
        const action = addNewHobby(newHobby);
        // console.log(action)
        dispatch(action)
        
    }   
        const handleClickActive = (hobby) => {
            const action = setActiveHobby(hobby);
            dispatch(action)
        }
        return (
            <div>
                <button onClick={handleClickAddHobbyClick} >Random </button>
                <HoobyList 
                hobbyList={hobbyList}
                activeId = {activeId}
                onHobbyClick = {handleClickActive}
                />
               
            </div>
        )
}
export default HomePage
