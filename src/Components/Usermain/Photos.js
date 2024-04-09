import { useLocation } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Photos = () =>{
    const [TotalPhoto,SetTotalPhoto] = useState([]);
    const location = useLocation();
    const photos = location.state.toString();
    const url = 'https://jsonplaceholder.typicode.com/albums/'.concat(photos,'/photos')
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
          <th>TITLE</th>
          <th>PHOTO</th>
          {TotalPhoto.map((photo)=>(
          <tr key={photo.userId}>
            <td>{photo.title}</td>
            <td><img src={photo.thumbnailUrl}/></td>
           </tr>
         ))}
          </table>
        </div>
      </div>
    )
}
export default Photos