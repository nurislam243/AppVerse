import React from "react";
// primarymport { Helmet } from "react-helmet-async";


const TermsOfService = () => {
  return (
    <div className="container mx-auto shadow-2xl">
        {/* <Helmet>
        <title>Terms of Service | AppVerse</title>
      </Helmet> */}
        <div className="max-w-[1100px] min-h-[83vh] mx-auto px-4 py-10">
        
            <h1 className="text-3xl font-bold text-primary mb-6">Terms of Service</h1>

            <p className="text-base-content mb-4">
                Welcome to <strong>AppVerse</strong>. By using our platform, you agree to the following terms and conditions. 
                Please read them carefully before accessing our services.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-2">1. Use of Our Platform</h2>
            <p className="text-base-content mb-4">
                You may browse and discover apps on AppVerse for personal use. You must not misuse 
                the platform or attempt to hack, disrupt, or access unauthorized sections.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-2">2. Account Responsibility</h2>
            <p className="text-base-content mb-4">
                Users are responsible for maintaining the confidentiality of their account and password. 
                Any activity under your account will be your responsibility.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-2">3. App Reviews and Ratings</h2>
            <p className="text-base-content mb-4">
                All submitted reviews should be genuine and based on your real experience with the apps. 
                Fake or abusive reviews will be removed, and your account may be suspended.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-2">4. Limitation of Liability</h2>
            <p className="text-base-content mb-4">
                AppVerse is not responsible for any damages caused by third-party apps listed on our platform. 
                Use apps at your own discretion.
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-2">5. Changes to Terms</h2>
            <p className="text-base-content mb-4">
                We may update these terms occasionally. Continued use of AppVerse after changes 
                implies acceptance of the new terms.
            </p>

            <p className="text-base-content mt-6">
                If you have any questions about these Terms of Service, please contact us at <strong>support@appverse.com</strong>.
            </p>
        </div>
    </div>
  );
};

export default TermsOfService;
