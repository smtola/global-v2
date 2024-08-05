import React, { useState } from "react";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import { Outlet } from "react-router-dom";
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
