import { BUY_BAG } from "./bagType";

export const buybag=(number=1)=>{
    return {
        type:BUY_BAG,
        payload:number
    }

}
