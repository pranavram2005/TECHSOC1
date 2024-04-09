import React,{useState,useEffect} from 'react';
import axios from 'axios';
const Todos = (props) =>{
    const [TotalTodos,SetTotalTodos] = useState([]);
    let s = props.id
    let ids = s.toString();
    const url = 'https://jsonplaceholder.typicode.com/users/'.concat(ids,'/todos')
    async function fetchData() {
      debugger;
      try {
        const response = await axios.get(url);
        SetTotalTodos(response.data);
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
          <th>COMPLETED</th>
          {TotalTodos.map((todos)=>(
          <tr key={todos.userId}>
              <td>{todos.title}</td>
            <td>{todos.completed.toString()}</td>
           </tr>
         ))}
          </table>
        </div>
      </div>
    )
}
export default Todos