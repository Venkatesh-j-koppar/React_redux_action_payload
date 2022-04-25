
import { useDispatch, useSelector } from "react-redux";
import {buyPen} from "../redux/pen/penAction"

function HookPencontainer(){
    const numberofPens=useSelector(state=>state.numberofPens);
    const dispatch=useDispatch();
    
  
    return (
        <div>
            <h1>Pen Store</h1>
            <h2>Count Of Pens - {numberofPens} </h2>
            <button onClick={()=>dispatch(buyPen())}>Buy More</button>
        </div>
    )
        
}

export default HookPencontainer;