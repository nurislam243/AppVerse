import React from "react";
// import { Helmet } from "react-helmet-async";

const DeveloperResources = () => {
  return (
    <div className="container mx-auto shadow-2xl">
        {/* <Helmet>
            <title>Developer Resources | AppVerse</title>
        </Helmet> */}
        <div className="max-w-[1100px] min-h-[83vh] mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-primary mb-6">Developer Resources</h1>

            <p className="text-base-content mb-4">
                Welcome to the <strong>AppVerse Developer Resources</strong> page. Here you'll find tools, 
                documentation, and support to help you build, submit, and manage your apps on AppVerse.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-2">1. App Submission Guidelines</h2>
            <p className="text-base-content mb-4">
                Before submitting your app, please review our guidelines to ensure your app meets our quality 
                standards and user expectations.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-2">2. API Access</h2>
            <p className="text-base-content mb-4">
                Access AppVerse APIs to manage app details, reviews, and download statistics. Contact us 
                at <strong>api@appverse.com</strong> to get started.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-2">3. Developer Support</h2>
            <p className="text-base-content mb-4">
                Our developer support team is ready to help you with technical questions and app approval 
                processes. Reach out at <strong>support@appverse.com</strong>.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-2">4. Community Forum</h2>
            <p className="text-base-content mb-4">
                Join our community forum to connect with other developers, share knowledge, and get tips 
                on improving your apps.
            </p>

            <p className="text-base-content mt-6">
                Happy developing! 🚀 The AppVerse team is excited to see what you create.
            </p>
        </div>        
    </div>
  );
};

export default DeveloperResources;
