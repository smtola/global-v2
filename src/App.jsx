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
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/career" element={<Career />} />
    <Route path="/login" element={<Login setToken={setToken} />} />
    {
      token ? (
        <Route path="/dashboard" element={<Dashboard token={token}/>} >
          <Route index={true} element={<BlogAdmin />} />
          <Route path="/dashboard/career" element={<CareerAdmin />} />
          <Route path="/dashboard/profile" element={<Profile token={token}/>} />
        </Route>
      )

      :
      <Route path={"*"} element={<Login setToken={setToken} />} />
    }
  </Routes>
 )
}

export default App;
