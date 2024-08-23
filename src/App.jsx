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
  ResetPasswordRequest,
  ResetPassword,
  TokenManager,
  HomeAdmin
} from "./RootLayout";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
function App() {

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
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/login" element={<Login  />} />
          <Route path="/home-admin" element={<HomeAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route index={true} element={<BlogAdmin />} />
          <Route path="career" element={<CareerAdmin />} />
          <Route path="profile" element={<Profile />} />
          <Route path="resetpassordrequest" element={<ResetPasswordRequest />} />
          <Route path="tokenmanager" element={<TokenManager />} />
          <Route path="resetpassword" element={<ResetPassword />} />
        </Route>
      </Routes>
    </Router>
  </>
 )
}

export default App;
