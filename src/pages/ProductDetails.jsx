import React, { useState } from 'react';
import productImage from '../assets/Product.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Modal from '../components/Modal';
import { updateProduct } from '../features/products/productSlice';

const ProductDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { items, status, addStatus, error } = useSelector((state) => state.product);  
    const [openModal, setOpenModal] = useState(false);
    const [productDetails, setProductDetails] = useState({});

    useEffect(()=>{
        setProductDetails(items[id]);
    }, [id, items]);

    const handleModalToggle = () => {
        console.log("Modal opened")
        setOpenModal((prev) => !prev)
    }

    const handleProductUpdate = (e) => {
        e.preventDefault();
        console.log(productDetails);
        dispatch(updateProduct({id: productDetails._id, product:productDetails}));
        handleModalToggle();
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setProductDetails(items[id]);
        handleModalToggle();
    }

  return (
    <div className='m-4 p-4 bg-white rounded-lg h-full'>
        <div className='flex justify-between items-center'>
            <h3 className='font-semibold text-2xl'>Product Details</h3>
            <div>
                <button className='py-1 px-4 rounded-md border' onClick={handleModalToggle}>Edit</button>
                <button className='py-1 px-4 rounded-md border ml-4'>Download</button>
            </div>
        </div>
        <div>
            <div className='flex justify-between mt-4'>
                <div className='flex-1 mr-20'>
                    <div className='mb-8'>
                        <h3 className='font-medium text-lg mb-2'>Primary Details</h3>
                        <div className='grid grid-cols-3 gap-2'>
                            <label>Product ID</label>
                            <label className='col-span-2'>{items[id]._id}</label>
                            <label>Product Name</label>
                            <label className='col-span-2'>{items[id].name}</label>
                            <label>Description</label>
                            <label className='col-span-2'>{items[id].description}</label>
                            <label>Price</label>
                            <label className='col-span-2'>{items[id].price}</label>
                            <label>Date</label>
                            <label className='col-span-2'>{items[id].createdAt}</label>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-medium text-lg my-2'>Supplier Details</h3>
                        <div className='grid grid-cols-3 gap-2'>
                            <label>Supplier Name</label>
                            <label className='col-span-2'>Mr. Mike xyz</label>
                            <label>Contact Number</label>
                            <label className='col-span-2'>+91 7845637829</label>

                        </div>
                    </div>
                </div>
                <div className='ml-10'>
                    <img src={productImage} alt="productImage" width={200} height={200} className='ml-auto mr-8 mb-10'/>
                    <div className='grid grid-cols-2 max-w-fit ml-auto gap-4'>
                        <label >Opening Stock</label>
                        <label className='text-right pr-2'>{items[id].quantity * (id + 1)}</label>
                        <label>Remaning Stock</label>
                        <label className='text-right pr-2'>{items[id].quantity}</label>
                        <label>On the way</label>
                        <label className='text-right pr-2'>{(items[id].quantity * (id + 1)) - (items[id].quantity)}</label>
                    </div>
                </div>
            </div>
        </div>

        {/* Modal */}
        <Modal isOpen={openModal} handleClose={handleModalToggle}>
            <form onSubmit={handleProductUpdate} className='grid grid-cols-3'>
                <h3 className='col-span-3'>New Product</h3>

                <label htmlFor="name" className='p-2 mt-4'>Name:</label>
                <input required type="text" name="name" id="name" placeholder='Enter product name' value={productDetails.name} onChange={(e)=>setProductDetails({...productDetails, name: e.target.value})} className='p-2 ml-2 border-2 rounded-lg border-gray-400 col-span-2 mt-4'/>
                
                <label htmlFor="name" className='p-2 mt-4'>Description:</label>
                <input required type="text" name="name" id="name" placeholder='Enter product name' value={productDetails.description} onChange={(e)=>setProductDetails({...productDetails, description: e.target.value})} className='p-2 ml-2 border-2 rounded-lg border-gray-400 col-span-2 mt-4'/>
                
                <label htmlFor="name" className='p-2 mt-4'>Quantity:</label>
                <input required type='number' name="name" id="name" placeholder='Enter product name' value={productDetails.quantity} onChange={(e)=>setProductDetails({...productDetails, quantity: e.target.value})} className='p-2 ml-2 border-2 rounded-lg border-gray-400 col-span-2 mt-4'/>
                
                <label htmlFor="name" className='p-2 mt-4'>Price:</label>
                <input required type="number" name="name" id="name" placeholder='Enter product name' value={productDetails.price} onChange={(e)=>setProductDetails({...productDetails, price: e.target.value})} className='p-2 ml-2 border-2 rounded-lg border-gray-400 col-span-2 mt-4'/>
                
                {/* <label htmlFor="name" className='p-2 mt-4'>Supplier:</label>
                <input required type="text" name="name" id="name" placeholder='Enter product name' value={productData.supplier} onChange={(e)=>setProductData({...productData, supplier: e.target.value})} className='p-2 ml-2 border-2 rounded-lg border-gray-400 col-span-2 mt-4'/> */}
                
                <div></div>
                <button type="reset" onClick={handleCancel} className='p-2 rounded-lg border border-gray-400 mt-4 mx-2'>Discard</button>
                <button type='submit' className='bg-blue-600 py-2 px-4 rounded-lg text-white mt-4'>Update Product</button>
                
            </form>
        </Modal>
    </div>
  )
}

export default ProductDetails