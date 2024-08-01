import React,{useState,useEffect} from 'react'
import {supabase} from '../../../../config/db';
const BlogAdmin = () => {
const [title, setTittle] = useState('');
const [description, setDescription] = useState('');
const [imageFile, setImageFile] = useState(null);
const [uploading, setUploading] = useState(false);
const [blogId, setBlogId] = useState('');
const [error, setError] = useState(null);

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !imageFile) {
        alert('Please fill in all fields and upload an image.');
        return;
    }

    setUploading(true);

    // Upload image to Supabase Storage
    const fileName = `${Date.now()}_${imageFile.name}`;
    const { error: uploadError } = await supabase
        .storage
        .from('blogs_images') // Your Supabase Storage bucket name
        .upload(fileName, imageFile);

    if (uploadError) {
        console.error('Error uploading image:', uploadError.message);
        setUploading(false);
        return;
    }

    // Get the public URL of the uploaded image÷
        const { data:img_url, error: urlError } = supabase
        .storage
        .from('blogs_images')
        .getPublicUrl(fileName,60);

        if (urlError) {
        console.error('Error getting image URL:', urlError.message);
        setUploading(false);
        return { publicURL, error: urlError.message };
        }

    // Insert product details into Supabase database
    const { error: insertError } = await supabase
        .from('blogs')
        .insert([{ title, description, images: img_url.publicUrl }]);

    if (insertError) {
        console.error('Error inserting product:', insertError.message);
    } else {
        alert('Product added successfully!');
        setTittle('');
        setDescription('');
        setImageFile('');
    }

    setUploading(false);
    };

    const handleDelete = async (blogId) => {
        setUploading(true);
        setError(null);

        // Fetch product details to get the image URL
        const { data: blog, error: fetchError } = await supabase
        .from('blogs')
        .select('images')
        .eq('id', blogId)
        .single();

        if (fetchError) {
        setError(`Error fetching blog: ${fetchError.message}`);
        setUploading(false);
        return;
        }

        if (!blog) {
        setError('Blog not found');
        setUploading(false);
        return;
        }

        const imageUrl = blog.images;
        const imageFileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);

        // Delete the image file from Supabase Storage
        const { error: deleteFileError } = await supabase
        .storage
        .from('blogs_images') // Your bucket name
        .remove([imageFileName]);

        if (deleteFileError) {
        setError(`Error deleting file: ${deleteFileError.message}`);
        setUploading(false);
        return;
        }

        // Delete the product record from the database
        const { error: deleteProductError } = await supabase
        .from('blogs')
        .delete()
        .eq('id', blogId);

        if (deleteProductError) {
        setError(`Error deleting product: ${deleteProductError.message}`);
        } else {
        alert('Blogs deleted successfully!');
        setTittle('');
        setDescription('');
        setImageFile(null);
        setBlogId('');
        }

        setUploading(false);
    };

    useEffect(() => {
    const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
    // Fetch data from Supabase table
    const { data: tableData, error: tableError } = await supabase
        .from('blogs') 
        .select('*');

    if (tableError) {
        throw tableError;
    }
    setData(tableData);
    } catch (err) {
    setError(err.message);
    } finally {
    setLoading(false);
    }
    };

    fetchData();
    }, []);

     // Function to handle image file upload
    const uploadImage = async (file) => {
        const fileName = `${Date.now()}_${file.name}`;
        const { error: uploadError } = await supabase
            .storage
            .from('blogs_images') // Your Supabase Storage bucket name
            .upload(fileName, file);

        if (uploadError) {
        throw uploadError;
        }

        const { data:img_url } = supabase.storage
        .from('blogs_images')
        .getPublicUrl(fileName);

        return img_url.publicUrl;
    };

    // Function to update blog data
    const updateBlog = async (imageUrl) => {
        const { error } = await supabase
        .from('blogs') // Replace with your table name
        .update({
            title,
            description,
            images: imageUrl
        })
        .eq('id', blogId);

        if (error) {
        throw error;
        }
    };

    // Main handler for update
    const handleUpdate = async () => {
        if (!title || !description || !blogId) {
        alert('Please fill in all required fields.');
        return;
        }

        setUploading(true);

        try {
        let imageUrl = null;
        if (imageFile) {
            imageUrl = await uploadImage(imageFile);
        }

        await updateBlog(imageUrl);

        alert('Blog updated successfully!');
        } catch (error) {
        console.error('Error updating blog:', error.message);
        alert('Failed to update the blog.');
        } finally {
        setUploading(false);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

  return (
    <>
    <div className="flex flex-col col-span-full bg-white/30 shadow-sm rounded-xl">
    {/* Chart built with Chart.js 3 */}
    <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
      {/* Change the height attribute to adjust the chart height */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
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
                {
                    data.map((blog)=>
                        (
                            <tr key={blog.id} className="bg-white border-b hover:bg-gray-50 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                   {blog.id} : {blog.title}
                                </th>
                                <td className="px-6 py-4">
                                    {blog.description}
                                </td>
                                <td className="px-6 py-4">
                                    {blog.images ? (
                                        <img src={blog.images} alt={blog.title} className="w-24 h-24 rounded-lg" />
                                        ) : (
                                        <p>No image available</p>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button onClick={()=>{handleDelete(blog.id)}} className="font-medium px-2 text-red-600 hover:underline" disabled={uploading}> 
                                        {uploading ? 'Deleting...' : 'Delete'}
                                    </button>
                                    <a href="#" className="font-medium px-2 text-blue-600 hover:underline">Edit</a>
                                </td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
      </div>
    </div>
    </div>

    

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Product Name</label>
        <input
          type="text"
          id="title"
          defaultValue={title}
          onChange={(e) => setTittle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Product Details</label>
        <textarea
          id="description"
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Product Image</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
      </div>
      <button type="submit" disabled={uploading}>
        {uploading ? 'Uploading...' : 'Add Product'}
      </button>
    </form>


    <div className='p-[28rem]'>
      <input
        type="text"
        placeholder="Blog ID"
        defaultValue={blogId}
        onChange={(e) => setBlogId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        defaultValue={title}
        onChange={(e) => setTittle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        defaultValue={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setImageFile(e.target.files[0])}
      />
      <button onClick={handleUpdate} disabled={uploading}>
        {uploading ? 'Updating...' : 'Update Blog'}
      </button>
    </div>
    </>
  )
}

export default BlogAdmin