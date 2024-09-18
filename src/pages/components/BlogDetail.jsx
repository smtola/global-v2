import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../../config/db';
import Navbar_2 from './Navbar_2';
import Footer from './Footer';
import Scroll from '../../Scroll';
import { Typography } from '@material-tailwind/react';
import { useTranslation } from '../../hooks/useTranslation';

const BlogDetail = () => {
    const { id } = useParams(); // Get the blog ID from the URL
    const defaultLangCode = localStorage.getItem('language') || 'en';
    const translations = useTranslation(defaultLangCode);
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlogDetail = async () => {
            const { data: blogData, error } = await supabase
                .from('blogs')
                .select('*')
                .eq('id', id)
                .single(); // Fetch the blog by ID

            if (blogData && blogData.images) {
                const { data: img_url, error: urlError } = supabase
                    .storage
                    .from('images') // Replace with your storage bucket name
                    .getPublicUrl(`blogs/${blogData.images}`); // item.images is the file path

                if (urlError) throw urlError;

                setBlog({ ...blogData, images: img_url.publicUrl });
            } else {
                setBlog(blogData);
            }
        };

        fetchBlogDetail();
    }, [id]);

    if (!blog) return <div>Loading...</div>;

    return (
        <>
            <Scroll />
            <Navbar_2 translations={translations} />
            <section className="container mx-auto px-10 py-24 md:py-44 transition-all duration-500">
                <div className="max-w-screen-xl mx-auto">
                    <img src={blog.images} alt={blog.title} className="w-full" />
                    <Typography className="!text-4xl text-[#233C96] !font-bold mt-8">
                        {defaultLangCode === 'en' ? blog.title : blog.titleKh}
                    </Typography>
                    <p className="text-[#182761] my-4  font-normal">
                        {defaultLangCode === 'en' ? blog.description : blog.descriptionKh}
                    </p>
                    <p>{blog.content}</p>
                    <p className="text-wrap text-[#182761]">
                        {defaultLangCode === 'en' ? (blog.detail.split('\n').map((line, index) => (
                        <span key={index}>
                        {line}
                            <br />
                        </span>
                    ))) : (blog.detailKh.split('\n').map((line, index) => (
                            <span key={index}>
                        {line}
                                <br />
                        </span>
                        )))
                        }
                    </p>
                </div>
            </section>
            <hr className="border-2 border-[#0469FF]" />
            <Footer />
        </>
    );
};

export default BlogDetail;
