import logo from '../images/logo.png'
import { Typography,Box,Button, Divider } from '@mui/material';
import {FormControlLabel,Checkbox,FormLabel} from '@mui/material';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import CheckoutListItem from '../components/CheckoutList'
import './checkout.css'
import React from 'react';

export default function Checkout(){
    const items = useSelector(state=>state.cartItems)
    const total = useSelector(state=>state.totalCost)
    const handleCheckBox = (e)=>{
    }
    return (
        <section className='checkoutSection' style={{height:'111vh'}}>
            <div style={{marginLeft:'2rem',background:'transparent'}}>
                <img src={logo} alt="logo" width={100}/>
            </div>
            <div style={{display:'flex',justifyContent:'space-around',}}>
                <div style={{borderRadius:'20px',backgroundColor:'white',marginTop:'2rem',padding:'2rem'}}>
                    <Typography sx={{fontWeight:'bold'}}>Contact Information</Typography>
                    <Box className='form-container' sx={{display:'grid',border:'none'}} component='form'>
                        <input type="text" placeholder='Enter Email or Phone' required/>
                     </Box>
                      <Typography sx={{fontWeight:'bold'}}>Shipping Address</Typography>
                     <Box className='form-container' sx={{display:'grid',border:'none'}} component='form'>
                         <div style={{display:'flex',justifyContent:'space-between'}}>
                             <input type="text" placeholder='First Name' required style={{marginRight:'2.5px'}}/>
                             <input type="text" placeholder='Last Name' required style={{marginLeft:'2.5px'}}/>
                         </div>
                        <input type="text" placeholder='Address Line 1' required/>
                        <input type="text" placeholder='Address Line 2' required/>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                             <input type="text" placeholder='Country' required style={{marginRight:'2.5px'}}/>
                             <input type="text" placeholder='Postal/Zip' required style={{marginLeft:'2.5px'}}/>
                        </div>
                        <FormControlLabel
                            control={<Checkbox value="wardrobes" sx={{
                                color: 'black',
                            '&.Mui-checked': {
                            color: 'black',
                                },
                         }} size="small" onChange={(e)=>handleCheckBox(e)}/>}
                        label="Save this Information for next time"/>
                    </Box>
                </div>
                <div style={{borderRadius:'20px',backgroundColor:'white',marginTop:'2rem',padding:'2rem',width:'50%'}}>
                     {items.map((item,ind)=>{
                         return (<React.Fragment key={ind}><CheckoutListItem title={item.title} image={item.image} count={item.count} price={item.price}/>
                            <Divider sx={{margin:'2rem 0'}}/>
                         </React.Fragment>)
                     })}
                     <div style={{display:'flex',justifyContent:'space-between',width:'100%',position:'relative'}}>
                        <Typography sx={{fontWeight:'bold',fontSize:'14px',margin:'1rem 0',color:'#bbb'}}>SUBTOTAL</Typography>
                        <Typography sx={{fontWeight:'bold',fontSize:'14px',position:'absolute',right:'-7rem',margin:'1rem 10rem 1rem 0'}}>{"$"+total}</Typography>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',width:'100%',position:'relative'}}>
                        <Typography sx={{fontWeight:'bold',fontSize:'14px',color:'#bbb',margin:'1rem 0'}}>SHIPPING</Typography>
                        <Typography sx={{fontWeight:'bold',fontSize:'14px',position:'absolute',right:'-7rem',margin:'1rem 10rem 1rem 0'}}>$50</Typography>
                    </div>
                     <Divider sx={{margin:'1rem 0'}}/>
                     <div style={{display:'flex',justifyContent:'space-between',width:'100%',position:'relative'}}>
                        <Typography sx={{fontWeight:'bold',fontSize:'14px',margin:'1rem 0',color:'#bbb'}}>TOTAL</Typography>
                        <Typography sx={{fontWeight:'bold',fontSize:'14px',position:'absolute',right:'-7rem',margin:'1rem 10rem 1rem 0'}}>{"$"+(total+50)}</Typography>
                    </div>
                </div>
            </div>
            <div style={{textAlign:"start",marginTop:'3rem',marginLeft:'5rem'}}>
                 <Link to={'/'} style={{padding:'10px 15px',textTransform:'uppercase',fontFamily:'Roboto',fontSize:'14px',color:'#bbb',borderColor:'transparent',backgroundColor:'transparent',textDecoration:'none',borderRadius:'20px',marginRight:'6rem',marginLeft:'1rem'}}>{"<"} RETURN TO CART</Link>
                 <Link to={'/complete'} style={{padding:'10px 15px',textTransform:'uppercase',fontFamily:'Roboto',fontSize:'14px',color:'white',borderColor:'black',backgroundColor:'black',textDecoration:'none',borderRadius:'20px',marginRight:'6rem',marginLeft:'1rem'}}>Complete Orders</Link>
            </div>
            <Divider sx={{margin:"2rem 4rem"}}/>
            <div style={{display:'flex',justifyContent:'flex-start',marginLeft:'4rem',marginBottom:'1rem'}}>
                <Typography sx={{marginRight:'1rem'}}>Refund Policy</Typography>
                <Typography sx={{marginRight:'1rem'}}>Private Policy</Typography>
                <Typography sx={{marginRight:'1rem'}}>Terms of Service</Typography>
            </div>
        </section>
    );
}