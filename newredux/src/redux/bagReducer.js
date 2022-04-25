import { BUY_BAG } from "./bagType";

const initialState={
    numberofBag:100,
}

const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_BAG:return {
            ...state,
            numberofBag:state.numberofBag-action.payload
        }
        default : return state;

    }

}

export default Reducer;
