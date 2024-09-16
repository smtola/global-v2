import React, { useState, useEffect } from "react";
import { supabase } from "../../../../config/db";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Founder = () => {
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetchData();
  })
  const fetchData = async () => {
    try {
    const {data:getData, error} = await supabase
        .from('founders_ms')
        .select('*');
    const getImage = await Promise.all(
        getData.map((items)=>{
          if(items.image){
            const { data: img_url, error: urlError } = supabase.storage
                .from("images") // Replace with your storage bucket name
                .getPublicUrl(`contents/${items.image}`); // item.image is the file path
            if (urlError) {
              throw urlError;
            }

            return { ...items, image: img_url.publicUrl }; // Append public URL to item
          }
          return items;
        })
    )

    if(error) {
      throw error;
    }
    setData(getImage);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }

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
      <div className="flex flex-col col-span-full bg-white/30 rounded-xl">
        {/*Add Button */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
                {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">
              Founder Information
            </h1>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-[#314bb2] text-[#ffffff] active:bg-[#4262e1] 2xl:w-[10%]
            font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={() => setShowModalAdd(true)}
          >
            Add Careers
          </button>
        </div>
        <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
          {/* Change the height attribute to adjust the chart height */}
          <div className="grid grid-cols-12 justify-center items-center gap-5">
            {data.map((blog, index) => (
              <div className="col-span-12 flex justify-center items-center gap-5">
                <img src={blog.image} alt="" className="w-[20rem] mx-auto border-b-2"/>
                <div>
                  <h1>
                    <b>Name</b> : {blog.nameEn} ({blog.nameKh})
                  </h1>
                  <p>
                    <b>Education</b> : <br/>
                    {blog.educationEn}
<br/>
<br/>
                    {blog.educationKh}
                  </p>
                  <b>
                    Header :
                  </b>
                  {blog.headEn} ({blog.headKh})
                  <br/>
                  <b>
                    Body :
                  </b>
                  {blog.bodyEn} ({blog.bodyKh})<br/>
                  <b>
                    Footer :
                  </b>
                  {blog.footerEn} ({blog.footerKh})
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* modalAdd */}
      {showModalAdd ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-sm md:max-w-md">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-xl text-gray-500 font-semibold">
                    Add Careers
                  </h3>
                  <button
                    className=" float-right"
                    onClick={() => setShowModalAdd(false)}
                  >
                    <span className="relative text-gray-500 cursor-pointer opacity-7 h-6 w-6 text-xl block hover:text-[#314bb2]">
                      <h1>x</h1>
                    </span>
                  </button>
                </div>
                <div className="p-2 flex-auto">
                  <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
                    <div className="my-2">
                      <label className="block mb-2 text-sm font-medium text-gray-400">
                        Title
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                        <input
                          type="text"
                          className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                          placeholder="Title"
                          onChange={(e) => setTittle(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="my-2">
                      <label className="block mb-2 text-sm font-medium text-gray-400">
                        Image
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100"
                          style={{
                            backgroundImage: `url(${file} )`,
                            backgroundPositionX: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-[#314bb2]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-[#314bb2]">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                          />
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-end border-t mt-2 pt-3 border-solid border-gray-300">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModalAdd(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="text-white bg-[#314bb2] active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        disabled={uploading}
                      >
                        {uploading ? "Uploading..." : "Save"}
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
                  <h3 className="text-xl text-gray-500 font-semibold">
                    Edit {title || 'loading...'}
                  </h3>
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
                    <div className="my-2">
                      <label className="block mb-2 text-sm font-medium text-gray-400">
                        Title
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                        <input
                          type="text"
                          className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                          placeholder="Title"
                          defaultValue={title}
                          onChange={(e) => setTittle(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="my-2">
                      <label className="block mb-2 text-sm font-medium text-gray-400">
                        Image
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100"
                          style={{
                            backgroundImage: `url(${file || imageFile} )`,
                            backgroundPositionX: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-[#ffffff]"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-[#ffffff]">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChangeEdit}
                            required
                          />
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-end border-t mt-2 pt-3 border-solid border-gray-300">
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
                        onClick={handleUpdate}
                        disabled={uploading}
                      >
                        {uploading ? "Uploading..." : "Save"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Founder;
