import Album from "./Usermain/Album"
import Posts from "./Usermain/Posts"
import { useLocation } from "react-router-dom";

const Postmain = () =>{
    const location = useLocation();
    const state = location.state;
    return(<>
    <p>{state}</p>
        <Album id={state}/>
        <Posts id={state}/>
</>
    )
}
export default Postmain