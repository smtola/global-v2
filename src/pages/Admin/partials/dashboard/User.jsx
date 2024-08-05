import React, {useEffect, useState} from 'react'
import {supabase} from '../../../../config/db';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const User = ({token}) => {
  const [showModal, setShowModal] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const [formData, setFormdata] = useState({
    email: '',
    password: '',
    fullName: '',
  });
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
       toast.warn('Check your email to virfy email for sign up!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce
        });
      setShowModal(false)
      if (authError) {
        toast.error(authError.message, {
          position: "top-right",
          autoClose: 5000,
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
    } catch (error) {
      toast.error('Error signing up', {
        position: "top-right",
        autoClose: 5000,
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
  <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
    {showContent?
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
                Created: {new Date(token.user.created_at).toUTCString()}
              </p>
            </div>
          </div>
  
          <div className="mt-4 flex flex-row space-y-2 gap-4">
            <button
              onClick={() => {setShowModal(true);setShowContent(false);}}
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
          </div>
        </div>
        </div>
     : null}

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
                      onClick={() => {setShowModal(false);setShowContent(true);}}
                  >
                      <span className="relative text-gray-500 cursor-pointer opacity-7 h-6 w-6 text-xl block hover:text-[#314bb2]">
                          <h1>x</h1>
                      </span>
                  </button>
                  </div>
                  <div className="p-2 flex-auto">
                      <form className="max-w-lg mx-auto" onSubmit={handleSignUp}>
                          <div className='my-2'>
                              <label className="block mb-2 text-sm font-medium text-gray-400">Username</label>
                              <div className="flex">
                                  <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -2 24 24" width="28" fill="currentColor"><path d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419 1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2z"></path></svg>
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
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -5 24 24" width="28" fill="currentColor"><path d="M3.598 2l5.747 5.12a1 1 0 0 0 1.33 0L16.423 2H3.598zM18 3.273l-5.994 5.341a3 3 0 0 1-3.992 0L2 3.254V12h16V3.273zM2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></path></svg>
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
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 24 24" width="28" fill="currentColor"><path d="M8.612 16.337l3.746-3.747 1.027.183a5 5 0 1 0-4.039-4.039l.184 1.028-6.994 6.994.177 2.651 2.651.177 1.833-1.833-.707-.707a1 1 0 0 1 1.415-1.414l.707.707zm.707-13.435a7 7 0 1 1 3.715 11.84L6.137 21.64l-4.43-.295a1 1 0 0 1-.932-.932l-.295-4.43 6.898-6.898a6.992 6.992 0 0 1 1.94-6.183zm4.242 5.656A2 2 0 1 1 16.39 5.73a2 2 0 0 1-2.829 2.828z"></path></svg>
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
                              onClick={() => {setShowModal(false);setShowContent(true);}}
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