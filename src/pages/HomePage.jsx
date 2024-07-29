import Navbar from "./components/Navbar";
import {useRef} from "react";
import "./HomePage.css";
import imgBanner from "../assets/images/banner/cover.jpg";
import imgFounder from "../assets/images/founder.png";
import iconVission from "../assets/images/icon/vission.png";
import iconMission from "../assets/images/icon/mission.png";
import iconTrande from "../assets/images/icon/trande.png";
import iconAccount from "../assets/images/icon/account.png";
import iconTax from "../assets/images/icon/tax.png";

const HomePage = () => {
  const home = useRef(null);
  const about_us = useRef(null);
  const services = useRef(null);
  const client = useRef(null);
  return (
    <>
      <Navbar home={home} about={about_us} services={services} client={client}/>
      <section ref={home}>
        <div className="relative">
          <img src={imgBanner} className="w-full clip-path" />
          <div className="w-full absolute left-[50%] lg:top-[60%] 2xl:top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="w-full h-[56vh] ps-[24vh]">
              <h1 className="lg:text-[120px] 2xl:text-[144px] font-['koulen'] text-[#39B6FF] font-normal lg:h-[120px] 2xl:h-[144px]">
                Global
              </h1>
              <h1 className="lg:text-[65px] 2xl:text-[77px] font-['koulen'] text-[#233C96] font-normal lg:h-[70px] 2xl:h-[100px]">
                Consultancy
              </h1>
              <p className="text-[22px] font-['inter'] text-[#233C96] font-normal">
                Your Perfect Business <br /> Consultant
              </p>
              <p className="text-[16px] font-['inter'] text-[#233C96] font-normal ">
                Thank you for your visit on our website.
                <br /> Please explore...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={about_us}>
        <div className="w-full bg-[#ffffff]">
          <div className="text-center font-['inter'] text-[#0b298a] w-full max-w-lg mx-auto">
            <h1 className="text-[30px] font-['koulen'] font-medium">
              Global Consultancy Co.,ltd
            </h1>
            <p>
              a tax agency business where specializes in providing tax solutions
              services, accounting system services, training and development to
              support clients under legal landscapes. In 2016, the business was
              registered as an entity and got license as a Tax Agent.
            </p>
            <br />
            <p>
              Mr. Sophanha Khoum, the founder of Global Consultancy, aims to
              improve tax awareness to better understand about legal landscape
              in Cambodia. Global Consultancy is located in Times Square
              Building.
            </p>
          </div>

          <div className="bg-[#0b298a] w-full lg:p-[34vh] 2xl:p-[24vh] clip-path-2">
            <div className="max-screen-lg w-full mx-auto text-[#eee]">
              <div className="flex justify-center gap-5 pb-4">
                <div>
                  <img src={iconVission} className="w-16 mt-4" />
                </div>
                <div>
                  <h1 className="text-[54px] font-['koulen'] font-medium">
                    Vision
                  </h1>
                  <p className="font-['inter']">
                    At Global Consultancy Co.,Ltd. we believe in the value of
                    relationships. We view every client relationship like a
                    partnership, and truly believe
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-5 pt-4">
                <div>
                  <img src={iconMission} className="w-16" />
                </div>
                <div>
                  <h1 className="text-[54px] font-['koulen'] font-medium mt-2">
                    Mission
                  </h1>
                  <p className="font-['inter']">
                    At Global Consultancy Co.,Ltd. we believe in the value of
                    relationships. We view every client relationship like a
                    partnership, and truly believe
                  </p>
                </div>
              </div>

              <h1 className="text-center  text-[54px] font-['koulen'] font-medium my-12 underline">
                Core Values
              </h1>
              <div className="flex justify-center gap-[4vw] max-w-screen-lg mx-auto my-5">
                <div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>.</span>
                    </div>
                    <div>
                      <h1 className="font-bold">Integrity</h1>
                      <p>
                        At Global Consultancy Co.,Ltd. we believe in the value
                        of relationships. We view every client relationship like
                        a partnership, and truly believe
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>.</span>
                    </div>
                    <div>
                      <h1 className="font-bold">Integrity</h1>
                      <p>
                        At Global Consultancy Co.,Ltd. we believe in the value
                        of relationships. We view every client relationship like
                        a partnership, and truly believe
                      </p>
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
                      <p>
                        At Global Consultancy Co.,Ltd. we believe in the value
                        of relationships. We view every client relationship like
                        a partnership, and truly believe
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>.</span>
                    </div>
                    <div>
                      <h1 className="font-bold">Integrity</h1>
                      <p>
                        At Global Consultancy Co.,Ltd. we believe in the value
                        of relationships. We view every client relationship like
                        a partnership, and truly believe
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 font-['inter'] py-3">
                    <div>
                      <span>.</span>
                    </div>
                    <div>
                      <h1 className="font-bold">Integrity</h1>
                      <p>
                        At Global Consultancy Co.,Ltd. we believe in the value
                        of relationships. We view every client relationship like
                        a partnership, and truly believe
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pb-[44vh] z-20">
            <div className="absolute bottom-0 flex items-center translate-x-[-50%] left-[35%]">
              <div>
                <img src={imgFounder} className="lg:w-[128vh] 2xl:w-[54vh]" />
              </div>
              <div className=" w-full max-w-lg text-[#0b298a]">
                <h1 className="text-[50px] font-['koulen'] text-[#233C96] font-normal h-[40px]">
                  Sophanha Khoum
                </h1>
                <h1 className="text-[50px] font-['koulen'] text-[#233C96] font-normal h-[40px]">
                  Founder | CEO
                </h1>
                <br />
                <p>
                  Mr.Khoum Sopanha achieved a Master degree of Finance from
                  National University of Management. He further held a BA from
                  institute of Foreign Languages and IT degree from Royal
                  University of Phnom Penh.
                </p>

                <details className="w-32 my-2 cursor-pointer">
                  <summary className="bg-blue-900 px-3 py-2 text-[#eee] rounded-full select-none">
                    Read More
                  </summary>
                  <p className="lg:w-[84vh] 2xl:w-[100vh] p-2 shadow-xl bg-white/30 backdrop-blur-[90px] bg-opacity-100 my-3 absolute rounded-2xl text-[#0b298a] transition delay-1000 duration-2000 z-50">
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
                    <br /> <br />
                    Warm regards,
                    <br />  Mr. Khoum Sopanha 
                    <br />  Founder, Global Consultancy
                    <br /> 
                  </p>
                </details>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 pt-24 pb-32 clip-path-3 z-10">
            <div className="flex justify-center items-center gap-[10vw]">
              <div>
                <div className="flex gap-[1vw] items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-5 -2 24 24"
                    className="border-2 p-2 rounded-full"
                    width="94"
                    fill="#ffffff"
                  >
                    <path d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419 1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2z"></path>
                  </svg>
                  <h1 className="text-center text-[#fff] font-['koulen'] text-[44px]">
                    Founder
                  </h1>
                </div>
              </div>
              <div>
                <div className="flex gap-[1vw] items-center py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="border-2 p-2 rounded-full"
                    viewBox="-5 -2 24 24"
                    width="94"
                    fill="#ffffff"
                  >
                    <path d="M3.534 10.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 15.26V17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419 1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 15.353V17a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 0a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2z"></path>
                  </svg>
                  <h1 className="text-center text-[#fff] font-['koulen'] text-[44px]">
                    Tax & Accounting (6)
                  </h1>
                </div>
                <div className="flex gap-[1vw] items-center py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-2 -1.5 24 24"
                    className="border-2 p-2 rounded-full"
                    width="94"
                    fill="#ffffff"
                  >
                    <path d="M3.534 11.07a1 1 0 1 1 .733 1.86A3.579 3.579 0 0 0 2 16.26V18a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.647a3.658 3.658 0 0 0-2.356-3.419 1 1 0 1 1 .712-1.868A5.658 5.658 0 0 1 14 16.353V18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-1.74a5.579 5.579 0 0 1 3.534-5.19zM7 1a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V5a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zm9 17a1 1 0 0 1 0-2h1a1 1 0 0 0 1-1v-1.838a3.387 3.387 0 0 0-2.316-3.213 1 1 0 1 1 .632-1.898A5.387 5.387 0 0 1 20 15.162V17a3 3 0 0 1-3 3h-1zM13 2a1 1 0 0 1 0-2 4 4 0 0 1 4 4v2a4 4 0 0 1-4 4 1 1 0 0 1 0-2 2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path>
                  </svg>
                  <h1 className="text-center text-[#fff] font-['koulen'] text-[44px]">
                    Partner (5)
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-screen-xl mx-auto my-10">
            <div className="p-5">
              <h1 className="text-center text-[#233c96] font-['koulen'] text-[44px] my-5">
                Business Registration Documents
              </h1>
              <div>
                <div className="bg-gray-200 px-24 py-80">
                  <h1>a</h1>
                </div>
                <div className="flex gap-4 ">
                  <div className="bg-gray-200 px-[19.2rem] py-96 my-5">
                    <h1>a</h1>
                  </div>
                  <div className="bg-gray-200 px-[19rem] py-96 my-5">
                    <h1>a</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={services}>
        <div className="p-5">
          <h1 className="text-center text-[#233c96] font-['koulen'] text-[44px] py-5">
            Our Services
          </h1>
          <div className="w-full max-w-screen-xl mx-auto pt-10 relative">
            <div className="p-5 bg-[#182760] w-[7vh] h-[7vh] absolute translate-x-[-50%] left-[15%] top-[-1%] rotate-[134deg] z-50">
              <img src={iconTax} className="rotate-[-134deg]" />
            </div>
            <div className="p-5 bg-[#182760] w-[7vh] h-[7vh] absolute translate-x-[-50%] left-[50%] top-[-1%] rotate-[134deg] z-50">
              <img src={iconAccount} className="rotate-[-134deg]" />
            </div>
            <div className="p-5 bg-[#182760] w-[7vh] h-[7vh] absolute translate-x-[-50%] left-[85%] top-[-1%] rotate-[134deg] z-50">
              <img src={iconTrande} className="rotate-[-134deg]" />
            </div>
            {/* background */}
            <div className="p-5 bg-gradient-to-r from-cyan-500 to-blue-500 w-[7vh] h-[7vh] absolute translate-x-[-50%] z-20 left-[15%] top-[1%] rotate-[134deg]">
              <img src={iconTax} className="rotate-[-134deg]" />
            </div>
            <div className="p-5 bg-gradient-to-r from-cyan-500 to-blue-500 w-[7vh] h-[7vh] absolute translate-x-[-50%] z-20 left-[50%] top-[1%] rotate-[134deg]">
              <img src={iconAccount} className="rotate-[-134deg]" />
            </div>
            <div className="p-5 bg-gradient-to-r from-cyan-500 to-blue-500 w-[7vh] h-[7vh] absolute translate-x-[-50%] z-20 left-[85%] top-[1%] rotate-[134deg]">
              <img src={iconTrande} className="rotate-[-134deg]" />
            </div>
            {/* content */}
            <div className="flex justify-center gap-[2vw] z-50 ">
              <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 p-5">
                <ul className="text-center text-[#233c96] text-[20px] p-16 shadow-lg">
                  <li className="py-3">Tax Solution Services </li>
                  <li className="py-3">Tax planning strategies</li>
                  <li className="py-3">Tax reports</li>
                </ul>
              </div>
              <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 p-5 shadow-lg">
                <ul className="text-center text-[#233c96] text-[20px] p-16">
                  <li className="py-3">Accounting System Services </li>
                  <li className="py-3">Financial solutions guidance</li>
                  <li className="py-3">Enhance validity in Tax Submission</li>
                </ul>
              </div>
              <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 p-5 shadow-lg">
                <ul className="text-center text-[#233c96] text-[20px] p-16 ">
                  <li className="py-3">Training and Development</li>
                  <li className="py-3">
                    Financial and accounting knowledge establishment
                  </li>
                  <li className="py-3">Legal support</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center gap-[2vw] absolute top-8">
              <div className="w-full bg-gray-200 p-5">
                <ul className="text-center text-[#233c96] text-[20px] p-16">
                  <li className="py-3">Tax Solution Services </li>
                  <li className="py-3">Tax planning strategies</li>
                  <li className="py-3">Tax reports</li>
                </ul>
              </div>
              <div className="w-full bg-gray-200 p-5">
                <ul className="text-center text-[#233c96] text-[20px] p-16">
                  <li className="py-3">Accounting System Services </li>
                  <li className="py-3">Financial solutions guidance</li>
                  <li className="py-3">Enhance validity in Tax Submission</li>
                </ul>
              </div>
              <div className="w-full bg-gray-200 p-5">
                <ul className="text-center text-[#233c96] text-[20px] p-16 ">
                  <li className="py-3">Training and Development</li>
                  <li className="py-3">
                    Financial and accounting knowledge establishment
                  </li>
                  <li className="py-3">Legal support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="full">
          <h1 className="text-center text-[#233c96] font-['koulen'] text-[44px] pt-9">
            Why Us
          </h1>

          <div className="bg-[#233c96] clip-path-4">
            <div className="flex items-center justify-center lg:pt-[26vh] lg:pb-12 2xl:pt-[16vh] 2xl:pb-16">
              <div className="w-full max-w-screen-xl mx-auto">
                <div className="grid grid-cols-3 gap-[3vw]">
                  <div className="w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-white/30 hover:rounded-md hover:backdrop-blur-[60px] hover:bg-opacity-100 hover:scale-[1.1] transition-all delay-150 duration-300">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      1
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter']">
                      License: We provide professional tax services, which the
                      license is issued by regulations and ethics to meet
                      certain standards of competency.
                    </p>
                  </div>
                  <div className="w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-white/30 hover:rounded-md hover:backdrop-blur-[60px] hover:bg-opacity-100 hover:scale-[1.1] transition-all delay-150 duration-300">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      2
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter']">
                      Strong tax service provider: We handle a substantial
                      client base and provide comprehensive tax services up to
                      300 clients.
                    </p>
                  </div>
                  <div className="w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-white/30 hover:rounded-md hover:backdrop-blur-[60px] hover:bg-opacity-100 hover:scale-[1.1] transition-all delay-150 duration-300">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      3
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter']">
                      Affordable service: We ensure the agency’s tax services
                      are accessible to clients with quality and expertise.
                    </p>
                  </div>
                  <div className="w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-white/30 hover:backdrop-blur-[60px] hover:bg-opacity-100 hover:scale-[1.1] transition-all delay-150 duration-300">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      4
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter']">
                      Free-of-charge training and accounting system: We help
                      clients improve their financial efficiency.
                    </p>
                  </div>
                  <div className="w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-white/30 hover:rounded-md hover:backdrop-blur-[60px] hover:bg-opacity-100 hover:scale-[1.1] transition-all delay-150 duration-300">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      5
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter']">
                      Problem-solving Audit: We assist clients with
                      audit-related issues involved in expert guidance and
                      support during tax audits to ensure compliance.
                    </p>
                  </div>
                  <div className="w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-white/30 hover:backdrop-blur-[60px] hover:bg-opacity-100 hover:scale-[1.1] transition-all delay-150 duration-300">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      6
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter']">
                      Qualified team: Global Consultancy comprises
                      professionals in tax law, accounting,and financial
                      management for high-quality service and client
                      satisfaction. 
                    </p>
                  </div>
                  <div className="hidden md:block"></div>
                  <div className="w-full max-w-sm mx-auto p-2 cursor-default hover:shadow-xl hover:bg-white/30 hover:rounded-md hover:backdrop-blur-[60px] hover:bg-opacity-100 hover:scale-[1.1] transition-all delay-150 duration-300">
                    <h1 className="text-[#5AF5FF] font-['koulen'] text-[50px]">
                      7
                    </h1>
                    <p className="text-[12pt] text-[#ffffff] font-['inter']">
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
        <div className="relative pt-0 lg:pt-24">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="h-full pb-[56vh] bg-[#ffffff]">
              <div>
                <h1 className="text-[45px] text-[#182760] text-center font-['koulen'] font-medium pt-12">
                  Our clients
                </h1>
                <p className="text-center text-[#182760] pb-5">
                  We have both International clients and Local clients who use
                  our services.
                </p>
              </div>
              <div className="flex justify-center gap-[4vw] my-10">
                <div className="w-24 h-24 rounded-full bg-gray-200"></div>
                <div className="w-24 h-24 rounded-full bg-gray-200 scale-110"></div>
                <div className="w-24 h-24 rounded-full bg-gray-200 scale-125"></div>
                <div className="w-24 h-24 rounded-full bg-gray-200 scale-125"></div>
                <div className="w-24 h-24 rounded-full bg-gray-200 scale-110"></div>
                <div className="w-24 h-24 rounded-full bg-gray-200"></div>
              </div>
            </div>
          </div>

          <div className="absolute translate-x-[-50%] left-[50%] translate-y-[-50%] top-[55%] z-10">
            <div className="w-full max-w-screen-xl mx-auto">
              <div className="flex justify-center gap-3 my-3">
                <div className="flex justify-center">
                  <div className="w-[30vh] overflow-hidden">
                    <img src={imgBanner} className="w-full h-full" />
                  </div>

                  <div className="w-[30vh] p-5 bg-[#182760]">
                    <h1 className="text-[#ffffff] font-['koulen'] text-[50px]">
                      tax solution <br /> services
                    </h1>
                    <p className="text-[#ffffff] font-['inter']">
                      Your Perfect Business Consultant
                    </p>
                    <p className="text-[#ffffff] font-['inter']">
                      Thank you for your visit on our website. <br />
                      Please explore...
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-[30vh] overflow-hidden">
                    <img src={imgBanner} className="w-full h-full" />
                  </div>
                  <div className="w-[30vh] p-5 bg-[#CCD8E8]">
                    <h1 className="text-[#182760] font-['koulen'] text-[50px]">
                      tax planning strategies
                    </h1>
                    <p className="text-[#182760] font-['inter']">
                      Your Perfect Business Consultant
                    </p>
                    <p className="text-[#182760] font-['inter']">
                      Thank you for your visit on our website. <br />
                      Please explore...
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-3 my-3">
                <div className="flex justify-center">
                  <div className="w-[30vh] p-5 bg-[#CCD8E8]">
                    <h1 className="text-[#182760] font-['koulen'] text-[50px]">
                      tax report
                    </h1>
                    <p className="text-[#182760] font-['inter']">
                      Your Perfect Business Consultant
                    </p>
                    <p className="text-[#182760] font-['inter']">
                      Thank you for your visit on our website. <br />
                      Please explore...
                    </p>
                  </div>
                  <div className="w-[30vh] overflow-hidden">
                    <img src={imgBanner} className="w-full h-full" />
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-[30vh] p-5 bg-[#182760]">
                    <h1 className="text-[#ffffff] font-['koulen'] text-[50px]">
                      accounting system
                    </h1>
                    <p className="text-[#ffffff] font-['inter']">
                      Your Perfect Business Consultant
                    </p>
                    <p className="text-[#ffffff] font-['inter']">
                      Thank you for your visit on our website. <br />
                      Please explore...
                    </p>
                  </div>
                  <div className="w-[30vh] overflow-hidden">
                    <img src={imgBanner} className="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#0469FF] pb-[50vh] clip-path-5"></div>
        </div>
      </section>

      <footer>
        <div className="w-full max-w-screen-xl mx-auto py-5">
          <div>
            <h1 className="text-[30px] text-[#182760] font-['koulen'] my-2">
              Contact Us
            </h1>
            <div>
              <ul className="text-[#182760]">
                <li className="flex gap-2 my-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-5 -1.5 24 24"
                      width="28"
                      fill="currentColor"
                    >
                      <path d="M7 20.565c-4.667-6.09-7-10.423-7-13a7 7 0 1 1 14 0c0 2.577-2.333 6.91-7 13zm0-9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                    </svg>
                  </span>
                  <span>
                    KT Tower (9th Floor, Room 906), St. 112, Psar Depo III, Toul
                    Kork, Phnom Penh, Cambodia.
                  </span>
                </li>
                <li className="flex gap-2 my-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-2 -2 24 24"
                      width="28"
                      fill="currentColor"
                    >
                      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path>
                      <path d="M13.644 9.404c.012-1.492-1.219-2.86-2.744-3.049L10.8 6.34a1.384 1.384 0 0 0-.232-.026c-.313 0-.396.226-.418.361a.43.43 0 0 0 .06.329c.104.145.286.17.432.192.043.006.084.011.117.02 1.371.315 1.833.812 2.058 2.215.006.035.008.077.01.122.01.167.031.516.395.516.03 0 .062-.002.096-.008.339-.053.328-.372.323-.525-.002-.043-.003-.084 0-.111a.154.154 0 0 0 .002-.02z"></path>
                      <path d="M10.48 5.807c.04.003.08.006.111.011 2.25.358 3.286 1.458 3.573 3.8.005.04.005.088.006.14.003.183.009.563.405.571h.012a.382.382 0 0 0 .294-.115c.123-.133.115-.33.108-.49-.002-.038-.004-.075-.003-.107.028-2.395-1.98-4.567-4.298-4.647l-.028.001a.188.188 0 0 1-.027.002c-.023 0-.052-.002-.082-.004-.036-.003-.078-.006-.12-.006-.369 0-.439.27-.448.432-.02.373.329.4.497.412zM14.055 12.644a7.197 7.197 0 0 1-.143-.115c-.246-.204-.508-.392-.76-.574a57.337 57.337 0 0 1-.158-.114c-.324-.234-.615-.349-.89-.349-.37 0-.693.212-.96.629-.118.184-.262.274-.438.274a.848.848 0 0 1-.353-.091c-1.045-.49-1.792-1.24-2.219-2.23-.206-.48-.14-.792.224-1.047.206-.144.59-.413.563-.928-.03-.585-1.281-2.345-1.808-2.545a.996.996 0 0 0-.698-.002c-.605.21-1.04.58-1.257 1.067-.21.472-.2 1.025.028 1.601.657 1.666 1.58 3.118 2.746 4.316 1.14 1.173 2.542 2.133 4.166 2.855.146.065.3.1.412.126l.095.024a.155.155 0 0 0 .04.006h.013c.764 0 1.681-.72 1.963-1.542.247-.72-.204-1.075-.566-1.36zM10.818 7.71c-.13.003-.403.01-.499.296-.044.134-.039.25.016.345.081.14.237.183.378.206.512.085.776.378.828.92.025.254.19.43.402.43a.383.383 0 0 0 .048-.002c.255-.032.378-.225.367-.575.004-.366-.181-.78-.496-1.11-.316-.332-.697-.519-1.044-.51z"></path>
                    </svg>
                  </span>
                  <span>069 69 666 499 / 012 921608</span>
                </li>
                <li className="flex gap-2 my-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-2 -2 24 24"
                      width="28"
                      fill="currentColor"
                    >
                      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path>
                      <path d="M10 18c.448 0 1.119-.568 1.747-1.823C12.532 14.607 13 12.392 13 10c0-2.392-.468-4.607-1.253-6.177C11.119 2.568 10.447 2 10 2c-.448 0-1.119.568-1.747 1.823C7.468 5.393 7 7.608 7 10c0 2.392.468 4.607 1.253 6.177C8.881 17.432 9.553 18 10 18zm0 2c-2.761 0-5-4.477-5-10S7.239 0 10 0s5 4.477 5 10-2.239 10-5 10z"></path>
                      <path d="M2 12h16v2H2v-2zm0-6h16v2H2V6z"></path>
                    </svg>
                  </span>
                  <span>www.global-consultant.biz</span>
                </li>
                <li className="flex gap-2 my-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-2 -5 24 24"
                      width="28"
                      fill="currentColor"
                    >
                      <path d="M3.598 2l5.747 5.12a1 1 0 0 0 1.33 0L16.423 2H3.598zM18 3.273l-5.994 5.341a3 3 0 0 1-3.992 0L2 3.254V12h16V3.273zM2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></path>
                    </svg>
                  </span>
                  <span>
                    info@global-consultancy.biz sopanha@global-consultancy.biz
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#182760] p-5">
          <h1 className="text-[#eee] text-center text-[20px] font-['inter']">
            Copyright @ {new Date().getFullYear()}, <b>Global Consultancy</b>
          </h1>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
