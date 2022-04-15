export const addItem = (item)=>{
    return {
        type:'ADD',
        item
    }
}
export const removeItem = (item)=>{
    return {
        type:'REMOVE',
        item
    }
}
export const addCost = (price)=>{
    return{
        type:"ADD TOTAL COST",
        payload:price
    }
}
export const removeCost = (price)=>{
    return{
        type:"SUBTRACT TOTAL COST",
        payload:price
    }
}
export const increaseCount = ()=>{
    return {
        type:"INCREASE",
    }
}
export const decreaseCount = ()=>{
    return{
        type:"DECREASE"
    }
}
export const addFilterValue = (filterValue)=>{
    return{
        type:"ADD FILTER",
        payload:filterValue
    }
}
export const removeFilterValue = (filterValue)=>{
    return{
        type:"REMOVE FILTER",
        payload:filterValue
    }
}
export const changeState = (state)=>{
    return{
        type:"DRAWER",
        payload:state
    }
}
export const addCartItem = (item)=>{
    return {
        type:"ADD CART",
        payload:item
    }
}
export const removeCartItem = (item)=>{
    return {
        type:"REMOVE CART",
        payload:item
    }
}