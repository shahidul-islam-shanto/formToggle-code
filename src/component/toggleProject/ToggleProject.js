import React,{useState} from 'react';
import { fakeData } from './fakeData';
import ProjectDetails from './ProjectDetails';
import './ToggleProject.css';

const ToggleProject = () => {
    const [project, setProject] = useState(fakeData)

    return (
        <main className='container'>
             <section className='toggle-area'>
            <h1>Toggle Project</h1>
            {
                project.map (pd => <ProjectDetails {...pd} key={pd.id}/>)
            }
        </section>
        </main>
    );
};

export default ToggleProject;