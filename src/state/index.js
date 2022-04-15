import { combineReducers } from "redux"
import { itemReducer,countReducer,filterReducer,drawerReducer,cartItemReducer,totalCostReducer } from "./reducer"
const allReducer = combineReducers({count:countReducer,items:itemReducer,
    filters:filterReducer,state:drawerReducer,cartItems:cartItemReducer,
    totalCost:totalCostReducer
})
export default allReducer;