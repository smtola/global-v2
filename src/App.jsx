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
    BlogDetail,
  Testimonial,
  BannerConfig,
    AboutUsConfig,
    VMC,
    CoreValue,
    Founder,
    OrgChart,
    Brc,
    Services,
    ServiceDetail,
    WhyUs,
    Clients,
    ClientTn
} from "./RootLayout";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import BRC from "./pages/Admin/partials/dashboard/BRC.jsx";
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
        <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/client-testimonial" element={<Testimonial/>}/>
        <Route path="/career" element={<Career />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route index={true} element={<BlogAdmin />} />
          <Route path="career" element={<CareerAdmin />} />
          <Route path="banner" element={<BannerConfig />} />
          <Route path="about-us" element={<AboutUsConfig />} />
          <Route path="vision-mission-core-value" element={<VMC />} />
          <Route path="core-value-detail" element={<CoreValue />} />
          <Route path="founder-information" element={<Founder />} />
          <Route path="organization-chart" element={<OrgChart />} />
          <Route path="business-registration-certificates" element={<BRC />} />
          <Route path="service-name" element={<Services />} />
          <Route path="service-details" element={<ServiceDetail />} />
          <Route path="why-us" element={<WhyUs />} />
          <Route path="client" element={<Clients />} />
          <Route path="client-testimonial" element={<ClientTn />} />
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
