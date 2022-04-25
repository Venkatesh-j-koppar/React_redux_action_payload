import {React, useState }from "react";
import {buybag} from "../redux/bagAction"
import {useDispatch,useSelector} from "react-redux";


function BagContainer(){
    var [number,SetNumber]=useState(1);

    const numberofbags=useSelector(state=>state.numberofBag)
    const dispatch=useDispatch();
    return(
        <div>
            <h1>Hello world</h1>
            <h2>The Number of bags available are as follows- {numberofbags}</h2>
            <input type="Text" value={number} onChange={(e)=>{SetNumber(e.target.value)}}
             ></input>
            <button onClick={()=>{dispatch(buybag(number))}}>Click {number}to Buy</button>
        </div>
    )
}

export default BagContainer;