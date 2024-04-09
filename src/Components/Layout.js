import { Outlet, Link } from "react-router-dom";
import './layout.css';

const Layout = () => {
  return (
    <>
        <div className="container-fluid head">
        <div><img src="blog.png"/></div>
           <div><Link to="/" class="nav-link">Home</Link></div>
           <div><Link to="/user" class="nav-link">User</Link></div>
           <div><Link to="/post" class="nav-link">Posts</Link></div>
        </div>

      <Outlet />
    </>
  )
};

export default Layout;