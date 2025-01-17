import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authCheck, resetStatus } from '../features/auth/authSlice';
import Loading from './Loading';

const ProtectedRoute = ({children}) => {

    // const dispatch = useDispatch();
    const { isAuthenticated, status } = useSelector((state) => state.auth)

    // useEffect(()=>{
    // dispatch(authCheck());
    //   return () => {
    //     dispatch(resetStatus());
    //   }
    // },[dispatch])


    if (status === "loading") {
        return <Loading />
    }

    if (isAuthenticated) {
        return children;
    } else {
        // alert("Returning to login")
      return <Navigate to={'/login'} />
    }
}

export default ProtectedRoute