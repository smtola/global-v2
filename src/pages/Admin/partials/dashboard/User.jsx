import React, {useEffect, useState} from 'react'
import {supabase} from '../../../../config/db';

const User = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [formData, setFormData] = useState({
    fullName:'',
    email:'',
    password:''
  });
  const [dataUser, setDataUser] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(dataUser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
          throw error;
        }

        setDataUser(data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) =>{
    setFormData(
        (prevFromData)=>{
            return {...prevFromData, [e.target.name]: e.target.value}
        }
    )
  }

  const handlSubmit = async (e) =>{
    e.preventDefault();
    try{
        const {data, error} = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options:{
                data:{
                    full_name: formData.fullName,
                }
            }
        })
        if(error) throw error;
        alert('Check your email for verification link');
    }catch(error){
        alert(error);
    }
  }
  if (loading) {
    return <p>Loading...</p>;
  }

return (
    <div className="flex flex-col col-span-full rounded-xl">
    {/* Chart built with Chart.js 3 */}
    <div className='flex justify-end'>
    <button
        className="bg-[#1a286d] text-[#ffffff] active:bg-[#1f2c6c] w-[10%]
        font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add New
    </button>
    </div>
    <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
      {/* Change the height attribute to adjust the chart height */}
      <div className='flex justify-center'>
        <div className='p-5 shadow-lg rounded-2xl w-full max-w-xl'>
            <div className="space-x-4">
                <div className='text-center'>
                    <h1 className="text-2xl font-bold text-gray-900">{dataUser.user_metadata.full_name}</h1>
                    <p className="text-gray-600">{dataUser.user_metadata.email}</p>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800">Account Details</h2>
                <div className="mt-2">
                    <p className="text-gray-700"><strong>Created At:</strong> {new Date(dataUser.created_at).toLocaleDateString()}</p>
                    <p className="text-gray-700"><strong>Last Sign-In:</strong> {new Date(dataUser.last_sign_in_at).toLocaleDateString()}</p>
                </div>
            </div>
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
                        <form className="max-w-lg mx-auto" onSubmit={handlSubmit}>
                            <div className='my-2'>
                                <label className="block mb-2 text-sm font-medium text-gray-400">Full Name</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                        </svg>
                                    </span>
                                    <input 
                                        type="text" 
                                        className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "  
                                        placeholder="Your fullname"
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
                            >
                              Save
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    ) : null}
    {/* modalEdit */}
    {showModalEdit ? (
            <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full my-6 mx-auto max-w-sm md:max-w-md">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                        <h3 className="text-xl text-gray-500 font-semibold">Edit Users</h3>
                        <button
                            className=" float-right"
                            onClick={() => setShowModalEdit(false)}
                        >
                            <span className="relative text-gray-500 cursor-pointer opacity-7 h-6 w-6 text-xl block hover:text-[#314bb2]">
                                <h1>x</h1>
                            </span>
                        </button>
                        </div>
                        <div className="p-2 flex-auto">
                            <form className="max-w-lg mx-auto">
                                <div className='my-2'>
                                <label className="block mb-2 text-sm font-medium text-gray-400">Title</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                        </svg>
                                    </span>
                                    <input 
                                        type="text" 
                                        className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "  
                                        placeholder="Title"
                                        required
                                    />
                                </div>
                                </div>

                                <div className='flex justify-end border-t mt-2 pt-3 border-solid border-gray-300'>
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModalEdit(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="text-white bg-[#314bb2] active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                    >
                                        Save
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