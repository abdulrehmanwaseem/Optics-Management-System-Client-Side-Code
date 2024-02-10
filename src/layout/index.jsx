import React, { useState } from "react";
import {
  Blocks,
  Building2,
  ClipboardCheck,
  KeyRound,
  KeySquare,
  ListChecks,
  Maximize2,
  Menu,
  Users,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const Layout = () => {
  const [currentScreen, setCurrentScreen] = useState("OwnerAccount");

  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="w-full h-[8vh] shadow-md shadow-slate-300 flex">
        <div className="drawer gap-2 ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex items-center justify-between mx-3">
            <label htmlFor="my-drawer" className="flex items-center gap-2">
              <Menu />
              <p className="text-lg font-semibold text-amber-400 -mt-1">
                Optics Management System{" "}
                <span className="text-blue-200 font-extrabold text-2xl ">
                  /
                </span>{" "}
                {currentScreen}
              </p>
            </label>
            <div className="mr-2 flex items-center gap-2">
              <label className="swap swap-rotate">
                <input type="checkbox" />
                <svg
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-set-theme="wireframe"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-set-theme="dark"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
          <div className="drawer-side items-center -ml-1 z-10">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <SideBar setCurrentScreen={setCurrentScreen} />
          </div>
        </div>
      </div>
      <div className="relative w-full h-[92vh]">
        <Outlet />
        <span className="flex mb-2 px-6 justify-between items-center absolute bottom-0 right-0 shadow-slate-300 bg-slate-600 text-amber-400 w-full py-3">
          <code className="font-xs">
            Created By Senior Developer: Abdul Rehman
          </code>
          <span className="flex gap-6">
            <code className="font-xs ">Contact On: +92 311 811 4805</code>
            <span className="border-2 -mx-2 border-gray-400"></span>
            <code className="font-xs">
              Email On: abdulrehman.code1@gmail.com
            </code>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Layout;

const SideBar = ({ setCurrentScreen }) => {
  const lists = [
    {
      title: "OwnerAccount",
      link: "/",
      icon: <KeyRound size={22} />,
    },
    {
      title: "Customers",
      link: "/customers",
      icon: <Users size={22} />,
    },
    {
      title: "Accounts",
      link: "/accounts",
      icon: <KeySquare size={22} />,
    },
    {
      title: "Companies",
      link: "/companies",
      icon: <Building2 size={22} />,
    },
    {
      title: "Expenses",
      link: "/expenses",
      icon: <Blocks size={22} />,
    },
    {
      title: "Items",
      link: "/items",
      icon: <ListChecks size={22} />,
    },
    {
      title: "Venders",
      link: "/venders",
      icon: <ClipboardCheck size={22} />,
    },
  ];
  return (
    <ul className="menu p-5 w-72 min-h-full bg-base-200 text-base-content shadow-md shadow-slate-300 ">
      {lists.map((val, index) => (
        <NavLink to={val.link} key={index}>
          <li
            className="flex flex-row items-center"
            onClick={() => setCurrentScreen(val.title)}
          >
            <span className="font-semibold text-lg">
              {val.icon} {val.title}
            </span>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};
