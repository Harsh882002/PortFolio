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
                    <li className='unlink'><NavLink to="/projects">Projects</NavLink></li>
                    <li className='unlink'><NavLink to="/resume">Resume</NavLink></li>
                    <li className='unlink'><NavLink to="/gallery">Gallery</NavLink></li>
                    <li className='unlink'><NavLink to="/contact">Contact Me</NavLink></li>
                </ul>
                </nav>
             </div>
            
        </>
    )
}

