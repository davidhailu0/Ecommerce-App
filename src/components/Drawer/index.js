import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { changeState } from '../../state/action';
import { Button, Typography } from '@mui/material';
import DrawerListItem from '../DrawerListItem';
import {Link} from 'react-router-dom';

export default function TemporaryDrawer() {
  const dispatch = useDispatch();
  const state = useSelector(state=>state.state)
  const count = useSelector(state=>state.count)
  const cartItems = useSelector(state=>state.cartItems)
  const totalCost = useSelector(state=>state.totalCost)
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    dispatch(changeState(open));
  };

  const list = () => (
    <Box
      sx={{ width: '60vw',position:'relative'}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Button variant='outlined' sx={{borderRadius:'15px',color:'black',borderColor:'black',margin:'2rem',marginRight:'5rem',float:'right'}}>{`Close ${count}`} </Button>
      <Divider sx={{clear:'both',width:'80%',marginLeft:'10%'}}/>
      <Typography sx={{fontWeight:'bolder',marginLeft:'10%',marginTop:'2rem',fontSize:'22px',color:'black'}}>Order Summary</Typography>
      <div style={{position:'relative',marginBottom:'3rem'}}>
          {cartItems.map((item,ind)=>{
          return <React.Fragment key={ind} ><DrawerListItem  title={item.title} image={item.image} price={item.price} count={item.count}/><Divider sx={{width:'80%',marginLeft:'10%'}}/></React.Fragment>
      })}
      <div> 
                <div style={{display:'flex',justifyContent:'space-between',marginLeft:'10%'}}>
                    <Typography sx={{fontWeight:'bold',fontSize:'16px',margin:'1rem 0'}}>TOTAL INCL TAX</Typography>
                    <Typography sx={{fontWeight:'bold',fontSize:'16px',margin:'1rem 10rem 1rem 0'}}>{"$"+totalCost}</Typography>
                </div>
                <Divider sx={{width:'80%',marginLeft:'10%'}}/>
                <div style={{textAlign:'right',marginTop:'2rem'}}>
                    <Button variant='outlined' sx={{color:'black',borderColor:'black',paddingLeft:'55px',paddingRight:'55px',borderRadius:'20px',':hover':{borderColor:'black'}}} onClick={()=>{dispatch(changeState(false))}}>Continue Shopping</Button>
                    <Link onClick={()=>{dispatch(changeState(false));}} to={'/checkout'} style={{padding:'10px 55px',textTransform:'uppercase',fontFamily:'Roboto',fontSize:'14px',color:'white',borderColor:'black',backgroundColor:'black',textDecoration:'none',borderRadius:'20px',marginRight:'6rem',marginLeft:'1rem'}}>Process to Checkout</Link>
                </div>
            </div>
      </div>
    </Box>
  );

  return (
    <div>
          <Drawer
            anchor={'right'}
            open={state}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
    </div>
  );
}