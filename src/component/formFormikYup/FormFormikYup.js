import React from 'react';
import * as yup from 'yup';
 import './FormFormikYup.css';
import { useFormik } from 'formik';

const Header = () => {
  //form formik
    const formik = useFormik({
      initialValues : {
        name : '',
        email : '',
        password : '',
      },
      onSubmit : (values, {resetForm})=> {
        console.log(values);
        resetForm({values : ""})
      }, 

  //form yup
      validationSchema: yup.object({
        name : yup.string().min(2, "name must have 2 characters!").required(),
        email : yup.string().email().required(),
        password : yup.string().min(6, "password must have 2 characters!").required(),
      })
  })
  //form yup-error
     //nameError
      const nameError = formik.touched.name && formik.errors.name && 
      <span style={{color: "red"}}>{formik.errors.name}</span>
      //emailError
      const emailError = formik.touched.name && formik.errors.email && 
      <span  style={{color: "red"}}>{formik.errors.email}</span>
      //passwordError
      const passwordError = formik.touched.name && formik.errors.password &&  
      <span  style={{color: "red"}}>{formik.errors.password}</span>

    return (
        <div className='form-area'>
            <h1>Login Page</h1>
           <div className='form'>
                <label htmlFor="name">Name: </label>
                <input type="text" 
                 name='name' 
                 id='name'
                 value={formik.values.name}
                 onChange={formik.handleChange} 
                /> 
                <br />
               {nameError}
           </div>
           <div className='form'>
                <label htmlFor="email">Email: </label>
                <input type="email"
                   name='email'
                   id='email'
                   value={formik.values.email}
                   onChange={formik.handleChange} 
                   />
                <br /> 
                {emailError}
           </div>
           <div className='form'>
                <label htmlFor="password" >Password: </label>
                <input type="password"
                  name='password'
                  id='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  />
                 <br /> 
                {passwordError}
           </div>
            <button type='submit' onClick={formik.handleSubmit}>Submit</button>
        </div>
    );
};

export default Header;