import { Typography,Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { increaseCount,decreaseCount } from "../../state/action";
import { addCartItem, removeCartItem,addCost,removeCost } from "../../state/action";

export default function DrawerListItem({image,title,price,count}){
    const dispatch = useDispatch()
    const handlePlus = (e)=>{
        e.stopPropagation()
        dispatch(increaseCount())
        dispatch(addCartItem({image,title,price}))
        dispatch(addCost(price))
    }
    const handleMinus = (e)=>{
       e.stopPropagation()
        dispatch(decreaseCount())
        dispatch(removeCartItem({image,title,price}))
        dispatch(removeCost(price))
    }
    return (<div style={{display:"flex",justifyContent:'space-between',margin:'30px 5%',marginLeft:'9%'}}>
        <img src={image} alt={title} width="200"/>
        <div style={{marginLeft:'20px',position:'relative'}}>
            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>{title}</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor libero suscipit voluptate cum. Architecto?</Typography>
        <div style={{display:'flex',justifyContent:'space-between',position:'absolute',bottom:'0',right:0,left:0}}>
            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>{'$'+price}</Typography>
            <div style={{display:'flex',justifyContent:'space-evenly',width:'20%'}}>
                <button style={{borderRadius:'50%',border:'1px solid black',fontSize:'22px',height:'30px',width:'30px',boxSizing:'border-box',paddingBottom:'3.5px'}} disabled={count===0} onClick={(e)=>handleMinus(e)}>-</button>
                <Typography sx={{marginTop:'3px',fontSize:'16px'}}>{count}</Typography>
                <button style={{borderRadius:'50%',border:'1px solid black',fontSize:'22px',height:'30px',width:'30px'}} onClick={(e)=>handlePlus(e)}>+</button>
            </div>
        </div>
        </div>
    </div>)
}