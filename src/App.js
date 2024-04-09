import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import User from './Components/User';
import Post from './Components/Post';
import Layout from './Components/Layout';
import Usermain from './Components/Usermain';
import Photos from './Components/Usermain/Photos';
import Comments from './Components/Usermain/Comments';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="user" element={<User/>} />
          <Route path="post" element={<Post/>} />
          <Route path="usermain" element={<Usermain/>} />
          <Route path="photos" element={<Photos/>} />
          <Route path="comments" element={<Comments/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
