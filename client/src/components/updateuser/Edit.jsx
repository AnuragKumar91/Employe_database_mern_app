import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../adduser/add.css";
import toast from 'react-hot-toast';

const Edit = () => {

 const users = {
    name: "",
    email: "",
    mobile: ""
 }

 const {id} = useParams();
 const navigate = useNavigate();
 const [user, setUser] = useState(users);

 const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value});
    console.log(user);
 }

 useEffect(()=>{
    axios.get(`http://localhost:7000/api/getone/${id}`)
    .then((response)=>{
        setUser(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])


 const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/update/${id}`, user)
    .then((response)=>{
        toast.success(response.data.message,{position:"top-right"});
       navigate("/")
    })
    .catch(error => console.log(error))
 }

  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Update user</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="name">Name</label>
                <input type="text" value={user.name} onChange={inputChangeHandler} id="name" name="name" autoComplete='off' placeholder='name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="text" value={user.email} onChange={inputChangeHandler} id="email" name="email" autoComplete='off' placeholder='email' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Mobile</label>
                <input type="number" value={user.mobile} onChange={inputChangeHandler} id="mobile" name="mobile" autoComplete='off' placeholder='mobile' />
            </div>
            <div className="inputGroup">
                <button type="submit">UPDATE USER</button>
            </div>
        </form>
    </div>
  )
}

export default Edit;