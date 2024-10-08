import { NavLink } from "react-router-dom";
import "./Navbar.css";
import imgLogo from "../../assets/images/logo.png";
import DropdownLang from "./dropdown/DropdownLang";
import { useTranslation } from 'react-i18next';
const Navbar = ({translations}) => {
  const iconMenu = <svg  xmlns="http://www.w3.org/2000/svg" className="isCLickMenu" viewBox="-5 -7 24 24" width="32" fill="#314bb2"><path d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"></path></svg>;
  const iconClose = <svg xmlns="http://www.w3.org/2000/svg" className="isClickClose" viewBox="-6 -6 24 24" width="32" fill="#314bb2"><path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></path></svg>;
  const {t} =  useTranslation();
  
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
      <header className="bg-[#ffffff] font-['inter'] font-medium shadow-md z-[99999] fixed w-full">
        <div className="w-full px-5 2xl:px-0 max-w-screen-xl mx-auto py-5 z-50">
          <div className="flex items-center justify-between z-50">
            <div className="z-20">
              <img src={imgLogo} alt="logo" className="w-[16rem] lg:w-[20rem]" />
            </div>
            <div className="z-20 md:hidden flex flex-nowrap gap-2">
              <DropdownLang  className="pt-4"/>
              <span className="float-end cursor-pointer" onClick={handleClick}>
                 {iconMenu}
                 {iconClose}
              </span>
            </div>
            <div className="hidden md:block">
              <ul className="flex flex-wrap lg:flex-nowrap gap-[2vw] text-[#182760]">
                <li className="text-[11px] lg:text-[18px]">info@global-consultancy.biz</li>
                <li className="text-[11px] lg:text-[18px]">+855 17 966 659 / +855 69 666 499</li>
                <li className="text-[11px] lg:text-[18px] hidden md:block">
                   <DropdownLang />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="menu md:hidden block">
         <ul className="flex justify-center flex-col items-center gap-[4vw] mt-5 text-[#0469FF]">
            <li className="cursor-pointer text-[22px]" onClick={handleRemove}>
              <NavLink to={"/#home"}>{translations['home'] || 'Home'}</NavLink></li>
            <li className="cursor-pointer text-[22px] " onClick={handleRemove}>
              <NavLink to={"/#about_us"}>{translations['about_us'] || 'About Us'}</NavLink></li>
            <li className="cursor-pointer text-[22px] " onClick={handleRemove}>
              <NavLink to={"/#services"}>{translations['services'] || 'Services'}</NavLink></li>
            <li className="cursor-pointer text-[22px] " onClick={handleRemove}>
              <NavLink to={"/client-testimonial"}>{translations['client'] || "Client's Testimonial"}</NavLink></li>
            <li onClick={handleRemove}>
              <NavLink className="text-[22px]" to={"/blog"}>{translations['blog'] || "Blog"}</NavLink>
              </li>
            <li onClick={handleRemove}>
              <NavLink className="text-[22px]" to={"/career"}>{translations['career'] || "Career"}</NavLink>
            </li>
          </ul>
        </div>
        <div className="relative z-[9999] ">
          <nav className="hidden md:block bg-[#314bb2] w-full max-w-screen-xl mx-auto p-5 absolute translate-x-[-50%] left-[50%] -top-4">
            <div className="w-full max-w-screen-xl mx-auto ">
              <ul className="flex justify-center items-center gap-[3vw] text-[#eee]">
                <li className="cursor-pointer font- hover:font-bold active:font-bold">
                  <NavLink to="/#home">{translations['home'] || 'Home'}</NavLink></li>
                <li className="cursor-pointer font-normal hover:font-bold active:font-bold">
                  <NavLink to="/#about-us">{translations['about_us'] || 'About Us'}</NavLink></li>
                <li className="cursor-pointer font-normal hover:font-bold active:font-bold">
                  <NavLink to="/#services">{translations['services'] || 'Services'}</NavLink></li>
                <li className="cursor-pointer font-normal hover:font-bold active:font-bold">
                  <NavLink to={"/client-testimonial"}>{translations['client'] || "Client's Testimonial"}</NavLink></li>
                <li>
                  <NavLink className="font-normal hover:font-bold active:font-bold" to="/blog">{translations['blog'] || "Blog"}</NavLink>
                  </li>
                <li>
                  <NavLink className="font-normal hover:font-bold active:font-bold" to="/career">{translations['career'] || "Career"}</NavLink>
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
