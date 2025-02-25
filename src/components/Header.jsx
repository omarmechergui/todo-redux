import React from 'react'
import { useDispatch } from 'react-redux';
import { chengetheme } from '../redux/action';

function Header() {
    const dispatch = useDispatch();
  return (
    <div style={{ background: 'rgb(16, 63, 190)',width: '100%', height:'80px',}}>
        <button onClick={()=> dispatch(chengetheme())}>change theme</button>

    </div>
  )
}

export default Header