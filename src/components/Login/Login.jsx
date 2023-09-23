import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/Authprovider';

const Login = () => {
    const {LogIn}=useContext(AuthContext)

    const hundleLogIn=event=>{
        event.preventDefault();

        const form=event.target;
        const email= form.email.value;
        const password=form.password.value;
       

        LogIn(password,email)
        .then(result=>{
            const User=result.user;
            form.reset();
            console.log(User)

        })
        .catch(error=>{

            console.log(error.message)
        })


    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={hundleLogIn}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="" required />

                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />

                </div>
                <button className="btn-submit" type="submit" value="login">Login</button>
            </form>
            <p><small>New to here<Link to='/signup' >Signup</Link></small></p>
           
           
        </div>
    );
};

export default Login;