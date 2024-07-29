import { NavLink } from "react-router-dom";
import imgLogo from "../../assets/images/Global consultancy  Logo Final.png";
const Navbar = ({home,about,services,client}) => {
  const activeLink = 'text-green-500';
  const removeActive = '';

  const scrollToSection = (elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior: "smooth",
    })
  };
  return (
    <>
      <header className="bg-[#ffffff] shadow-md z-[99999] fixed w-full">
        <div className="w-full max-w-screen-md xl:max-w-screen-xl mx-auto py-5 z-50">
          <div className="flex items-center justify-between z-50">
            <div>
              <img src={imgLogo} alt="logo" width="64" />
            </div>
            <div>
              <ul className="flex gap-[2vw]">
                <li>Global Consultancy</li>
                <li>info@global-consultancy.biz</li>
                <li>+855 17 966 659 / +855 69 666 499</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative z-50 ">
          <nav className="bg-blue-900 w-full max-w-screen-md mx-auto p-5 absolute translate-x-[-50%] left-[50%] -top-4">
            <div className="w-full max-w-screen-xl mx-auto ">
              <ul className="flex justify-center items-center gap-[3vw] text-white">
                <li className="cursor-pointer">
                  <NavLink to={"#home"} onClick={()=> scrollToSection(home)}>Home</NavLink></li>
                <li className="cursor-pointer ">
                  <NavLink to={"#about-us"} onClick={()=> scrollToSection(about)}>About us</NavLink></li>
                <li className="cursor-pointer ">
                  <NavLink to={"#services"} onClick={()=> scrollToSection(services)}>Services</NavLink></li>
                <li className="cursor-pointer ">
                  <NavLink to={"#client"} onClick={()=> scrollToSection(client)}>{"Client's Testimonial"}</NavLink></li>
                <li>
                  <NavLink className={({isActive}) => isActive ? activeLink : removeActive} to={"/blog"}>Blog</NavLink>
                  </li>
                <li>
                  <NavLink className={({isActive}) => isActive ? activeLink : removeActive} to={"/career"}>Career</NavLink>
                  </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
