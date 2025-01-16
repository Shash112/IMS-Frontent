import { useDispatch, useSelector } from 'react-redux';
import { login, resetStatus } from '../features/auth/authSlice';
import getStartedImg from "../assets/get-started.png";
import logo from "../assets/Logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {

    const [formData, setFormData] = useState({email: "", password: ""});
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (status === "succeeded") {
            toast.info("Login successful");
            dispatch(resetStatus());
            navigate("/dashboard")
        }
        if (status === "failed") {
            toast.error("Something went wrong. Try again later!");
        }
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData));
    }

  return (
    <div className='flex flex-row h-[calc(100vh-32px)] m-4 justify-around'>
        <div className='flex-1'>
            <img src={getStartedImg} alt="get-started-image" className='w-full h-full object-fill'/>
        </div>
        <div className='flex-1 m-auto px-20'>
            <img src={logo} alt="get-started-image" width={400} height={200} className='m-auto pr-[20%]'/>
            <h1 className='text-3xl font-semibold'>Login</h1>
            <p className='text-xl font-normal text-gray-500 '>I am already a member at inventory</p>
            <form onSubmit={handleSubmit} className=''>
                <input type="text" placeholder='Enter your Email' name="email" id="email" className='block w-[80%] my-4 p-2 rounded-md border-2' value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} />
                <input type="password" placeholder='Enter your Password' name="password" id="password"  className='block w-[80%] my-4 p-2 rounded-md border-2'  value={formData.password} onChange={(e)=>setFormData({...formData, password: e.target.value})} />
                <button type="submit" disabled={status === 'loading'} className='w-[80%] bg-[#0A2240] p-2 rounded-md text-white'>
                    { status === 'loading' ? 'Logging in...' : 'Login'}
                </button>
                { error && <p className='text-red-600'>{error}</p>}
            </form>
            <p className='mt-2 px-32'>Don&apos;t have account? 
                <Link to={'/signup'} className='text-[#0A2240] font-medium '>Sign Up</Link>
            </p>
        </div>
    </div>
  )
}

export default Login