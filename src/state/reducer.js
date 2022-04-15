import dummyData from '../dammyData';

export const countReducer = (count=0,action)=>{
    switch(action.type){
        case "INCREASE":
            return count + 1;
        case "DECREASE":
            return count - 1;
        default:
            return count;
    }
}
export const itemReducer = (items = [],action)=>{
    switch(action.type){
        case "ADD":
            return [...items,action.payload]
        case "REMOVE":
            return items.filter(item=>item.id!==action.payload.id)
        default:
            return items
    }
}
export const filterReducer = (filters={values:[...dummyData],filters:[]},action)=>{
    // eslint-disable-next-line default-case
     let foundItems =  [];
    switch(action.type){
        case "ADD FILTER":
            let tempFilter = [...filters.filters];
            tempFilter = [...tempFilter,action.payload]
            tempFilter.forEach(filt=>{
                let temp = []
                if(action.payload==='PHONES'){
                     temp = dummyData.filter(anotherFilter=>anotherFilter.title.toLowerCase()==='PHONES'.toLowerCase())
                }
                else{
                    temp = dummyData.filter(anotherFilter=>anotherFilter.title.toLowerCase()===filt.toLowerCase()&&anotherFilter.title.toLowerCase()!=="phones")
                }
                if(temp.length!==0){
                    foundItems = [...foundItems,...temp]
                }
            })
            return {values:foundItems,filters:tempFilter}
        case "REMOVE FILTER":
            let tempFilters = filters.filters.filter(filt=>filt!==action.payload);
            tempFilters.forEach(filt=>{
                let temp = []
                temp = dummyData.filter(anotherFilter=>anotherFilter.title.toLowerCase()!==filt.toLowerCase())
                if(temp.length!==0){
                    foundItems = [...foundItems,...temp]
                }
            })
            if(tempFilters.length===0){
                return {values:[...dummyData],filters:[]}
            }
            return {values:foundItems,filters:tempFilters}
        default:
            return filters;
    }
}
export const drawerReducer = (state=false,action)=>{
    if(action.type==="DRAWER"){
        return action.payload
    }
    return state;
}
export const cartItemReducer = (state=[],action)=>{
    let obj
    if(action.type==="ADD CART"){
        if(state.length===0){
            obj = {...action.payload,count:1}
            return [...state,obj]
        }
        let anArr = state.map(sta=>sta)
        obj = anArr.find(item=>action.payload.title.toLowerCase()===item.title.toLowerCase()) 
        if(obj){
            obj.count =  obj.count +1
        }
        else{
            obj = {...action.payload,count:1}
            anArr = [...anArr,obj]
        }
        return anArr;
    }
    else if(action.type==="REMOVE CART"){
        let newItems = state.map((filt)=>filt)
        obj = newItems.find((filt)=>filt.title.toLowerCase()===action.payload.title.toLowerCase())
        obj.count = obj.count - 1
        if(obj.count===0){
            newItems = newItems.filter(fil=>fil.title!==obj.title)
        }
        return newItems
    }
    return state
}
export const totalCostReducer = (cost=0.0,action)=>{
    if(action.type==="ADD TOTAL COST"){
        cost = cost + parseFloat(action.payload.replaceAll(',',''))
        return cost
    }
    else if(action.type==="SUBTRACT TOTAL COST"){
        cost = cost - parseFloat(action.payload.replaceAll(',',''))
        return cost
    }
    return cost;
}