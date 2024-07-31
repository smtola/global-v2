import  Navbar  from "./components/Navbar";
import Footer from "./components/Footer";
import banner from "../assets/images/banner/cover.jpg";
import CareerCardd from "./components/CareerCardd";
const Career = () => {
  const content = [
    {
      img:banner,
      title: "Accounting",
      dics: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      img:banner,
      title: "Supervisor",
      dics: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      img:banner,
      title: "Management",
      dics: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ]
  return (
    <>
       <Navbar />
        <section className="container mx-auto px-10 py-24 md:py-44 transition-all duration-500">
          <div className="w-full !max-w-lg lg:!max-w-[56rem] text-[#233C96]">
            <h1 className="!text-[30px] font-['lexend'] font-bold md:!text-[54px]">Work With Us</h1>
            <p className="!text-[14px] font-['lexend'] font-medium md:!text-[23px]">
              Are you a creative mind looking for new challenges?
              Are you ready to take your skills to the next level?
              Interested to be part of our growing dynamic team?
            </p>
            <br/>
            <p className="!text-[14px] font-['lexend'] font-medium md:!text-[23px]">
              Welcome to KOUPREY Creative Solutions. We are Cambodia’s renowned brandand identity design agency with a wide range of creative services. Our team consists of young and creative talents with different areas of expertise, who are committed to deliver the desirable outcomes that truly reflect our clients’ ideas.`
            </p>
          </div>
        </section>
          <div>
            <img src={banner} alt="" />
          </div>
        <section className="container mx-auto px-10 py-24 md:py-44 transition-all duration-500">
          <div className="w-full !max-w-lg lg:!max-w-[56rem] mx-auto text-[#233C96]">
            <h1 className="!text-[30px] text-center font-['lexend'] font-bold md:!text-[54px]">Life at Global Consultancy</h1>
           
           <div className="grid grid-cols-1 md:grid-cols-2 py-7 gap-10">
              <div>
                <div></div>
                <div>
                  <h1 className="!text-[18px] font-['lexend'] font-bold md:!text-[24px]">Striving for Excellence</h1>
                  <p>Through creativity and innovation, we strive to deliver the highest quality in every work that we do. Our team enjoys taking up challenges that keep them excited every day.</p>
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <h1 className="!text-[18px] font-['lexend'] font-bold md:!text-[24px]">Culture of Learning</h1>
                  <p>We encourage our team to explore their potentials to the fullest. We offer continuous learning and opportunities that help them to get outside of their comfort zone and grow each day.</p>
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <h1 className="!text-[18px] font-['lexend'] font-bold md:!text-[24px]">Happiness at Work</h1>
                  <p>At KOUPREY, we offer a casual and comfortable working environment for our team, in which they can feel “home” in the office. Our green office space serves as a great place to de-stress (and photo shooting).</p>
                </div>
              </div>
              <div>
                <div></div>
                <div>
                  <h1 className="!text-[18px] font-['lexend'] font-bold md:!text-[24px]">Enjoy Freebies</h1>
                  <p>Come and join us for free coffee and snacks!.</p>
                </div>
              </div>
           </div>
          </div>

          <div className="py-5 w-full max-w-screen-lg mx-auto">
            <h1 className="!text-[30px] text-[#233C96] text-center font-['lexend'] font-bold md:!text-[54px]">Open Position</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2vw] py-7">
              {content.map(({img,title,dics})=>
                ( 
                  <CareerCardd img={img} title={title} dics={dics}/>
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
