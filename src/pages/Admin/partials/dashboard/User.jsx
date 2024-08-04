import React, {useEffect, useState} from 'react'
import {supabase} from '../../../../config/db';
import {useNavigate } from 'react-router-dom';
const User = ({token}) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  const [formData, setFormdata] = useState({
    email: '',
    password: '',
    fullName: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event)=>{
    setFormdata((prevFormData)=>{
      return {
       ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Sign up with Supabase authentication
      const {data, error: authError } = await supabase.auth.signUp({
        email:formData.email,
        password:formData.password,
        options:{
          data:{
            full_name:formData.fullName,
          }
        }
      });
      alert('Check your email to virfy email for sign up!')
      setShowModal(false)
      if (authError) {
        setError(authError.message);
        setLoading(false);
        return;
      }
    } catch (error) {
      setError('Error signing up');
      setLoading(false);
    }
  };
  
return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
  <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
    <div className="flex flex-col items-center">
      <div>
        <h1 className="'font-['koulen'] font-medium text-[30px] text-[#314BB2]">User Information</h1>

        <div>
          <p className="text-[#5A5A5A] text-sm">
            Full Name: {token.user.user_metadata.full_name}
          </p>
          <p className="text-[#5A5A5A] text-sm">
            Email: {token.user.user_metadata.email}
          </p>
          <p className="text-[#5A5A5A] text-sm">
            Created: {Date(token.user.created_at.toString())}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-row space-y-2 gap-4">
        <button
          onClick={() => setShowModal(true)}
          className=" text-[#314BB2] py-2 px-4 rounded hover:underline transition-all duration-300"
        >
          New User
        </button>
        <button
          onClick={() => alert('Reset Password')}
          className=" text-red-600 py-2 px-4 rounded hover:underline transition-all duration-300"
        >
          Reset Password
        </button>
        <button
          onClick={handleLogout}
          className=" text-red-600 py-2 px-4 rounded hover:underline transition-all duration-300"
        >
          Logout
        </button>
        <button
          onClick={()=>navigate("/dashboard")}
          className=" text-[#314BB2] py-2 px-4 rounded hover:underline transition-all duration-300"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  </div>
  {/* modalAdd */}
  {showModal ? (
      <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-full my-6 mx-auto max-w-sm md:max-w-md">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-xl text-gray-500 font-semibold">Add Users</h3>
                  <button
                      className=" float-right"
                      onClick={() => setShowModal(false)}
                  >
                      <span className="relative text-gray-500 cursor-pointer opacity-7 h-6 w-6 text-xl block hover:text-[#314bb2]">
                          <h1>x</h1>
                      </span>
                  </button>
                  </div>
                  <div className="p-2 flex-auto">
                      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                      <form className="max-w-lg mx-auto" onSubmit={handleSignUp}>
                          <div className='my-2'>
                              <label className="block mb-2 text-sm font-medium text-gray-400">Username</label>
                              <div className="flex">
                                  <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                                      <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                      </svg>
                                  </span>
                                  <input 
                                      type="text" 
                                      className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "  
                                      placeholder="Your Full Name"
                                      name="fullName"
                                      onChange={handleChange}
                                      required
                                  />
                              </div>
                          </div>

                          <div className='my-2'>
                              <label className="block mb-2 text-sm font-medium text-gray-400">Email</label>
                              <div className="flex">
                                  <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                                      <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                      </svg>
                                  </span>
                                  <input 
                                      type="email"     
                                      className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "  
                                      placeholder="Your email"
                                      name="email"
                                      onChange={handleChange}
                                      required
                                  />
                              </div>
                          </div>

                          <div className='my-2'>
                              <label className="block mb-2 text-sm font-medium text-gray-400">Password</label>
                              <div className="flex">
                                  <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                                      <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                      </svg>
                                  </span>
                                  <input 
                                      type="password" 
                                      className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "  
                                      placeholder="Your password"
                                      name="password"
                                      onChange={handleChange}
                                      required
                                  />
                              </div>
                          </div>

                          <div className='flex justify-end border-t mt-2 pt-3 border-solid border-gray-300'>
                          <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                              onClick={() => setShowModal(false)}
                          >
                              Cancel
                          </button>
                          <button
                              className="text-white bg-[#314bb2] active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="submit"
                              disabled={loading}
                          >
                            {loading ? 'Signing up...' : 'Sign Up'}
                          </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      </>
  ) : null}
</div>

)
}

export default User