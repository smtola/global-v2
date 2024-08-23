import { useEffect } from 'react';
import { supabase } from '../../../config/db'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';
const AuthHandler = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const { data: {authListener} } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        navigate('/dashboard');
      }
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return null; // This component does not render anything
};

export default AuthHandler;
