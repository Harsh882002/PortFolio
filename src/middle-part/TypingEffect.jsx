import { useEffect, useState } from "react"
import './middle-part.css'


export const SetTypingEffect = () =>{

    const data = [
        "Hi! I’m Harsh Patle 👋,",
        "A developer who turns ideas into reality 💡.",
        "I craft responsive web applications with React ⚛️.",
        "My skills include JavaScript, React, and full-stack development 💻.",
        "Let’s create something amazing together! 🚀",
        "Feel free to check out my projects and connect with me! 📫"


    ];  
     const [displayText, setDisplayText] = useState("");
   const [lineIndex, setLineIndex] = useState(0);
   const [charIndex, setCharIndex] = useState(0);


   useEffect(() =>{

    if(lineIndex < data.length){
        if(charIndex < data[lineIndex].length){
            const timeout = setTimeout(() =>{
                setDisplayText((prev) => prev + data[lineIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            },10)
            return () => clearTimeout(timeout);
        }else{

            const lineTimeOut = setTimeout(() =>{
                setDisplayText((prev) => prev + "\n");
                setLineIndex((prev) => prev+1);
                setCharIndex(0);
            },500)
        }
    }
   }, [charIndex,lineIndex,data]);
   
   
    return(
        <>
        <div className="typing-Effect">
            <h1>{displayText}</h1>
        </div>

        </>
    )
}