import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider,Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

import Blog from "./pages/Blog";
import Career from "./pages/Career";
import Dashboard from "./pages/Admin/Dashboard";
import BlogAdmin from "./pages/Admin/partials/dashboard/BlogAdmin";
import User from "./pages/Admin/partials/dashboard/User";
import Career_2 from "./pages/Admin/partials/dashboard/CareerAdmin";
import Login from "./pages/Admin/LoginPage";

function App() {
  const [token,setToken] = useState(false);
  
  if(token) {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data);
    }
  },[])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/career",
      element: <Career />,
    },
    { 
      path: "/dashboard",
      element:<Dashboard token={token}/>,
      children: [
        {
          index: true,
          element:<BlogAdmin token={token}/>,
        },
        {
          path: "profile",
          element:<User token={token}/>,
        },
        {
          path: "career",
          element:<Career_2 token={token}/>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login setToken={setToken}/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
