import { Typography,Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { increaseCount, addCartItem,addCost} from "../../state/action";
import {motion} from 'framer-motion'
export default function Card({image,title,price}){
  const dispatch = useDispatch()
  const [clicked,setClicked] = useState(false)
  const handleAddToCart = (image,title,price,e)=>{
    dispatch(increaseCount());
    dispatch(addCartItem({image,title,price}))
    dispatch(addCost(price))
    setClicked(true);
  }
    return (<motion.div 
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{textAlign:'center'}}
    >
      <img src={image} alt="shopping item" height={250} width={190}/>
    <div style={{display:'flex',justifyContent:'space-between'}}>
        <Typography>{title}</Typography>
        <Typography>{"$"+price}</Typography>
    </div>
    <Button variant="contained" sx={{backgroundColor:!clicked?'black':"white",color:!clicked?'white':"black",width:'100%',borderRadius:'15px',margin:'0 5px',':hover':{color:!clicked?'white':"black",background:!clicked?'black':"white"},textTransform:'none'}} onClick={(e)=>handleAddToCart(image,title,price,e)}>{!clicked?"Add to Cart":"Added"}</Button>
    </motion.div>)
}
