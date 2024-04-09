import { useLocation } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Comments = () =>{
    const [TotalPhoto,SetTotalPhoto] = useState([]);
    const location = useLocation();
    const photos = location.state.toString();
    const url = 'https://jsonplaceholder.typicode.com/posts/'.concat(photos,'/comments')
    async function fetchData() {
      debugger;
      try {
        const response = await axios.get(url);
        SetTotalPhoto(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
  
    useEffect(()=>{
      fetchData();
    },[]);
    
    return(
        <div className="App">
        <div>
          <table>
          <th>POSTID</th>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>BODY</th>
          {TotalPhoto.map((comments)=>(
          <tr key={comments.id}>
            <td>{comments.postId}</td>
            <td>{comments.id}</td>
            <td>{comments.name}</td>
            <td>{comments.email}</td>
            <td>{comments.body}</td>
           </tr>
         ))}
          </table>
        </div>
      </div>
    )
}
export default Comments