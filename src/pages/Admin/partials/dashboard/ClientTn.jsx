import React, { useState, useEffect } from "react";
import { supabase } from "../../../../config/db";
import { toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ClientTn = () => {
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [data, setData] = useState([]);
  const [file,setFile] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [fileDefault, setFileDefault] = useState([]);
  const [image, setImage] = useState("");

  const [descEn, setDescEn] = useState('');
  const [descKh, setDescKh] = useState('');
  const [nameEn, setNameEn] = useState('');
  const [nameKh, setNameKh] = useState('');
  const [companyEn, setCompanyEn] = useState('');
  const [companyKh, setCompanyKh] = useState('');
  const [Id, setId] = useState('');

  useEffect(()=>{
    fetchData();
  })
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const handleSubmit = async () => {
    setUploading(true);
    // Upload image to Supabase Storage
    const fileName = `${Date.now()}_${imageFile.name}`;
    const { error: uploadError } = await supabase.storage
        .from("images") // Your Supabase Storage bucket name
        .upload(`contents/${fileName}`, imageFile);

    if (uploadError) {
      console.error("Error uploading image:", uploadError.message);
      return;
    }

    // Insert product details into Supabase database
    const { error: insertError } = await supabase
        .from("client_tn")
        .insert([{ nameEn,nameKh,descEn,descKh,companyEn,companyKh, image: fileName }]);
    setShowModalAdd(false);
    setUploading(false);
    fetchData();
    if (insertError) {
      toast.error("Error inserting product:", insertError.message, {
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
    } else {
      toast.success("Added successfully!.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce
      });
      setNameEn('');
      setNameKh('');
      setDescEn('');
      setDescKh('');
      setCompanyEn('');
      setCompanyKh('');
      setImageFile(null);
      setFile('');
    }

  };
  // delete
  const handleDelete = async (id) => {
    setUploading(true);

    // Fetch product details to get the image URL
    const { data: blog, error: fetchError } = await supabase
        .from("client_tn")
        .select("image")
        .eq("id", id)
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
        transition: Bounce
      });
      setUploading(false);
      return;
    }

    if (!blog) {
      toast.error("Organization Chart not found", {
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
      setUploading(false);
      return;
    }

    const imageUrl = blog.image;
    const imageFileName = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);

    // Delete the image file from Supabase Storage
    const { error: deleteFileError } = await supabase.storage
        .from("images") // Your bucket name
        .remove([`contents/${imageFileName}`]);

    if (deleteFileError) {
      toast.error(`Error deleting file: ${deleteFileError.message}`, {
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
      setUploading(false);
      return;
    }

    // Delete the product record from the database
    const { error: deleteProductError } = await supabase
        .from("client_tn")
        .delete()
        .eq("id", id);

    if (deleteProductError) {
      toast.error(`Error deleting product: ${deleteProductError.message}`, {
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
    } else {
      toast.success("Careers deleted successfully!", {
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
    }
    fetchData();
    setUploading(false);
  };

  const fetchData = async () => {
    try {
      const {data:getData, error} = await supabase
          .from('client_tn')
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
        setDescEn(items.descEn);
        setDescKh(items.descKh);
        setCompanyEn(items.companyEn);
        setCompanyKh(items.companyKh);
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
          .from("client_tn")
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
        descEn,
        descKh,
        companyEn,
        companyKh
      };

      if (imageUrl) {
        updatedData.image = imageUrl;
      }else if(image){
        updatedData.image = image;
      }

      const { error: updateError } = await supabase
          .from("client_tn")
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
    try {
      setUploading(true);
      let imageUrl = null;
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      await updateBlog(imageUrl);
      toast.success('Edited successfully!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      fetchData();
    } catch (error) {
      console.error("Error updating blog:", error.message);
      toast.error('Failed to update the blog.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setUploading(false);
      setShowModalEdit(false);
    }
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
      <div className="flex flex-col col-span-full bg-white/30 shadow-sm rounded-xl">
        {/*Add Button */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
                {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">
              Client's Testimonial
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
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name English
                </th>
                <th scope="col" className="px-6 py-3">
                  Name Khmer
                </th>
                <th scope="col" className="px-6 py-3">
                  Comapny English
                </th>
                <th scope="col" className="px-6 py-3">
                Company Khmer
              </th>
                <th scope="col" className="px-6 py-3">
                Profile
              </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
              </thead>
              <tbody>
              {data.map((blog, index) => (
                  <tr
                      key={blog.id}
                      className="bg-white border-b hover:bg-gray-50 "
                  >
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-wrap "
                    >
                      {index + 1} : {blog.nameEn}
                    </th>
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-wrap "
                    >
                      {blog.nameKh}
                    </th>
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-wrap "
                    >
                      {blog.companyEn}
                    </th>
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-wrap "
                    >
                      {blog.companyKh}
                    </th>
                    <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 overflow-hidden"
                    >
                      <img src={blog.image ||  'https://via.placeholder.com/150'} alt="" className="w-[50px] h-[50px] mx-auto rounded-full"/>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                          onClick={() => {
                            handleDelete(blog.id);
                          }}
                          className="font-medium px-2 text-red-600 hover:underline"
                          disabled={uploading}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -2 24 24" width="28" fill="red"><path d="M6 2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-.133l-.68 10.2a3 3 0 0 1-2.993 2.8H5.826a3 3 0 0 1-2.993-2.796L2.137 7H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4zm10 2H2v1h14V4zM4.141 7l.687 10.068a1 1 0 0 0 .998.932h6.368a1 1 0 0 0 .998-.934L13.862 7h-9.72zM7 8a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"></path></svg>
                      </button>
                      <button
                          className="font-medium px-2 text-blue-600 hover:underline"
                          onClick={() => {
                            editId(blog.id);
                          }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="28" fill="currentColor"><path d="M5.72 14.456l1.761-.508 10.603-10.73a.456.456 0 0 0-.003-.64l-.635-.642a.443.443 0 0 0-.632-.003L6.239 12.635l-.52 1.82zM18.703.664l.635.643c.876.887.884 2.318.016 3.196L8.428 15.561l-3.764 1.084a.901.901 0 0 1-1.11-.623.915.915 0 0 1-.002-.506l1.095-3.84L15.544.647a2.215 2.215 0 0 1 3.159.016zM7.184 1.817c.496 0 .898.407.898.909a.903.903 0 0 1-.898.909H3.592c-.992 0-1.796.814-1.796 1.817v10.906c0 1.004.804 1.818 1.796 1.818h10.776c.992 0 1.797-.814 1.797-1.818v-3.635c0-.502.402-.909.898-.909s.898.407.898.91v3.634c0 2.008-1.609 3.636-3.593 3.636H3.592C1.608 19.994 0 18.366 0 16.358V5.452c0-2.007 1.608-3.635 3.592-3.635h3.592z"></path></svg>
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
      {showModalAdd ? (
          <>
            <div
                className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-full my-6 mx-auto max-w-sm md:max-w-md">
                <div
                    className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div
                      className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-xl text-gray-500 font-semibold">
                      Add New
                    </h3>
                    <button
                        className="float-right"
                        onClick={() => setShowModalAdd(false)}
                    >
                    <span
                        className="relative text-gray-500 cursor-pointer opacity-7 h-6 w-6 text-xl block hover:text-[#314bb2]">
                      <h1>x</h1>
                    </span>
                    </button>
                  </div>
                  <div className="p-2 flex-auto">
                    <form className="max-w-lg mx-auto">
                      <div className="my-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Name English
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path
                              d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <input
                              type="text"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in English"
                              onChange={(e) => setNameEn(e.target.value)}
                              required
                          />
                        </div>
                      </div>
                      <div className="my-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Name Khmer
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path
                              d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <input
                              type="text"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in Khmer"
                              onChange={(e) => setNameKh(e.target.value)}
                              required
                          />
                        </div>
                      </div>
                      <div className="my-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Description English
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path
                              d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <textarea
                              rows="2"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in English"
                              onChange={(e) => setDescEn(e.target.value)}
                              required
                          >
                          </textarea>
                        </div>
                      </div>
                      <div className="my-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Description Khmer
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path
                              d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <textarea
                              rows="2"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in Khmer"
                              onChange={(e) => setDescKh(e.target.value)}
                              required
                          >
                          </textarea>
                        </div>
                      </div>
                      <div className="my-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Company and position English
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path
                              d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <textarea
                              rows="2"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in English"
                              onChange={(e) => setCompanyEn(e.target.value)}
                              required
                          >
                          </textarea>
                        </div>
                      </div>
                      <div className="my-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Company and position Khmer
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path
                              d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <textarea
                              rows="2"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in Khmer"
                              onChange={(e) => setCompanyKh(e.target.value)}
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
                            type="button"
                            onClick={handleSubmit}
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

      {showModalEdit ? (
          <>
            <div
                className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-full my-6 mx-auto max-w-sm md:max-w-md">
                <div
                    className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div
                      className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-xl text-gray-500 font-semibold">
                      Edit
                    </h3>
                    <button
                        className="float-right"
                        onClick={() => setShowModalEdit(false)}
                    >
                    <span
                        className="relative text-gray-500 cursor-pointer opacity-7 h-6 w-6 text-xl block hover:text-[#314bb2]">
                      <h1>x</h1>
                    </span>
                    </button>
                  </div>
                  <div className="p-2 flex-auto">
                    <form className="max-w-lg mx-auto">
                      <div className="my-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Name English
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path
                              d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
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
                      <div className="my-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Name Khmer
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path
                              d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <input
                              type="text"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in Khmer"
                              defaultValue={nameKh}
                              onChange={(e) => setNameKh(e.target.value)}
                              required
                          />
                        </div>
                      </div>
                      <div className="my-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Description English
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path
                              d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <textarea
                              rows="2"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in English"
                              defaultValue={descEn}
                              onChange={(e) => setDescEn(e.target.value)}
                              required
                          >
                          </textarea>
                        </div>
                      </div>
                      <div className="my-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Description Khmer
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path
                              d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <textarea
                              rows="2"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in Khmer"
                              defaultValue={descKh}
                              onChange={(e) => setDescKh(e.target.value)}
                              required
                          >
                          </textarea>
                        </div>
                      </div>
                      <div className="my-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Company and position English
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path
                              d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <textarea
                              rows="2"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in English"
                              defaultValue={companyEn}
                              onChange={(e) => setCompanyEn(e.target.value)}
                              required
                          >
                          </textarea>
                        </div>
                      </div>
                      <div className="my-2">
                        <label className="block mb-2 text-sm font-medium text-gray-400">
                          Company and position Khmer
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -7 24 24" width="28" fill="#4d4d4d"><path
                              d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0v3z"></path></svg>
                        </span>
                          <textarea
                              rows="2"
                              className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                              placeholder="Set welcome descriptions in Khmer"
                              defaultValue={companyKh}
                              onChange={(e) => setCompanyKh(e.target.value)}
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

export default ClientTn;
