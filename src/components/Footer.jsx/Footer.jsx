import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 mt-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo & Name */}
                <div>
                <div className="flex items-center gap-1.5">
                    <img src="/public/AppVerseLogo.png" className='w-12' alt="logo" />
                    <h2 className="text-2xl font-bold mb-2">AppVerse</h2>
                </div>
                <p className="text-sm">Your favorite place to discover and review apps!</p>
                </div>

                {/* Links */}
                <div>
                <h3 className="font-semibold mb-2">Links</h3>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:underline">Terms of Service</a></li>
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">Developer Resources</a></li>
                </ul>
                </div>

                {/* Social Media */}
                <div>
                <h3 className="font-semibold mb-2">Follow Us</h3>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:underline">Facebook</a></li>
                    <li><a href="#" className="hover:underline">Twitter</a></li>
                    <li><a href="#" className="hover:underline">Instagram</a></li>
                </ul>
                </div>

                {/* Contact */}
                <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-sm">Email: support@appverse.com</p>
                <p className="text-sm">Phone: +123-456-7890</p>
                </div>

            </div>

            <hr />

            {/* Bottom text */}
            <div className="text-center text-sm mt-6">
                &copy; {new Date().getFullYear()} AppVerse. All rights reserved.
            </div>
        </footer>

    );
};

export default Footer;