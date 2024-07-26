import Navbar from "./components/Navbar";
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
          <img src={imgBanner} className="w-full" />
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
          <div className="w-full absolute left-[50%] top-[114%] translate-x-[-50%] translate-y-[-50%]">
            <div className="bg-white h-[54vh] clip-path flex justify-center z-20">
              <div className="w-full max-w-md text-center py-16">
                <h1 className="text-[24px] font-['koulen'] text-[#050076] font-normal">
                  Global Consultancy Co.,LTD.
                </h1>
                <p className="font-['inter'] text-[#050076] font-normal">
                  is a tax agency business where specializes in providing tax
                  solutions services, accounting system services, training and
                  development to support clients under legal landscapes. In
                  2016, the business was registered as an entity and got license
                  as a Tax Agent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-600 h-full">
          <div className="flex gap-10">
            <div className="z-30 w-full max-w-xl">
              <img src={imgFounder} alt="" className="w-full" />
            </div>
            <div className="z-30 pt-[36vh]">
              <h1 className="text-[50px] font-['lexend'] text-[#ffffff] h-[8vh]">
                Sophanha Khoum
              </h1>
              <h1 className="text-[50px] font-['lexend'] text-[#ffffff]">
                Founder | CEO
              </h1>
              <p className="text-[20px] font-['inter'] max-w-md text-[#ffffff]">
                Mr. Sophanha Khoum, the founder of Global Consultancy, aims to
                improve tax awareness to better understand about legal landscape
                in Cambodia. Global Consultancy is located in Times Square
                Building.
              </p>

              <button className="bg-blue-400 px-3 py-2 my-2 rounded-full text-[16px] font-['inter'] text-[#233C96] font-bold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#ffffff] h-full">
          <div className="relative">
            <div className="w-full max-w-screen-md mx-auto">
              <div className="flex gap-[3vh] my-12">
                <div>
                  <img
                    src={iconVission}
                    alt="vission"
                    className="w-[72px] mt-2"
                  />
                </div>
                <div>
                  <h1 className="text-[40px] text-[#203686] font-['koulen'] font-medium">
                    vision
                  </h1>
                  <p className="text-[16px] text-[#203686] font-[inter]">
                    At Global Consultancy Co., Ltd. we believe in the value of
                    relationships. We view every client relationship like a
                    partnership, and truly believe.
                  </p>
                </div>
              </div>
              <div className="flex gap-[3vh] my-12">
                <div>
                  <img
                    src={iconMission}
                    alt="Mission"
                    className="w-[26vh] mt-2"
                  />
                </div>
                <div>
                  <h1 className="text-[40px] text-[#203686] font-['koulen'] font-medium">
                    Mission
                  </h1>
                  <p className="text-[16px] text-[#203686] font-[inter]">
                    At Global Consultancy Co., Ltd. we believe in the value of
                    relationships. We view every client relationship like a
                    partnership, and truly believe that our success is a result
                    of your success. We are committed to providing close,
                    personal attention to our clients. We take pride in giving
                    you the assurance that the personal assistance you receive
                    comes from years of advanced training, technical experience
                    and financial acumen.
                  </p>
                </div>
              </div>

              <h1 className="text-center text-[#162252] text-[48pt] font-['koulen'] font-medium pb-20">
                Our services
              </h1>
            </div>
            <div className="relative w-full">
              <div className="w-full max-w-screen-xl mx-auto">
                <div className="w-full max-w-2xl absolute bg-green-700 left-[50%] translate-x-[-50%] top-[-5vh] z-50">
                  <div className="flex gap-4 z-10 absolute top-2">
                    <div className="bg-[#182760] z-10 p-4 absolute translate-x-[-50%] left-[50%] -top-9 rotate-[135deg]">
                      <img
                        src={iconAccount}
                        alt=""
                        width="34"
                        className="rotate-[-135deg]"
                      />
                    </div>
                    <div className="bg-[#182760] z-10 p-4 absolute translate-x-[-50%] left-[16%] -top-9 rotate-[135deg]">
                      <img
                        src={iconTax}
                        alt=""
                        width="34"
                        className="rotate-[-135deg]"
                      />
                    </div>
                    <div className="bg-[#182760] z-10 p-4 absolute translate-x-[-50%] left-[83%] -top-9 rotate-[135deg]">
                      <img
                        src={iconTrande}
                        alt=""
                        width="34"
                        className="rotate-[-135deg]"
                      />
                    </div>

                    <div className="bg-[#5bff29] p-4 absolute translate-x-[-50%] left-[50%] -top-7 rotate-[135deg]">
                      <img
                        src={iconAccount}
                        alt=""
                        width="34"
                        className="rotate-[-135deg]"
                      />
                    </div>
                    <div className="bg-[#5bff29] p-4 absolute translate-x-[-50%] left-[16%] -top-7 rotate-[135deg]">
                      <img
                        src={iconTax}
                        alt=""
                        width="34"
                        className="rotate-[-135deg]"
                      />
                    </div>
                    <div className="bg-[#5bff29] p-4 absolute translate-x-[-50%] left-[83%] -top-7 rotate-[135deg]">
                      <img
                        src={iconTrande}
                        alt=""
                        width="34"
                        className="rotate-[-135deg]"
                      />
                    </div>
                    {/* content */}
                    <div className="w-full max-w-xs bg-[#182760] p-2 pt-12">
                      <ul className="text-center">
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Tax Solution Services
                        </li>
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Tax planning strategies
                        </li>
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Tax reports
                        </li>
                      </ul>
                    </div>

                    <div className="w-full max-w-xs bg-[#182760] p-2 pt-12">
                      <ul className="text-center">
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Accounting System Services
                        </li>
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Financial solutions guidance
                        </li>
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Enhance validity in Tax Submission
                        </li>
                      </ul>
                    </div>

                    <div className="w-full max-w-xs bg-[#182760] p-2 pt-12">
                      <ul className="text-center">
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Training and Development
                        </li>
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Financial and accounting knowledge establishment
                        </li>
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Legal support
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 absolute z-20">
                    <div className="bg-[#182760] z-10 p-4 absolute translate-x-[-50%] left-[50%] -top-9 rotate-[135deg]">
                      <img
                        src={iconAccount}
                        alt=""
                        width="34"
                        className="rotate-[-135deg]"
                      />
                    </div>
                    <div className="bg-[#182760] z-10 p-4 absolute translate-x-[-50%] left-[16%] -top-9 rotate-[135deg]">
                      <img
                        src={iconTax}
                        alt=""
                        width="34"
                        className="rotate-[-135deg]"
                      />
                    </div>
                    <div className="bg-[#182760] z-10 p-4 absolute translate-x-[-50%] left-[83%] -top-9 rotate-[135deg]">
                      <img
                        src={iconTrande}
                        alt=""
                        width="34"
                        className="rotate-[-135deg]"
                      />
                    </div>

                    <div className="bg-[#5bff29] p-4 absolute translate-x-[-50%] left-[50%] -top-7 rotate-[135deg]">
                      <img
                        src={iconAccount}
                        alt=""
                        width="34"
                        className="rotate-[-135deg]"
                      />
                    </div>
                    <div className="bg-[#5bff29] p-4 absolute translate-x-[-50%] left-[16%] -top-7 rotate-[135deg]">
                      <img
                        src={iconTax}
                        alt=""
                        width="34"
                        className="rotate-[-135deg]"
                      />
                    </div>
                    <div className="bg-[#5bff29] p-4 absolute translate-x-[-50%] left-[83%] -top-7 rotate-[135deg]">
                      <img
                        src={iconTrande}
                        alt=""
                        width="34"
                        className="rotate-[-135deg]"
                      />
                    </div>
                    {/* content */}
                    <div className="w-full max-w-xs bg-slate-100 p-2 pt-12">
                      <ul className="text-center">
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Tax Solution Services
                        </li>
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Tax planning strategies
                        </li>
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Tax reports
                        </li>
                      </ul>
                    </div>

                    <div className="w-full max-w-xs bg-slate-100 p-2 pt-12">
                      <ul className="text-center">
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Accounting System Services
                        </li>
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Financial solutions guidance
                        </li>
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Enhance validity in Tax Submission
                        </li>
                      </ul>
                    </div>

                    <div className="w-full max-w-xs bg-slate-100 p-2 pt-12">
                      <ul className="text-center">
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Training and Development
                        </li>
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Financial and accounting knowledge establishment
                        </li>
                        <li className="text-[#182760] font-['inter'] font-medium p-2">
                          Legal support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-full  bg-[#0469FF]">
              <div className="w-full max-w-md mx-auto pt-[38vh]">
                <p className="text-center text-[#eee] font-['inter']">
                  At Global Consultancy, we provide tax solution services,
                  accounting system services, training and development.
                </p>
              </div>
              <div className="relative w-full">
                <div className="w-full absolute left-[50%] translate-x-[-50%] top-[5vh] z-20">
                  <div className="w-full max-screen-md mx-auto">
                    <div className="flex justify-center gap-2">
                      <div>
                        <div className="flex justify-center mb-2">
                          <div>
                            <img
                              src={imgBanner}
                              alt=""
                              className="w-64 h-64 object-cover"
                            />
                          </div>
                          <div className="bg-[#0469FF] p-9 w-64 h-64">
                            <h1 className="text-[25px] text-[#eee] font-['koulen']">
                              tax solution services
                            </h1>
                            <p className="text-[14px] text-[#eee] font-['inter']">
                              Your Perfect Business Consultant
                            </p>
                            <p className="text-[14px] text-[#eee] font-['inter']">
                              Thank you for your visit on our website. Please
                              explore...
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div className="bg-[#CCD8E8] p-9 w-64 h-64">
                            <h1 className="text-[25px] text-[#162252] font-['koulen']">
                              tax report
                            </h1>
                            <p className="text-[14px] text-[#162252] font-['inter']">
                              Your Perfect Business Consultant
                            </p>
                            <p className="text-[14px] text-[#162252] font-['inter']">
                              Thank you for your visit on our website. Please
                              explore...
                            </p>
                          </div>
                          <div>
                            <img
                              src={imgBanner}
                              alt=""
                              className="w-64 h-64 object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-center mb-2">
                          <div>
                            <img
                              src={imgBanner}
                              alt=""
                              className="w-64 h-64 object-cover"
                            />
                          </div>
                          <div className="bg-[#CCD8E8] p-9 w-64 h-64">
                            <h1 className="text-[25px] text-[#162252] font-['koulen']">
                              tax planning strategies
                            </h1>
                            <p className="text-[14px] text-[#162252] font-['inter']">
                              Your Perfect Business Consultant
                            </p>
                            <p className="text-[14px] text-[#162252] font-['inter']">
                              Thank you for your visit on our website. Please
                              explore...
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div className="bg-[#0469FF] p-9 w-64 h-64">
                            {" "}
                            <h1 className="text-[25px] text-[#eee] font-['koulen']">
                              accounting system
                            </h1>
                            <p className="text-[14px] text-[#eee] font-['inter']">
                              Your Perfect Business Consultant
                            </p>
                            <p className="text-[14px] text-[#eee] font-['inter']">
                              Thank you for your visit on our website. Please
                              explore...
                            </p>
                          </div>
                          <div>
                            <img
                              src={imgBanner}
                              alt=""
                              className="w-64 h-64 object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#ffffff] w-full h-full clip-path-2 mt-24">
                <h1 className="text-[40px] text-center font-medium font-['koulen'] pt-[66vh] pb-[12vh] text-[#162252]">
                  why us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage
