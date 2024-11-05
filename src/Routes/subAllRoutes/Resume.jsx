import { useState } from 'react'
import './allroutes.css'


export const About = () => {

    const [showResume, setShowResume] = useState(false);

    const handleShow = () => {
        setShowResume(!showResume);
    }
    return (
        <>
        <div className='resume'>
            <button onClick={handleShow} className='showResume-btn'>{showResume ? 'show' : "Show"} Resume</button>
            <div className='showResume'>
                {
                    showResume && (
                        <img src="dev_Harsh_Resume.png" alt="resume" />
                    )
                }
            </div>

            <button><a href="Resume/dev_Harsh_Resume.pdf"
                download="resume.pdf"
            >Download Resume</a></button>
            </div>
        </>
    )
}