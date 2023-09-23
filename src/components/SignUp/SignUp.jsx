import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import Authprovider, { AuthContext } from '../providers/Authprovider';

const SignUp = () => {
    const [error,setError]=useState('')
    const {createUser}=useContext(AuthContext)

   const hundleOnSubmit=event=>{
    event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirmpassword=form.confirmpassword.value;
        console.log(password,email,confirmpassword);
        setError('')
        


        if(password!==confirmpassword){
            setError("password doesn't match" );
            return;
    }
    else if(password.length<6){
        setError("password must be 6 character");
        
    }
    createUser(email,password)
    .then(result=>{

        const LoggedUser=result.user;
        console.log(LoggedUser)

    })
    .catch(error=>{
       const  LoadError=error.message;
        console.log(LoadError)
        setError(LoadError)
    })
}

    return (
        <div className='form-container'>
            <h2 className='form-title'>SignUp</h2>
            <form onSubmit={hundleOnSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="" required />

                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="" required />

                </div>
                <div className='form-control'>
                    <label htmlFor='confirmpassword'>ConfirmPassword</label>
                    <input type="password" name="confirmpassword" id="" required />

                </div>
                <button className="btn-submit" type="submit" >Submit</button>
            </form>
            <p>{error}</p>
            <p><small>Already have an Account<Link to='/login' >Login</Link></small></p>
           
        </div>
    );
};

export default SignUp;