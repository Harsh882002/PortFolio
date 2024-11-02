import skill from './Api/skills.json';

export const Skills = () => {

    return (
        <>

            <ul>
                {
                    Object.entries(skill.skills).map(([category, skills]) => (
           <div>
                        <h1>{category}</h1>
           </div>

           


                    ))
                }
            </ul>
        </>
    )
}