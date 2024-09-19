import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, {useRef,useState,useEffect} from "react";
import "./HomePage.css";
import Scroll from "../Scroll";
import { useTranslation } from '../hooks/useTranslation';
import {supabase} from "../config/db.js";
// chart
const HomePage = () => {
  const home = useRef(null);
  const about_us = useRef(null);
  const services = useRef(null);
  const client = useRef(null);
  const iconsTick = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width="28" fill="currentColor"><path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path></svg>;
  const defaultLangCode = localStorage.getItem('language') || 'en';
  const translations = useTranslation(defaultLangCode);

  const [fileClient, setFileClient] = useState([]);
  const [servicesValue, setServices] = useState([]);
  const [banner, setBanners] = useState([]);
  const [about, setAbouts] = useState([]);
  const [about_1, setAbouts_1] = useState([]);
  const [coreValue, setCoreValueItems_1] = useState([]);
  const [founder, setFounder] = useState([]);
  const [brc, setBrc] = useState([]);
  const [whyUs, setWhyUs] = useState([]);
  const [orgChart, setOrgChart] = useState([]);
  useEffect(() => {
    fetchServices();
    fetchBanner();
    fetchAboutUs();
    fetchAbourtUs1();
    fetchCoreItems();
    fetchFounder();
    fetchBrc();
    fetchsetWhyUs();
    fetchOrgChart();
  }, []);

  const fetchAbourtUs1 = async () => {
    const { data, error } = await supabase
        .from('aboutus_1')
        .select("*")
        .order('id',{ascending:true});

    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setAbouts_1(data);
    }
  };
  const fetchCoreItems = async () => {
    const { data, error } = await supabase
        .from('core_values')
        .select("*")
        .order('id',{ascending:true});

    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setCoreValueItems_1(data);
    }
  };
  const fetchOrgChart = async () => {
    const { data, error } = await supabase
        .from('organization_chart')
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
      setOrgChart(dataWithUrls);
    }
  };
  const fetchBanner = async () =>{
    const {data, error} = await supabase
        .from('banner')
        .select('*')
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
      setBanners(dataWithUrls);
    }
  }
  const fetchFounder = async () =>{
    const {data, error} = await supabase
        .from('founders_ms')
        .select('*')
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
      setFounder(dataWithUrls);
    }
  }
  const fetchAboutUs = async () =>{
    const {data, error} = await supabase
        .from('aboutUs')
        .select('*')
        .order('id',{ascending:true});
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setAbouts(data);
    }
  }
  const fetchsetWhyUs = async () =>{
    const {data, error} = await supabase
        .from('whyus')
        .select('*')
        .order('id', { ascending: true });
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setWhyUs(data);
    }
  }
  const fetchBrc = async () =>{
    const { data ,error } = await supabase
        .from("brc")
        .select("*")
        .order('id',{ascending:true});

    const dataWithBsrUrls = await Promise.all(
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
      setBrc(dataWithBsrUrls);
    }
  }
  const fetchServices = async () => {
    const { data, error } = await supabase
        .from('services')
        .select(`
          id,
          title,
          titleKh,
          image,
          sv_items!inner(sv_id, items, itemsKh) 
        `)
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
      setServices(dataWithUrls);
    }
  };
  useEffect(()=>{
    fetchData();
  })
  const fetchData = async () => {
    try {
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

      setFileClient(dataWithClientUrls);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Scroll />

      <Navbar translations={translations} home={home} about={about_us} services={services} client={client}/>
      <section ref={home}>
        {banner.map((e)=>(
        <div key={e.id} className="relative flex flex-col justify-center overflow-hidden clip-path min-h-[70rem] p-[1.25rem] md:p-[5rem] xl:p-[10rem] 2xl:p-[20rem]">
          <img src={e.image} className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 w-full bg-black/20"></div>
          <div className="relative flex flex-col justify-center mb-24 text-center lg:text-start">
                <h1 className="text-center text-[30px] md:text-[50px] lg:text-[80px] 2xl:text-[114px] font-['koulen'] text-[#ffffff] font-normal md:h-[50px] lg:h-[80px] 2xl:h-[114px]">
                  Maximize Your Tax Savings
                </h1>
                <h1 className="text-center text-[20px] md:text-[45px] lg:text-[50px] 2xl:text-[87px] font-['koulen'] text-[#ffffff] font-normal">
                  with Expert Solutions
                </h1>
                <p className="text-center text-[16px] md:text-[24px] font-['inter'] text-[#ffffff] font-normal ">
                {defaultLangCode === 'en' ? e.descriptionEn : e.descriptionKh }
               </p>

            <a href="tel:+855 17 966 659 " className="text-center bg-gradient-to-r to-[#05A4FE] from-[#C2F6FF] px-2 py-3 shadow-md text-[#314cb2] w-[12rem] rounded-full mx-auto my-5 hover:font-bold hover:scale-[1.1] transition-all duration-[500ms]">Get Started Today</a>
          </div>
        </div>
            ))}
      </section>

      <section ref={about_us}>
        <div className="w-ful bg-[#ffffff]">
          <div className="w-full max-w-screen-xl mx-auto text-start font-['inter'] text-[#050076] p-5 md:p-12"
          >
            {about.map((abouts)=>(
            <p key={abouts.id} className="text-[16px] md:text-[24px] ">
              {defaultLangCode === 'en' ? (abouts.descEn.split('\n').map((line, index) => (
                      <span key={index}>
                                                    {line}
                        <br />
                                                    </span>
                  )))
                  : (abouts.descKh.split('\n').map((line, index) => (
                      <span key={index}>
                                                    {line}
                        <br />
                                                    </span>
                  )))
              }
            </p>
            ))}
          </div>
          <div className="bg-[#314bb2] w-full px-10 py-[8vh] md:py-[32vh] clip-path-2">

            <div className="lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl w-full mx-auto text-[#eee]">
              {about_1.map((abouts)=>(
              <div className="flex gap-5 pb-4">
                <div>
                  <h1 className="text-[18px] md:text-[34px] font-['koulen'] font-medium">
                    {defaultLangCode === 'en' ? abouts.titleEn : abouts.titleKh }
                  </h1>
                  <p className=" md:text-[20px]">
                    {defaultLangCode === 'en' ? abouts.descEn : abouts.descKh }
                  </p>
                </div>
              </div>
              ))}

              <div className="grid grid-cols-12  gap-[4vw] max-w-screen-lg 2xl:max-w-screen-xl mx-auto my-5">
                {coreValue.map((coreItems)=>(
                    <div key={coreItems.id} className="col-span-12 lg:col-span-6 flex justify-start lg:justify-center gap-2 font-['inter'] py-3">
                      <div>
                      <span>
                        {iconsTick}
                      </span>
                      </div>
                      <div>
                        <h1 className="font-bold text-[20px]">{defaultLangCode === 'en' ? coreItems.titleEn : coreItems.titleKh }</h1>
                        <p className="md:text-[20px]">
                          {defaultLangCode === 'en' ? coreItems.descEn : coreItems.descKh }
                        </p>
                      </div>
                    </div>
                ))}
              </div>
            </div>

          </div>

          <div className="relative pb-[35vh] xl:pb-[45vh] z-20">
            {founder.map((items)=>(
            <div className="absolute bottom-0 flex w-full justify-center items-center gap-[1vw] translate-x-[-50%] left-[50%] ">
              <div>
                    <img key={items.id}
                         src={items.image}
                         className="w-[90vh] md:w-[24vh] lg:w-[32vh] lg:w-[32vh] xl:w-[40vh]"
                    />
              </div>
              <div className="text-[#182760] font-['lexend'] mt-10 md:mt-20 max-w-md xl:max-w-2xl p-2">
                <h1 className="text-[16px] lg:text-[24px] lg:text-[38px] xl:text-[48px] text-[#233C96] font-normal">
                  {defaultLangCode === 'en' ? items.nameEn : items.nameKh}
                </h1>
                <p className="text-[11px] md:text-[12px] lg:text-[20px]">
                  {defaultLangCode === 'en' ? items.educationEn : items.educationKh}
                </p>

                <details className="w-26  md:w-32 lg:w-44 my-2 cursor-pointer">
                  <summary className="bg-gradient-to-r from-[#C2F6FF] to-[#05A4FE] px-3 py-2 text-center text-[12px] lg:text-[17px] text-[#182760] rounded-xl select-none">
                    {defaultLangCode === 'en' ? items.btn_nameEn : items.btn_nameKh}
                  </summary>
                  <p className="text-start w-full left-[54%] md:left-[53%] lg:left-[68%] xl:left-[66%] translate-x-[-50%] md:max-w-2xl p-2 shadow-xl bg-[#7978789a] backdrop-blur-[100px] bg-opacity-100 my-3 absolute rounded-2xl text-[#eee] transition delay-1000 duration-2000 z-50">
                    {defaultLangCode === 'en' ? items.headEn : items.headKh}
                    <br />
                    <br />
                    {defaultLangCode === 'en' ? items.bodyEn : items.bodyKh}
                    <br />
                    <br />
                    {defaultLangCode === 'en' ? items.footerEn : items.footerKh}
                  </p>
                </details>
              </div>
            </div>
            ))}
            </div>
          <div className="bg-[#314bb2] px-5 pt-3 pb-[12rem] md:pt-24 md:pb-[20rem] clip-path-3 z-10">
            <div className="grid grid-cols-12 justify-start lg:justify-center items-center gap-[2vw] my-10 font-['koulen']">
              {orgChart.map((items)=>(
               <div key={items.id} className="col-span-6 lg:col-span-4 2xl:col-span-3 first:col-span-12 flex flex-col items-center justify-center lg:inline-flex justify-start lg:justify-center items-center gap-5 w-full max-w-[23rem] mx-auto overflow-hidden">
                <img src={items.image} alt="Founder" className="w-[5rem] h-[5rem] lg:w-[10rem] lg:h-[10rem] rounded-full"/>
                <div className="font-['lexend']">
                  <h1 className="text-center lg:text-start text-[16px]  lg:text-[24px] text-[#ffffff]">{defaultLangCode === 'en' ? items.nameEn: items.nameKh}</h1>
                  <p className="text-center lg:text-start text-[16px]  lg:text-[20px] text-[#ffffff]">{defaultLangCode === 'en' ? items.positionEn: items.positionKh}</p>
                </div>
              </div>
              ))}
              </div>
          </div>

          <div className="w-full max-w-screen-xl mx-auto my-3 md:my-10">
            <div className="p-5">
              <h1 className="text-center text-[#314bb2] font-['koulen'] text-[24px] md:text-[44px] my-5">
              {translations['brc'] || 'Loading...'}
              </h1>
              <div>
                <div className="grid grid-cols-12 justify-center gap-[.5rem] my-2">
                  {brc.map((e,index)=> (
                      <div key={e.index} className="first:col-span-12 col-span-6 w-full my-2">
                        <img src={e.image}/>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={services}>
        <div className="my-14">
          <h1 className="text-[45px] text-[#182760] text-center font-['koulen'] font-medium pt-12">
            {translations['os'] || 'Loading...'}
          </h1>
          <p className="text-center text-[#182760] pb-0 md:pb-5">
            {translations['os_detail'] || 'Loading...'}
          </p>
        </div>
        <div className="flex flex-wrap xl:flex-nowrap justify-center gap-[10vw] lg:gap-[5vw] xl:gap-[2vw] px-5 py-10 text-[#182761]">
          {servicesValue.map((cards)=>(
              <div  key={cards.id} className="relative flex flex-col gap-[2vw] bg-[#eee] w-[28rem] mx-auto">
                <div className="relative flex flex-col justify-center service-icon w-[5rem] h-[5rem] mx-auto rotate-[46deg] z-[10] translate-y-[-50%]">
                  <img src={cards.image} alt="" className="w-[2.5rem] h-[2.5rem] mx-auto rotate-[-46deg] z-[30]"/>
                </div>
                <div className="bg-[#eee] relative relative flex flex-col justify-center px-10 pb-10 font-['inter']">
                  <h1 className="text-center font-bold text-[20px]">{defaultLangCode === 'en' ? cards.title : cards.titleKh}</h1>
                  <ul className="text-start list-disc text-[16px]">
                    {cards.sv_items.map((items)=>(
                        <li key={items.index}>{defaultLangCode === 'en' ? items.items : items.itemsKh}</li>
                    ))}
                  </ul>
                </div>
              </div>
          ))}
        </div>

        <div className="w-full">
          <h1 className="text-center text-[#314bb2] font-['koulen'] text-[24px] md:text-[44px] py-10 md:pt-12 xl:pt-9">
          {translations['why_us'] || 'Loading...'}
          </h1>

          <div className="bg-[#314bb2] clip-path-4">
            <div className="flex items-center justify-center py-[10vh] md:pt-[20vh] md:pb-12 xl:pt-[26vh] xl:pb-16">
              <div className="w-full max-w-screen md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2vw] lg:gap-[3vw]">
                  {whyUs.map((items,index)=>(
                  <div key={items.index} className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50 hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h2 className="text-[#5AF5FF] text-[50px]">
                      {defaultLangCode === 'en' ? items.titleEn: items.titleKh}
                    </h2>
                    <p className="text-[12pt] text-[#ffffff] pt-3 md:pt-0">
                      {defaultLangCode === 'en' ? items.detailEn: items.detailKh}
                    </p>
                  </div>
                  ))}
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
