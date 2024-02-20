import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./user.css";
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
import swal from 'sweetalert';



const User = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{

    const fetchData = async()=>{
        const response = await axios.get("http://localhost:7000/api/getall");
        setUsers(response.data);
    }

    fetchData();

  },[])

  const deleteUser = async(userId) =>{
      await axios.delete(`http://localhost:7000/api/delete/${userId}`)
      .then((response)=>{
        setUsers((prevUser)=> prevUser.filter((user)=> user._id !== userId))
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary data has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary data is safe!");
            }
          });
      })
      .catch((error) =>{
        console.log(error);
      })
  }

  return (
    <div className='userTable'>
        <Link to={"/add"} className='addButton'>ADD  DATA</Link>
        <h1 style={{marginTop:'10px',textAlign:'center'}}>List of Employees in our Database</h1>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return(
                        <tr key={user._id}>
                          
                            <td>{user.name} </td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td className='actionButtons'>
                            <Link to={`/edit/`+user._id}>Edit</Link>
                                <button onClick={()=> deleteUser(user._id)}>Delete</button>
                               
                            </td>
                        </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default User