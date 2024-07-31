import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {useRef} from "react";
import "./HomePage.css";
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

const HomePage = () => {
  const home = useRef(null);
  const about_us = useRef(null);
  const services = useRef(null);
  const client = useRef(null);
  const iconsTick = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width="28" fill="currentColor"><path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path></svg>;
  return (
    <>
      <Navbar home={home} about={about_us} services={services} client={client}/>
      <section ref={home}>
        <div className="relative">
          <img src={imgBanner} className="w-full h-[44vh] md:h-[50vh] xl:h-screen clip-path" />
          <div className="w-full absolute left-[7%] md:left-[26%] xl:left-[50%] top-[97%] md:top-[80%] xl:top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="w-full h-[56vh] ps-[24vh]">
              <h1 className="text-[48px] md:text-[100px] lg:text-[120px] xl:text-[144px] font-['koulen'] text-[#39B6FF] font-normal h-[48px] md:h-[100px] lg:h-[120px] xl:h-[144px]">
                Global
              </h1>
              <h1 className="text-[26px] md:text-[53px] lg:text-[65px] xl:text-[77px] font-['koulen'] text-[#233C96] font-normal h-[35px] md:h-[60px] lg:h-[70px] xl:h-[100px]">
                Consultancy
              </h1>
              <p className="text-[12px] md:text-[22px] font-['inter'] text-[#233C96] font-normal">
                Your Perfect Business <br /> Consultant
              </p>
              <p className="text-[11px] md:text-[16px] font-['inter'] text-[#233C96] font-normal ">
                Thank you for your visit on our website.
                <br /> Please explore...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={about_us}>
        <div className="w-ful bg-[#ffffff]">
          <div className="w-full max-w-screen-lg mx-auto text-center font-['inter'] text-[#050076] p-5 md:p-12">
            <h1 className="text-[24px] text-center md:text-[44px] font-['koulen'] font-medium">
              Global Consultancy Co.,ltd
            </h1>
            <p className="text-[16px] md:text-[24px]">
              a tax agency business where specializes in providing tax solutions
              services, accounting system services, training and development to
              support clients under legal landscapes. In 2016, the business was
              registered as an entity and got license as a Tax Agent.
            </p>
            <br />
            <p className="text-[16px] md:text-[24px]">
              Mr. Sophanha Khoum, the founder of Global Consultancy, aims to
              improve tax awareness to better understand about legal landscape
              in Cambodia. Global Consultancy is located in Times Square
              Building.
            </p>
          </div>

          <div className="bg-[#0469FF] w-full px-10 py-[8vh] md:py-[32vh] clip-path-2">
            <div className="lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl w-full mx-auto text-[#eee]">
              <div className="flex justify-center gap-5 pb-4">
                <div>
                  <img src={iconVission} className="w-32 md:w-28 xl:w-20 mt-4" />
                </div>
                <div>
                  <h1 className="text-[30px] md:text-[54px] font-['koulen'] font-medium">
                    Vision
                  </h1>
                  <p className="font-['inter'] md:text-[20px]">
                    At Global Consultancy Co.,Ltd. we believe in the value of
                    relationships. We view every client relationship like a
                    partnership, and truly believe
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-5 pt-4">
                <div>
                  <img src={iconMission} className="w-32 md:w-28 xl:w-20 mt-2" />
                </div>
                <div>
                  <h1 className="text-[30px] md:text-[54px] font-['koulen'] font-medium mt-2">
                    Mission
                  </h1>
                  <p className="font-['inter'] md:text-[20px]">
                    At Global Consultancy Co.,Ltd. we believe in the value of
                    relationships. We view every client relationship like a
                    partnership, and truly believe
                  </p>
                </div>
              </div>

              <h1 className="text-[30px] md:text-[54px] font-['koulen'] font-medium mt-5">
                Core Values
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
                      <h1 className="font-bold text-[20px]">Integrity</h1>
                      <p className="md:text-[20px]">
                        At Global Consultancy Co.,Ltd. we believe in the value
                        of relationships. We view every client relationship like
                        a partnership, and truly believe
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>{iconsTick}</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-[20px]">Excellence</h1>
                      <p className="md:text-[20px]">
                      We are committed to excellence in every aspect of our work and continuously striving to deliver sustainable results.
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
                      <h1 className="font-bold text-[20px]">Customer satisfaction</h1>
                      <p className="md:text-[20px]">
                        We prioritize our clients and understand their needs to exceed their expectation.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>{iconsTick}</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-[20px]">Innovation</h1>
                      <p className="md:text-[20px]">
                      We innovate a culture where technologies is widely open to address global complex.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>{iconsTick}</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-[20px]">Collaboration</h1>
                      <p className="md:text-[20px]">
                      We believe in the power of collaboration, working closely with clients and partners to achieved share goals.
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
                  Sophanha Khoum
                </h1>
                <h1 className="text-[16px] md:text-[24px] lg:text-[38px] xl:text-[48px] text-[#233C96] font-normal h-[5px] md:h-[40px]">
                  Founder | CEO
                </h1>
                <br />
                <p className="text-[9px] md:text-[20px]">
                  Mr.Khoum Sopanha achieved a Master degree of Finance from
                  National University of Management. He further held a BA from
                  institute of Foreign Languages and IT degree from Royal
                  University of Phnom Penh.
                </p>

                <details className="w-30 text-center md:w-32 my-2 cursor-pointer">
                  <summary className="bg-gradient-to-r from-[#C2F6FF] to-[#05A4FE] px-3 py-2 text-[12px] md:text-[15px] text-[#182760] rounded-xl select-none">
                    Read More
                  </summary>
                  <p className="text-start w-full left-[54%] md:left-[53%] lg:left-[68%] xl:left-[66%] translate-x-[-50%] md:max-w-2xl p-2 shadow-xl bg-[#7978789a] backdrop-blur-[100px] bg-opacity-100 my-3 absolute rounded-2xl text-[#eee] transition delay-1000 duration-2000 z-50">
                    Dear valued clients and partners, 
                    <br />
                    <br />
                    As the CEO of Global Consultancy, I would like to express my
                    deepest gratitude for your continued trust and support. We
                    are able to thrive and excel in providing the best tax
                    solution services, accounting system services, training and
                    development. <br />
                    <br />
                    In this dynamic era, we understand the importance of staying
                    informed and prepared. We have always offered reliable tax
                    solutions to meet our clients’ needs. We dedicate to staying
                    ahead of the legal landscape, ensuring we deliver accurate
                    and effective tax solutions and consultancy. <br />
                    <br />
                    We are committed to providing tax solutions and affordable
                    services to our clients. To leverage legal industry, we
                    contribute to problem-solving for the related documents’
                    audit to ensure an exceptional consultancy service. With our
                    qualified team, we provide training to our partners and
                    accounting system for free-of-charge. <br /> <br />
                    I am proud of the achievements we have established. We
                    expand our services, enhance client satisfaction and
                    implement new strategies to serve our clients the best
                    possible service. 
                    <br /> <br /> Warm regards,
                    <br />Mr. Khoum Sopanha 
                    <br />Founder, Global Consultancy
                    <br /> 
                  </p>
                </details>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 px-5 pt-3 pb-12 md:pt-24 md:pb-32 clip-path-3 z-10">
            <div className="flex justify-center items-center gap-[10vw]">
              <div>
                <div className="flex gap-[2vw] items-center justify-center">
                  <img src={founderIcon} className="w-14 md:w-32" />
                  <h1 className="text-center text-[#fff] font-['koulen'] text-[16px] md:text-[33px] lg:text-[44px]">
                    Founder
                  </h1>
                </div>
              </div>
              <div>
                <div className="flex gap-[2vw] items-center py-5">
                <img src={accountingIcon} className="w-14 md:w-32" />
                  <h1 className="text-center text-[#fff] font-['koulen'] text-[16px] md:text-[33px] lg:text-[44px]">
                    Tax & Accounting (6)
                  </h1>
                </div>
                <div className="flex gap-[2vw] items-center py-5">
                <img src={partnerIcon} className="w-14 md:w-32" />
                  <h1 className="text-center text-[#fff] font-['koulen'] text-[16px] md:text-[33px] lg:text-[44px]">
                    Partner (5)
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-screen-xl mx-auto my-3 md:my-10">
            <div className="p-5">
              <h1 className="text-center text-[#0469FF] font-['koulen'] text-[24px] md:text-[44px] my-5">
                Business Registration Documents
              </h1>
              <div>
                <div className="bg-gray-200 w-full h-[680px] max-w-screen-xl mx-auto my-2">
                  <h1>a</h1>
                </div>
                <div className="flex flex-wrap md:flex-nowrap justify-center gap-[.5rem] my-2">
                  <div className="bg-gray-200 w-full h-[680px] max-w-screen-md mx-auto">
                    <h1>a</h1>
                  </div>
                  <div className="bg-gray-200 w-full h-[680px] max-w-screen-md mx-auto">
                    <h1>a</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={services}>
        <div className="px-5 pt-24">
          <h1 className="text-center text-[#182760] font-['koulen'] text-[44px] py-10">
            Our Services
          </h1>
          <div className="w-full max-w-screen-xl mx-auto pt-10 relative">
          <div>
            <div className="p-5 bg-[#182760] w-[9vh] h-[9vh] md:w-[7vh] xl:w-[11vh] md:h-[7vh] xl:h-[11vh] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[2.5%] md:left-[16%] md:top-[7%] rotate-[134deg] z-50">
              <img src={iconTax} className="rotate-[-134deg]" />
            </div>
            <div className="p-5 bg-[#182760] w-[9vh] h-[9vh] md:w-[7vh] xl:w-[11vh] md:h-[7vh] xl:h-[11vh] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[35.1%] md:left-[50%] md:top-[7%] rotate-[134deg] z-50">
              <img src={iconAccount} className="rotate-[-134deg]" />
            </div>
            <div className="p-5 bg-[#182760] w-[9vh] h-[9vh] md:w-[7vh] xl:w-[11vh] md:h-[7vh] xl:h-[11vh] absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[70.5%] md:left-[84%] md:top-[7%] rotate-[134deg] z-50">
              <img src={iconTrande} className="rotate-[-134deg]" />
            </div>
          </div>
            {/* background */}
          <div>
              <div className="p-5 bg-gradient-to-r from-[#7c29f1] to-[#06CFFD] w-[9vh] h-[9vh] md:w-[7vh] xl:w-[11vh] md:h-[7vh] xl:h-[11vh] absolute translate-x-[-50%] z-20 translate-y-[-50%] left-[50%] top-[2.9%] md:left-[16%] md:top-[9%] rotate-[134deg]">
                <img src={iconTax} className="rotate-[-134deg]" />
              </div>
              <div className="p-5 bg-gradient-to-r from-[#7C29F1] to-[#06CFFD] w-[9vh] h-[9vh] md:w-[7vh] xl:w-[11vh] md:h-[7vh] xl:h-[11vh] absolute translate-x-[-50%] z-20 translate-y-[-50%] left-[50%] top-[35.5%] md:left-[50%] md:top-[9%] rotate-[134deg]">
                <img src={iconAccount} className="rotate-[-134deg]" />
              </div>
              <div className="p-5 bg-gradient-to-r from-[#7C29F1] to-[#06CFFD] w-[9vh] h-[9vh] md:w-[7vh] xl:w-[11vh] md:h-[7vh] xl:h-[11vh] absolute translate-x-[-50%] z-20 translate-y-[-50%] left-[50%] top-[70.9%] md:left-[84%] md:top-[9%] rotate-[134deg]">
                <img src={iconTrande} className="rotate-[-134deg]" />
              </div>
          </div>
            {/* content */}
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-[20vw] md:gap-[2vw] z-50 ">
              <div className="w-full bg-gradient-to-r from-[#7c29f1] to-[#06CFFD] md:p-2 lg:p-6 xl:p-12 shadow-xl">
              <ul className="text-center text-[#233c96] text-[20px] py-20 md:pt-14 xl:p-12">
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">Tax Solution Services </li>
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">Tax planning strategies</li>
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">Tax reports</li>
                </ul>
              </div>
              <div className="w-full bg-gradient-to-r from-[#7C29F1] to-[#06CFFD] md:p-2 lg:p-6 xl:p-12 shadow-xl">
              <ul className="text-center text-[#233c96] text-[20px] py-20 md:pt-14 xl:p-12">
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">Accounting System Services </li>
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">Financial solutions guidance</li>
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">Enhance validity in Tax Submission</li>
                </ul>
              </div>
              <div className="w-full bg-gradient-to-r from-[#7C29F1] to-[#06CFFD] md:p-2 lg:p-6 xl:p-12 shadow-xl">
              <ul className="text-center text-[#233c96] text-[20px] py-20 md:pt-14 xl:p-12 ">
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">Training and Development</li>
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">
                    Financial and accounting knowledge establishment
                  </li>
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">Legal support</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap justify-center gap-[20vw] md:gap-[2vw] absolute top-8">
              <div className="w-full bg-gray-200 md:p-2 lg:p-6 xl:p-12">
                <ul className="text-center text-[#182760] text-[20px] py-20 md:pt-14 xl:p-12">
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">Tax Solution Services </li>
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">Tax planning strategies</li>
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">Tax reports</li>
                </ul>
              </div>
              <div className="w-full bg-gray-200 md:p-2 lg:p-6 xl:p-12">
                <ul className="text-center text-[#182760] text-[20px] py-20 md:pt-14 xl:p-12">
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">Accounting System Services </li>
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">Financial solutions guidance</li>
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">Enhance validity in Tax Submission</li>
                </ul>
              </div>
              <div className="w-full bg-gray-200 md:p-2 lg:p-6 xl:p-12">
                <ul className="text-center text-[#182760] text-[20px] py-20 md:pt-14 xl:p-12 ">
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">Training and Development</li>
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">
                    Financial and accounting knowledge establishment
                  </li>
                  <li className="py-3 text-[24px] md:text-[20px] font-['inter']">Legal support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-center text-[#203686] font-['koulen'] text-[44px] pt-5 md:pt-12 xl:pt-9">
            Why Us
          </h1>

          <div className="bg-[#0469FF] clip-path-4">
            <div className="flex items-center justify-center py-[10vh] md:pt-[20vh] md:pb-12 xl:pt-[26vh] xl:pb-16">
              <div className="w-full max-w-screen md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2vw] lg:gap-[3vw]">
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50 hover:scale-[1.0] md:hover:scale-[1.1] transition-all delay-150 duration-300">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      1
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                      License: We provide professional tax services, which the
                      license is issued by regulations and ethics to meet
                      certain standards of competency.
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all delay-150 duration-300">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      2
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                      Strong tax service provider: We handle a substantial
                      client base and provide comprehensive tax services up to
                      300 clients.
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all delay-150 duration-300">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      3
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                      Affordable service: We ensure the agency’s tax services
                      are accessible to clients with quality and expertise.
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all delay-150 duration-300">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      4
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                      Free-of-charge training and accounting system: We help
                      clients improve their financial efficiency.
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all delay-150 duration-300">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      5
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                      Problem-solving Audit: We assist clients with
                      audit-related issues involved in expert guidance and
                      support during tax audits to ensure compliance.
                    </p>
                  </div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all delay-150 duration-300">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      6
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                      Qualified team: Global Consultancy comprises
                      professionals in tax law, accounting,and financial
                      management for high-quality service and client
                      satisfaction. 
                    </p>
                  </div>
                  <div className="hidden lg:block"></div>
                  <div className="flex gap-5 justify-items-start md:block px-2 text-start w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-[#001F31] hover:rounded-md hover:backdrop-blur-[30px] hover:bg-opacity-50  hover:scale-[1.0] md:hover:scale-[1.1] transition-all delay-150 duration-300">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      7
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter'] pt-3 md:pt-0">
                       Clients’ supports: We help clients prepare for
                      interactions with tax authorities, auditors or financial
                      institutions to ensure effective communication.
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
                  Our clients
                </h1>
                <p className="text-center text-[#182760] pb-0 md:pb-5">
                  We have both International clients and Local clients who use
                  our services.
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
          <div className="w-full bg-[#0469FF] md:pb-[30vh] xl:pb-[50vh] clip-path-5"></div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default HomePage;
