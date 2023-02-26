import React from "react";
import SideBar from "../../Layout/SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section>
      <div className="grid grid-cols-12">
        <SideBar />
        <div className="col-span-10">
          <div className=" h-full max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
