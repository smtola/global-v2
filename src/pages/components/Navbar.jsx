import { NavLink } from "react-router-dom";
import "./Navbar.css";
import imgLogo from "../../assets/images/Global consultancy  Logo Final.png";
const Navbar = ({home,about,services,client}) => {
  const iconMenu = <svg  xmlns="http://www.w3.org/2000/svg" className="isCLickMenu" viewBox="-5 -7 24 24" width="32" fill="#000099"><path d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"></path></svg>;
  const iconClose = <svg xmlns="http://www.w3.org/2000/svg" className="isClickClose" viewBox="-6 -6 24 24" width="32" fill="#000099"><path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></path></svg>;
  const activeLink = 'text-green-500';
  const removeActive = '';

  const scrollToSection = (elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior: "smooth",
    })
  };
  const handleClick = () => {
    document.querySelector('.menu').classList.toggle('visible');
    document.querySelector('.isCLickMenu').classList.toggle('hidden');
    document.querySelector('.isClickClose').classList.toggle('show');
  }
  const handleRemove = () => {
    document.querySelector('.menu').classList.remove('visible');
    document.querySelector('.isCLickMenu').classList.remove('hidden');
    document.querySelector('.isClickClose').classList.remove('show');
  }

  return (
    <>
      <header className="bg-[#ffffff] shadow-md z-[99999] fixed w-full">
        <div className="w-full px-5 xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto py-5 z-50">
          <div className="flex items-center justify-between z-50">
            <div className="z-20">
              <img src={imgLogo} alt="logo" width="64" />
            </div>
            <div className="z-20">
              <span className="float-end cursor-pointer" onClick={handleClick}>
                 {iconMenu}
                 {iconClose}
              </span>
            </div>
            <div className="hidden md:block">
              <ul className="flex-wrap lg:flex-nowrap gap-[2vw]">
                <li className="text-[11px] lg:text-[18px]">Global Consultancy</li>
                <li className="text-[11px] lg:text-[18px]">info@global-consultancy.biz</li>
                <li className="text-[11px] lg:text-[18px]">+855 17 966 659 / +855 69 666 499</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="menu">
         <ul className="flex justify-center flex-col items-center gap-[4vw] mt-5 text-[#000099]">
            <li className="cursor-pointer" onClick={handleRemove}>
              <NavLink to={"#home"} onClick={()=> scrollToSection(home)}>Home</NavLink></li>
            <li className="cursor-pointer " onClick={handleRemove}>
              <NavLink to={"#about-us"} onClick={()=> scrollToSection(about)}>About us</NavLink></li>
            <li className="cursor-pointer " onClick={handleRemove}>
              <NavLink to={"#services"} onClick={()=> scrollToSection(services)}>Services</NavLink></li>
            <li className="cursor-pointer " onClick={handleRemove}>
              <NavLink to={"#client"} onClick={()=> scrollToSection(client)}>{"Client's Testimonial"}</NavLink></li>
            <li>
              <NavLink className={({isActive}) => isActive ? activeLink : removeActive} to={"/blog"}>Blog</NavLink>
              </li>
            <li>
              <NavLink className={({isActive}) => isActive ? activeLink : removeActive} to={"/career"}>Career</NavLink>
              </li>
          </ul>
        </div>
        <div className="relative z-[9999] ">
          <nav className="hidden md:block bg-blue-900 w-full sm:max-w-[550px] md:max-w-screen-sm xl:max-w-screen-md mx-auto p-5 absolute translate-x-[-50%] left-[50%] -top-4">
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
