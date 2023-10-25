import React , {useState} from 'react'
import './Comonent.css'
import {NavLink} from 'react-router-dom';
import SP from './SP.png'
import menu from './MENU.png';

const Header = () => {
    const [ham,setHam]=useState(false);
    const setMenu=()=>{
        setHam(!ham);
    }
    return (
        <div className={ham?'header-on':'header'}>
        <div className='name'>
            <img src={SP} alt='SP'></img>
            <p>SHIVANK DESIGN LABS</p>
        </div>
        <div className={ham?'links-on':'links'}>
            <NavLink to='/'>HomePage</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Skills'>Skills</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
        </div>
        <div className='menu'>
          <img src={menu} alt='MENU' onClick={setMenu}></img>
        </div>
        </div>
      )
}

export default Header