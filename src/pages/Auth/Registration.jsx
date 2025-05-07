import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import Swal from 'sweetalert2';


const Registration = () => {
    const [passwordEye, setPasswordEye] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const { handleRegistration, 
        passwordError,
        nameError,
        emailError,
        setPasswordError,
        setConfirmPasswordError,
        setNameError,
        setEmailError,
        setUser
    } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleSubmitRegistration = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const profileImage = e.target.photoUrl.value;
        
        setPasswordError("");
        setConfirmPasswordError("");
        setNameError("");
        setEmailError("");
        

        if(name === ""){
            setNameError("Name required !!");
            return;
        }
        if(email === ""){
            setEmailError("Email Required !!");
            return;
        }
        if(password.length < 6){
            setPasswordError("Password must be equal or greater than 6 !!")
            return;
        }
        if(!/[a-z]/.test(password)){
            setPasswordError("password must contain at least one lower case letter !!")
            return
        }
        if(!/[A-Z]/.test(password)){
            setPasswordError("password must contain at least one upper case letter !!")
            return
        }

        
        handleRegistration(email, password, name, profileImage, navigate);
        
    }


    // Registration with Google
    const handleRegistrationGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const googleUser = result.user;
            setUser(googleUser);

            Swal.fire(
                'Sign In Successful', 
                `Welcome ${googleUser.displayName || 'User'}! Your account has been created successfully.`, 
                'success'
            );
            navigate("/");
        })
        .catch((error) => {
            let errorMessage = "";

            if (error.code === 'auth/popup-closed-by-user') {
                errorMessage = "Popup was closed before completing the sign in. Please try again.";
            } else if (error.code === 'auth/cancelled-popup-request') {
                errorMessage = "Sign-in popup was cancelled. Please try again.";
            } else {
                errorMessage = error.message;
            }

            Swal.fire('Error', errorMessage, 'error');
        });
    }

    return (
        <div className='pt-2 @min-[350px]:px-3 @min-[400px]:px-4 @min-[500px]:px-5 @min-[640px]:px-12 @min-[768px]:px-6 @min-[1000px]:px-12 @min-[1550px]:px-[120px] pb-[50px]  @min-[1750px]:px-[160px]'>
            <div className="w-full rounded-3xl @min-[496px]:pt-[18px] @min-[630px]:pt-[50px]  @min-[496px]:pb-8">
                <div className="flex flex-col max-w-md p-6 bg-white mx-auto text-black shadow-2xl rounded-2xl sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Registration</h1>
                        <p className="text-sm dark:text-gray-600">Please Registration to your account</p>
                    </div>
                    <button aria-label="Login with Google" onClick={handleRegistrationGoogle} type="button" className="flex items-center cursor-pointer rounded-[99px] justify-center w-full px-4 py-2.5 space-x-4 border focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <FcGoogle size={25}/>
                        <p>Continue with Google</p>
                    </button>
                    <div className="flex items-center w-full my-4">
                        <hr  className="w-full dark:text-gray-600" />
                        <p className="px-3 dark:text-gray-600">OR</p>
                        <hr  className="w-full dark:text-gray-600" />
                    </div>
                    <form noValidate="" onSubmit={handleSubmitRegistration} action="" className="">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                                <input type="text" name="name" id="name" placeholder="John Doe" className="w-full px-3 py-2 border rounded-[99px] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                <p className='text-sm text-red-500 mt-1.5'>{nameError}</p>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border  dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 rounded-[99px]" />
                                <p className='text-sm text-red-500 mt-1.5'>{emailError}</p>
                            </div>
                            <div>
                                <label htmlFor="photoUrl" className="block mb-2 text-sm">Photo URL</label>
                                <input type="photoUrl" name="photoUrl" id="photoUrl" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border  dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 rounded-[99px]" />
                                {/* <p className='text-sm text-red-500 mt-1.5'>{}</p> */}
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                </div>
                                <div className="relative">
                                    <input type={passwordEye ? "password" : "text"} name="password" id="password" placeholder="Enter password" className="w-full px-3 py-2 border rounded-[99px] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                    <span onClick={()=>setPasswordEye(!passwordEye)} className="absolute text-2xl mt-2 -ml-10">
                                        {
                                            passwordEye ? <FaEye /> : <FaEyeSlash/>
                                        }
                                    </span>
                                </div>
                                <p className='text-sm text-red-500 mt-1.5'>{passwordError}</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div>
                                <button type='submit' class="px-5 py-[9px] w-full relative border-2 border-primary rounded-[99px] group overflow-hidden font-medium inline-block cursor-pointer">
                                    <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-primary group-hover:h-full opacity-90"></span>
                                    <span class="relative group-hover:text-white">Registration</span>
                                </button>
                            </div>
                        </div>
                    </form>                    
                    <p className="px-6 text-sm text-center dark:text-gray-600 mt-2">Already have an account ? 
                        <Link rel="noopener noreferrer" to={'/login'} href="#" className="hover:underline dark:text-violet-600 text-blue-700"> Login</Link>.
                    </p>
                </div> 
            </div>          
        </div>
    );
};

export default Registration;