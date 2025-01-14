    import { useDispatch, useSelector } from 'react-redux';
    import { signup, resetStatus } from '../features/auth/authSlice';
    import getStartedImg from "../assets/get-started.png";
    import { Link, useNavigate } from 'react-router-dom';
    import { useEffect, useState } from 'react';
    import { toast} from 'react-toastify';

    // Validation needs to be added
    const Signup = () => {

        const [formData, setFormData] = useState({name: "", email: "", password: "", confirmPassword: ""});
        const dispatch = useDispatch();
        const { status, error } = useSelector((state) => state.auth);
        const [passwordError, setPasswordError] = useState("");
        const navigate = useNavigate();


        useEffect(() => {
            
            if (status === "succeeded") {
                toast.info("Account is created. Please login!");
                dispatch(resetStatus());
                navigate("/login")
            }
            if (status === "failed") {
                toast.error("Something went wrong. Try again later!");
            }
        }, [status]);

        const handleSubmit = (e) => {
            e.preventDefault();
            if (formData.password !== formData.confirmPassword) {
                setPasswordError("Password should be same")
            } else {
                setPasswordError("");
                dispatch(signup(formData));
            }
            
        }

    return (
        <div className='flex flex-row h-[calc(100vh-32px)] m-4 justify-around'>
            <div className='flex-1'>
                <img src={getStartedImg} alt="get-started-image" className='w-full h-full object-fill'/>
            </div>
            <div className='flex-1 m-auto px-20'>
                <h1 className='text-3xl font-semibold'>Sign Up</h1>
                <p className='text-xl font-normal text-gray-500 '>Don&apos;t have account</p>
                <form onSubmit={handleSubmit} className=''>
                    <input required type="text" placeholder='Enter your Name' name="name" id="name" className='block w-[80%] my-4 p-2 rounded-md border-2 border-black' value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} />
                    <input required type="text" placeholder='Enter your Email' name="email" id="email" className='block w-[80%] my-4 p-2 rounded-md border-2 border-black' value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} />
                    <input required type="password" placeholder='Enter your Password' name="password" id="password"  className={`block w-[80%] my-4 p-2 rounded-md border-2 ${passwordError === "" ? 'border-black' : 'border-red-600'}`}  value={formData.password} onChange={(e)=>setFormData({...formData, password: e.target.value})} />
                    <input required type="password" placeholder='Confirm password' name="confirm-password" id="confirm-password"  className={`block w-[80%] my-4 p-2 rounded-md border-2 ${passwordError === "" ? 'border-black' : 'border-red-600'}`}  value={formData.confirmPassword} onChange={(e)=>setFormData({...formData, confirmPassword: e.target.value})} />
                    <button type="submit" disabled={status === 'loading'} className='w-[80%] bg-[#0A2240] p-2 rounded-md'>
                        { status === 'loading' ? 'Signing up...' : 'Sign Up'}
                    </button>
                    { error && <p className='text-red-600'>{error}</p>}
                </form>
                <p className='mt-2 px-32'>Already have an account? 
                    <Link to={'/login'} className='text-[#0A2240] font-medium '>Login</Link>
                </p>
            </div>

        </div>
    )
    }


    export default Signup