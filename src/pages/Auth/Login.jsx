import React, { useContext, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { auth } from '../../firebase/firebase.init';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const [passwordEye, setPasswordEye] = useState(true)
    const { handlePasswordReset, setUser} = useContext(AuthContext);
    const emailRef = useRef();
    const location = useLocation();
    const from = location?.state?.from;
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const submitHandlePasswordReset = () =>{
        const email = emailRef.current.value;
        handlePasswordReset(email)
    }

    // login with email and password

    const handleLoginWithPassword =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        if(email === ""){
            Swal.fire({
                icon: 'error',
                title: 'Email Required!',
                text: '⚠️ Please enter your email address!',
            });
            return;
        }
        if(password === ""){
            Swal.fire({
                icon: 'error',
                title: 'Password Required!',
                text: '⚠️ Please enter your password!',
            });
            return;
        }

            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {                
                const passwordLoginUser = userCredential.user;                
                setUser(passwordLoginUser);               
                Swal.fire('Login Successful', 'You have successfully logged in.', 'success');
                navigate(from?from:"/");
                
            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/missing-email':
                        Swal.fire('Missing Email', 'Please enter your email address before logging in.', 'error');
                        break;
                    case 'auth/invalid-email':
                        Swal.fire('Invalid Email', 'The email address format is invalid. Please enter a valid email.', 'error');
                        break;
                    case 'auth/user-not-found':
                        Swal.fire('User Not Found', 'No account found with this email. Please check or register first.', 'error');
                        break;
                    case 'auth/wrong-password':
                        Swal.fire('Wrong Password', 'The password you entered is incorrect. Please try again.', 'error');
                        break;
                    default:
                        Swal.fire('Error', error.message, 'error');
                        break;
                }
            });
    }


    // login with google
    const handleLoginGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const googleUser = result.user;
          setUser(googleUser);
          Swal.fire('Login Successful', 'You have successfully logged in.', 'success');
          navigate(from?from:"/");
        }).catch((error) => {
          Swal.fire('Error', error.message, 'error');
        });
    }
    return (
        <div className='pt-2 @min-[350px]:px-3 @min-[400px]:px-4 @min-[500px]:px-5 @min-[640px]:px-12 @min-[768px]:px-6 @min-[1000px]:px-12 @min-[1550px]:px-[120px] pb-[50px] md:pb-[65px] xl:pb-[100px]  @min-[1750px]:px-[160px]'>
            <div className="w-full rounded-3xl @min-[496px]:pt-[18px] @min-[630px]:pt-[50px]  @min-[496px]:pb-8 @min-[800px]:pb-[70px]">
            <div className="w-full max-w-md p-4 bg-white mx-auto text-black shadow-2xl rounded-2xl  sm:p-8  dark:bg-gray-50 dark:text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center dark:text-gray-600">Don't have account?
                <Link to={'/registration'} rel="noopener noreferrer" className="focus:underline hover:underline text-blue-500"> Sign up here</Link>
                </p>
                
                <form noValidate="" onSubmit={handleLoginWithPassword}  action="" className="space-y-8 mt-7">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" ref={emailRef} placeholder="Your email address" className="w-full rounded-[99px] px-3 py-2 border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" onClick={submitHandlePasswordReset} className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <input type={passwordEye ? "password" : "text"}  name="password" id="password" placeholder="Enter Password" className="w-full px-3 py-2 border  dark:border-gray-300 rounded-[99px] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" autocomplete="current-password" />
                                
                                <span onClick={()=>setPasswordEye(!passwordEye)} className="absolute text-2xl mt-2 -ml-10">
                                    {
                                       passwordEye ? <FaEye /> : <FaEyeSlash/>
                                    }
                                </span>
                                
                            </div>
                        </div>
                    </div>
                    <button type='submit' class="px-5 py-[10px] w-full bg-primary text-white relative rounded-[99px] group overflow-hidden font-medium inline-block cursor-pointer">
                        <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:bg-accent group-hover:h-full opacity-90"></span>
                        <span class="relative group-hover:text-white">Login</span>
                    </button>
                </form>

                <div className="flex items-center w-full mt-4">
                    <hr  className="w-full dark:text-gray-600" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr  className="w-full dark:text-gray-600" />
                </div>

                <div className="my-6 space-y-4">
                    <button aria-label="Login with Google" onClick={handleLoginGoogle} type="button" className="flex items-center cursor-pointer rounded-[99px] justify-center w-full px-4 py-2.5 space-x-4 border focus:ring-2 focus:ring-offset-1">
                        <FcGoogle size={25}></FcGoogle>
                        <p>Login with Google</p>
                    </button>
                </div>
            </div> 
            </div>          
        </div>
    );
};

export default Login;