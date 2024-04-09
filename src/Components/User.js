import './User.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
const User = () =>{
  const [TotalData,SetTotalData] = useState([]);
  
  
  async function fetchData() {
    debugger;
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      SetTotalData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  useEffect(()=>{
    fetchData();
  },[]);
  
    return(
        <div className="utable">
      <div className='users'>
        <h2>Users</h2>
        <div>
        {TotalData.map((user)=>(
          
        <div className='each_user' key={user.id}>
          <Link to="/usermain" state={user.id}>
          <div className='name link-underline-light'>{user.name}</div>
          <div className='email'>{user.email}</div>
          </Link> </div>
       ))}</div>          

        
      </div>
    </div>
    );
};
export default User