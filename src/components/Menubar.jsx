import React from 'react'
import { IoLogoBuffer } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineInventory2 } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsBoxSeam } from "react-icons/bs";
import { MdStorefront } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import logo from "../assets/Logo.png";

const Menubar = () => {
  return (
    <div className='w-[180px] h-screen bg-[#0A2240]'>
        <div className='h-[80px]'>
            <div className='h-full flex items-center'>
                <img src={logo} alt="get-started-image" width={80} height={80} className=''/>
                <h1 className='text-2xl font-semibold text-white tracking-widest'>PSI</h1>
            </div>
        </div>
        <hr />

        <div className='w-full text-white'>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'flex items-center pl-4 p-2 bg-blue-900 gap-2 ' : 'flex items-center pl-4 p-2 hover:bg-blue-900 gap-2'}>
                <IoHomeOutline className='font-medium text-xl'/>
                <h3 className='font-normal text-lg'>Dashboard</h3>
            </NavLink>
            <NavLink to={'/inventroy'} className={({ isActive }) => isActive ? 'flex items-center pl-4 p-2 bg-blue-900 gap-2 ' : 'flex items-center pl-4 p-2 hover:bg-blue-900 gap-2'}>
                <MdOutlineInventory2 className='font-medium text-xl'/>
                <h3 className='font-normal text-lg'>Inventory</h3>
            </NavLink>
            <NavLink to={'/order'} className={({ isActive }) => isActive ? 'flex items-center pl-4 p-2 bg-blue-900 gap-2 ' : 'flex items-center pl-4 p-2 hover:bg-blue-900 gap-2'}>
                <BsBoxSeam className='font-medium text-xl'/>
                <h3 className='font-normal text-lg'>Orders</h3>
            </NavLink>
            <NavLink to={'/store'} className={({ isActive }) => isActive ? 'flex items-center pl-4 p-2 bg-blue-900 gap-2 ' : 'flex items-center pl-4 p-2 hover:bg-blue-900 gap-2'}>
                <MdStorefront className='font-medium text-xl' />
                <h3 className='font-normal text-lg'>Stores</h3>
            </NavLink>
            <NavLink to={'/supplier'} className={({ isActive }) => isActive ? 'flex items-center pl-4 p-2 bg-blue-900 gap-2 ' : 'flex items-center pl-4 p-2 hover:bg-blue-900 gap-2'}>
                <CgProfile className='font-medium text-xl ' />
                <h3 className='font-normal text-lg'>Supplier</h3>
            </NavLink>
            <NavLink to={'/report'} className={({ isActive }) => isActive ? 'flex items-center pl-4 p-2 bg-blue-900 gap-2 ' : 'flex items-center pl-4 p-2 hover:bg-blue-900 gap-2'}>
                <TbReportSearch className='font-medium text-xl'/>
                <h3 className='font-normal text-lg'>Reports</h3>
            </NavLink>
        </div>
    </div>
  )
}

export default Menubar