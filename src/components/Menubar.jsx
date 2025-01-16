import React from 'react'
import { IoLogoBuffer } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineInventory2 } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsBoxSeam } from "react-icons/bs";
import { MdStorefront } from "react-icons/md";
import { NavLink } from 'react-router-dom'
const Menubar = () => {
  return (
    <div className='w-[200px] h-screen bg-[#0A2240]'>
        <div className='h-[100px]'>
            <div className='h-full flex items-center justify-center'>
                <IoLogoBuffer className='text-2xl mr-2'/>
                <h1 className='text-2xl font-semibold'>Inventory</h1>
            </div>
        </div>
        <hr />
        <div className='w-[80%] m-auto pl-2 text-white'>
            <NavLink to={'/dashboard'} className='flex items-center p-2 '>
                <IoHomeOutline className='font-medium text-xl mr-2'/>
                <h3 className='font-medium text-xl'>Dashboard</h3>
            </NavLink>
            <NavLink to={'/inventroy'} className='flex items-center p-2'>
                <MdOutlineInventory2 className='font-medium text-xl mr-2'/>
                <h3 className='font-medium text-xl'>Inventory</h3>
            </NavLink>
            {/* <NavLink to={'/report'} className='flex items-center p-2'>
                <TbReportSearch className='font-medium text-xl mr-2'/>
                <h3 className='font-medium text-xl'>Reports</h3>
            </NavLink> */}
            {/* <div className='flex items-center p-2'>
                <CgProfile className='font-medium text-xl mr-2' />
                <h3 className='font-medium text-xl'>Supplier</h3>
            </div> */}
            {/* <div className='flex items-center p-2'>
                <BsBoxSeam className='font-medium text-xl mr-2'/>
                <h3 className='font-medium text-xl'>Orders</h3>
            </div> */}
            {/* <NavLink to={'/store'} className='flex items-center p-2'>
                <MdStorefront className='font-medium text-xl mr-2' />
                <h3 className='font-medium text-xl'>Stores</h3>
            </NavLink> */}
        </div>
    </div>
  )
}

export default Menubar