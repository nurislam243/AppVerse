import React, { useEffect, useState } from 'react';
import {   createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, sendPasswordResetEmail} from 'firebase/auth';
import Swal from 'sweetalert2';
import { auth } from '../../firebase/firebase.init';
import { AuthContext } from '../AuthContext/AuthContext';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [loading,setLoading] = useState(true);


    const handleRegistration = (email, password, name, profileImage, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => { 
        const passwordUser = userCredential.user;
        setUser(passwordUser);

        // update profile
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: profileImage
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });

        navigate('/')
        })

        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                Swal.fire('Email Already Registered', 'This email is already registered! Please try logging in.', 'error');
              } else if (error.code === 'auth/invalid-email') {
                Swal.fire('Invalid Email', 'Please enter a valid email address.', 'error');
              } else {
                Swal.fire('Error', error.message, 'error');
              }
        });

    }

    // password reset
    const handlePasswordReset = (email) =>{
      sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire(
          'Password Reset Email Sent!',
          'Please check your email to reset your password.',
          'success'
        );
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          Swal.fire('Invalid Email', 'Please enter a valid email address.', 'error');
        } else if (error.code === 'auth/user-not-found') {
          Swal.fire('No User Found', 'No user found with this email.', 'error');
        } else if (error.code === 'auth/missing-email') {
          Swal.fire('Email field cannot be empty', 'Please provide your email address.', 'error');
        } else {
          Swal.fire('Error', error.message, 'error');
        }
      });
    }

    // update profile
    const handleUpdateProfile = (name, image) =>{
      updateProfile(auth.currentUser, {
        displayName: name, photoURL: image
      }).then(() => {
        setUser(auth.currentUser);
        Swal.fire({
          title: 'Profile Updated!',
          text: 'Your changes have been saved successfully.',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
      }).catch((error) => {
        // An error occurred
        // ...
      });

    }

    const handleLogout = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "Do you really want to log out?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log out!'
      }).then((result) => {
        if (result.isConfirmed) {
          signOut(auth)
            .then(() => {
              setUser(null);
              Swal.fire({
                icon: 'success',
                title: 'Logged Out!',
                text: 'You have been logged out successfully.',
                timer: 2000,
                showConfirmButton: false
              });
            })
            .catch((error) => {
              console.log(error);
              Swal.fire('Error', error.message, 'error');
            });
        }
      });
    };
   

    const authValue = { 
        handleRegistration,
        handleLogout,
        user,
        setUser,
        handleUpdateProfile,
        passwordError,
        confirmPasswordError,
        nameError,
        emailError,
        setPasswordError,
        setConfirmPasswordError,
        setNameError,
        setEmailError,
        handlePasswordReset,
        loading

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
      
        return () => {
          unsubscribe();
        }
      }, []);


    return (
        <AuthContext value={authValue}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;