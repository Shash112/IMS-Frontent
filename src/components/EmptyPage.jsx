import React from 'react'
import { FaPlus } from "react-icons/fa6";
const EmptyPage = ({name, handleClick}) => {
  return (
    <div className='h-full'>
        <div className='flex flex-col items-center h-full justify-center'>
        <button onClick={handleClick} className='border-2 border-black rounded-lg p-2'> <FaPlus className='text-4xl' /></button>
        <h3 className='font-semibold text-3xl'>Add new {name}</h3>
        <p className='text-xl'>List is empty</p>
        </div>
    </div>
  )
}

export default EmptyPage