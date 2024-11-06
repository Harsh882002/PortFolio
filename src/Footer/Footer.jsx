import './footer.css'
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";


export const Footer = () => {

    return (
        <>
            <div className='footer'>
                <h2>Connect with me </h2>

                <ul className='connect'>
                    <li>
                        <a href="https://github.com/Harsh882002">
                            <button><FaGithub /></button>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <button><FaLinkedin /></button>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <button> <CiInstagram /> </button>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <button> <BsTwitterX /> </button>
                        </a>
                    </li>

                    <li>
                        <a href="mailto:harshpatle491@gmail.com?subject=Hello&body=I would like to connect." target='_blank' rel='noopener noreferrer'>
                            <button> <SiGmail /> </button>
                        </a>
                    </li>

                </ul>
            </div>
        </>
    )
}