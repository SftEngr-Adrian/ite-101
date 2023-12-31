import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {

    const [fullName, setFullName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');
    
    const handleLogin=(e)=>{
        e.preventDefault();
        console.log(fullName, email, password);
    }

    return(
        <div className='container'>
            <br></br>
            <br></br>
            <h1>Sign Up</h1>
            <hr></hr>
            <form className='form-group' autoComplete="off"
            onSubmit={handleLogin}>
                <label>FullName</label>
                <input type="text" className='form-control' required on onChange={(e)=>setFullName(e.target.value)} value={fullName}></input>
                <br></br>
                <label>Email</label>
                <input type="email" className='form-control' required on onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <br></br>
                <label>Password</label>
                <input type="password" className='form-control' required on onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <br></br>
                <div className='btn-box'>
                    <span> Already have an account Login
                    <Link to="login" className='link'> Here</Link></span>
                    <button type="submit" className='btn btn-success btn-md'>SIGN UP</button>
                </div>
            </form>
        </div>
    )
}