import { useEffect, useState } from "react";
import "./App.css";
import {
  HomePage,
  Blog,
  Career,
  Dashboard,
  Login,
  BlogAdmin,
  CareerAdmin,
  Profile,
} from "./RootLayout";
import {Route,Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
function App() {
  
  const [token,setToken] = useState(false);

  if(token){
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(()=>{
    const storedToken = sessionStorage.getItem("token");
    if(storedToken){
      setToken(JSON.parse(storedToken));
    }
  },[])

 return(
  <>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition: Bounce
    />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/career" element={<Career />} />
      <Route path="/login" element={<Login setToken={setToken} />} />
      {
        token ? (
          <Route path="/dashboard" element={<Dashboard token={token}/>} >
            <Route index element={<BlogAdmin />} />
            <Route path="career" element={<CareerAdmin />} />
            <Route path="profile" element={<Profile token={token}/>} />
          </Route>
        )
        :
        <Route path="*" element={<Login setToken={setToken} />} />
      }
    </Routes>
  </>
 )
}

export default App;
