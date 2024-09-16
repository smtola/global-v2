import Scroll from "../Scroll.jsx";
import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
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
            .select("*");

        if (error) {
            console.error('Error fetching data:', error);
        } else {
            setClientTN(data);
        }
    };
    return (
        <>
            <Scroll />

            <Navbar translations={translations}/>
            <section className="bg-gray-100 pt-[16rem] min-h-screen">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#182761]">Client Testimonials</h2>
                    </div>

                    {/* Testimonial Card */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-10">
                        {/* Single Testimonial */}
                        {data.map((items)=>(
                        <div key={items.id} className="bg-white p-6 shadow-md rounded-lg">
                            <p className="text-gray-600 mb-4">
                                {defaultLangCode === 'en' ? items.descEn : items.descKh}
                            </p>
                            <div className="flex items-center">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">{defaultLangCode === 'en' ? items.nameEn : items.nameKh}</h4>
                                    <p className="text-gray-500">
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
