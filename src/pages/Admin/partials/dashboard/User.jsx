import React, {useEffect, useState} from 'react'
import {supabase} from '../../../../config/db';
import { toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const User = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState('');
  const [formData, setFormdata] = useState({
    email: '',
    password: '',
    fullName: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    fetchUser();
  },[])
  const fetchUser = async ()=>{
    try {
      const { data: { users }, error } = await supabase.auth.admin.listUsers();
      if(error) throw error;
      setUsers(users);
    }catch(err){
      toast.error(err.message, {
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
    }finally {
      setLoading(false);
    }
  }

  const handleChange = (event)=>{
    setFormdata((prevFormData)=>{
      return {
       ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      // Delete user
      await supabase.auth.admin.deleteUser(id);
      toast.success('User deleted successfully!', {
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
      fetchUser();
    } catch (error) {
      toast.error(error.message, {
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
    } finally {
      setLoading(false);
    }
  }

  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Sign up with Supabase authentication
      const { data, error } = await supabase.auth.admin.createUser({
        email:formData.email,
        password:formData.password,
        user_metadata:{
          full_name: formData.fullName
        },
        app_metadata: {
          role:'user'
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

  // const handleChangeRole = async () => {
  //   if (!role) {
  //     alert('Please enter a role.');
  //     return;
  //   }

  //   try {
  //      users?.map(async (user)=>{
  //       if (!user) {
  //         throw new Error('User not found');
  //       }
  //       const { data, error } = await supabase.auth.updateUser({
  //         data: {
  //           app_metadata: {
  //             ...user.app_metadata,
  //             role // Update the role
  //           }
  //         }
  //       });
  //       if (error) {
  //         throw error;
  //       }
  //     });

  //     // Update user role in app_metadata
  //     alert('Role updated successfully!');
  //   } catch (error) {
  //     alert('Error updating role: ' + error.message);
  //   }
  // };
  
  if (loading) return (
    <div className="text-center min-h-[100vh] z-[99999]">
      <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
return (
  <>
  <div className="flex flex-col col-span-full bg-white/30 shadow-sm rounded-xl">
        {/*Add Button */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
                {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">
              Users
            </h1>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-[#314bb2] text-[#ffffff] active:bg-[#4262e1] 2xl:w-[10%]
            font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add Users
          </button>
        </div>
        <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
          {/* Change the height attribute to adjust the chart height */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Email
              </th>
              <th scope="col" className="px-6 py-3">
                    Type
              </th>
              <th scope="col" className="px-6 py-3">
                    Created_at
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="bg-white border-b hover:bg-gray-50 "
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {index + 1} : {user.user_metadata.full_name}
                </th>
                <td className="px-6 py-4 truncate...">
                  {user.email}
                </td>
                <td className="px-6 py-4">
                    {user.app_metadata.role}
                </td>
                <td className="px-6 py-4">
                  {new Date(user.created_at).toLocaleString('en-US', { timeZone: 'Asia/Phnom_Penh' })}
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => {
                      handleDelete(user.id);
                    }}
                    className="font-medium px-2 text-red-600 hover:underline"
                    disabled={loading}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 24 24" width="28" fill="red"><path d="M6 2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-.133l-.68 10.2a3 3 0 0 1-2.993 2.8H5.826a3 3 0 0 1-2.993-2.796L2.137 7H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4zm10 2H2v1h14V4zM4.141 7l.687 10.068a1 1 0 0 0 .998.932h6.368a1 1 0 0 0 .998-.934L13.862 7h-9.72zM7 8a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"></path></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
  {/* modalAdd */}
  {/* {showModalEdit ? (
      <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-full my-6 mx-auto max-w-sm md:max-w-md">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-xl text-gray-500 font-semibold">Edit Role</h3>
                  <button
                      className=" float-right"
                      onClick={() => {setShowModalEdit(false);}}
                  >
                      <span className="relative text-gray-500 cursor-pointer opacity-7 h-6 w-6 text-xl block hover:text-[#314bb2]">
                          <h1>x</h1>
                      </span>
                  </button>
                  </div>
                  <div className="p-2 flex-auto">
                      <form className="max-w-lg mx-auto" onSubmit={handleChangeRole}>
                        <input
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            placeholder="New role"
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                          />

                          <div className='flex justify-end border-t mt-2 pt-3 border-solid border-gray-300'>
                          <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                              onClick={() => {setShowModalEdit(false);}}
                          >
                              Cancel
                          </button>
                          <button
                              className="text-white bg-[#314bb2] active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="submit"
                              disabled={loading}
                          >
                            {loading ? 'Submit...' : 'Submit'}
                          </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      </>
  ) : null} */}
</>

)
}

export default User