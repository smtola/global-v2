import imgLogo from "../../assets/images/Global consultancy  Logo Final.png";
const Navbar = () => {
  return (
    <>
      <header className="shadow-md z-50">
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
        <div className="relative z-50">
          <nav className="bg-blue-900 w-full max-w-screen-md mx-auto p-5 absolute translate-x-[-50%] left-[50%] -top-4">
            <div className="w-full max-w-screen-xl mx-auto ">
              <ul className="flex justify-center items-center gap-[3vw] text-white">
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>{"Client's Testimonial"}</li>
                <li>Blog</li>
                <li>Career</li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
