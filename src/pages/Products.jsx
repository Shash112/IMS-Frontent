import React, { useEffect, useState } from 'react'
import EmptyPage from '../components/EmptyPage'
import Modal from '../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchProducts } from '../features/products/productSlice';
import { IoFilter } from "react-icons/io5";
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';

const Products = () => {

    const dispatch = useDispatch();
    const { items, status, addStatus, error } = useSelector((state) => state.product);  
    // const {} = useSelector((state) => state.product);
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();
    const [productData, setProductData] = useState({
        name: "",
        description: "",
        quantity: "",
        price: "",
    });

    // Temporary data
    const columns = [
        { Header: 'Name', accessor: 'name' },
        { Header: 'Quantity', accessor: 'quantity' },
        { Header: 'Price', accessor: 'price' },
        { Header: 'Date', accessor: 'createdAt'},
        { Header: 'Stock', accessor: 'stock'}
      ];
      
      useEffect(()=>{
        dispatch(fetchProducts());
        console.log(items);
      },[])

    const handleModalToggle = () => {
        setOpenModal((prev) => !prev)
    }

    const handleNewProductSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(productData));
        setProductData({
            name: "",
            description: "",
            quantity: "",
            price: "",
            supplier: ""
        });
        handleModalToggle();
    }

    const handleReset = (e) => {
        e.preventDefault();
        setProductData({
            name: "",
            description: "",
            quantity: "",
            price: "",
            supplier: ""
        });
        handleModalToggle();
    }

    if (status === 'loading') {
        return <Loading />
    }

    if (items.length === 0) {
        return <div className='h-full'>
            <EmptyPage handleClick={handleModalToggle} name={"Inventory"} />
        </div>
    }

  return (
    <div className='h-full'>
        {/* Inventory */}
        <div>
            {/* Overall Card */}
            <div className='bg-white m-4 rounded-lg p-4'>
                <h3 className='font-medium text-2xl mb-2'>Overall Inventory</h3>
                <div className='w-full h-20 flex justify-around text-center'>
                    <div className='flex-1'>
                        <h5 className='font-semibold text-lg text-[#1570EF]'>Categories</h5>
                        <p>14</p>
                        <p>Last 7 Days</p>
                    </div>
                    <div className="w-[1px] h-full bg-gray-300"></div>
                    <div className='flex-1'>
                        <h5 className='font-semibold text-lg text-[#E19133]'>Total Products</h5>
                        <div className='flex justify-around'>
                            <div>
                                <p>868</p>
                               <p>Last 7 Days</p>
                            </div>
                            <div>
                                <p>$2500</p>
                                <p>Revenue</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1px] h-full bg-gray-300"></div>
                    <div className='flex-1'>
                        <h5 className='font-semibold text-lg text-[#845EBC]'>Top Selling</h5>
                        <div className='flex justify-around'>
                            <div >
                                <p>5</p>
                               <p>Last 7 Days</p>
                            </div>
                            <div>
                                <p>$2500</p>
                                <p>Cost</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1px] h-full bg-gray-300"></div>
                    <div className='flex-1'>
                        <h5 className='font-semibold text-lg text-[#F36960]'>Low Stocks</h5>
                        <div className='flex justify-around'>
                            <div >
                                <p>12</p>
                               <p>Ordered</p>
                            </div>
                            <div>
                                <p>2</p>
                                <p>Not in Stock</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inventory table */}
            <div className='m-4  bg-white p-4 rounded-lg '>
                {/* Header */}
                <div className='flex justify-between items-center'>
                    <h4>Products</h4>
                    <div>
                        <button onClick={handleModalToggle} className='py-2 px-4 bg-blue-600 rounded-lg text-white mr-2'>Add Product</button>
                        <button className='py-2 px-4 rounded-lg border border-gray-400 mr-2'><IoFilter className='inline'/> Filter</button>
                        <button className='py-2 px-4 rounded-lg border border-gray-400 mr-2'>Download all</button>
                    </div>
                </div>
                {/* Table */}
                <div className='overflow-x-auto'>
                    <table className='min-w-full border border-gray-200 mt-4'>
                        <thead className='bg-gray-200'>
                            <tr>
                                {columns.map((column) => {
                                    return <th 
                                    key={column.accessor}
                                    className='py-2 px-4 border-b border-gray-200 text-left text-gray-600'
                                    >
                                        {column.Header}
                                    </th>
                                })}
                                {/* <th className='py-2 px-4 border-b border-gray-200 text-left text-gray-600'>Availability</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((row, rowIndex) => {
                                    return <tr onClick={()=>{navigate('/inventory/'+rowIndex)}} key={rowIndex} className='cursor-pointer hover:bg-gray-100'>
                                        {
                                            columns.map((column) => {
                                                if (column.accessor === 'stock'){
                                                    return row['quantity'] === 0 ?  <td className='py-2 px-4 border-b border-gray-200 text-gray-800 '><p className='bg-red-500 inline py-1 px-4 rounded-full'>Out of Stock</p></td>: 
                                                    row['quantity'] < 10 ? <td className='py-2 px-4 border-b border-gray-200 text-gray-800'><p className='bg-yellow-500 inline py-1 px-4 rounded-full'>Low Stock</p></td>: 
                                                    <td className='py-2 px-4 border-b border-gray-200 text-gray-800'><p className='bg-green-500 inline py-1 px-4 rounded-full'>In Stock</p></td>
                                                
                                                }
                                                return <td key={column.accessor}
                                                    className='py-2 px-4 border-b border-gray-200 text-gray-800'
                                                >
                                                    {row[column.accessor]}
                                                </td>
                                                
                                            })
                                        }
                                        { }
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                    {/* Paggination */}
                    <div className='mt-4 flex justify-between items-center'>
                        <button className='border border-gray-200 py-2 px-4 rounded-lg' disabled>Previous</button>
                        <p>Page 1 of {Math.ceil(items.length/10)}</p>
                        <button className='border border-gray-200 py-2 px-4 rounded-lg' disabled>Next</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Modal */}
        <Modal isOpen={openModal} handleClose={handleModalToggle}>
            <form onSubmit={handleNewProductSubmit} className='grid grid-cols-3'>
                <h3 className='col-span-3'>New Product</h3>

                <label htmlFor="name" className='p-2 mt-4'>Name:</label>
                <input required type="text" name="name" id="name" placeholder='Enter product name' value={productData.name} onChange={(e)=>setProductData({...productData, name: e.target.value})} className='p-2 ml-2 border-2 rounded-lg border-gray-400 col-span-2 mt-4'/>
                
                <label htmlFor="name" className='p-2 mt-4'>Description:</label>
                <input required type="text" name="name" id="name" placeholder='Enter product name' value={productData.description} onChange={(e)=>setProductData({...productData, description: e.target.value})} className='p-2 ml-2 border-2 rounded-lg border-gray-400 col-span-2 mt-4'/>
                
                <label htmlFor="name" className='p-2 mt-4'>Quantity:</label>
                <input required type='number' name="name" id="name" placeholder='Enter product name' value={productData.quantity} onChange={(e)=>setProductData({...productData, quantity: e.target.value})} className='p-2 ml-2 border-2 rounded-lg border-gray-400 col-span-2 mt-4'/>
                
                <label htmlFor="name" className='p-2 mt-4'>Price:</label>
                <input required type="number" name="name" id="name" placeholder='Enter product name' value={productData.price} onChange={(e)=>setProductData({...productData, price: e.target.value})} className='p-2 ml-2 border-2 rounded-lg border-gray-400 col-span-2 mt-4'/>
                
                {/* <label htmlFor="name" className='p-2 mt-4'>Supplier:</label>
                <input required type="text" name="name" id="name" placeholder='Enter product name' value={productData.supplier} onChange={(e)=>setProductData({...productData, supplier: e.target.value})} className='p-2 ml-2 border-2 rounded-lg border-gray-400 col-span-2 mt-4'/> */}
                
                <div></div>
                <button type="reset" onClick={handleReset} className='p-2 rounded-lg border border-gray-400 mt-4 mx-2'>Discard</button>
                <button type='submit' className='bg-blue-600 py-2 px-4 rounded-lg text-white mt-4'>Add Product</button>
                
            </form>
        </Modal>
    </div>
  )
}

export default Products