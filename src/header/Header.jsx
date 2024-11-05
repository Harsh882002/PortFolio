import { useState , useEffect} from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';

export const Header = () => {

    return (
        <>
        
            <div className='head-back'>
                <nav>
                 <ul>
                    <li className='unlink'><NavLink to="/">Home</NavLink></li>
                    <li className='unlink'><NavLink to="/skills">Skills</NavLink></li>
                    <li className='unlink'><NavLink to="/about">About Me</NavLink></li>
                    <li className='unlink'><NavLink to="/gallery">Gallery</NavLink></li>
                 </ul>
                </nav>
             </div>
            
        </>
    )
}

