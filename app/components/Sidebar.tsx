"use client";

import { useState } from "react";
import Links from "./Menu";
import Image from "next/image";
import { LogoutButton } from "./LogoutButton";
import { LogoutButtonSocial } from "./LogoutButtonSocial";

export default function Sidebar() {

  const [collapsed, setCollapsed] = useState(false);

  return <>
  <main className={`${collapsed ? "ml-21" : "ml-65"}`} ></main>
    <aside className={` fixed bg-gray-900 text-white h-screen
        transition-all duration-300 ${collapsed ? "w-21" : "w-65"}`} >
                <div className="">
                   <button  onClick={() => setCollapsed(!collapsed)}>
          <div className="cursor-pointer border:0px p-4">{collapsed ? <b>☰</b> : <b>X</b>}</div>
        </button>
                  </div>
               <div className="p-3"><Image
                  src="next.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  />
                </div>
      <div className="flex justify-between items-center p-4">
        {!collapsed && <a href="/" className="font-bold cursor-pointer">Home</a>}
       
      </div>
    {!collapsed && <Links />}
    {! collapsed && <div className="flex-3 p-6 ">
      <LogoutButton/>
      <hr></hr>
      <LogoutButtonSocial/>
    </div> }
    </aside>
  </>
}