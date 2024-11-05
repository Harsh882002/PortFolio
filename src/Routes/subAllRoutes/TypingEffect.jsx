import { useEffect, useState } from "react"
import './allroutes.css'


export const SetTypingEffect = () => {

    const data = [
        "Hi! I’m Harsh Patle 👋,",
        "A developer skilled in JavaScript, React, and full-stack development 💻.",
        "I build responsive web applications and teach students through college sessions 📚.",
        "Let’s connect and create something amazing! 🚀"

    ];
    const [displayText, setDisplayText] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);


    useEffect(() => {

        if (lineIndex < data.length) {
            if (charIndex < data[lineIndex].length) {
                const timeout = setTimeout(() => {
                    setDisplayText((prev) => prev + data[lineIndex][charIndex]);
                    setCharIndex((prev) => prev + 1);
                }, 200)
                return () => clearTimeout(timeout);
            } else {

                const lineTimeOut = setTimeout(() => {
                    setDisplayText((prev) => prev + "\n");
                    setLineIndex((prev) => prev + 1);
                    setCharIndex(0);
                }, 500)
            }
        }
    }, [charIndex, lineIndex, data]);


    return (
        <>
            <div className="typing-Effect">
                <h1>{displayText}</h1>
            </div>

        </>
    )
}