import React, { useState } from 'react'
import './Navbar.css'
import A from '../../assets/A.png'
import {Link} from 'react-scroll'
import contact from '../../assets/contact.png'
import menu from '../../assets/menu.png'
const Navbar = () => {
  const [showMenu,setShowMenu] =useState(false);
  return (
    <nav className="Navbar">
        <img src={A} className="logo" alt="logo" />  
        <div className="desktopmenu" >
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem" >About</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem" >Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem" >Contact</Link>
        <a  href='https://drive.google.com/file/d/1tHtx8mBL39AtXSv90kTwk3N_JjJW074f/view?usp=sharing' rel="noreferrer" target="_blank" className="desktopMenuListItem">Resume</a>
       
        </div>
        <button onClick={ ()=>{document.getElementById('contact').scrollIntoView({behavior:'smooth'});}}className="desktopmenubtn">
            <img src={contact} alt="" className="desktopmenuimg" />Contact Me 
        </button>
        <img src={menu} className='mobmenu' alt="mobmenu" onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navmenu"  style={{display:showMenu?'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="mobListItem" onClick={()=>{setShowMenu(false)}}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className="mobListItem" onClick={()=>{setShowMenu(false)}}>About</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-80} duration={500} className="mobListItem" onClick={()=>{setShowMenu(false)}}>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className="mobListItem" onClick={()=>{setShowMenu(false)}}>Contact</Link>
        <a  href='https://drive.google.com/file/d/1tHtx8mBL39AtXSv90kTwk3N_JjJW074f/view?usp=sharing' rel="noreferrer" target="_blank" className="desktopMenuListItem" onClick={()=>{setShowMenu(!false)}}>Resume</a>
       </div>
        
    </nav>
  )
}

export default Navbar