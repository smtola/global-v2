import { Typography, Card, CardBody } from "@material-tailwind/react";
import  Navbar  from "./components/Navbar";
import Footer from "./components/Footer";
import Scroll from "../Scroll";
import {supabase} from '../config/db';
import { useState,useEffect } from "react";
function ContentCard({ img, title, desc }) {
  return (
    <Card
      className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
      color="transparent"
    >
      <img
        src={img}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50" />
      <CardBody className="relative flex flex-col justify-end p-5">
        <Typography className="text-[#ffffff] font-['lexend'] font-bold text-[24px]">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          color="white"
          className="my-2 font-['lexend'] font-normal text-[#ffffff]"
        >
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

const Blog = () => {
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
      <Navbar />
      <section className="container mx-auto px-10 py-24 md:py-44 transition-all duration-500">
      <Typography
        className="!text-2xl !font-['lexend'] text-[#233C96] !font-bold !leading-snug lg:!text-3xl"
      >
        Build something great
      </Typography>
      <Typography
        className="mt-2 max-w-lg font-['lexend'] !text-[#233C96]  !font-normal "
      >
        We&apos;re constantly trying to express ourselves and actualize our
        dreams. If you have the opportunity to play this game of life you need
        to appreciate every moment.
      </Typography>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {data.map((item,index) => (
          <ContentCard key={index} img={item.images} title={item.title} desc={item.description} />
        ))}
      </div>
      </section>
      <hr className="border-2 border-[#0469FF]"/>
      <Footer />
    </>
  )
}

export default Blog
