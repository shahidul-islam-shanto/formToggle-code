import React, {useState} from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({id, title, discription}) => {
    const [project , setProject] = useState(false)
    return (
        <article className='project-area'>
            <div>
                <h4>{title}</h4>
                <button onClick={()=> setProject(!project)}>
                    {project ? "-" : "+"}</button>
            </div>
           {project && ( <p>{discription}</p>)}
        </article>
    );
};

export default ProjectDetails;