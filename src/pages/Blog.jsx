import { Typography, Card, CardBody } from "@material-tailwind/react";
import  Navbar_2  from "./components/Navbar_2";
import Footer from "./components/Footer";
import Scroll from "../Scroll";
import {supabase} from '../config/db';
import { useState,useEffect } from "react";
import { useTranslation } from '../hooks/useTranslation';
import {Link} from "react-router-dom";
const defaultLangCode = localStorage.getItem('language') || 'en';
function ContentCard({ id, img, titleEn,titleKh, descEn,descKh }) {
  
  return (
      <>
          <div className="w-full max-w-screen-xl mx-auto">
              <Link to={`/blog/${id}`}>
                  <img src={img} alt=""/>
                  <h1 className="text-[#182761] font-['lexend'] font-bold text-[24px]">{defaultLangCode === 'en' ? titleEn : titleKh}</h1>
                  <p className="text-[#182761] my-2 font-['lexend'] font-normal">
                      {defaultLangCode === 'en' ? descEn : descKh}
                  </p>
              </Link>
          </div>
      </>
  );
}

const Blog = () => {
  
  const defaultLangCode = localStorage.getItem('language') || 'en';
  const translations = useTranslation(defaultLangCode);
  const [data, setData] = useState([]);
  useEffect(()=>{
    fectData();
  },[]);

  const fectData = async ()=>{
    const { data: blogData } = await supabase
     .from('blogs')
     .select('*')
     .order('title', { ascending: false });

     const dataWithUrls = await Promise.all(
        blogData.map(async (item) => {
        if (item.images) {
          // Generate public URL for the image
          const { data:img_url, error: urlError } = supabase
            .storage
            .from('images') // Replace with your storage bucket name
            .getPublicUrl(`blogs/${item.images}`); // item.image is the file path

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
      <Navbar_2 translations={translations}/>
      <section className="container mx-auto px-10 py-24 md:py-[18rem] transition-all duration-500">
      <Typography
        className="!text-2xl !font-['lexend'] text-[#233C96] !font-bold !leading-snug lg:!text-3xl"
      >
          Build Something Great -> Find Out More
      </Typography>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {data.map((item,index) => (
          <ContentCard
              key={index}
              id={item.id}
              img={item.images}
              titleEn={item.title}
              titleKh={item.titleKh}
              descEn={item.description}
              descKh={item.descriptionKh}
          />
        ))}
      </div>
      </section>
      <hr className="border-2 border-[#0469FF]"/>
      <Footer />
    </>
  )
}

export default Blog
