import { useLocation } from "react-router-dom";
const Post = () =>{
    const location = useLocation();
    const state = location.state;
    return(
        <p>hi</p>
    )
}
export default Post;