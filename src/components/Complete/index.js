import { Typography,Badge } from "@mui/material";

export default function CompleteListItem({image,title,price,count}){
        console.log(image);
    return (<div style={{marginRight:'10px',display:'flex',justifyContent:'space-between',position:'relative'}}>
          <div style={{display:'flex',width:'70%'}}>
              <Badge badgeContent={count} color="error" >
                    <img src={image} alt={title} width="150" height={100}/>
            </Badge>
           </div>
          <div style={{display:'grid',marginLeft:'1rem'}}>
            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>{title}</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor libero suscipit voluptate cum. Architecto?</Typography>
            </div>
            <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>{'$'+price}</Typography>
         </div>)
}