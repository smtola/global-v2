import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {useRef} from "react";
import "./HomePage.css";
import Scroll from "../Scroll";
import imgBanner from "../assets/images/banner/cover.jpg";
import imgFounder from "../assets/images/founder.png";
import iconVission from "../assets/images/icon/vision.png";
import iconMission from "../assets/images/icon/mission.png";
import iconTrande from "../assets/images/icon/trande.png";
import iconAccount from "../assets/images/icon/account.png";
import iconTax from "../assets/images/icon/tax.png";
import founderIcon from "../assets/images/icon-founder.png";
import accountingIcon from "../assets/images/accounting.png";
import partnerIcon from "../assets/images/partner.png";
import certificateImage from '../assets/images/certificate.jpg';
import vatImage from '../assets/images/VAT-2023.jpg';
import ahNhabanImage from '../assets/images/អាជ្ញាប័ណ្ណភ្នាក់ងារ_Fianl_update.jpg';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const home = useRef(null);
  const about_us = useRef(null);
  const services = useRef(null);
  const client = useRef(null);
  const iconsTick = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width="28" fill="currentColor"><path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path></svg>;
  const {t} = useTranslation();
  return (
    <>
      <Scroll />
      <Navbar home={home} about={about_us} services={services} client={client}/>
      <section ref={home}>
        <div className="relative">
          <img src={imgBanner} className="w-full h-[50vh] xl:h-screen clip-path" />
          <div className="w-full absolute left-[5%] md:left-[26%] xl:left-[50%] top-[80%] md:top-[80%] xl:top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="w-full h-[56vh] ps-[24vh]" >
              <h1 className="text-[48px] md:text-[100px] lg:text-[120px] xl:text-[144px] 2xl:text-[164px] font-['koulen'] text-[#39B6FF] font-normal h-[48px] md:h-[100px] lg:h-[120px] xl:h-[144px] 2xl:h-[164px]">
                {t('welcome_1')}
              </h1>
              <h1 className="text-[26px] md:text-[53px] lg:text-[65px] xl:text-[77px] 2xl:text-[87px] font-['koulen'] text-[#233C96] font-normal h-[35px] md:h-[60px] lg:h-[70px] xl:h-[100px]">
                {t('welcome_2')}
              </h1>
              <p className="text-[12px] md:text-[22px] font-['inter'] text-[#233C96] font-normal">
                {t('welcome')}
              </p>
              <p className="text-[11px] md:text-[16px] font-['inter'] text-[#233C96] font-normal w-64">
                {t('welcome_p')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={about_us}>
        <div className="w-ful bg-[#ffffff]">
          <div className="w-full max-w-screen-xl mx-auto text-start font-['inter'] text-[#050076] p-5 md:p-12"
          >
            <h1 className="text-[24px] md:text-[44px] font-['koulen'] font-medium">
              {t('about_title')}
            </h1>
            <p className="text-[16px] md:text-[24px]">
              {t('about_p_1')}
            </p>
            <br />
            <p className="text-[16px] md:text-[24px]">
              {t('about_p_2')}
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
                  {t('vision')}
                  </h1>
                  <p className="font-['inter'] md:text-[20px]">
                  {t('vision_detail')}
                  </p>
                </div>
              </div>
              <div className="flex gap-5 pt-4">
                <div>
                  <img src={iconMission} className="w-44 md:w-48 xl:w-32 mt-4" />
                </div>
                <div>
                  <h1 className="text-[30px] md:text-[54px] font-['koulen'] font-medium mt-2">
                  {t('mission')}
                  </h1>
                  <p className="font-['inter'] md:text-[20px]">
                     {t('mission_detail')}
                  </p>
                </div>
              </div>

              <h1 className="text-[30px] md:text-[54px] font-['koulen'] font-medium mt-5">
                {t('core_value')}
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
                      <h1 className="font-bold text-[20px]">{t('itegrity')}</h1>
                      <p className="md:text-[20px]">
                      {t('itegrity_detail')}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>{iconsTick}</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-[20px]">{t('excellence')}</h1>
                      <p className="md:text-[20px]">
                      {t('excellence_detail')}
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
                      <h1 className="font-bold text-[20px]">{t('cs')}</h1>
                      <p className="md:text-[20px]">
                      {t('cs_detail')}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>{iconsTick}</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-[20px]">{t('innovation')}</h1>
                      <p className="md:text-[20px]">
                      {t('innovation_detail')}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>{iconsTick}</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-[20px]">{t('collaboration')}</h1>
                      <p className="md:text-[20px]">
                      {t('innovation_detail')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pb-[28vh] md:pb-[25vh] xl:pb-[64vh] z-20">
            <div className="absolute bottom-0 flex w-full justify-center items-center translate-x-[-50%] left-[47%] md:left-[47%] ">
              <div>
                <img src={imgFounder} className="w-[190vh] md:w-[172vh] lg:w-[100vh] xl:w-[172vh]" />
              </div>
              <div className="text-[#182760] font-['lexend'] mt-10 md:mt-20">
                <h1 className="text-[16px] md:text-[24px] lg:text-[38px] xl:text-[48px] text-[#233C96] font-normal md:h-[40px]">
                  {t('founder_name')}
                </h1>
                <h1 className="text-[16px] md:text-[24px] lg:text-[38px] xl:text-[48px] text-[#233C96] font-normal h-[5px] md:h-[40px]">
                  {t('founder')} | CEO
                </h1>
                <br />
                <p className="text-[9px] md:text-[20px]">
                  {t('education')}
                </p>

                <details className="w-30 text-center md:w-44 my-2 cursor-pointer">
                  <summary className="bg-gradient-to-r from-[#C2F6FF] to-[#05A4FE] px-3 py-2 text-[12px] md:text-[17px] text-[#182760] rounded-xl select-none">
                    {t('message')}
                  </summary>
                  <p className="text-start w-full left-[54%] md:left-[53%] lg:left-[68%] xl:left-[66%] translate-x-[-50%] md:max-w-2xl p-2 shadow-xl bg-[#7978789a] backdrop-blur-[100px] bg-opacity-100 my-3 absolute rounded-2xl text-[#eee] transition delay-1000 duration-2000 z-50">
                    {t('message_detail_1')} 
                    <br />
                    <br />
                    {t('message_detail_2')}
                     <br />
                    <br />
                    {t('message_detail_3')}  
                    <br />
                    <br />
                    {t('message_detail_4')} 
                     <br /> <br />
                    {t('message_detail_5')}  
                    <br /> <br /> 
                    {t('message_detail_6')} 
                    <br />
                    {t('message_detail_7')} 
                    <br />
                    {t('message_detail_8')} 
                    <br /> 
                  </p>
                </details>
              </div>
            </div>
          </div>

          <div className="bg-[#314bb2] px-5 pt-3 pb-12 md:pt-24 md:pb-32 clip-path-3 z-10">
            <div className="flex justify-center items-center gap-[10vw]">
              <div>
                <div className="flex gap-[2vw] items-center justify-center">
                  <img src={founderIcon} className="w-14 md:w-32" />
                  <h1 className="text-center text-[#fff] font-['koulen'] text-[16px] md:text-[33px] lg:text-[44px]">
                    {t('founder_ch')}
                  </h1>
                </div>
              </div>
              <div>
                <div className="flex gap-[2vw] items-center py-5">
                <img src={accountingIcon} className="w-14 md:w-32" />
                  <h1 className="text-center text-[#fff] font-['koulen'] text-[16px] md:text-[33px] lg:text-[44px]">
                  {t('t_&_a')}
                  </h1>
                </div>
                <div className="flex gap-[2vw] items-center py-5">
                <img src={partnerIcon} className="w-14 md:w-32" />
                  <h1 className="text-center text-[#fff] font-['koulen'] text-[16px] md:text-[33px] lg:text-[44px]">
                  {t('partner')}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-screen-xl mx-auto my-3 md:my-10">
            <div className="p-5">
              <h1 className="text-center text-[#314bb2] font-['koulen'] text-[24px] md:text-[44px] my-5">
                {t('brc')}
              </h1>
              <div>
                <div className="bg-gray-200 w-full max-w-screen-xl mx-auto my-2">
                 <img src={certificateImage}/>
                </div>
                <div className="flex flex-wrap md:flex-nowrap justify-center gap-[.5rem] my-2">
                  <div className="bg-gray-200 w-full max-w-screen-md mx-auto">
                  <img src={vatImage}/>
                  </div>
                  <div className="bg-gray-200 w-full max-w-screen-md mx-auto">
                  <img src={ahNhabanImage}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={services}>
        <div className="px-5 py-10">
          <h1 className="text-center text-[#314bb2] font-['koulen'] text-[24px] md:text-[44px] mb-14">
            {t('ourservice')}
          </h1>
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
                    <li className="py-3 text-[17px] font-['inter']"><b>{t('tss')}</b></li>
                    <li className="py-3 text-[17px] font-['inter']">{t('tss_content_1')}</li>
                    <li className="py-3 text-[17px] font-['inter']">{t('tss_content_2')}</li>
                  </ul>
                </div>
                <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16">
                    <li className="py-3 text-[17px] font-['inter'] px-3 text-wrap"><b>{t('ass')}</b> </li>
                    <li className="py-3 text-[17px] font-['inter'] px-3 text-wrap">{t('ass_content_1')}</li>
                    <li className="py-3 text-[17px] font-['inter'] px-3 text-wrap">{t('ass_content_2')}</li>
                  </ul>
                </div>
                <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                  <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16 ">
                    <li className="py-3 text-[17px] font-['inter'] px-3 text-wrap"><b>{t('tad')}</b></li>
                    <li className="py-3 text-[17px] font-['inter'] px-3 text-wrap">
                    {t('tad_content_1')}
                    </li>
                    <li className="py-3 text-[17px] font-['inter'] px-3">{t('tad_content_2')}</li>
                  </ul>
                </div>

                <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                  <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16">
                    <li className="py-3 text-[17px] font-['inter']"><b>{t('bsr')}</b></li>
                    <li className="py-3 text-[17px] font-['inter']">{t('bsr_content_1')}</li>
                    <li className="py-3 text-[17px] font-['inter']">{t('bsr_content_2')}</li>
                    <li className="py-3 text-[17px] font-['inter']">{t('bsr_content_3')}</li>
                  </ul>
                </div>
                <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16">
                    <li className="py-3 text-[17px] font-['inter']"><b>{t('cu')}</b> </li>
                    <li className="py-3 text-[17px] font-['inter']">{t('cu_content_1')}</li>
                    <li className="py-3 text-[17px] font-['inter']">{t('cu_content_2')}</li>
                    <li className="py-3 text-[17px] font-['inter']">{t('cu_content_3')}</li>
                  </ul>
                </div>
                <div className="w-full mx-auto md:max-w-xl bg-[#eee] shadow-xl">
                  <ul className="text-center text-[#233c96] py-20 md:pt-20 xl:py-16 ">
                    <li className="py-3 text-[17px] font-['inter'] px-2"><b>{t('cc')}</b></li>
                    <li className="py-3 text-[17px] font-['inter'] px-2"> {t('cc_content_1')}</li>
                    <li className="py-3 text-[17px] font-['inter'] px-2">{t('cc_content_2')}</li>
                    <li className="py-3 text-[17px] font-['inter'] px-2 text-wrap">{t('cc_content_3')}</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-center text-[#314bb2] font-['koulen'] text-[24px] md:text-[44px] py-10 md:pt-12 xl:pt-9">
            {t('why_us')}
          </h1>

          <div className="bg-[#314bb2] clip-path-4">
            <div className="flex items-center justify-center py-[10vh] md:pt-[20vh] md:pb-12 xl:pt-[26vh] xl:pb-16">
              <div className="w-full max-w-screen md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2vw] lg:gap-[3vw]">
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50 hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h2 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      {t('num_1')}
                    </h2>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                      {t('why_us_1')}
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h2 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                    {t('num_2')}
                    </h2>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                    {t('why_us_2')}
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h2 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                    {t('num_3')}
                    </h2>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                    {t('why_us_3')}
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                    {t('num_4')}
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                    {t('why_us_4')}
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                    {t('num_5')}
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                    {t('why_us_5')}
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                    {t('num_6')}
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                    {t('why_us_6')} 
                    </p>
                  </div>
                  <div className="hidden lg:block"></div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all duration-150">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                    {t('num_7')}
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                    {t('why_us_7')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={client}>
        <div className="relative pt-0 md:pt-24">
          <div className="w-full max-w-sm md:max-w-screen-xl mx-auto">
            <div className="h-full md:pb-[36vh] xl:pb-[56vh] bg-[#ffffff]">
              <div>
                <h1 className="text-[45px] text-[#182760] text-center font-['koulen'] font-medium pt-12">
                  {t('ourClient')}
                </h1>
                <p className="text-center text-[#182760] pb-0 md:pb-5">
                {t('client_details')}
                </p>
              </div>
              <div className="flex justify-center gap-[4vw] my-10">
                <div className="w-12 md:w-16 h-12 md:h-16 lg:w-24 lg:h-24 rounded-full bg-gray-200"></div>
                <div className="w-12 md:w-16 h-12 md:h-16 lg:w-24 lg:h-24 rounded-full bg-gray-200 md:scale-110"></div>
                <div className="w-12 md:w-16 h-12 md:h-16 lg:w-24 lg:h-24 rounded-full bg-gray-200 md:scale-125"></div>
                <div className="w-12 md:w-16 h-12 md:h-16 lg:w-24 lg:h-24 rounded-full bg-gray-200 md:scale-125"></div>
                <div className="w-12 md:w-16 h-12 md:h-16 lg:w-24 lg:h-24 rounded-full bg-gray-200 md:scale-110"></div>
                <div className="w-12 md:w-16 h-12 md:h-16 lg:w-24 lg:h-24 rounded-full bg-gray-200"></div>
              </div>
            </div>
          </div>

          <div className="md:absolute z-10 md:translate-x-[-50%] md:left-[50%] md:top-[43%] lg:top-[37%] 2xl:top-[40%] flex flex-wrap gap-[1vh] lg:gap-[2vh]">
            <div className="flex justify-center flex-wrap md:flex-nowrap gap-[1vh] lg:gap-[2vh]">
              <div className="flex justify-center">
                <div className="w-[22vh] md:w-[16vh] lg:w-[17vh] xl:w-[34vh]">
                  <img src={imgBanner} className="object w-full h-full"/>
                </div>
                <div className="w-[22vh] md:w-[16vh] lg:w-[17vh] xl:w-[34vh] p-5 bg-[#182760] order-first md:order-none">
                  <h1 className="lg:text-[35px] text-[#eee]  font-['koulen'] font-medium">
                  tax solution
                  services
                  </h1>
                  <p className="text-[#eee] pb-5">
                    Your Perfect Business Consultant
                    Thank you for your visit on our website. Please explore...
                  </p>
                </div>
              </div>

              <div className="flex justify-center order-first md:order-none">
                <div className="w-[22vh] md:w-[16vh] lg:w-[17vh] xl:w-[34vh]">
                  <img src={imgBanner} className="object w-full h-full"/>
                </div>
                <div className="w-[22vh] md:w-[16vh] lg:w-[17vh] xl:w-[34vh] p-5 bg-[#CCD8E8]">
                  <h1 className="lg:text-[35px] text-[#182760]  font-['koulen'] font-medium">
                  tax planning
                  strategies
                  </h1>
                  <p className=" text-[#182760] pb-5">
                  Your Perfect Business Consultant
                  Thank you for your visit on our website. Please explore...
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-[1vh] flex-wrap md:flex-nowrap lg:gap-[2vh]">
              <div className="flex justify-center">
                <div className=" w-[22vh] md:w-[16vh] lg:w-[17vh] xl:w-[34vh] p-5 bg-[#CCD8E8]">
                  <h1 className="lg:text-[35px] text-[#182760]  font-['koulen'] font-medium">
                  tax <br className="hidden md:block"/>  report
                  </h1>
                  <p className=" text-[#182760] pb-5">
                  Your Perfect  Business Consultant
                  Thank you for your visit on our website. Please explore...
                  </p>
                </div>
                <div className="w-[22vh] md:w-[16vh] lg:w-[17vh] xl:w-[34vh]">
                  <img src={imgBanner} className="object w-full h-full"/>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-[22vh] md:w-[16vh] lg:w-[17vh] xl:w-[34vh] p-5 bg-[#182760]">
                  <h1 className="lg:text-[35px] text-[#eee]  font-['koulen'] font-medium">
                  accounting <br className="hidden md:block"/>
                  system
                  </h1>
                  <p className="text-[#eee] pb-5">
                    Your Perfect  Business Consultant
                    Thank you for your visit on our website. Please explore...
                  </p>
                </div>
                <div className="w-[22vh] md:w-[16vh] lg:w-[17vh] xl:w-[34vh]">
                  <img src={imgBanner} className="object w-full h-full"/>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#314bb2] md:pb-[30vh] xl:pb-[50vh] clip-path-5"></div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default HomePage;
