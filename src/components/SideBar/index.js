import { useState } from 'react';
import {Box,FormControlLabel,Checkbox, Typography,FormLabel,RadioGroup,FormControl,Radio } from '@mui/material';
import { addFilterValue,removeFilterValue } from '../../state/action';
import { useDispatch } from 'react-redux';
import {styled} from '@mui/material/styles';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: 'black',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: 'black',
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
const SideNav = ()=>{
     const [value, setValue] = useState('Dicounts');
    const handleChange = (event) => {
            setValue(event.target.value);
        };
    const [checkBoxValue,setCheckBoxValue] = useState('');
    const dispatch = useDispatch();
    const handleCheckBox = (e)=>{
        if(e.target.checked){
          dispatch(addFilterValue(e.target.value))
        }
        else{
          dispatch(removeFilterValue(e.target.value))
        }
    }
    return (
    <Box sx={{display:'grid',paddingLeft:'50px',width:'20%',position:'absolute'}}>
        <Typography>
            Filter
        </Typography>
        <div style={{display:"block",width:'100%',height:"2px",background:'#eee'}}></div>
        <FormControlLabel
                control={<Checkbox value="sofas"  sx={{
    color: 'black',
    '&.Mui-checked': {
      color: 'black',
    },
  }} size="small" onChange={(e)=>handleCheckBox(e) }/>}
                label="Sofas"
              />
        <FormControlLabel
                control={<Checkbox value="Beds" sx={{
    color: 'black',
    '&.Mui-checked': {
      color: 'black',
    },
  }} size="small" onChange={(e)=>handleCheckBox(e)}/>}
                label="Beds"
              />
        <FormControlLabel
                control={<Checkbox value="Tables" size="small" sx={{
    color: 'black',
    '&.Mui-checked': {
      color: 'black',
    },
  }} onChange={(e)=>handleCheckBox(e)}/>}
                label="Tables"
              />
        <FormControlLabel
                control={<Checkbox value="Tv Stands" sx={{
    color: 'black',
    '&.Mui-checked': {
      color: 'black',
    },
  }} size="small"/>}
                label="TV Stands"
                onChange={(e)=>handleCheckBox(e)}
              />
        <FormControlLabel
                control={<Checkbox value="wardrobes" sx={{
    color: 'black',
    '&.Mui-checked': {
      color: 'black',
    },
  }} size="small" onChange={(e)=>handleCheckBox(e)}/>}
                label="Wardrobes"
              />
        <FormControlLabel
                control={<Checkbox value="cabiners" sx={{
    color: 'black',
    '&.Mui-checked': {
      color: 'black',
    },
  }} size="small" onChange={(e)=>handleCheckBox(e)}/>}
                label="Cabinets"
              />
        <FormControlLabel
                control={<Checkbox value="cabiners" sx={{
    color: 'black',
    '&.Mui-checked': {
      color: 'black',
    },
  }} size="small" onChange={(e)=>handleCheckBox(e)}/>}
                label="Dressers"
              />
        <FormControlLabel
                control={<Checkbox value="Other" sx={{
    color: 'black',
    '&.Mui-checked': {
      color: 'black',
    },
  }} size="small" onChange={(e)=>handleCheckBox(e)}/>}
                label="Other"
              />
    <FormControl>
      <Typography>
           Sort
        </Typography>
        <div style={{display:"block",width:'100%',height:"2px",background:'#eee'}}></div>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Discounts" control={<BpRadio/>} label="Discounts" />
        <FormControlLabel value="Best Selling" control={<BpRadio/>} label="Best Selling" />
        <FormControlLabel value="Price low to high" control={<BpRadio/>} label="Price low to high" />
        <FormControlLabel value="Price high to low" control={<BpRadio/>} label="Price high to low" />
      </RadioGroup>
    </FormControl>
    </Box>
    );
}
export default SideNav;