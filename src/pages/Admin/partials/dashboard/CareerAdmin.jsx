import React, { useState, useEffect } from "react";
import { supabase } from "../../../../config/db";
const CareerAdmin = () => {
  const [title, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [fileDefault, setFileDefault] = useState([]);
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [CareerId, setCareerId] = useState("");
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  // fetch data
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch data from Supabase table
      const { data: tableData, error: tableError } = await supabase
        .from("careers")
        .select("*");

      const dataWithUrls = await Promise.all(
        tableData.map(async (item) => {
          if (item.images) {
            // Generate public URL for the image
            const { data: img_url, error: urlError } = supabase.storage
              .from("images") // Replace with your storage bucket name
              .getPublicUrl(`careers/${item.images}`); // item.image is the file path

            if (urlError) {
              throw urlError;
            }

            return { ...item, images: img_url.publicUrl }; // Append public URL to item
          }
          return item;
        })
      );

      if (tableError) {
        throw tableError;
      }
      setFileDefault(tableData);
      setData(dataWithUrls);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  // file change
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  // create
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !imageFile) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    setUploading(true);

    // Upload image to Supabase Storage
    const fileName = `${Date.now()}_${imageFile.name}`;
    const { error: uploadError } = await supabase.storage
      .from("images") // Your Supabase Storage bucket name
      .upload(`careers/${fileName}`, imageFile);

    if (uploadError) {
      console.error("Error uploading image:", uploadError.message);
      setUploading(false);
      return;
    }

    // Insert product details into Supabase database
    const { error: insertError } = await supabase
      .from("careers")
      .insert([{ title, description, images: fileName }]);

    if (insertError) {
      console.error("Error inserting product:", insertError.message);
    } else {
      alert("Product added successfully!");
      setTittle("");
      setDescription("");
      setImageFile(null);
      setShowModalAdd(false);
    }
    fetchData();
    setUploading(false);
  };
  // delete
  const handleDelete = async (CareerId) => {
    setUploading(true);
    setError(null);

    // Fetch product details to get the image URL
    const { data: blog, error: fetchError } = await supabase
      .from("careers")
      .select("images")
      .eq("id", CareerId)
      .single();

    if (fetchError) {
      setError(`Error fetching blog: ${fetchError.message}`);
      setUploading(false);
      return;
    }

    if (!blog) {
      setError("Blog not found");
      setUploading(false);
      return;
    }

    const imageUrl = blog.images;
    const imageFileName = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);

    // Delete the image file from Supabase Storage
    const { error: deleteFileError } = await supabase.storage
      .from("images") // Your bucket name
      .remove([`careers/${imageFileName}`]);

    if (deleteFileError) {
      setError(`Error deleting file: ${deleteFileError.message}`);
      setUploading(false);
      return;
    }

    // Delete the product record from the database
    const { error: deleteProductError } = await supabase
      .from("careers")
      .delete()
      .eq("id", CareerId);

    if (deleteProductError) {
      setError(`Error deleting product: ${deleteProductError.message}`);
    } else {
      alert("careers deleted successfully!");
      setTittle("");
      setDescription("");
      setImageFile(null);
      setCareerId("");
    }
    fetchData();
    setUploading(false);
  };

  // Function to handle image file upload
  const uploadImage = async (file) => {
    const fileName = `${Date.now()}_${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from("images") // Your Supabase Storage bucket name
      .upload(`careers/${fileName}`, file);

    if (uploadError) {
      throw uploadError;
    }

    return fileName;
  };

  const editId = async (id) => {
    setShowModalEdit(true);
    data.map((blog) => {
      if (blog.id === id) {
        setCareerId(blog.id);
        setTittle(blog.title);
        setDescription(blog.description);
        setImageFile(blog.images);
      }
    });
    fileDefault.map((file) => {
      if (file.id === id) {
        setImage(file.images);
      }
    });
  };
  // Function to update blog data
  const updateCareer = async (imageUrl) => {
    const { error } = await supabase
      .from("careers") // Replace with your table name
      .update({
        id: CareerId,
        title,
        description,
        images: imageUrl,
      })
      .eq("id", CareerId);

    if (error) {
      throw error;
    }
  };

  // Main handler for update
  const handleUpdate = async () => {
    if (!title || !description || !CareerId) {
      alert("Please fill in all required fields.");
      return;
    }

    setUploading(true);
    const { data: blog, error: fetchError } = await supabase
      .from("careers")
      .select("images")
      .eq("id", CareerId)
      .single();

    if (fetchError) {
      setError(`Error fetching blog: ${fetchError.message}`);
      setUploading(false);
      return;
    }

    if (!blog) {
      setError("Blog not found");
      setUploading(false);
      return;
    }

    const imageUrls = blog.images;
    const imageFileName = imageUrls.substring(imageUrls.lastIndexOf("/") + 1);

    // Delete the image file from Supabase Storage
    await supabase.storage
      .from("images") // Your bucket name
      .remove([`careers/${imageFileName}`]);
    try {
      let imageUrl = null;
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      } else {
        imageUrl = await uploadImage(image);
      }
      await updateCareer(imageUrl);

      alert("Blog updated successfully!");
    } catch (error) {
      console.error("Error updating blog:", error.message);
      alert("Failed to update the blog.");
    } finally {
      setUploading(false);
    }
    fetchData();
    setShowModalEdit(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="flex flex-col col-span-full bg-white/30 shadow-sm rounded-xl">
        {/*Add Button */}
        <div className="flex justify-end">
          <button
            className="bg-[#314bb2] text-[#ffffff] active:bg-[#4262e1] 2xl:w-[10%]
            font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={() => setShowModalAdd(true)}
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
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Discriptions
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Images
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
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {index + 1} : {blog.title}
                    </th>
                    <td className="px-6 py-4 truncate.....">
                      {blog.description}
                    </td>
                    <td className="px-6 py-4">
                      {blog.images ? (
                        <img
                          src={blog.images}
                          alt={blog.title}
                          className="w-14 h-14 object-cover md:w-24 md:h-24 rounded-lg"
                        />
                      ) : (
                        <p>No image available</p>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => {
                          handleDelete(blog.id);
                        }}
                        className="font-medium px-2 text-red-600 hover:underline"
                        disabled={uploading}
                      >
                        Delete
                      </button>
                      <button
                        className="font-medium px-2 text-blue-600 hover:underline"
                        onClick={() => {
                          editId(blog.id);
                        }}
                      >
                        Edit
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
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-sm md:max-w-md">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-xl text-gray-500 font-semibold">
                    Add Users
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
                          <svg
                            className="w-4 h-4 text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                          </svg>
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
                        Description
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                          </svg>
                        </span>
                        <textarea
                          type="text"
                          className="border-b border-gray-300 focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                          placeholder="Description"
                          rows="1"
                          onChange={(e) => setDescription(e.target.value)}
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
                            background: `url(${file} )`,
                            backgroundPositionX: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500"
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
                            <p className="mb-2 text-sm text-gray-500">
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
                    Edit Users
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
                          <svg
                            className="w-4 h-4 text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                          </svg>
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
                        Description
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900  ">
                          <svg
                            className="w-4 h-4 text-[#314cb2]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                          </svg>
                        </span>
                        <textarea
                          type="text"
                          className="border-b border-[#314cb2] focus:border-[#314bb2] transition-all duration-500 outline-none focus:outline-none block flex-1 min-w-0 w-full text-md px-4 py-2.5 "
                          placeholder="Description"
                          rows="1"
                          defaultValue={description}
                          onChange={(e) => setDescription(e.target.value)}
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
                            background: `url(${file || imageFile} )`,
                            backgroundPositionX: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-[#314cb2]"
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
                            <p className="mb-2 text-sm text-[#314cb2]">
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

export default CareerAdmin;
