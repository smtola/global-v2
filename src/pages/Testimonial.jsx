import Scroll from "../Scroll.jsx";
import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import "./Testimonial.css";
import Footer from "./components/Footer";
import { useTranslation } from '../hooks/useTranslation';
import {supabase} from "../config/db.js";
const Testimonial = () => {
    const defaultLangCode = localStorage.getItem('language') || 'en';
    const translations = useTranslation(defaultLangCode);
    const [data, setClientTN] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const { data, error } = await supabase
            .from('client_tn')
            .select("*")
            .order('id',{ascending:true});
        const dataWithUrls = await Promise.all(
            data.map(async (item) => {
                if (item.image) {
                    // Generate public URL for the image
                    const { data: img_url, error: urlError } = supabase.storage
                        .from("images") // Replace with your storage bucket name
                        .getPublicUrl(`contents/${item.image}`); // item.image is the file path

                    if (urlError) {
                        throw urlError;
                    }

                    return { ...item, image: img_url.publicUrl }; // Append public URL to item
                }
                return item;
            })
        );
        if (error) {
            console.error('Error fetching data:', error);
        } else {
            setClientTN(dataWithUrls);
        }
    };
    return (
        <>
            <Scroll />

            <Navbar translations={translations}/>
            <section className="bg-gray-100 pt-[16rem] min-h-screen bg-banner">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#182761]">{translations['ct']}</h2>
                    </div>

                    {/* Testimonial Card */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-10">
                        {/* Single Testimonial */}
                        {data.map((items)=>(
                        <div key={items.id} className="flex flex-col justify-between bg-white p-6 shadow-md rounded-lg">
                            <p className="text-gray-600 ">
                                {defaultLangCode === 'en' ? items.descEn : items.descKh}
                            </p>
                            <div className="grid grid-cols-12 justify-between items-center my-10">
                                <img src={items.image ||  'https://via.placeholder.com/150'} alt="" className="col-span-4 w-[80px] h-[80px] mx-auto rounded-full"/>
                                <div className="col-span-8">
                                    <h4 className="text-lg font-semibold text-gray-800 text-wrap">{defaultLangCode === 'en' ? items.nameEn : items.nameKh}</h4>
                                    <p className="text-gray-500 text-wrap">
                                        {defaultLangCode === 'en' ? (items.companyEn.split('\n').map((line, index) => (
                                                <span key={index}>
                                                    {line}
                                                    <br />
                                                    </span>
                                            )))
                                            : (items.companyKh.split('\n').map((line, index) => (
                                                <span key={index}>
                                                    {line}
                                                    <br />
                                                    </span>
                                            )))
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
};

export default Testimonial;
