"use client"

import React, { useEffect } from 'react'
import NavBar from './src/components/NavBar'
import Sidebar from './src/components/SideBar'
import { Store } from 'lucide-react';
import StoreProvider, { useAppSelector } from './redux';


const DashBoredLayaout  = ({children}: {children: React.ReactNode}) => {






  
const isSidebarCollapsed=useAppSelector((state) => state.global.isSidebarCollapsed);

const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

 useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  });

  return (
    <div  className={`${
        isDarkMode ? "dark" : "light"
      } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
     <Sidebar/>


<main
        className={`flex flex-col w-full py-7 px-9 bg-gray-50 ${
          isSidebarCollapsed ? 'md:pl-24' : 'md:pl-72'
        }`}
      >

    <NavBar/>
     {children} 
        </main>
    
        </div>
  );
};


const DashboardWrapper = ({children}: {children: React.ReactNode}) => {
  return (
   <StoreProvider>
    <DashBoredLayaout>
        {children}
    </DashBoredLayaout>
   </StoreProvider>
  );
};

export default DashboardWrapper