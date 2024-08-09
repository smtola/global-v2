import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../../config/db';
import { toast, Bounce } from 'react-toastify';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract token from URL
  const queryParams = new URLSearchParams(location.search);
  console.log(queryParams);
  
  const token = queryParams.get('token');

  console.log(token);
  
  useEffect(() => {
    if (!token) {
      toast.error('Invalid or missing token.', {
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
    }
  }, [token, navigate]);

  const handlePasswordReset = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.updateUser({ password: newPassword }, { access_token: token });

    if (error) {
      toast.error(`Error updating password: ${error.message}`, {
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
    } else {
      toast.success('Password updated successfully!', {
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
      navigate('/login');
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center min-h-[50vh] p-5">
      <h1 className="text-[#233C96] font-bold text-2xl mb-4">Reset Password</h1>
      <form onSubmit={handlePasswordReset} className="w-full max-w-sm bg-[#eee] p-5 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-[#233C96]">New Password</label>
          <input
            type="password"
            id="newPassword"
            className="block w-full p-2.5 bg-gray-200 border-gray-300 rounded-lg"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          {loading ? 'Updating...' : 'Update Password'}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
