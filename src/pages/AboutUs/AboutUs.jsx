import { Helmet } from "react-helmet-async";
import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Dynamic Title */}
      <Helmet>
        <title>About Us | AppVerse</title>
      </Helmet>

      <h1 className="text-4xl font-bold text-center mb-6 text-primary/85">
        Welcome to <span className="gradient-text">AppVerse</span>
      </h1>

      <p className="text-lg text-base-content/80 mb-6 text-center max-w-3xl mx-auto">
        <span className="font-semibold text-primary/85">AppVerse</span> is not just an app store, it's a universe of endless possibilities! 
        Our platform is designed to help users discover trending, innovative, and useful apps that make everyday life smarter and easier.
        Whether you're looking to boost your productivity, learn something new, or just have fun — AppVerse has something for everyone.
      </p>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="bg-base-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-primary mb-2">
            🚀 Our Mission
          </h2>
          <p className="text-base-content">
            To revolutionize the way users explore apps by offering a seamless, user-friendly, and engaging platform where discovery, installation, and sharing of apps become effortless.
          </p>
        </div>

        <div className="bg-base-200 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-primary mb-2">
            🌐 Our Vision
          </h2>
          <p className="text-base-content">
            To build a global community where app enthusiasts can connect, review, and grow together — making AppVerse the go-to hub for trusted app recommendations.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <h2 className="text-3xl font-bold text-center text-primary/90 mt-16 mb-6">
        Why Choose AppVerse?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white border p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-primary mb-2">🔍 Curated Apps</h3>
          <p className="text-base-content/90">
            All apps are carefully selected and categorized to ensure quality and relevance for every user.
          </p>
        </div>

        <div className="bg-white border p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-primary mb-2">⭐ Real User Reviews</h3>
          <p className="text-base-content">
            Get insights from real users before installing. Share your own experiences and help others make better choices.
          </p>
        </div>

        <div className="bg-white border p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-primary mb-2">⚡ Instant Install & Uninstall</h3>
          <p className="text-base-content">
            Manage your favorite apps with a single click. Install and uninstall apps instantly while keeping your reviews intact.
          </p>
        </div>
      </div>

      {/* Our Commitment */}
      <div className="bg-base-200 mt-16 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-primary mb-4">🙌 Our Commitment</h2>
        <p className="text-base-content text-lg">
          At AppVerse, we are committed to providing a safe, reliable, and user-centric platform where every app discovery feels like finding a hidden gem.
          Your satisfaction and trust are our top priorities.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
