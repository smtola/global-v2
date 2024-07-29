import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import Career from './pages/Career';

const router = createBrowserRouter([
  {
  path: "/",
  element: <HomePage />
  },
  {
    path: '/blog',
    element: <Blog/>
  },
  {
    path: '/career',
    element: <Career/>
  }
])
function App() {
  return <RouterProvider router={router} /> ;
}

export default App
