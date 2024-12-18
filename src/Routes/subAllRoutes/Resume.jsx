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
            <button onClick={handleShow} className='showResume-btn'>{showResume ? 'show' : "show"} Resumee</button>
            <div className='showResume'>
                 {
                    showResume && (
                         <img src="dev_Harsh_Resume.png" alt="resume" />
                    )
                }
            </div>

            <button className='showResume1'><a href="Resume/dev_Harsh_Resume.pdf"
                download="resume.pdf"
            >Download MyResume</a></button>
            </div>
        </>
    )
}