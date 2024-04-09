import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Album.css';

const Album = (props) =>{
    const [TotalAlbum,SetTotalAlbums] = useState([]);
    let a = props.id
    let ids = a.toString();
    const url = 'https://jsonplaceholder.typicode.com/users/'.concat(ids,'/albums')
    async function fetchData() {
      debugger;
      try {
        const response = await axios.get(url);
        SetTotalAlbums(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
  
    useEffect(()=>{
      fetchData();
    },[]);
    
    return(
      
        <div className="row albums">
          
          {TotalAlbum.map((album)=>(
          <div className='each_album' key={album.userId}>
            <Link to="/photos" state={album.id}>
            <img className='image' src="album.gif"/>
            <br/>
            {album.title}</Link>
           </div>
         ))}
      </div>
    )
}
export default Album