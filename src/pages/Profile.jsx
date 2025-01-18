import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const { user } = useSelector((state) => state.auth)

  return (
    <div className='flex flex-col justify-center pl-10 pt-10'>
        <img src={"https://cdn-icons-png.flaticon.com/512/9203/9203764.png"} alt="profile-img" width={200} height={200} className='mb-4'/>
        <h1 className='pb-2 text-lg'><strong>Name:</strong> {user.name}</h1>
        <p className=''><strong>User Id:</strong> {user.id}</p>
        <p className='pb-2'><strong>Role:</strong> {user.role}</p>
    </div>
  )
}

export default Profile