import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto shadow-2xl">
         <Helmet>
            <title>Privacy Policy | AppVerse</title>
        </Helmet>
        <div className="max-w-[1100px] min-h-[83vh] mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-primary mb-6">Privacy Policy</h1>

            <p className="text-base-content mb-4">
                At <strong>AppVerse</strong>, your privacy is very important to us. This Privacy Policy 
                explains how we collect, use, and protect your personal information.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-2">1. Information We Collect</h2>
            <p className="text-base-content mb-4">
                We collect information when you register on our platform, such as your name, email address, 
                and profile photo. We may also collect data about the apps you install and your reviews.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-2">2. How We Use Your Information</h2>
            <p className="text-base-content mb-4">
                Your information is used to personalize your experience on AppVerse, improve our platform, 
                and allow you to interact with the app store by submitting reviews and ratings.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-2">3. Protecting Your Data</h2>
            <p className="text-base-content mb-4">
                We implement security measures to protect your personal data. However, no system 
                is 100% secure, and we cannot guarantee absolute protection.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-2">4. Sharing of Information</h2>
            <p className="text-base-content mb-4">
                We do not sell or trade your personal information. Your data is only shared with 
                trusted services required to run AppVerse (like Firebase authentication).
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-2">5. Changes to This Policy</h2>
            <p className="text-base-content mb-4">
                We may update this Privacy Policy from time to time. Changes will be posted on this page. 
                Continued use of AppVerse means you accept the new policy.
            </p>

            <p className="text-base-content mt-6">
                If you have any questions about this Privacy Policy, please contact us at <strong>privacy@appverse.com</strong>.
            </p>
        </div>
    </div>
  );
};

export default PrivacyPolicy;
