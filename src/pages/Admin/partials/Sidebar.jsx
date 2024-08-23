import  React ,{ useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { supabase } from "../../../config/db";
const Sidebar = ({
    sidebarOpen,
    setSidebarOpen,
  }) => {
    const location = useLocation();
    const { pathname } = location;
    const token = localStorage.getItem('tokens');
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
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("home-admin") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                end
                to="/home-admin"
                className={`block text-[#000099] truncate transition duration-150 ${
                  pathname.includes("home-admin") ? "" : "hover:text-[#000099]"
                }`}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-app-window  ${pathname.includes('home-admin') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                    <path d="M6 8h.01" />
                    <path d="M9 8h.01" />
                  </svg>
                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Landing Pages</span>
                </div>
              </NavLink>
            </li>
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("dashboard") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                end
                to="/dashboard"
                className={`block text-[#000099] truncate transition duration-150 ${
                  pathname.includes("dashboard") ? "" : "hover:text-[#000099]"
                }`}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-app-window  ${pathname.includes('dashboard') ? 'text-violet-500' : 'text-gray-400'}`} width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M8 21h8a5 5 0 0 0 5 -5v-3a3 3 0 0 0 -3 -3h-1v-2a5 5 0 0 0 -5 -5h-4a5 5 0 0 0 -5 5v8a5 5 0 0 0 5 5z" />
                    <path d="M7 7m0 1.5a1.5 1.5 0 0 1 1.5 -1.5h3a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1 -1.5 1.5h-3a1.5 1.5 0 0 1 -1.5 -1.5z" />
                    <path d="M7 14m0 1.5a1.5 1.5 0 0 1 1.5 -1.5h7a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1 -1.5 1.5h-7a1.5 1.5 0 0 1 -1.5 -1.5z" />
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
            {role ? 
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("profile") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                end
                to="profile"
                className={`block text-[#000099] truncate transition duration-150 ${
                  pathname.includes("profile") ? "" : "hover:text-[#000099]"
                }`}
              >
                <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-app-window  ${pathname.includes('profile') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
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