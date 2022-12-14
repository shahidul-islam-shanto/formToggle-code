import React from 'react';
import './Header.css';
import { useState } from 'react';

const Header2 = () => {
    const [user, setUser] = useState({name: '', email: '', password: ''})
     const {name, email, password} = user

     const handleChange = (e) => { 
            setUser({...user, [e.target.name]: e.target.value});
            };
            const handleSubmit= (e) => {
                console.log("form is a submit");
                console.log(user);
                e.preventDefault();
            }
    return (
       
                    <div className='form-area'>
                    <h1>This is a header</h1>
                    {/* <form action="submit" onSubmit={handleSubmit}></form> */}
                <div className='form'>
                        <label htmlFor="name">Name: </label>
                        <input type="text" 
                        name='name' 
                        id='name'
                        value={name}
                        onChange={handleChange} 
                        required /> 
                </div>
                <div className='form'>
                        <label htmlFor="email">Email: </label>
                        <input type="text"
                        name='email'
                        id='email'
                        value={email}
                        onChange={handleChange} 
                        required/>
                </div>
                <div className='form'>
                        <label htmlFor="password" >Password: </label>
                        <input type="text"
                        name='password'
                        id='password'
                        value={password}
                        onChange={handleChange}
                        required/>
                </div>
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                </div>
      
    );
};

export default Header2;