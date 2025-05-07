import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content pt-14 pb-8 mt-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-y-8">

                {/* Logo & Name */}
                <div>
                <div className="flex items-center gap-1.5">
                    <img className='w-12' src="/public/AppVerseLogo.png" alt="logo" />
                    <h2 className="gradient-text text-3xl font-bold">AppVerse</h2>
                </div>
                <p className="text-sm mt-3">Your favorite place to discover and review apps!</p>
                </div>

                {/* Links */}
                <div>
                <h3 className="font-bold text-lg mb-2 text-base-100">Links</h3>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:underline">Terms of Service</a></li>
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">Developer Resources</a></li>
                </ul>
                </div>

                {/* Social Media */}
                <div>
                <h3 className="font-bold text-lg mb-2 text-base-100">Follow Us</h3>
                <ul className="space-y-1">
                    <li><a href="https://www.facebook.com/nur.islam.568309/" className="hover:underline flex items-center gap-1.5" target='_blank'> <FaFacebook /> Facebook</a></li>
                    <li><a href="https://x.com/MdNurIslam55434" className="hover:underline flex items-center gap-1.5" target='_blank'><FaTwitter></FaTwitter> Twitter</a></li>
                    <li><a href="https://www.instagram.com/nur_islam_cr/" className="hover:underline flex items-center gap-1.5" target='_blank'><FaInstagram></FaInstagram> Instagram</a></li>
                </ul>
                </div>

                {/* Contact */}
                <div>
                <h3 className="font-bold text-lg mb-2 text-base-100">Contact</h3>
                <p className="text-sm">Email: support@appverse.com</p>
                <p className="text-sm">Phone: +123-456-7890</p>
                </div>

            </div>

            <hr className='container mx-auto mb-5 mt-9'/>

            {/* Bottom text */}
            <div className="text-center text-sm mt-6">
                &copy; {new Date().getFullYear()} AppVerse. All rights reserved.
            </div>
        </footer>

    );
};

export default Footer;