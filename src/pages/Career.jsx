import  Navbar_2  from "./components/Navbar_2";
import Footer from "./components/Footer";
import banner from "../assets/images/career.jpg";
import CareerCardd from "./components/CareerCardd";
import Scroll from "../Scroll";
import "./HomePage.css";
import {supabase} from '../config/db';
import { useState,useEffect } from "react";
import { useTranslation } from '../hooks/useTranslation';
const Career = () => {
  const [data, setData] = useState([]);
  const defaultLangCode = localStorage.getItem('language') || 'en';
  const translations = useTranslation(defaultLangCode);
  useEffect(()=>{
    fectData();
  },[]);

  const fectData = async ()=>{
    const { data: blogData } = await supabase
     .from('careers')
     .select('*')
     .order('title', { ascending: false });

     const dataWithUrls = await Promise.all(
        blogData.map(async (item) => {
        if (item.images) {
          // Generate public URL for the image
          const { data:img_url, error: urlError } = supabase
            .storage
            .from('images') // Replace with your storage bucket name
            .getPublicUrl(`careers/${item.images}`); // item.image is the file path

          if (urlError) {
            throw urlError;
          }

          return { ...item, images: img_url.publicUrl }; // Append public URL to item
        }
        return item;
      })
    );
    setData(dataWithUrls);
  }
  return (
    <>
      <Scroll/>
       <Navbar_2  translations={translations}/>
        <section className="container mx-auto px-10 py-[8rem] md:pt-[16rem] transition-all duration-500">
          <div className="w-full !max-w-lg lg:!max-w-[56rem] text-[#233C96]">
            <h1 className="!text-[30px]  font-normal md:!text-[54px]">{translations['wwu']}</h1>
            <p className="!text-[14px]  font-medium md:!text-[23px]">
                {translations['wwu_detail']}
            </p>
            <br/>
          </div>
        </section>
          <div>
            <img src={banner} alt="" className="w-full h-[50rem] object-cover object-center clip-path-5"/>
          </div>
        <section className="container mx-auto px-10 py-24 md:py-44 transition-all duration-500">
          <div className="py-5 w-full max-w-screen-xl mx-auto">
            <h1 className="!text-[30px] text-[#233C96] text-center font-normal md:!text-[54px] py-5">{ translations['op'] }</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center  gap-[3vw] py-7">
              {data.map((item,index)=>
                ( 
                  <CareerCardd key={index} img={item.images} title={item.title} dics={item.description} titleKh={item.titleKh} descKh={item.descriptonKh} defaultLangCode={defaultLangCode}/>
                ))}
            </div>
          </div>
        </section>
        <hr className="border-2 border-[#0469FF]"/>
      <Footer />
    </>
  )

}

export default Career
