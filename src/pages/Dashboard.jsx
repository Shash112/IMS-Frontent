import React from 'react'
import { TbCoins } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsBarChartFill } from "react-icons/bs";
import { HiOutlineDocumentCurrencyRupee } from "react-icons/hi2";
import { MdCurrencyRupee } from "react-icons/md";
import { FaBox } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsJournalCheck } from "react-icons/bs";
import BarGraph from '../components/BarGraph';
import LineGraph from '../components/LineGraph';

const Dashboard = () => {
  return (
    <div className='h-full grid grid-cols-3'>
      <div className='bg-white m-4 mr-0 rounded-lg p-2 col-span-2 min-h-40'>
        <h4 className='font-medium text-2xl mb-4'>Sales Overview</h4>
        <div className='flex justify-around h-20 items-baseline'>
          <div className='flex-1'>
            <TbCoins className='text-4xl m-auto mb-2 text-[#0A2240]'/>
            <div className='flex justify-around items-baseline'>
              <p className='flex items-center font-semibold text-xl'><MdCurrencyRupee className='' />2832</p>
              <p>Sales</p>
            </div>
          </div>
          <div className="w-[1px] h-full bg-gray-300"></div>
          <div className='flex-1'>
            <FaArrowTrendUp className='text-4xl m-auto mb-2 text-[#817AF3]'/>
            <div className='flex justify-around items-baseline'>
              <p className='flex items-center font-semibold text-xl'><MdCurrencyRupee />4832</p>
              <p>Revenue</p>
            </div>
          </div>
          <div className="w-[1px] h-full bg-gray-300"></div>
          <div className='flex-1'>
            <BsBarChartFill className='text-4xl m-auto mb-2 text-[#DBA362CC] opacity-70'/>
            <div className='flex justify-around items-baseline'>
              <p className='flex items-center font-semibold text-xl'><MdCurrencyRupee />8320</p>
              <p>Profit</p>
            </div>
          </div>
          <div className="w-[1px] h-full bg-gray-300"></div>
          <div className='flex-1'>
            <HiOutlineDocumentCurrencyRupee className='text-4xl m-auto mb-2 text-[#58D365B2] opacity-70'/>
            <div className='flex justify-around items-baseline'>
              <p className='flex items-center font-semibold text-xl'><MdCurrencyRupee />17,432</p>
              <p>Cost</p>
            </div>
          </div>  
        </div>
      </div>

      <div className='bg-white m-4 rounded-lg p-2 min-h-40'>
        <h4  className='font-medium text-2xl mb-4'>Inventory Summary</h4>
        <div className='flex justify-around h-20 items-center'>
          <div className='flex-1'>
            <FaBox className='text-3xl m-auto mb-2 text-[#DBA362] opacity-80'/>
            <div className='flex flex-col justify-around items-center'>
              <p className='flex items-center font-semibold text-xl'>868</p>
              <p>Quantity in Hand</p>
            </div>
          </div>
          <div className="w-[1px] h-full bg-gray-300"></div>
          <div className='flex-1'>
            <CiLocationOn className='text-3xl m-auto mb-2 text-[#817AF399] opacity-60'/>
            <div className='flex flex-col justify-around items-center'>
              <p className='flex items-center font-semibold text-xl'>200</p>
              <p>To be received</p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white m-4 mr-0 rounded-lg p-2 col-span-2 min-h-40'>
        <h4  className='font-medium text-2xl mb-4'>Purchase Overview</h4>
        <div className='flex justify-around h-20 items-center'>
          <div className='flex-1'>
            <IoBagOutline className='text-4xl m-auto mb-2 text-[#009ED8]'/>
            <div className='flex justify-around items-baseline'>
              <p className='flex items-center font-semibold text-xl'>82</p>
              <p>Purchase</p>
            </div>
          </div>
          <div className="w-[1px] h-full bg-gray-300"></div>
          <div className='flex-1'>
            <HiOutlineDocumentCurrencyRupee className='text-4xl m-auto mb-2 text-[#58D365B2] opacity-70'/>
            <div className='flex justify-around items-baseline'>
              <p className='flex items-center font-semibold text-xl'><MdCurrencyRupee />18320</p>
              <p>Cost</p>
            </div>
          </div>
          <div className="w-[1px] h-full bg-gray-300"></div>
          <div className='flex-1'>
            <FaBook className='text-4xl m-auto mb-2 text-[#817AF3]'/>
            <div className='flex justify-around items-baseline'>
              <p className='flex items-center font-semibold text-xl'>8</p>
              <p>Cancel</p>
            </div>
          </div>
          <div className="w-[1px] h-full bg-gray-300"></div>
          <div className='flex-1'>
            <BsBarChartFill className='text-4xl m-auto mb-2 text-[#DBA362] opacity-80'/>
            <div className='flex justify-around items-baseline'>
              <p className='flex items-center font-semibold text-xl'><MdCurrencyRupee />13570</p>
              <p>Return</p>
            </div>
          </div>  
        </div>
      </div>

      <div className='bg-white m-4 rounded-lg p-2 min-h-40'>
        <h4  className='font-medium text-2xl mb-4'>Product Summary</h4>
        <div className='flex justify-around h-20 items-center'>
          <div className='flex-1'>
            <MdOutlineAccountCircle className='text-3xl m-auto mb-2 text-[#0A2240]'/>
            <div className='flex flex-col justify-around items-center'>
              <p className='flex items-center font-semibold text-xl'>32</p>
              <p>Number of suppliers</p>
            </div>
          </div>
          <div className="w-[1px] h-full bg-gray-300"></div>
          <div className='flex-1'>
            <BsJournalCheck className='text-3xl m-auto mb-2 text-[#817AF3CC] opacity-80'/>
            <div className='flex flex-col justify-around items-center'>
              <p className='flex items-center font-semibold text-xl'>21</p>
              <p>Number of Categories</p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white m-4 mr-0 rounded-lg p-4 col-span-2'>
        <div>
          <h4  className='font-medium text-2xl'>Sales & Overview</h4>
        </div>
        <BarGraph />
      </div>
      <div className='bg-white m-4 rounded-lg p-4'>
        <h4  className='font-medium text-2xl'>Order Summary</h4>
        <LineGraph />
      </div>
    </div>
  )
}

export default Dashboard