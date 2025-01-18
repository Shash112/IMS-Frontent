import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 h-[80px] w-full items-center bg-white'>
        <input type="text" name="search" id="search" placeholder="Search ..." className='border-2 border-gray-400 min-w-80 p-2 rounded-lg'/>
        <div>
            <button><IoMdNotificationsOutline className='text-4xl mr-6' /></button>
            <button><CgProfile className='text-4xl mr-4'/></button>
        </div>
    </div>
  )
}

export default Navbar
