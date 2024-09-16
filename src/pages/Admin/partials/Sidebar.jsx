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
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("/") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                end
                to="/"
                className={`block text-[#000099] truncate transition duration-150 ${
                  pathname.includes("/") ? "/" : "hover:text-[#000099]"
                }`}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-app-window  ${pathname.includes('') ? 'text-violet-500' : 'text-gray-400'}`} width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("banner") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                  end
                  to="banner"
                  className={`block text-[#000099] truncate transition duration-150 ${
                      pathname.includes("banner") ? "" : "hover:text-[#000099]"
                  }`}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-app-window  ${pathname.includes('banner') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M5 14h14v-9h-14v16" />
                  </svg>
                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Banner</span>
                </div>
              </NavLink>
            </li>
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("about-us") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                  end
                  to="about-us"
                  className={`block text-[#000099] truncate transition duration-150 ${
                      pathname.includes("about-us") ? "" : "hover:text-[#000099]"
                  }`}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-app-window  ${pathname.includes('about-us') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />   <path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />   <path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
                  </svg>
                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">About Us</span>
                </div>
              </NavLink>
            </li>
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("vision-mission-core-value") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                  end
                  to="vision-mission-core-value"
                  className={`block text-[#000099] truncate transition duration-150 ${
                      pathname.includes("vision-mission-core-value") ? "" : "hover:text-[#000099]"
                  }`}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-app-window  ${pathname.includes('vision-mission-core-value') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M6 21l6 -5l6 5" /> <path d="M12 13v8" /> <path d="M3.294 13.678l.166 .281c.52 .88 1.624 1.265 2.605 .91l14.242 -5.165a1.023 1.023 0 0 0 .565 -1.456l-2.62 -4.705a1.087 1.087 0 0 0 -1.447 -.42l-.056 .032l-12.694 7.618c-1.02 .613 -1.357 1.897 -.76 2.905z" /> <path d="M14 5l3 5.5" />
                  </svg>
                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">VMC</span>
                </div>
              </NavLink>
            </li>
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("core-value-detail") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                  end
                  to="core-value-detail"
                  className={`block text-[#000099] truncate transition duration-150 ${
                      pathname.includes("core-value-detail") ? "" : "hover:text-[#000099]"
                  }`}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-app-window  ${pathname.includes('core-value-detail') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>   <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />   <path d="M4 6l8 0" />   <path d="M16 6l4 0" />   <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />   <path d="M4 12l2 0" />   <path d="M10 12l10 0" />   <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />   <path d="M4 18l11 0" />   <path d="M19 18l1 0" />
                  </svg>
                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">CVD</span>
                </div>
              </NavLink>
            </li>
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("founder-information") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                  end
                  to="founder-information"
                  className={`block text-[#000099] truncate transition duration-150 ${
                      pathname.includes("founder-information") ? "" : "hover:text-[#000099]"
                  }`}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-app-window  ${pathname.includes('founder-information') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z" /> <path d="M12 9h.01" /> <path d="M11 12h1v4h1" />
                  </svg>
                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">FI</span>
                </div>
              </NavLink>
            </li>
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("organization-chart") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                  end
                  to="organization-chart"
                  className={`block text-[#000099] truncate transition duration-150 ${
                      pathname.includes("organization-chart") ? "" : "hover:text-[#000099]"
                  }`}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-app-window  ${pathname.includes('organization-chart') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M5 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                      <path d="M16 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                      <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
                      <path d="M6 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
                      <path d="M9 17l5 -1.5"/>
                      <path d="M6.5 8.5l7.81 5.37"/>
                      <path d="M7 7l8 -1"/>
                  </svg>
                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">OC</span>
                </div>
              </NavLink>
            </li>
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("business-registration-certificates") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                  end
                  to="business-registration-certificates"
                  className={`block text-[#000099] truncate transition duration-150 ${
                      pathname.includes("business-registration-certificates") ? "" : "hover:text-[#000099]"
                  }`}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-app-window  ${pathname.includes('business-registration-certificates') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
                      <path d="M10 15v-6h2a2 2 0 1 1 0 4h-2"/>
                      <path d="M14 15l-2 -2"/>
                  </svg>
                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">BRC</span>
                </div>
              </NavLink>
            </li>
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("service-name") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                  end
                  to="service-name"
                  className={`block text-[#000099] truncate transition duration-150 ${
                      pathname.includes("service-name") ? "" : "hover:text-[#000099]"
                  }`}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-app-window  ${pathname.includes('service-name') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M4 13c.325 2.532 1.881 4.781 4 6"/>
                      <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2"/>
                      <path d="M4 5v4h4"/>
                      <path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"/>
                      <path d="M18 15v2a1 1 0 0 0 1 1h1"/>
                      <path d="M21 15v6"/>
                  </svg>
                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Service Name</span>
                </div>
              </NavLink>
            </li>
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("service-details") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                  end
                  to="service-details"
                  className={`block text-[#000099] truncate transition duration-150 ${
                      pathname.includes("service-details") ? "" : "hover:text-[#000099]"
                  }`}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-app-window  ${pathname.includes('service-name') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 13c.325 2.532 1.881 4.781 4 6"/>
                    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2"/>
                    <path d="M4 5v4h4"/>
                    <path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"/>
                    <path d="M18 15v2a1 1 0 0 0 1 1h1"/>
                    <path d="M21 15v6"/>
                  </svg>
                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Service Details</span>
                </div>
              </NavLink>
            </li>
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("why-us") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                  end
                  to="why-us"
                  className={`block text-[#000099] truncate transition duration-150 ${
                      pathname.includes("why-us") ? "" : "hover:text-[#000099]"
                  }`}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-app-window  ${pathname.includes('why-us') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280" fill="none" stroke-linecap="round" stroke-linejoin="round">

                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/>
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5"/>
                      <path d="M19 22v.01"/>
                      <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"/>

                  </svg>
                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Why Us</span>
                </div>
              </NavLink>
            </li>
            <li className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${pathname.includes("client") && "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"}`}>
              <NavLink
                  end
                  to="client"
                  className={`block text-[#000099] truncate transition duration-150 ${
                      pathname.includes("client") ? "" : "hover:text-[#000099]"
                  }`}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-app-window  ${pathname.includes('client') ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/>
                  </svg>
                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Clients</span>
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