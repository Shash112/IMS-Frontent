import React from 'react'
import Navbar from '../components/Navbar'
import Menubar from '../components/Menubar'
import { Outlet } from 'react-router-dom'



const Layout = () => {



  return (
    <div className=' h-screen flex'>
        {/* Navbar */}

        {/* Menubar */}
        <Menubar />
        <div className='flex-1'>
            <Navbar />
            <div className='h-[calc(100%-100px)] overflow-y-auto'>
              <Outlet />
            </div>
        </div>

        {/* Main content */}
    </div>
  )
}

export default Layout