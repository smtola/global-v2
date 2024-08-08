import React, { useEffect, useState } from 'react';
import {supabase} from '../../config/db';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleAuthChange = async (event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        const newPassword = prompt("What would you like your new password to be?");
        if (newPassword) {
          const { data, error } = await supabase.auth.updateUser({ password: newPassword });
          if (error) {
            setMessage('Error updating password.');
          } else {
            setMessage('Password updated successfully!');
          }
        }
      }
    };

    supabase.auth.onAuthStateChange(handleAuthChange);

    // Cleanup function to unsubscribe from the auth state changes
    return () => {
      supabase.auth.onAuthStateChange().unsubscribe();
    };
  }, []);

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
          onClick={handlePasswordReset}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update Password
        </button>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
