import Album from "./Usermain/Album"
import Posts from "./Usermain/Posts"
import Todos from "./Usermain/Todos"
import { useLocation } from "react-router-dom";
import './Usermain.css';

const Usermain = () =>{
    const location = useLocation();
    const state = location.state;
    return(<>
        <div ><Posts id={state}/></div>        
       <div className="box">
        <div className="row b_album"></div>
        <h2>Album</h2>
        <div className="album"><Album id={state}/></div></div>
        <div className="b_todo">
            <h2>TO DO LIST</h2>
            <div className="row">
            <div className="col-sm-6 todo"><Todos id={state}/></div>
            <div className="col-sm-6 "><img clssname="img" src="todo.gif"/></div>
            </div>
            </div>
        </>
    )
}
export default Usermain