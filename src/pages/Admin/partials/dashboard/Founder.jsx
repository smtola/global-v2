import React, { useState, useEffect } from "react";
import { supabase } from "../../../../config/db";
import { toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Founder = () => {
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [data, setData] = useState([]);
  const [file,setFile] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [fileDefault, setFileDefault] = useState([]);
  const [image, setImage] = useState("");

  const [nameEn, setNameEn] = useState('');
  const [nameKh, setNameKh] = useState('');
  const [educationEn, setEducationEn] = useState('');
  const [educationKh, setEducationKh] = useState('');
  const [headEn, setHeadEn] = useState('');
  const [headKh, setHeadKh] = useState('');
  const [bodyEn, setbodyEn] = useState('');
  const [footerEn, setFooterEn] = useState('');
  const [bodyKh, setbodyKh] = useState('');
  const [footerKh, setFooterKh] = useState('');
  const [Id, setId] = useState('');
  useEffect(()=>{
    fetchData();
  })
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

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
      setFileDefault(getData);
      setData(getImage);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }

  const editId = async (id) =>{
    setShowModalEdit(true);
    data.map((items) => {
      if (items.id === id) {
        setId(items.id);
        setNameEn(items.nameEn);
        setNameKh(items.nameKh);
        setEducationEn(items.educationEn);
        setEducationKh(items.educationKh);
        setHeadEn(items.headEn);
        setHeadKh(items.headKh);
        setbodyEn(items.bodyEn);
        setbodyKh(items.bodyKh);
        setFooterEn(items.footerEn);
        setFooterKh(items.footerKh);
        setImageFile(items.image);
      }
    });
    fileDefault.map((file) => {
      if (file.id === id) {
        setImage(file.image);
      }
    });
  }
  const uploadImage = async (file) => {
    if(file.name == undefined){
      return;
    }else{
      const fileName = `${Date.now()}_${file.name}`;
      const { error: uploadError } = await supabase.storage
          .from("images")
          .upload(`contents/${fileName}`, file);
      if (uploadError) {
        throw uploadError;
      }
      // Update career details
      const { data: banner, error: fetchError } = await supabase
          .from("founders_ms")
          .select("image")
          .eq("id", Id)
          .single();

      if (fetchError) {
        toast.error(`Error fetching blog: ${fetchError.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setUploading(false);
        return;
      }

      if (!banner) {
        toast.error(`Founder not bad!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setUploading(false);
        return;
      }

      const imageUrls = banner.image;
      const imageFileName = imageUrls.substring(imageUrls.lastIndexOf("/") + 1);

      // Delete the image file from Supabase Storage
      await supabase.storage
          .from("images") // Your bucket name
          .remove([`contents/${imageFileName}`]);

      return fileName;
    }
  };

  // Function to update blog data
  const updateBlog = async (imageUrl = null ) => {
    setUploading(true);
    try {
      const updatedData = {
        nameEn,
        nameKh,
        educationKh,
        educationEn,
        headKh,
        headEn,
        bodyKh,
        bodyEn,
        footerEn,
        footerKh
      };

      if (imageUrl) {
        updatedData.image = imageUrl;
      }else if(image){
        updatedData.image = image;
      }

      const { error: updateError } = await supabase
          .from("founders_ms")
          .update(updatedData)
          .match({ id: Id });

      if (updateError) {
        throw updateError;
      }

      fetchData();
    } catch (err) {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setUploading(false);
    }
  };

  // Main handler for update
  const handleUpdate = async () => {
    setUploading(true);

    try {
      let imageUrl = null;
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      await updateBlog(imageUrl);
      toast.success('Edited successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    } catch (error) {
      console.error("Error updating blog:", error.message);
      toast.error('Failed to update the blog.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setUploading(false);
    }
    fetchData();
    setShowModalEdit(false);
  };

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

                  <div className="flex justify-end">
                    <button
                        className="bg-[#314bb2] text-[#ffffff] active:bg-[#4262e1] 2xl:w-[10%]
            font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => editId(blog.id)}
                    >
                      Edit
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* modalAdd */}
      {showModalEdit ? (
          <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-full my-6 mx-auto max-w-lg md:max-w-full">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-xl text-gray-500 font-semibold">
                      Edit
                    </h3>
                    <button
                        className="float-right"
                        onClick={() => setShowModalEdit(false)}
                    >
                    <span className="relative text-gray-500 cursor-pointer opacity-7 h-6 w-6 text-xl block hover:text-[#314bb2]">
                      <h1>x</h1>
                    </span>
                    </button>
                  </div>
                  <div className="p-2 ">
                    <form className="w-full mx-auto grid grid-cols-12 gap-5 justify-center items-center">
                      <div className="my-2 col-span-6">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Name English
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <input
                              type="text"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in English"
                              defaultValue={nameEn}
                              onChange={(e) => setNameEn(e.target.value)}
                              required
                          />
                        </div>
                      </div>
                      <div className="my-2 col-span-6">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Name Khmer
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <input
                              type="text"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in English"
                              defaultValue={nameKh}
                              onChange={(e) => setNameKh(e.target.value)}
                              required
                          />
                        </div>
                      </div>

                      <div className="my-2 col-span-6">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Education English
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <textarea
                              rows="1"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in English"
                              defaultValue={educationEn}
                              onChange={(e) => setEducationEn(e.target.value)}
                              required
                          >
                          </textarea>
                        </div>
                      </div>
                      <div className="my-2 col-span-6">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Education Khmer
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <textarea
                              rows="1"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in English"
                              defaultValue={educationKh}
                              onChange={(e) => setEducationKh(e.target.value)}
                              required
                          >
                          </textarea>
                        </div>
                      </div>

                      <div className="my-2 col-span-6">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Header English
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <textarea
                              rows="1"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in English"
                              defaultValue={headEn}
                              onChange={(e) => setHeadEn(e.target.value)}
                              required
                          >
                          </textarea>
                        </div>
                      </div>
                      <div className="my-2 col-span-6">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Header Khmer
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <textarea
                              rows="1"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in English"
                              defaultValue={headKh}
                              onChange={(e) => setHeadKh(e.target.value)}
                              required
                          >
                          </textarea>
                        </div>
                      </div>

                      <div className="my-2 col-span-6">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Body English
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <textarea
                              rows="1"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in English"
                              defaultValue={bodyEn}
                              onChange={(e) => setbodyEn(e.target.value)}
                              required
                          >
                          </textarea>
                        </div>
                      </div>
                      <div className="my-2 col-span-6">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Body Khmer
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <textarea
                              rows="1"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in English"
                              defaultValue={bodyKh}
                              onChange={(e) => setbodyKh(e.target.value)}
                              required
                          >
                          </textarea>
                        </div>
                      </div>

                      <div className="my-2 col-span-6">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Footer English
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <textarea
                              rows="1"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in English"
                              defaultValue={footerEn}
                              onChange={(e) => setFooterEn(e.target.value)}
                              required
                          >
                          </textarea>
                        </div>
                      </div>
                      <div className="my-2 col-span-6">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Footer Khmer
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <textarea
                              rows="1"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in English"
                              defaultValue={footerKh}
                              onChange={(e) => setFooterKh(e.target.value)}
                              required
                          >
                          </textarea>
                        </div>
                      </div>

                      <div className="my-2 col-span-12">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Image
                        </label>
                        <div className="flex items-center justify-center w-full">
                          <label
                              htmlFor="dropzone-file"
                              className="flex flex-col items-center justify-center w-full min-h-[10rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-[#06060676] bg-[#06060676]"
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
                                onChange={handleFileChange}
                                required
                            />
                          </label>
                        </div>
                      </div>

                      <div className="col-span-12 flex justify-end border-t mt-2 pt-3 border-solid border-gray-300">
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
