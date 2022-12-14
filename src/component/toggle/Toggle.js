import React, {useState} from 'react';
import './Toggle.css';

const Toggle = () => {
    const [toggle, setToggle] = useState(true)
 
    return (
        <div className='toggle'>
         {toggle && ( 
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, praesentium nulla vero dignissimos libero ex! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae eum rerum culpa et sit.</p>)}
         <div>
            <button  
            onClick={()=> setToggle(!toggle)}>
            {toggle ? "Hide" : "Show"}
            </button>
            {/* <button onClick={()=> setToggle(false)}>Hide</button> */}
         </div>
        </div>

    );
};

export default Toggle;