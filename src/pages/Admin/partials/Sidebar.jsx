import  React ,{ useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { supabase } from "../../../config/db";
const Sidebar = ({
    sidebarOpen,
    setSidebarOpen,
  }) => {
    const location = useLocation();
    const { pathname } = location;
    const token = sessionStorage.getItem('tokens');
    const role = JSON.parse(token)?.user?.app_metadata?.role;
    const trigger = useRef(null);
    const sidebar = useRef(null);
    const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
    const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === "true");
    
    // close on click outside
    useEffect(() => {
      const clickHandler = ({ target }) => {
        if (!sidebar.current || !trigger.current) return;
        if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
        setSidebarOpen(false);
      };
      document.addEventListener("click", clickHandler);
      return () => document.removeEventListener("click", clickHandler);
    });
  
    // close if the esc key is pressed
    useEffect(() => {
      const keyHandler = ({ keyCode }) => {
        if (!sidebarOpen || keyCode !== 27) return;
        setSidebarOpen(false);
      };
      document.addEventListener("keydown", keyHandler);
      return () => document.removeEventListener("keydown", keyHandler);
    });
  
    useEffect(() => {
      localStorage.setItem("sidebar-expanded", sidebarExpanded);
      if (sidebarExpanded) {
        document.querySelector("body").classList.add("sidebar-expanded");
      } else {
        document.querySelector("body").classList.remove("sidebar-expanded");
      }
    }, [sidebarExpanded]);
  return (
    <div className="min-w-fit">
    {/* Sidebar backdrop (mobile only) */}
    <div
      className={`fixed inset-0 bg-[#ffffff] bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
        sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden="true"
    ></div>

    {/* Sidebar */}
    <div
      id="sidebar"
      ref={sidebar}
      className={`shadow-lg flex lg:!flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-gray-200 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}`}
    >
      {/* Sidebar header */}
      <div className="flex justify-between mb-10 pr-3 sm:px-2">
        {/* Close button */}
        <button
          ref={trigger}
          className="lg:hidden text-gray-500 hover:text-gray-400"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
        >
          <span className="sr-only">Close sidebar</span>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
        {/* Logo */}
        <NavLink end to="/dashboard" className="block">
          <img src="/logo.png" width="100" />
        </NavLink>
      </div>

      {/* Links */}
      <div className="space-y-8">
        {/* Pages group */}
        <div>
          <h3 className="text-xs uppercase text-[#000099] font-semibold pl-3">
            <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
              •••
            </span>
            <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
          </h3>
          <ul className="mt-3">
           {/* blog */}
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("blog") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                end
                to="/dashboard"
                className={`block text-[#000099] truncate transition duration-150 ${
                  pathname.includes("inbox") ? "" : "hover:text-[#000099]"
                }`}
              >
                <div className="flex items-center">
                  <svg className={`shrink-0 fill-current ${pathname.includes('dashboard') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M11.92 6.851c.044-.027.09-.05.137-.07.481-.275.758-.68.908-1.256.126-.55.169-.81.357-2.058.075-.498.144-.91.217-1.264-4.122.75-7.087 2.984-9.12 6.284a18.087 18.087 0 0 0-1.985 4.585 17.07 17.07 0 0 0-.354 1.506c-.05.265-.076.448-.086.535a1 1 0 0 1-1.988-.226c.056-.49.209-1.312.502-2.357a20.063 20.063 0 0 1 2.208-5.09C5.31 3.226 9.306.494 14.913.004a1 1 0 0 1 .954 1.494c-.237.414-.375.993-.567 2.267-.197 1.306-.244 1.586-.392 2.235-.285 1.094-.789 1.853-1.552 2.363-.748 3.816-3.976 5.06-8.515 4.326a1 1 0 0 1 .318-1.974c2.954.477 4.918.025 5.808-1.556-.628.085-1.335.121-2.127.121a1 1 0 1 1 0-2c1.458 0 2.434-.116 3.08-.429Z" />
                  </svg>
                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Blog</span>
                </div>
              </NavLink>
            </li>
            {/* career */}
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("career") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                end
                to="career"
                className={`block text-[#000099] truncate transition duration-150 ${
                  pathname.includes("career") ? "" : "hover:text-[#000099]"
                }`}
              >
                <div className="flex items-center">
                  <svg className={`shrink-0 fill-current ${pathname.includes('career') ? 'text-violet-500' : 'text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M5 4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                    <path d="M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4ZM2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z" />
                    <path d="M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4ZM2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z" />
                  </svg>
                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Career
                  </span>
                </div>
              </NavLink>
            </li>
            {role === 'admin' ? 
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("profile") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                end
                to="profile"
                className={`block text-[#000099] truncate transition duration-150 ${
                  pathname.includes("profile") ? "" : "hover:text-[#000099]"
                }`}
              >
                <div className="flex items-center">
                  <svg className={`shrink-0 fill-current ${pathname.includes('profile') ? 'text-violet-500' : 'text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M5 4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                    <path d="M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4ZM2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z" />
                    <path d="M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4ZM2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z" />
                  </svg>
                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    Users
                  </span>
                </div>
              </NavLink>
            </li>
            :
            null
          }
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sidebar