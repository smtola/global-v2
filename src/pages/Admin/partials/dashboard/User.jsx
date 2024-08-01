import React, {useState,useEffect} from 'react'
import {supabase} from '../../../../config/db';

const User = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });
  const [user_1, setUser_1] = useState({
    id:'',
    fname: '',
    lname: '',
    email: '',
    password: '',
  });

    useEffect(() => {
        fetchUsers();
    }, []);

  async function fetchUsers(){
    const {data} = await supabase
    .from('users')
    .select('*')
    setUsers(data);
  }

  const handleChange = (e) => {
    setUser(
        (prevFormData)=>{
            return {
               ...prevFormData,
                [e.target.name]: e.target.value,
            }
        }
    );
  }
  const handleChange_edit = (e) => {
    setUser_1(
        (prevFormData)=>{
            return {
               ...prevFormData,
                [e.target.name]: e.target.value,
            }
        }
    );
  }

  async function createUsers(){
    await supabase
        .from('users')
        .insert(
            { 
                fname: user.fname, 
                lname: user.lname ,
                email: user.email, 
                password: user.password
            })
            fetchUsers();
  }
  async function deleteUsers(id){
        const {data, error} = await supabase
        .from('users')
        .delete()
        .eq('id', id)
        fetchUsers();
        if(error){
            console.log(error);
        }
        if(data){
            console.log('User deleted successfully');
        }
  }

  async function displayUsers(id){
    setShowModalEdit(true);
    users.map((user)=>{
        if(user.id === id){
            setUser_1(
                {
                    id:user.id,
                    fname: user.fname, 
                    lname: user.lname, 
                    email: user.email, 
                    password: user.password,
                }
            );
        }
    })
  }

  async function updateUsers(id){
   const {data,error} =  await supabase
       .from('users')
       .update({
            id:id,
            fname: user_1.fname, 
            lname: user_1.lname, 
            email: user_1.email, 
            password: user_1.password,
        })
       .eq('id', id)
        fetchUsers();
        setShowModalEdit(false);

        if(error){
            console.log(error);
        }
        if(data){
            console.log('User Edit successfully');
        }
  }
  
  return (
    <div className="flex flex-col col-span-full bg-white/30 shadow-sm rounded-xl">
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        First Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Last Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Action</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>(
                    <tr key={user.id} className="bg-white border-b hover:bg-gray-50 ">
                        <td className="px-6 py-4 whitespace-nowrap ">
                            {user.fname}
                        </td>
                        <td className="px-6 py-4">
                            {user.lname}
                        </td>
                        <td className="px-6 py-4">
                            {user.email}
                        </td>
                        <td className="px-6 py-4">
                            {user.password}
                        </td>
                        <td className="px-6 py-4 text-right">
                            <button onClick={()=>{deleteUsers(user.id)}} className="font-medium px-3 text-red-600 hover:underline">Delete</button>
                            <button onClick={()=>{displayUsers(user.id)}} className="font-medium px-3 text-blue-600 hover:underline">Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>

    {/* modal */}
    {showModal ? (
            <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-2xl font-semibold">Add Users</h3>
                    <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setShowModal(false)}
                    >
                        <span className="text-black opacity-7 h-6 w-6 text-xl block">
                        x
                        </span>
                    </button>
                    </div>
                    <div className="p-10 flex-auto">
                        <form className="max-w-lg mx-auto" onSubmit={createUsers}>
                            <label className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                </svg>
                                </span>
                                <input 
                                type="text" 
                                name="fname" 
                                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none block flex-1 min-w-0 w-full text-sm px-4 py-2.5 "  
                                placeholder="First Name"
                                onChange={handleChange}
                                />
                            </div>

                            <label className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                </svg>
                                </span>
                                <input 
                                type="text" 
                                name="lname" 
                                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none block flex-1 min-w-0 w-full text-sm px-4 py-2.5 "  
                                placeholder="Last Name"
                                onChange={handleChange}
                                />
                            </div>

                            <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                </svg>
                                </span>
                                <input 
                                type="text" 
                                name="email" 
                                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none block flex-1 min-w-0 w-full text-sm p-2.5  "  
                                placeholder="Email"
                                onChange={handleChange}
                                />
                            </div>

                            <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                </svg>
                                </span>
                                <input 
                                type="text" 
                                name="password" 
                                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none block flex-1 min-w-0 w-full text-sm p-2.5  "  
                                placeholder="Password"
                                onChange={handleChange}
                                />
                            </div>
                            
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            </>
        ) : null}
    {/* modal edit */}
    {showModalEdit ? (
            <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-2xl font-semibold">Edit</h3>
                    <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setShowModalEdit(false)}
                    >
                        <span className="text-black opacity-7 h-6 w-6 text-xl block">
                        x
                        </span>
                    </button>
                    </div>
                    <div className="p-10 flex-auto">
                        <form className="max-w-lg mx-auto" onSubmit={()=>{updateUsers(user_1.id)}}>
                            <label className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                </svg>
                                </span>
                                <input 
                                type="text" 
                                name="fname" 
                                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none block flex-1 min-w-0 w-full text-sm px-4 py-2.5 "  
                                placeholder="First Name"
                                onChange={handleChange_edit}
                                defaultValue={user_1.fname}
                                />
                            </div>

                            <label className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                </svg>
                                </span>
                                <input 
                                type="text" 
                                name="lname" 
                                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none block flex-1 min-w-0 w-full text-sm px-4 py-2.5 "  
                                placeholder="Last Name"
                                onChange={handleChange_edit}
                                defaultValue={user_1.lname}
                                />
                            </div>

                            <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                </svg>
                                </span>
                                <input 
                                type="text" 
                                name="email" 
                                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none block flex-1 min-w-0 w-full text-sm p-2.5  "  
                                placeholder="Email"
                                onChange={handleChange_edit}
                                defaultValue={user_1.email}
                                />
                            </div>

                            <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                </svg>
                                </span>
                                <input 
                                type="text" 
                                name="password" 
                                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none block flex-1 min-w-0 w-full text-sm p-2.5  "  
                                placeholder="Password"
                                onChange={handleChange_edit}
                                defaultValue={user_1.password}
                                />
                            </div>
                            
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                onClick={() => setShowModalEdit(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="submit"
                            >
                                Submit
                            </button>
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