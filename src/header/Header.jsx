import { useState , useEffect} from 'react';
import './header.css'

export const Header = () => {

    return (
        <>
        
            <div className='head-back'>
                 <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Resume</li>
                    <li>Gallery</li>
                    <li>Contact Me</li>
                </ul>
             </div>
            
        </>
    )
}

