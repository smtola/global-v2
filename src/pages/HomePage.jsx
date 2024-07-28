import Navbar from "./components/Navbar";
import { useState } from 'react';
import "./HomePage.css";
import imgBanner from "../assets/images/banner/cover.jpg";
import imgFounder from "../assets/images/founder.png";
import iconVission from "../assets/images/icon/vission.png";
import iconMission from "../assets/images/icon/mission.png";
import iconTrande from "../assets/images/icon/trande.png";
import iconAccount from "../assets/images/icon/account.png";
import iconTax from "../assets/images/icon/tax.png";
        
const HomePage = () => {



  return (
    <>
      <Navbar />
      <section>
        <div className="relative">
          <img src={imgBanner} className="w-full clip-path" />
          <div className="w-full absolute left-[50%] top-[40%] translate-x-[-50%] translate-y-[-50%]">
            <div className="w-full h-[56vh] ps-[24vh]">
              <h1 className="text-[144px] font-['koulen'] text-[#39B6FF] font-normal h-[144px]">
                Global
              </h1>
              <h1 className="text-[77px] font-['koulen'] text-[#233C96] font-normal h-[100px]">
                Consultancy
              </h1>
              <p className="text-[22px] font-['inter'] text-[#233C96] font-normal">
                Your Perfect Business <br /> Consultant
              </p>
              <p className="text-[16px] font-['inter'] text-[#233C96] font-normal ">
                Thank you for your visit on our website.
                <br /> Please explore...
              </p>
              <button className="bg-blue-400 px-3 py-2 my-2 rounded-full text-[16px] font-['inter'] text-[#233C96] font-bold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
          <div className="w-full bg-[#ffffff]">
              <div className="text-center font-['inter'] text-[#0b298a] w-full max-w-lg mx-auto">
                <h1 className="text-[30px] font-['koulen'] font-medium">
                  Global Consultancy Co.,ltd
                </h1>
                <p>
                  a tax agency business where specializes in providing tax solutions services, accounting system services, training and development to support clients under legal landscapes. In 2016, 
                  the business was registered as an entity and got license as a Tax Agent.
                </p>
                <br/>
                <p>
                  Mr. Sophanha Khoum, the founder of Global Consultancy, aims to improve tax awareness to better understand about legal landscape in Cambodia. Global Consultancy is located in Times Square Building.
                </p>
              </div>

              <div className="bg-[#0b298a] w-full p-[24vh] clip-path-2">
                  <div className="max-screen-lg w-full mx-auto text-[#eee]">
                      <div className="flex justify-center gap-5 pb-4">
                        <div>
                          <img src={iconVission} className="w-16 mt-4" />
                        </div>
                        <div>
                          <h1 className="text-[54px] font-['koulen'] font-medium">Vision</h1>
                          <p className="font-['inter']">At Global Consultancy Co.,Ltd. we believe in the value of relationships. We view every client relationship like a partnership, and truly believe</p>
                        </div>
                      </div>
                      <div className="flex justify-center gap-5 pt-4">
                        <div>
                          <img src={iconMission} className="w-16" />
                        </div>
                        <div>
                          <h1 className="text-[54px] font-['koulen'] font-medium mt-2">Mission</h1>
                          <p className="font-['inter']">At Global Consultancy Co.,Ltd. we believe in the value of relationships. We view every client relationship like a partnership, and truly believe</p>
                        </div>
                      </div>

                      <h1 className="text-center  text-[54px] font-['koulen'] font-medium my-12 underline">Core Values</h1>
                      <div className="flex justify-center gap-[4vw] max-w-screen-lg mx-auto my-5">
                          <div>
                            <div className="flex justify-center gap-2 font-['inter'] py-3">
                              <div>
                                <span>.</span>
                              </div>
                              <div>
                                <h1 className="font-bold">Integrity</h1>
                                <p>At Global Consultancy Co.,Ltd. we believe in the value of relationships. We view every client relationship like a partnership, and truly believe</p>
                              </div>
                            </div>  
                            <div className="flex justify-center gap-2 font-['inter'] py-3">
                              <div>
                                <span>.</span>
                              </div>
                              <div>
                                <h1 className="font-bold">Integrity</h1>
                                <p>At Global Consultancy Co.,Ltd. we believe in the value of relationships. We view every client relationship like a partnership, and truly believe</p>
                              </div>
                            </div>  
                          </div>

                          <div>
                            <div className="flex justify-center gap-2 font-['inter'] py-3">
                              <div>
                              <span>.</span>
                              </div>
                              <div>
                                <h1 className="font-bold">Integrity</h1>
                                <p>At Global Consultancy Co.,Ltd. we believe in the value of relationships. We view every client relationship like a partnership, and truly believe</p>
                              </div>
                            </div>  
                            <div className="flex justify-center gap-2 font-['inter'] py-3">
                              <div>
                              <span>.</span>
                              </div>
                              <div>
                                <h1 className="font-bold">Integrity</h1>
                                <p>At Global Consultancy Co.,Ltd. we believe in the value of relationships. We view every client relationship like a partnership, and truly believe</p>
                              </div>
                            </div>  
                            <div className="flex justify-center gap-2 font-['inter'] py-3">
                              <div>
                              <span>.</span>
                              </div>
                              <div>
                                <h1 className="font-bold">Integrity</h1>
                                <p>At Global Consultancy Co.,Ltd. we believe in the value of relationships. We view every client relationship like a partnership, and truly believe</p>
                              </div>
                            </div>  
                          </div>
                      </div>
                  </div>
              </div>

              <div className="relative pb-[44vh]">
                  <div className="absolute bottom-0 flex items-center translate-x-[-50%] left-[35%]">
                    <div >
                      <img src={imgFounder} className="w-[54vh]" />
                    </div>
                    <div className=" w-full max-w-lg text-[#0b298a]">
                      <h1  className="text-[50px] font-['koulen'] text-[#233C96] font-normal h-[40px]">Sophanha Khoum</h1>
                      <h1  className="text-[50px] font-['koulen'] text-[#233C96] font-normal h-[40px]">Founder | CEO</h1>
                      <br />
                      <p>
                        Mr.Khoum Sopanha achieved a Master degree of Finance from National 
                        University of Management. He further held a BA from institute of Foreign 
                        Languages and IT degree from Royal University of Phnom Penh.
                      </p>

                      <details className="w-32 my-2 cursor-pointer">
                        <summary className="bg-blue-900 px-3 py-2 text-[#eee] rounded-full select-none">Read More</summary>
                        <p className="w-[100vh] p-2 shadow-xl bg-white/30 backdrop-blur-[90px] bg-opacity-100 my-3 absolute rounded-2xl text-[#0b298a] transition delay-1000 duration-2000 z-50">
                        Dear valued clients and partners, 
                        <br />
                        <br />

                        As the CEO of Global Consultancy, I would like to express my deepest gratitude for your continued trust and support. We are able to thrive and excel in providing the best tax solution services, accounting system services, training and development. <br /><br />

                        In this dynamic era, we understand the importance of staying informed and prepared. We have always offered reliable tax solutions to meet our clients’ needs. We dedicate to staying ahead of the legal landscape, ensuring we deliver accurate and effective tax solutions and consultancy. <br /><br />

                        We are committed to providing tax solutions and affordable services to our clients. To leverage legal industry, we contribute to problem-solving for the related documents’ audit to ensure an exceptional consultancy service. With our qualified team, we provide training to our partners and accounting system for free-of-charge. <br /> <br />

                        I am proud of the achievements we have established. We expand our services, enhance client satisfaction and implement new strategies to serve our clients the best possible service. 
                        <br /> <br />
                        Warm regards,<br /> 
                        Mr. Khoum Sopanha <br /> 
                        Founder, Global Consultancy<br /> 
                        </p>
                      </details>
                    </div>
                  </div>
              </div>
              <div className="bg-blue-600 p-24">

              </div>
          </div>
      </section>
    </>
  );
}

export default HomePage
