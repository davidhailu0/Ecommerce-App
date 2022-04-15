import { useState,useRef,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFilterValue } from '../../state/action';
import './middleBar.css';
export default function MiddleBar(){
    const [color,setColor] = useState('')
    const dispatch = useDispatch()
    const inputRef = useRef()
    const first = useRef()
    const handleMouseAction = (btnId,e)=>{
      setColor(btnId)
      inputRef.current.style.left = e.target.offsetLeft+e.currentTarget.offsetWidth/4+"px";
    }
    useEffect(()=>{
      console.log(inputRef.current.offsetWidth)
      console.log(first.current.offsetWidth)
      inputRef.current.style.left = first.current.offsetLeft+first.current.offsetWidth/4+"px"
    },[])
    return (<div>
      <ul style={{listStyle:'none',display:'flex',justifyContent:'center',position:'relative'}}>
        <div id="marker" ref={inputRef}></div>
        <li ref={first} className={(color===''||color==='btn1')?"navBtn active":"navBtn"} style={{color:(color==="btn1"||color==='')?"black":"#AAA"}} onClick={(e)=>handleMouseAction("btn1",e)}>Furnitures</li>
        <li className={color==='btn2'?"navBtn active":"navBtn"} style={{color:color==="btn2"?"black":"#AAA"}} onClick={(e)=>{
          handleMouseAction("btn2",e); dispatch(addFilterValue('PHONES'))}}> Electronics</li>
        <li className={color==='btn3'?"navBtn active":"navBtn"}  style={{color:color==="btn3"?"black":"#AAA"}} onClick={(e)=>handleMouseAction("btn3",e)}>Vehicles</li>
        <li className={color==='btn4'?"navBtn active":"navBtn"}  style={{color:color==="btn4"?"black":"#AAA"}} onClick={(e)=>handleMouseAction("btn4",e)}>Accessories</li>
        <li className={color==='btn5'?"navBtn active":"navBtn"}  style={{color:color==="btn5"?"black":"#AAA"}} onClick={(e)=>handleMouseAction("btn5",e)}>Fashion</li>
      </ul>
    </div>);
}