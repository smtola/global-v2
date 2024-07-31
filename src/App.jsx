import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import Dashboard from "./pages/Admin/Dashboard";
import BlogAdmin from "./pages/Admin/partials/dashboard/BlogAdmin";
import User from "./pages/Admin/partials/dashboard/User";
import Career_2 from "./pages/Admin/partials/dashboard/CareerAdmin";
import Login from "./pages/Admin/LoginPage";

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
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <BlogAdmin />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "career",
        element: <Career_2 />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
