import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBranches, createBranch } from '../features/branch/branchSlice'
import Loading from '../components/Loading'
import EmptyPage from '../components/EmptyPage'
import Modal from '../components/Modal'

const data = [
  {
    "storeImage": "https://img.freepik.com/free-vector/shop-with-sign-we-are-open_23-2148553675.jpg",
    "storeName": "Tech Haven",
    "managerName": "Alice Johnson",
    "location": "123 Elm Street, San Francisco, CA"
  },
  {
    "storeImage": "https://media.istockphoto.com/id/1431648067/photo/shop-exterior-with-blank-sign-storefront-building-isolated-on-white-background-with-clipping.jpg?s=612x612&w=0&k=20&c=rF1rUGUrWdghsFF4vlXXKAeSA09a-dxmpGoeVNzAYoE=",
    "storeName": "Gourmet Delights",
    "managerName": "Michael Carter",
    "location": "456 Oak Avenue, New York, NY"
  },
  {
    "storeImage": "https://cdn.pixabay.com/photo/2013/07/12/15/49/shop-150362_640.png",
    "storeName": "Style Hub",
    "managerName": "Sophia Brown",
    "location": "789 Maple Drive, Austin, TX"
  },
  {
    "storeImage": "https://www.expo-shop.ro/wp-content/uploads/2023/09/slide-supermarket_600x400.jpg",
    "storeName": "Green Valley",
    "managerName": "James Smith",
    "location": "321 Pine Lane, Portland, OR"
  },
]

const Store = () => {

  const dispatch = useDispatch();
  const { items, status, addStatus } = useSelector((state) => state.branch)
  const [openModal, setOpenModal] = useState(false);
  const [storeData, setStoreData] = useState({
    name: "",
    branch: "",
    location: "",
    managerName: ""
  });

  useEffect(() => {
    dispatch(getBranches());
  },[])

  const handleModalToggle = () => {
    setOpenModal((prev) => !prev);
  }

  const handleNewStoreSubmit = (e) => {
    e.preventDefault();
    dispatch(createBranch(storeData));
    setStoreData({
      name: "",
      branch: "",
      location: "",
      managerName: ""
    });
    handleModalToggle();
  }

  const handleReset = (e) => {
    e.preventDefault();
    setStoreData({
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
        <EmptyPage handleClick={handleModalToggle} name={"Stores"} />
    </div>
}
  return (
    <div className='p-4 h-full'>
      <div className='mb-4 flex justify-between items-center'>
        <h3 className='font-medium text-2xl mb-2'>Stores</h3>
        <button className='px-4 py-2 rounded-lg bg-blue-600 text-white' onClick={handleModalToggle}>Add New</button>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
        {items.map((item, indexId) => {
          return (
            <div key={indexId} className='bg-white flex justify-between items-center max-w-96 min-w-64 py-2 px-4 rounded-lg gap-4'>
              <img src={"https://cdn.pixabay.com/photo/2013/07/12/15/49/shop-150362_640.png"} alt="shopImage" width={100} height={100}/>
              <div className='flex flex-col'>
                <h3 className='font-semibold'>{item.name}</h3>
                <p>Branch: {item.branch}</p>
                <p>Manager: {item.managerName}</p>
                <p className='text-wrap'>Location: {item.location}</p>
              </div>
            </div>  
          )
        })
        }
      </div>
{/* Modal */}
      <Modal isOpen={openModal} handleClose={handleModalToggle}>
            <form onSubmit={handleNewStoreSubmit} className='grid grid-cols-3'>
                <h3 className='col-span-3'>New Store</h3>

                <label htmlFor="name" className='p-2 mt-4'>Name:</label>
                <input required type="text" name="name" id="name" placeholder='Enter product name' value={storeData.name} onChange={(e)=>setStoreData({...storeData, name: e.target.value})} className='p-2 ml-2 border-2 rounded-lg border-gray-400 col-span-2 mt-4'/>
                
                <label htmlFor="branch" className='p-2 mt-4'>Branch:</label>
                <input required type="text" name="branch" id="branch" placeholder='Enter branch name' value={storeData.branch} onChange={(e)=>setStoreData({...storeData, branch: e.target.value})} className='p-2 ml-2 border-2 rounded-lg border-gray-400 col-span-2 mt-4'/>
                
                <label htmlFor="location" className='p-2 mt-4'>Location:</label>
                <input required type='text' name="location" id="location" placeholder='Enter location' value={storeData.location} onChange={(e)=>setStoreData({...storeData, location: e.target.value})} className='p-2 ml-2 border-2 rounded-lg border-gray-400 col-span-2 mt-4'/>
                
                <label htmlFor="manager" className='p-2 mt-4'>Manager Name:</label>
                <input required type="text" name="manager" id="manager" placeholder='Enter manager name' value={storeData.managerName} onChange={(e)=>setStoreData({...storeData, managerName: e.target.value})} className='p-2 ml-2 border-2 rounded-lg border-gray-400 col-span-2 mt-4'/>
                
                <div></div>
                <button type="reset" onClick={handleReset} className='p-2 rounded-lg border border-gray-400 mt-4 mx-2'>Discard</button>
                <button type='submit' className='bg-blue-600 py-2 px-4 rounded-lg text-white mt-4'>Add Product</button>
                
            </form>
        </Modal>
    </div>
  )
}

export default Store