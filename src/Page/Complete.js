import logo from '../images/logo.png'
import { Typography,Box,Button, Divider } from '@mui/material';
import {FormControlLabel,Checkbox,FormLabel} from '@mui/material';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import CompleteListItem from '../components/Complete'
import thumbsUp from '../images/thumbs_up.png'
import './checkout.css'
import React from 'react';

export default function Checkout(){
    const items = useSelector(state=>state.cartItems)
    const total = useSelector(state=>state.totalCost)
    return (
        <section className='checkoutSection' style={{height:'113vh'}}>
            <div style={{marginLeft:'2rem',background:'transparent'}}>
                <img src={logo} alt="logo" width={100}/>
            </div>
            <div style={{display:'flex',justifyContent:'space-around',}}>
                <div style={{borderRadius:'20px',padding:'2rem',boxSizing:'border-box',alignSelf:'center'}}>
                    <img src={thumbsUp} alt={"thumbs up"} width={150}/>
                    <Typography sx={{fontWeight:'bold',fontSize:'22px'}}>Thank you for Shopping with Shoplly</Typography>
                    <Typography sx={{marginBottom:'2rem'}}>Your Orders are on the way.</Typography>
                    <Link to={'/'} style={{padding:'10px 55px',textTransform:'uppercase',fontFamily:'Roboto',fontSize:'14px',color:'black',border:'1px solid black',backgroundColor:'transparent',textDecoration:'none',borderRadius:'20px',marginRight:'6rem',marginLeft:'1rem'}}>Back To Shopping</Link>
                </div>
                <div style={{borderRadius:'20px',backgroundColor:'white',marginTop:'2rem',padding:'2rem',width:'50%'}}>
                     <Typography sx={{fontWeight:'bold',fontSize:'22px'}}>Order Summary</Typography>
                     <div style={{display:'flex',justifyContent:'space-between',width:'100%',position:'relative'}}>
                        <Typography sx={{fontWeight:'bold',fontSize:'14px',margin:'1rem 0',color:'#bbb'}}>ORDER NUMBER</Typography>
                        <Typography sx={{fontWeight:'bold',fontSize:'14px',position:'absolute',left:'18rem',margin:'1rem 10rem 1rem 0'}}>568464</Typography>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',width:'100%',position:'relative'}}>
                        <Typography sx={{fontWeight:'bold',fontSize:'14px',color:'#bbb',margin:'1rem 0'}}>EST DELIVERY DATE</Typography>
                        <Typography sx={{fontWeight:'bold',fontSize:'14px',position:'absolute',left:'18rem',margin:'1rem 10rem 1rem 0'}}>18 April, 2022</Typography>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',width:'100%',position:'relative'}}>
                        <Typography sx={{fontWeight:'bold',fontSize:'14px',color:'#bbb',margin:'1rem 0'}}>SHIPPING DETAILS</Typography>
                        <div style={{display:'grid',position:'absolute',left:'18rem',margin:'1rem 10rem 1rem 0'}}>
                             <Typography sx={{fontWeight:'bold',fontSize:'14px'}}>PAUL WRITER</Typography>
                             <Typography sx={{fontWeight:'bold',fontSize:'14px'}}>AFRICA ANV ST, ADDIS ABABA</Typography>
                             <Typography sx={{fontWeight:'bold',fontSize:'14px'}}>ETHIOPIA</Typography>
                        </div>
                    </div>
                    <div style={{display:'flex',marginTop:'2rem',justifyContent:'center',width:'100%',position:'relative'}}>
                        <Typography sx={{fontWeight:'bold',fontSize:'14px',margin:'1rem 0',color:'#bbb',marginRight:'10rem'}}>TOTAL</Typography>
                        <Typography sx={{fontWeight:'bold',fontSize:'18px',position:'absolute',right:'-8rem',margin:'1rem 10rem 1rem 0'}}>{"$"+(total+50)}</Typography>
                    </div>
                     {items.map((item,ind)=>{
                         return (<React.Fragment key={ind}><CompleteListItem title={item.title} image={item.image} count={item.count} price={item.price}/>
                            <Divider sx={{margin:'2rem 0'}}/>
                         </React.Fragment>)
                     })}
                </div>
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