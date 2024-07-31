import React, {useState,useEffect} from 'react'
import {supabase} from '../../../../config/db';

const User = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);

  async function fetchUsers(){
    const {data} = await supabase
    .from('users')
    .select('*')
    setUsers(data);
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
                            <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
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
                    <h3 className="text-3xl font=semibold">General Info</h3>
                    <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setShowModal(false)}
                    >
                        <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                        x
                        </span>
                    </button>
                    </div>
                    <div className="relative p-6 flex-auto">
                    <form class="max-w-sm mx-auto">
                        <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <div class="flex">
                            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                            </svg>
                            </span>
                            <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green"/>
                        </div>
                    </form>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </button>
                    <button
                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >
                        Submit
                    </button>
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