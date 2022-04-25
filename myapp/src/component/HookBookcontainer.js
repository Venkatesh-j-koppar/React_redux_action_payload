import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import {buyBook} from '../redux/book/bookAction'
function HookBookcontainer(){
    const numberofbook=useSelector(state=>state.numberOfBooks)
    const dispatch=useDispatch();
    return (
        <div>
            <h1>Hook Container</h1>
            <h1>Number of Books {numberofbook}</h1>
            <button onClick={()=>dispatch(buyBook())}>Buy Book</button>
        </div>
    )
}

export default HookBookcontainer;