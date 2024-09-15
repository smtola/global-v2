import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, {useRef,useState,useEffect} from "react";
import "./HomePage.css";
import Scroll from "../Scroll";
import iconVission from "../assets/images/icon/vision.png";
import iconMission from "../assets/images/icon/mission.png";
import iconTrande from "../assets/images/icon/trande.png";
import iconAccount from "../assets/images/icon/account.png";
import iconTax from "../assets/images/icon/tax.png";
import { useTranslation } from '../hooks/useTranslation';
import {supabase} from "../config/db.js";
// chart
import Sopanha from '../assets/images/sopanha.jpg';
import Sokha from '../assets/images/sokha.jpg';
import Soklim from '../assets/images/soklim.jpg';
import Dary from '../assets/images/dary.jpg';
import Nita from '../assets/images/nita.jpg';
import Vandalin from '../assets/images/vandalin.jpg';
import Vary from '../assets/images/vary.jpg';
import Voleak from '../assets/images/voleak.jpg';
const HomePage = () => {
  const home = useRef(null);
  const about_us = useRef(null);
  const services = useRef(null);
  const client = useRef(null);
  const iconsTick = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width="28" fill="currentColor"><path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path></svg>;
  const defaultLangCode = localStorage.getItem('language') || 'en';
  const translations = useTranslation(defaultLangCode);

  const [fileDefault, setFileDefault] = useState([]);
  const [fileBsr, setFileBsr] = useState([]);
  const [fileClient, setFileClient] = useState([]);
  const [fileFounder, setFileFounder] = useState([]);
  const [banner_1, setBaner_1] = useState([]);
  const [banner_2, setBaner_2] = useState([]);
  const [banner_3, setBaner_3] = useState([]);
  const [banner_4, setBaner_4] = useState([]);

  const [imgBn_1, setBn_1] = useState([]);
  const [imgBn_2, setBn_2] = useState([]);
  const [imgBn_3, setBn_3] = useState([]);
  const [imgBn_4, setBn_4] = useState([]);

  useEffect(()=>{
    fetchData();
    isArray();
  })
  const fetchData = async () => {
    try {
      // Fetch data from Supabase table
      const { data: tableData, error: tableError } = await supabase
          .from("images")
          .select("*");

      const dataWithUrls = await Promise.all(
          tableData.map(async (item) => {
            if (item.path_image) {
              // Generate public URL for the image
              const { data: img_url, error: urlError } = supabase.storage
                  .from("images") // Replace with your storage bucket name
                  .getPublicUrl(`contents/${item.path_image}`); // item.image is the file path

              if (urlError) {
                throw urlError;
              }

              return { ...item, path_image: img_url.publicUrl }; // Append public URL to item
            }
            return item;
          })
      );
      // Fetch data from Supabase table
      const { data: bsrData } = await supabase
          .from("business_register")
          .select("*");

      const dataWithBsrUrls = await Promise.all(
          bsrData.map(async (item) => {
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
      // Fetch data from Supabase table
      const { data: clientData } = await supabase
          .from("client_img")
          .select("*");


      const dataWithClientUrls = await Promise.all(
          clientData.map(async (item) => {
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
      const { data: founderData } = await supabase
          .from("founder")
          .select("*");

      const dataWithFounderUrls = await Promise.all(
          founderData.map(async (item) => {
            if (item.images) {
              // Generate public URL for the image
              const { data: img_url, error: urlError } = supabase.storage
                  .from("images") // Replace with your storage bucket name
                  .getPublicUrl(`contents/${item.images}`); // item.image is the file path

              if (urlError) {
                throw urlError;
              }

              return { ...item, images: img_url.publicUrl }; // Append public URL to item
            }
            return item;
          })
      );

      const { data: data_1 } = await supabase
          .from("bottom_banner")
          .select("*");

      const banner_1 = await Promise.all(
          data_1.map(async (item) => {
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

      const { data: data_2 } = await supabase
          .from("bottom_banner_1")
          .select("*");

      const banner_2 = await Promise.all(
          data_2.map(async (item) => {
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

      const { data: data_3 } = await supabase
          .from("bottom_banner_2")
          .select("*");

      const banner_3 = await Promise.all(
          data_3.map(async (item) => {
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

      const { data: data_4 } = await supabase
          .from("bottom_banner_3")
          .select("*");

      const banner_4 = await Promise.all(
          data_4.map(async (item) => {
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

      if (tableError) {
        throw tableError;
      }
      setFileDefault(dataWithUrls);
      setFileBsr(dataWithBsrUrls);
      setFileClient(dataWithClientUrls);
      setFileFounder(dataWithFounderUrls);
      setBaner_1(banner_1);
      setBaner_2(banner_2);
      setBaner_3(banner_3);
      setBaner_4(banner_4);
    } catch (err) {
      console.log(err.message);
    }
  };
  const isArray = async () =>{
    banner_1.map((item)=>{
      return setBn_1(item.image);
    })
    banner_2.map((item)=>{
      return setBn_2(item.image);
    })
    banner_3.map((item)=>{
      return  setBn_3(item.image);
    })
    banner_4.map((item)=>{
      return setBn_4(item.image);
    })
  }

  return (
    <>
      <Scroll />

      <Navbar translations={translations} home={home} about={about_us} services={services} client={client}/>
      <section ref={home}>
        <div className="relative flex flex-col justify-center overflow-hidden clip-path min-h-[70rem] p-[1.25rem] md:p-[5rem] xl:p-[10rem] 2xl:p-[20rem]">
          {fileDefault.map((e)=>(
            <img key={e.id} src={e.path_image} className="absolute inset-0 w-full h-full object-cover object-center" />
          ))}
          <div className="absolute inset-0 w-full bg-black/20"></div>
          <div className="relative flex flex-col justify-center mb-24 text-center lg:text-start">
                <h1 className="text-[120px] md:text-[164px] font-['koulen'] text-[#39B6FF] font-normal h-[120px] md:h-[164px]">
                  Global
                </h1>
                <h1 className="text-[65px] md:text-[87px] font-['koulen'] text-[#233C96] font-normal">
                  Consultancy
                </h1>
                <p className="text-[16px] font-['inter'] text-[#ffffff] font-normal lg:w-64">
                {translations['welcome'] || 'Loading...'}
              </p>

          </div>
        </div>
      </section>

      <section ref={about_us}>
        <div className="w-ful bg-[#ffffff]">
          <div className="w-full max-w-screen-xl mx-auto text-start font-['inter'] text-[#050076] p-5 md:p-12"
          >
            <h1 className="text-[24px] md:text-[44px] font-['koulen'] font-medium">
              Global Consultancy
            </h1>
            <p className="text-[16px] md:text-[24px]">
              {translations['about_p'] || 'Loading...'}
            </p>
          </div>
          <div className="bg-[#314bb2] w-full px-10 py-[8vh] md:py-[32vh] clip-path-2">
            <div className="lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl w-full mx-auto text-[#eee]">
              <div className="flex gap-5 pb-4">
                <div>
                  <img src={iconVission} className="w-20 md:w-20 xl:w-14 mt-4" />
                </div>
                <div>
                  <h1 className="text-[30px] md:text-[54px] font-['koulen'] font-medium">
                  {translations['vision_title'] || 'Loading...'}
                  </h1>
                  <p className="font-['inter'] md:text-[20px]">
                  {translations['vision_detail'] || 'Loading...'}
                  </p>
                </div>
              </div>
              <div className="flex gap-5 pt-4">
                <div>
                  <img src={iconMission} className="w-44 md:w-48 xl:w-32 mt-4" />
                </div>
                <div>
                  <h1 className="text-[30px] md:text-[54px] font-['koulen'] font-medium mt-2">
                     {translations['mission_title'] || 'Loading...'}
                  </h1>
                  <p className="font-['inter'] md:text-[20px]">
                      {translations['mission_detail'] || 'Loading...'}
                  </p>
                </div>
              </div>

              <h1 className="text-[30px] md:text-[54px] font-['koulen'] font-medium mt-5">
                {translations['core_value'] || 'Loading...'}
              </h1>
              <div className="flex justify-center flex-wrap md:flex-nowrap gap-[4vw] max-w-screen-lg 2xl:max-w-screen-xl mx-auto my-5">
                <div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>
                        {iconsTick}
                      </span>
                    </div>
                    <div>
                      <h1 className="font-bold text-[20px]">{translations['integrity_title'] || 'Loading...'}</h1>
                      <p className="md:text-[20px]">
                      {translations['integrity_detail'] || 'Loading...'}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>{iconsTick}</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-[20px]">{translations['excellence_title'] || 'Loading...'}</h1>
                      <p className="md:text-[20px]">
                        {translations['excellence_detail'] || 'Loading...'}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>{iconsTick}</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-[20px]">{translations['cs'] || 'Loading...'}</h1>
                      <p className="md:text-[20px]">
                      {translations['cs_detail'] || 'Loading...'}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>{iconsTick}</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-[20px]">{translations['innovation'] || 'Loading...'}</h1>
                      <p className="md:text-[20px]">
                      {translations['innovation_detail'] || 'Loading...'}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>{iconsTick}</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-[20px]">{translations['collaboration'] || 'Loading...'}</h1>
                      <p className="md:text-[20px]">
                      {translations['collaboration_detail'] || 'Loading...'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pb-[30vh] md:pb-[30vh] xl:pb-[45vh] z-20">
            <div className="absolute bottom-0 flex w-full justify-center items-center gap-[2vw] translate-x-[-50%] left-[50%] ">
              <div>
                {fileFounder.map((e)=>(
                    <img key={e.id}
                         src={e.images}
                         className="w-[110vh] md:w-[24vh] lg:w-[32vh] lg:w-[32vh] xl:w-[40vh]"
                    />
                ))}
              </div>
              <div className="text-[#182760] font-['lexend'] mt-10 md:mt-20 max-w-sm md:max-w-md xl:max-w-2xl p-2">
                <h1 className="text-[16px] lg:text-[24px] lg:text-[38px] xl:text-[48px] text-[#233C96] font-normal">
                {translations['founder_name'] || 'Loading...'}
                </h1>
                <p className="text-[16px] lg:text-[24px] lg:text-[38px] text-[#233C96] font-normal">
                {translations['founder_title'] || 'Loading...'}
                </p>
                <br />
                <p className="text-[9px] md:text-[12px] lg:text-[20px]">
                {translations['education'] || 'Loading...'}
                </p>

                <details className="w-24 text-center md:w-32 lg:w-44 my-2 cursor-pointer">
                  <summary className="bg-gradient-to-r from-[#C2F6FF] to-[#05A4FE] px-3 py-2 text-[12px] lg:text-[17px] text-[#182760] rounded-xl select-none">
                  {translations['btn_ms'] || 'Loading...'}
                  </summary>
                  <p className="text-start w-full left-[54%] md:left-[53%] lg:left-[68%] xl:left-[66%] translate-x-[-50%] md:max-w-2xl p-2 shadow-xl bg-[#7978789a] backdrop-blur-[100px] bg-opacity-100 my-3 absolute rounded-2xl text-[#eee] transition delay-1000 duration-2000 z-50">
                  {translations['header'] || 'Loading...'}
                    <br />
                    <br />
                    {translations['body'] || 'Loading...'}
                    <br />
                    <br />
                    {translations['footer'] || 'Loading...'}
                  </p>
                </details>
              </div>
            </div>
          </div>

          <div className="bg-[#314bb2] px-5 pt-3 pb-[12rem] md:pt-24 md:pb-[20rem] clip-path-3 z-10">
            <div className="grid grid-cols-12 justify-center items-center gap-[2vw] my-10">
              <div className="col-span-12 inline-flex justify-start md:justify-center items-center gap-5 w-full max-w-[23rem] mx-auto overflow-hidden">
                <img src={Sopanha} alt="Founder" className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] rounded-full"/>
                <div>
                  <h1 className="text-[20px] font-bold font-['inter'] lg:text-[30px] text-[#ffffff]">Khoum Sopanha</h1>
                  <p className="text-[16px] font-['inter'] lg:text-[20px] text-[#ffffff]">Managing Director</p>
                </div>
              </div>
              <div className="col-span-6 hidden lg:block"></div>
              <div className="col-span-12 xl:col-span-6 inline-flex justify-start md:justify-center items-center gap-5 w-full max-w-[23rem] mx-auto overflow-hidden">
                <img src={Sokha} alt="Founder" className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] rounded-full"/>
                <div>
                  <h1 className="text-[20px] font-bold font-['inter'] lg:text-[30px] text-[#ffffff]">Ngin Sokha</h1>
                  <p className="text-[16px] font-['inter'] lg:text-[20px] text-[#ffffff]">Business Manager</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 justify-center items-center gap-[2vw] my-10">
              <div className="col-span-12 md:col-span-6 xl:col-span-4 inline-flex justify-start md:justify-center items-center gap-5 w-full max-w-[23rem] mx-auto overflow-hidden">
                <img src={Soklim} alt="Founder" className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] rounded-full"/>
                <div>
                  <h1 className="text-[20px] font-bold font-['inter'] lg:text-[30px] text-[#ffffff]">Lot Soklim</h1>
                  <p className="text-[16px] font-['inter'] lg:text-[20px] text-[#ffffff]">Senior Tax Accountant</p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4 inline-flex justify-start md:justify-center items-center gap-5 w-full max-w-[23rem] mx-auto overflow-hidden">
                <img src={Vary} alt="Founder" className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] rounded-full"/>
                <div>
                  <h1 className="text-[20px] font-bold font-['inter'] lg:text-[30px] text-[#ffffff]">Chhan Vary</h1>
                  <p className="text-[16px] font-['inter'] lg:text-[20px] text-[#ffffff]">Senior Tax Accountant</p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4 inline-flex justify-start md:justify-center items-center gap-5 w-full max-w-[23rem] mx-auto overflow-hidden">
                <img src={Vandalin} alt="Founder" className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] rounded-full"/>
                <div>
                  <h1 className="text-[20px] font-bold font-['inter'] lg:text-[30px] text-[#ffffff]">Leang Vandalin</h1>
                  <p className="text-[16px] font-['inter'] lg:text-[20px] text-[#ffffff]">Consultan</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 justify-center items-center gap-[2vw] my-10">
              <div className="col-span-12 md:col-span-6 xl:col-span-4 inline-flex justify-start md:justify-center items-center gap-5 w-full max-w-[23rem] mx-auto overflow-hidden">
                <img src={Voleak} alt="Founder" className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] rounded-full"/>
                <div>
                  <h1 className="text-[20px] font-bold font-['inter'] lg:text-[30px] text-[#ffffff]">Cheav voleak</h1>
                  <p className="text-[16px] font-['inter'] lg:text-[20px] text-[#ffffff]">Tax Accountant</p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4 inline-flex justify-start md:justify-center items-center gap-5 w-full max-w-[23rem] mx-auto overflow-hidden">
                <img src={Dary} alt="Founder" className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] rounded-full"/>
                <div>
                  <h1 className="text-[20px] font-bold font-['inter'] lg:text-[30px] text-[#ffffff]">Oeurn Dary</h1>
                  <p className="text-[16px] font-['inter'] lg:text-[20px] text-[#ffffff]">Tax Accountant</p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4 inline-flex justify-start md:justify-center items-center gap-5 w-full max-w-[23rem] mx-auto overflow-hidden">
                <img src={Nita} alt="Founder" className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] rounded-full"/>
                <div>
                  <h1 className="text-[20px] font-bold font-['inter'] lg:text-[30px] text-[#ffffff]">Seng Sokunnita</h1>
                  <p className="text-[16px] font-['inter'] lg:text-[20px] text-[#ffffff]">Assistant</p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 xl:col-span-4 inline-flex justify-start md:justify-center items-center gap-5 w-full max-w-[23rem] mx-auto overflow-hidden">
                <div className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] bg-gray-500 rounded-full"/>
                <div>
                  <h1 className="text-[20px] font-bold font-['inter'] lg:text-[30px] text-[#ffffff]">Hat Boramey</h1>
                  <p className="text-[16px] font-['inter'] lg:text-[20px] text-[#ffffff]">Assistant</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-screen-xl mx-auto my-3 md:my-10">
            <div className="p-5">
              <h1 className="text-center text-[#314bb2] font-['koulen'] text-[24px] md:text-[44px] my-5">
              {translations['brc'] || 'Loading...'}
              </h1>
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-[.5rem] my-2">
                  {fileBsr.map((e)=> (
                      <div key={e.id} className="w-full my-2">
                        <img src={e.image} onClick={()=> editId(e.id)} />
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={services}>
        <div className="px-5 py-10">
          <h1 className="text-center text-[#314bb2] font-['koulen'] text-[24px] md:text-[44px]">
            {translations['ourservice'] || 'Loading...'}
          </h1>
          <p className="text-center text-[#405194] font-['inter'] text-[16px] mb-14">
            {translations['ourservice_detail'] || 'Loading...'}
          </p>
          <div className="w-full max-w-screen-lg mx-auto pt-10 relative">
            <div>
              <div className="p-4 lg:p-6 bg-[#182760] w-[8vh] h-[8vh] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] md:left-[25%] lg:left-[15%] lg:top-[5%] xl:top-[6%] rotate-[134deg] z-50">
                <img src={iconTax} className="rotate-[-134deg]" />
              </div>
              <div className="p-4 lg:p-5 bg-[#182760] w-[8vh] h-[8vh] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[17.4%] md:left-[75%] md:top-[3%] lg:left-[49%] lg:top-[5%] xl:top-[6%] rotate-[134deg] z-50">
                <img src={iconAccount} className="rotate-[-134deg]" />
              </div>
              <div className="p-4 lg:p-5 bg-[#182760] w-[8vh] h-[8vh] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[33.2%] md:left-[25%] md:top-[36%] lg:left-[84%] lg:top-[5%] xl:top-[6%] rotate-[134deg] z-50">
                <img src={iconTrande} className="rotate-[-134deg]" width="64"/>
              </div>

              <div className="p-4 lg:p-6 bg-[#182760] w-[8vh] h-[8vh] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] md:left-[75%] md:top-[36%] lg:left-[15%] lg:top-[55%] xl:top-[54.7%] rotate-[134deg] z-50">
                <img src={iconTax} className="rotate-[-134deg]" />
              </div>
              <div className="p-4 lg:p-5 bg-[#182760] w-[8vh] h-[8vh] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[67.8%] md:left-[75%] md:top-[72%] lg:left-[49%] lg:top-[55%] xl:top-[54.7%] rotate-[134deg] z-50">
                <img src={iconAccount} className="rotate-[-134deg]" />
              </div>
              <div className="p-4 lg:p-5 bg-[#182760] w-[8vh] h-[8vh] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[85.6%] md:left-[25%] md:top-[72%] lg:left-[84%] lg:top-[55%] xl:top-[54.7%] rotate-[134deg] z-50">
                <img src={iconTrande} className="rotate-[-134deg]" width="64"/>
              </div>
            </div>
              {/* background */}
            <div>
                <div className="p-4 lg:p-6 bg-gradient-to-r from-[#7c29f1] to-[#06CFFD]  w-[8vh] h-[8vh] absolute translate-x-[-50%] z-20 translate-y-[-50%] left-[50%] top-[2%] md:left-[25%] md:top-[4%] lg:left-[15%] lg:top-[6%] xl:top-[7%] rotate-[134deg]">
                  <img src={iconTax} className="rotate-[-134deg]" />
                </div>
                <div className="p-4 lg:p-5 bg-gradient-to-r from-[#7C29F1] to-[#06CFFD]  w-[8vh] h-[8vh] absolute translate-x-[-50%] z-20 translate-y-[-50%] left-[50%] top-[17.7%] md:left-[75%] md:top-[4%] lg:left-[49%] lg:top-[6%] xl:top-[7%] rotate-[134deg]">
                  <img src={iconAccount} className="rotate-[-134deg]"/>
                </div>
                <div className="p-4 lg:p-5 bg-gradient-to-r from-[#7C29F1] to-[#06CFFD]  w-[8vh] h-[8vh] absolute translate-x-[-50%] z-20 translate-y-[-50%] left-[50%] top-[33.5%] md:left-[25%] md:top-[36.9%] lg:left-[84%] lg:top-[6%] xl:top-[7%] rotate-[134deg]">
                  <img src={iconTrande} className="rotate-[-134deg]" width="64"/>
                </div>

                <div className="p-4 lg:p-6 bg-gradient-to-r from-[#7c29f1] to-[#06CFFD]  w-[8vh] h-[8vh] absolute translate-x-[-50%] z-20 translate-y-[-50%] left-[50%] top-[50.3%] md:left-[75%] md:top-[36.9%] lg:left-[15%] lg:top-[56%] xl:top-[56%] rotate-[134deg]">
                  <img src={iconTax} className="rotate-[-134deg]" />
                </div>
                <div className="p-4 lg:p-5 bg-gradient-to-r from-[#7C29F1] to-[#06CFFD]  w-[8vh] h-[8vh] absolute translate-x-[-50%] z-20 translate-y-[-50%] left-[50%] top-[68.1%] md:left-[75%] md:top-[73%] lg:left-[49%] lg:top-[56%] xl:top-[56%] rotate-[134deg]">
                  <img src={iconAccount} className="rotate-[-134deg]"/>
                </div>
                <div className="p-4 lg:p-5 bg-gradient-to-r from-[#7C29F1] to-[#06CFFD]  w-[8vh] h-[8vh] absolute translate-x-[-50%] z-20 translate-y-[-50%] left-[50%] top-[85.9%] md:left-[25%] md:top-[73%] lg:left-[84%] lg:top-[56%] xl:top-[56%] rotate-[134deg]">
                  <img src={iconTrande} className="rotate-[-134deg]" width="64"/>
                </div>
            </div>
              {/* content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-x-[3vw] gap-y-[9vh]">
                <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                  <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16">
                    <li className="py-3 text-[17px] font-['inter']"><b>{translations['tss'] || 'Loading...'}</b></li>
                    <li className="py-3 text-[17px] font-['inter']">{translations['tss_content_1'] || 'Loading...'}</li>
                    <li className="py-3 text-[17px] font-['inter']">{translations['tss_content_2'] || 'Loading...'}</li>
                  </ul>
                </div>
                <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                  <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16">
                    <li className="py-3 text-[17px] font-['inter'] px-3 text-wrap"><b>{translations['ass'] || 'Loading...'}</b> </li>
                    <li className="py-3 text-[17px] font-['inter'] px-3 text-wrap">{translations['ass_content_1'] || 'Loading...'}</li>
                    <li className="py-3 text-[17px] font-['inter'] px-3 text-wrap">{translations['ass_content_2'] || 'Loading...'}</li>
                  </ul>
                </div>
                <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                  <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16 ">
                    <li className="py-3 text-[17px] font-['inter'] px-3 text-wrap"><b>{translations['tad'] || 'Loading...'}</b></li>
                    <li className="py-3 text-[17px] font-['inter'] px-3 text-wrap">
                    {translations['tad_content_1'] || 'Loading...'}
                    </li>
                    <li className="py-3 text-[17px] font-['inter'] px-3">{translations['tad_content_2'] || 'Loading...'}</li>
                  </ul>
                </div>

                <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                  <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16">
                    <li className="py-3 text-[17px] font-['inter']"><b>{translations['bsr'] || 'Loading...'}</b></li>
                    <li className="py-3 text-[17px] font-['inter']">{translations['bsr_content_1'] || 'Loading...'}</li>
                    <li className="py-3 text-[17px] font-['inter']">{translations['bsr_content_2'] || 'Loading...'}</li>
                    <li className="py-3 text-[17px] font-['inter']">{translations['bsr_content_3'] || 'Loading...'}</li>
                  </ul>
                </div>
                <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16">
                    <li className="py-3 text-[17px] font-['inter']"><b>{translations['cu'] || 'Loading...'}</b> </li>
                    <li className="py-3 text-[17px] font-['inter']">{translations['cu_content_1'] || 'Loading...'}</li>
                    <li className="py-3 text-[17px] font-['inter']">{translations['cu_content_2'] || 'Loading...'}</li>
                    <li className="py-3 text-[17px] font-['inter']">{translations['cu_content_3'] || 'Loading...'}</li>
                  </ul>
                </div>
                <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                  <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16 ">
                    <li className="py-3 text-[17px] font-['inter'] px-2"><b>{translations['cc'] || 'Loading...'}</b></li>
                    <li className="py-3 text-[17px] font-['inter'] px-2"> {translations['cc_content_1'] || 'Loading...'}</li>
                    <li className="py-3 text-[17px] font-['inter'] px-2">{translations['cc_content_2'] || 'Loading...'}</li>
                    <li className="py-3 text-[17px] font-['inter'] px-2 text-wrap">{translations['cc_content_3'] || 'Loading...'}</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-center text-[#314bb2] font-['koulen'] text-[24px] md:text-[44px] py-10 md:pt-12 xl:pt-9">
          {translations['why_us'] || 'Loading...'}
          </h1>

          <div className="bg-[#314bb2] clip-path-4">
            <div className="flex items-center justify-center py-[10vh] md:pt-[20vh] md:pb-12 xl:pt-[26vh] xl:pb-16">
              <div className="w-full max-w-screen md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2vw] lg:gap-[3vw]">
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50 hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h2 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      1
                    </h2>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                    {translations['why_us_1'] || 'Loading...'}
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h2 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                    2
                    </h2>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                    {translations['why_us_2'] || 'Loading...'}
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h2 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                    3
                    </h2>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                    {translations['why_us_3'] || 'Loading...'}
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                    4
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                    {translations['why_us_4'] || 'Loading...'}
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                    5
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                    {translations['why_us_5'] || 'Loading...'}
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                    6
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                    {translations['why_us_6'] || 'Loading...'}
                    </p>
                  </div>
                  <div className="hidden lg:block"></div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                    7
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                    {translations['why_us_7'] || 'Loading...'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={client}>
        <div className="relative">
          <div className="w-full max-w-sm md:max-w-screen-xl mx-auto">
            <div className="h-full bg-[#ffffff]">
              <div>
                <h1 className="text-[45px] text-[#182760] text-center font-['koulen'] font-medium pt-12">
                  {translations['ourClient'] || 'Loading...'}
                </h1>
                <p className="text-center text-[#182760] pb-0 md:pb-5">
                {translations['client_details'] || 'Loading...'}
                </p>
              </div>
              <div className="flex justify-center items-center gap-[4vw] my-10">
                {fileClient.map((e)=>(
                    <div key={e.id} className="w-12 md:w-16 h-12 md:h-16 lg:w-24 lg:h-24 overflow-hidden">
                      <img src={e.image} className="w-full imgClient"/>
                    </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full bg-[#314bb2] md:pb-[20vh] clip-path-5"></div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default HomePage;
