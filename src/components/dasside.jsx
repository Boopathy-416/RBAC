import React from "react";
import MainNav from "./dashboard";



export function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-[#020001] text-white">
      <div className="flex h-full flex-col gap-6">
        {/* Sidebar Header */}
        <div className="flex h-14 items-center border-b  border-indigo-500/20 px-[49px] mt-3">
        <h1 >DASHBOARD</h1>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 space-y-6 overflow-y-auto px-3">
       <MainNav />
    
        </div>
      </div>
    </div>
  );
}
