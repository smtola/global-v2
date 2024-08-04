import React, { useState,useEffect } from "react";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import { Outlet,useNavigate } from "react-router-dom";
import Scroll from "../../Scroll";
const Dashboard = ({token}) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
    <Scroll/>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header userName={token} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main className="grow">
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Dashboard actions */}
              <div className="sm:flex sm:justify-between sm:items-center mb-8">
                {/* Left: Title */}
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">
                    Dashboard
                  </h1>
                </div>
              </div>

              {/* Cards */}
              <div>
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
