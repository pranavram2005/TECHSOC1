import './Home.css';
import {  Link } from "react-router-dom";

const Home = () =>{
    return(
        <><div className="back">
            <div className="tback">
            <div className='quotes'>
                Words that Move Mountains, <br/>Thoughts that Shape Destinies:<br/> Welcome to Our Odyssey.<br/>
                <Link to="user"><button className="btn btn-success bn">Get Started <i class='fas fa-arrow-right'></i></button></Link>             
                </div>
            </div></div></>
    )
}
export default Home