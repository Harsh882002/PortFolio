import skill from './Api/skills.json';

export const Skills = () => {
    return (
        <>
            {
                Object.entries(skill.skills).map(([category, skills]) => (
                    <div key={category}>
                        <h1 className='ctg'>{category}</h1>
                        <div className='skills'>
                            {
                                skills.map(skill => (
                                    
                                    <div className='skill-ele' key={skill.name}>
                                        
                                        <span className='skill-name'>{skill.name}</span>

                                        <img 
                                            src={skill.image} 
                                            alt={`${skill.name} logo`} 
                                            aria-label={`${skill.name} icon`} 

                                            onClick={() => window.open(skill.click, "_blank")}
                                            style={{cursor:"pointer"}}
                                        />
                                        
                                          
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    );
};
