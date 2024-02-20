import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./add.css";
import toast from 'react-hot-toast';

const Add = () => {

  const users = {
    name:"",
    email:"",
    mobile:"",
   
  }

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) =>{
      const {name, value} = e.target;
      setUser({...user, [name]:value});
  }

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:7000/api/create", user)
    .then((response)=>{
      console.log(response);
      toast.success(response.data.message,{position:"top-right"});
       navigate("/")
    })
    .catch(error => console.log(error))
  }


  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Add New Employee Data</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="name">Name</label>
                <input type="text" onChange={inputHandler} id="name" name="name" autoComplete='off' placeholder='Enter your Name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="text" onChange={inputHandler} id="email" name="email" autoComplete='off' placeholder='Enter your Email' />
            </div>
            <div className="inputGroup">
                <label htmlFor="mobile">Mobile</label>
                <input type="mobile" onChange={inputHandler} id="mobile" name="mobile" autoComplete='off' placeholder='Enter your Mobile' />
            </div>
           
            <div className="inputGroup">
                <button type="submit">ADD DATA</button>
            </div>
        </form>
    </div>
  )
}

export default Add;