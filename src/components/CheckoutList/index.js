import { Typography,Badge } from "@mui/material";

export default function CheckOutListItem({image,title,price,count}){
        console.log(image);
    return (<div style={{marginRight:'10px',display:'flex',justifyContent:'space-between',position:'relative'}}>
          <div style={{display:'flex',width:'70%'}}>
              <Badge badgeContent={count} color="error" >
                    <img src={image} alt={title} width="150" height={100}/>
            </Badge>
            <div style={{display:'grid',marginLeft:'15px'}}>
            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>{title}</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor libero suscipit voluptate cum. Architecto?</Typography>
            </div>
          </div>
            <Typography sx={{fontWeight:'bold',fontSize:'18px',position:'absolute',top:'3rem',right:'0'}}>{'$'+price}</Typography>
         </div>)
}