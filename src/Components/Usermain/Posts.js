import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Post.css';

const Posts = (props)=> {
  const ids = props.id
  const user_data = {userID:ids,id:0,title:'',body:''};
  const [TotalData,SetTotalData] = useState([]);
  const [Search,SetSearch] = useState([])
  const [FormData,SetFormData] = useState(user_data); 
  const [Edit,SetEdit] = useState(false);
  const [CurrentUser,SetCurrentUser] = useState(user_data);
  let uid = ids.toString();
  const url = 'https://jsonplaceholder.typicode.com/users/'.concat(uid,'/posts')

const handleInputChange = (event) =>{
  SetFormData({...FormData,[event.target.name]:event.target.value,
  });
};
const EditRow = (user) =>{
  SetEdit(true);
  SetCurrentUser({userID:ids,id:user.id,title:user.title,body:user.body})
};
const handleEditChange = (event) =>{
  SetCurrentUser({...CurrentUser,[event.target.name]:event.target.value})
};

  async function fetchData() {
    const response = await axios.get(url);
    SetTotalData(response.data);
  }

useEffect(()=>{
  fetchData();
},[]);
const ForSearch=(e)=>{
  if (e.length===0){
    SetSearch(TotalData);
  }
  else{  
  SetSearch(TotalData.filter(f=>Object.values(f.name).join('').toLowerCase().includes(e.target.value.toLowerCase())));
}}
const handleFormSubmit = async(event) =>{
  event.preventDefault();
  await axios.post('https://jsonplaceholder.typicode.com/posts',FormData);
  fetchData();
  SetFormData(user_data)
  alert("Data submitted successfully")
}
const handleEditSubmit = async(event) =>{
  event.preventDefault();
  await axios.put('https://jsonplaceholder.typicode.com/posts/'+CurrentUser.id,CurrentUser)
  fetchData();
  alert("updated sucessfully");
  SetEdit(false)
}
const DeleteRow = async(id) =>{ 
  await axios.delete('https://jsonplaceholder.typicode.com/posts/'+id);
  fetchData();
  alert("Deleted sucessfully")
}
return(
  <div className=''>
    <div className='row mt-3 post'>
      <div className='row box'>
   
      <h3>POSTS</h3>

       {TotalData.map((user)=>(
        <div className='each_post' key={user.id}>
          <div className='title'>{user.title}</div>
          <div>{user.body}</div>
          <div className='buttons'>
          <div><button className='btn btn-danger btn-sm' onClick={()=>DeleteRow(user.id)}>Delete</button></div>
          <div><button className='btn btn-warning btn-sm' onClick={()=>EditRow(user)}>Update</button></div>
          <div><button className='btn btn-secondary btn-sm'><Link to="/comments" state={user.id}>Comments</Link></button></div>
       </div> </div>
       ))}
       </div>

    <div className='row forms'><div className='col-sm-6 forming'>{Edit?(
      <>
      <h1>Editing User</h1>
      <form onSubmit={handleEditSubmit}>
      <div className='mt-3 mb-3'>
      <label className='form=label' htmlFor='id'>User ID:</label>
      <input type='text' id='id' name='id' className='form-control' onChange={handleEditChange} value={CurrentUser.userID}/>
      </div>
      <div className='mt-3 mb-3'>
      <label className='form=label' htmlFor='title'>Title:</label>
      <input type='text' id='title' name='title' className='form-control' onChange={handleEditChange} value={CurrentUser.title}/>
      </div>
      <div className='mt-3 mb-3'>
      <label className='form=label' htmlFor='body'>Body:</label>
      <input type='text' id='body' name='body' className='form-control' onChange={handleEditChange} value={CurrentUser.body}/>
      </div>
      <button className='btn btn-primary' type='submit'>Submit</button>
      
    </form></>
    ):(
    <>
    <h1>Adding User</h1>
    <form onSubmit={handleFormSubmit}>
    <div className='mt-3 mb-3'>
      <label className='form=label' htmlFor='id'>User ID:</label>
      <input type='text' id='id' name='id' className='form-control' onChange={handleInputChange} value={FormData.userID}/>
      </div>
      <div className='mt-3 mb-3'>
      <label className='form=label' htmlFor='title'>Title:</label>
      <input type='text' id='title' name='title' className='form-control' onChange={handleInputChange} value={FormData.title}/>
      </div>
      <div className='mt-3 mb-3'>
      <label className='form=label' htmlFor='body'>Body:</label>
      <input type='text' id='body' name='body' className='form-control' onChange={handleInputChange} value={FormData.body}/>
      </div>
      <button className='btn btn-primary' type='submit'>Submit</button>
      
    </form></>)}
      
    </div>
    <div className='col-sm-6'><img className='gif' src='add.gif'/></div>
    </div></div></div>
)}
       
export default Posts;
