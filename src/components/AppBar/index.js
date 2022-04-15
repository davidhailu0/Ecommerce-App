import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Badge } from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
import { useSelector,useDispatch } from 'react-redux'
import { changeState } from '../../state/action';
import logo from '../../images/logo.png';
import './appBar.css';

const pages = ['Home', 'Products', 'Contact','About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [color,setColor] = React.useState('')
  const dispatch = useDispatch()
  const counter = useSelector(state=>state.count)
 const first = React.useRef()
  const inputRef = React.useRef()
  const handleMouseAction = (btnId,e)=>{
      setColor(btnId)
      inputRef.current.style.left = e.target.offsetLeft+e.currentTarget.offsetWidth/4-4+"px";
    }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  React.useEffect(()=>{
      inputRef.current.style.left = first.current.offsetLeft+first.current.offsetWidth/4-4+"px"
  },[]);
  return (
    <AppBar position="static" sx={{backgroundColor:'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow:1, display: 'flex',color:'black',alignSelf:'center' }}>
            <img src={logo} alt="logo" height="60"/>
              <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{marginLeft:'0.7rem',alignSelf:'center'}}
          >
            Spolly
          </Typography>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color:'black'}}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',textAlign:'center' },position:'relative' }}>
              <ul style={{display:'flex',justifyContent:'space-evenly',listStyle:'none'}}>
                <div id="marker" ref={inputRef}></div>
            {pages.map((page,ind) => (
              <li
                key={page}
                onClick={(e)=>{handleCloseNavMenu();handleMouseAction(ind.toString(),e)}}
                className={"navBtn"}
                ref={ind.toString()==="0"?first:null}
                style={{color:((color===''&&"0"===ind.toString())||ind.toString()===color)?"black":"#AAA"}}
              >
                {page}
              </li>
            ))}
            </ul>
          </Box>

          <Box sx={{ flexGrow: 0,display:{md:'block',xs:'none'} }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={()=>{dispatch(changeState(true))}}>
              <Badge badgeContent={counter} color="error" >
                <ShoppingCart sx={{color:'black'}}/>
              </Badge>
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
