import React, { useState, useEffect } from 'react';
import { supabase } from '../../config/db'; // Adjust path as needed
import { useLocation } from 'react-router-dom';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const accessToken = queryParams.get('access_token');
    const refreshToken = queryParams.get('refresh_token');

    if (accessToken && refreshToken) {
      const handlePasswordReset = async () => {
        try {
          setLoading(true);
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (error) throw error;

          const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });

          if (updateError) {
            setMessage('Error updating password: ' + updateError.message);
          } else {
            setMessage('Password updated successfully!');
          }
        } catch (error) {
          setMessage('Error: ' + error.message);
        } finally {
          setLoading(false);
        }
      };

      handlePasswordReset();
    }
  }, [location.search, newPassword]);

  const handleSubmit = async () => {
    if (!newPassword) {
      setMessage('Please enter a new password.');
      return;
    }

    const queryParams = new URLSearchParams(location.search);
    const accessToken = queryParams.get('access_token');
    const refreshToken = queryParams.get('refresh_token');

    if (accessToken && refreshToken) {
      try {
        setLoading(true);
        const { data, error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        if (error) throw error;

        const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });

        if (updateError) {
          setMessage('Error updating password: ' + updateError.message);
        } else {
          setMessage('Password updated successfully!');
        }
      } catch (error) {
        setMessage('Error: ' + error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setMessage('Invalid session.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Reset Your Password</h2>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update Password'}
        </button>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
