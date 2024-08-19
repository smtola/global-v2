import { useState } from 'react';
import imgLogin from '../../assets/images/login.png';
import {supabase} from '../../config/db';
import { toast,Bounce } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  localStorage.removeItem('jwt');
   const setSession = async (access_token, refresh_token) => {
    try {
      const { data, error } = await supabase.auth.setSession({
        access_token,
        refresh_token
      });
  
      if (error) {
        console.error('Error setting session:', error.message);
        return { success: false, error: error.message };
      } else {
        console.log('Session set successfully:', data);
        return { success: true, data };
      }
    } catch (error) {
      console.error('Unexpected error:', error.message);
      return { success: false, error: error.message };
    }
  }

  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Sign in with Supabase authentication
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        toast.error('Your email address or password is incorrect', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce
          });
        setLoading(false);
        return;
      }
      localStorage.setItem('tokens', JSON.stringify(data));
      
      const { access_token, refresh_token } = data.session;
      
      setSession(access_token, refresh_token);
      // Set session with tokens
      const { error: sessionError } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });

      if (sessionError) {
        throw new Error('Failed to set session');
      }
      toast.success('Login successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce
        });
        // navigate('');
        window.location.href = "/dashboard";
      // Save JWT to localStorage
      localStorage.setItem('jwt', access_token);
    } catch (error) {
      toast.error('Your email address or password is incorrect', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce
        });
      setLoading(false);
    }
  };

  return (
    <>
      <div className='container mx-auto flex flex-col justify-center items-center min-h-[48vh] lg:min-h-[90vh] p-5'>
          <div>
            <img src="/logo.jpg" className='mx-auto w-36 md:w-52'/>
          </div>
          <div className='flex flex-wrap md:flex-nowrap justify-center items-center w-full max-w-sm lg:max-w-xl lg:max-h-xl shadow-md rounded-lg bg-[#eee] p-0 m-0'>
            <div className='w-full'>
              <img src={imgLogin} className='w-full object-contain mx-auto' />
            </div>
            <div className='w-full p-5'>
              <h1 className='text-[#233C96] font-["lexend"] font-bold text-[25px] text-center my-5'>Login</h1>
              <form onSubmit={handleSignIn}>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#233C96]">Username or Email</label>
                  <input 
                  type="text" 
                  className="text-sm rounded-lg focus:border-blue-500 block w-full max-w-lg p-2.5 bg-gray-300 border-gray-600 placeholder-gray-400 text-[#233C96]" 
                  placeholder="Username or Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#233C96]">Your password</label>
                  <input 
                  type="password" 
                  name="password" 
                  className="text-sm rounded-lg block w-full max-w-lg p-2.5 bg-gray-300 border-gray-3600 placeholder-gray-400 text-[#233C96] focus:border-blue-500" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  />
                </div>
                <button type="submit" disabled={loading} className="w-full float-end text-white focus:ring-4 focus:outline-none font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center bg-[#3b71ca] hover:bg-[#4f83d7]">
                {loading ? 'Signing in...' : 'Sign In'}
                </button>
                
              </form>
            </div>
          </div>
      </div>
    </>
  )
}

export default LoginPage