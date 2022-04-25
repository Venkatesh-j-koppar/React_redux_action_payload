import {BUY_PEN} from "./penType"

const initialState={
    numberofPens:50
}

const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_PEN:return{
                ...state,
                numberofPens:state.numberofPens-5
            }
        default : return state
        

    }

}

export default Reducer;