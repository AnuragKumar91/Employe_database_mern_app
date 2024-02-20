import React, { useState } from 'react'
import TypingEffect from './TypingEffect';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';



const Home = () => {
  const users={
    email:"",
    password:""

  }

  const[user,setUser]=useState(users);
  const navigate=useNavigate()

  const inputHandler = (e) =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value});
}
 const sumbitLogin=async(e)=>{
  e.preventDefault()
  await axios.post("http://localhost:7000/api/login",user)
  .then((res)=>{
    console.log(res);
    toast.success(res.data.message,{position:'top-center'});
    navigate("/user")
  }).catch(error => console.log(error))


 }
  return (
     <>
     <div className="heading">
     <h1>Welcome to my Crud Application Project</h1>
     <div>
      { <h1>This Project is Created with the Help of <TypingEffect texts={['React.js', 'Node.js', 'MongoDB','Express']} /></h1> }
    </div>
   
     </div>

     <div className='div-login'>
     
     <form className='form-login' onSubmit={sumbitLogin}>
     <h1 className='login-heading'>Welcome User</h1>
       <input className='input' type="text"  onChange={inputHandler} id="email" name="email" placeholder='Enter your email'/>
       <br></br>
       <input  className='input' type="password" onChange={inputHandler} id="password" name="password" placeholder='Enter your password'/>
       <button className='login-button'>Login </button>
    </form>
     </div>
     </>
  )
}

export default Home;