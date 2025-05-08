import React, { useState } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AppDetails = () => {
    const apps = useLoaderData();
  const { appId } = useParams();
  const app = apps.find((item) => item.id === appId);

  const [reviews, setReviews] = useState(app.reviews || []);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [installBtnText, setInstallBtnText] = useState(true);
  const [activeReview, setActiveReview] = useState(true);

  const handleInstall = () =>{
    setActiveReview(false);
    setInstallBtnText(!installBtnText);

  }

  const handleRating = (e) =>{
    const value = e.target.value;
    if(value < 0 || value > 5){
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Rating!',
        text: 'Please provide a rating between 1 and 5.',
      });
      
      return;
    }
    else{
      setReviewRating(value);
    }

  }

  const handleSubmitReview = () => {
    if(reviewText == ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please write a review before submitting.',
      });
      return;
    }
    if(reviewRating == 0){
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Rating!',
        text: 'Please provide a rating between 1 and 5.',
      });
      return;
    }
    const newReview = { user: "current_user", rating: reviewRating, comment: reviewText };
    setReviews([newReview, ...reviews]);
    setReviewText("");
    setReviewRating(5);

    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Review submitted successfully!',
    });
  };



  return (
    <div className="container mx-auto mt-4 shadow-2xl">
      <Helmet>
          <title>{app?.name ? `${app.name} | AppVerse` : "Apps Details | AppVerse"}</title>
      </Helmet>
      <div className="max-w-[1300px] mx-auto px-2 sm:px-4 pb-5 lg:pb-9 pt-6">
      {/* Top Info */}
      <div className="flex items-center justify-between mb-4 lg:mb-7">
        <h1 className="text-2xl lg:text-3xl font-bold">{app.name}</h1>
        <div className="flex items-center text-lg lg:text-xl text-yellow-500">
          <FaStar /> <span className="ml-1 font-semibold">{app.rating}</span>
        </div>
      </div>

      {/* Banner */}
      <img src={app.banner} alt='' className="w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96  rounded-xl mb-4" /> 

      {/* App Info */}
      <div className="flex items-center gap-2 @min-[350px]:gap-4 @min-[640px]:gap-6 @min-[768px]:gap-7 @min-[1024px]:gap-8 @min-[1536px]:gap-10 mb-4 md:mb-6 md:mt-5 lg:mt-7 mt-3 xl:mt-8 2xl:mt-9">
        <img src={app.thumbnail} alt='' className="w-20 h-20 @min-[580px]:w-24 @min-[580px]:h-24 @min-[900px]:w-28 @min-[1200px]:w-32 @min-[1200px]:h-32 @min-[900px]:h-28 @min-[1500px]:w-36 @min-[1500px]:h-36 object-cover rounded-lg" />
        <div className="sm:space-y-1 md:space-y-2 lg:space-y-3">
          <p className="font-semibold sm:text-xl lg:text-[22px]">
            <span className="text-base-content/85 sm:font-bold sm:mr-1.5">Developer:</span> {app.developer}
          </p>
          <p className="lg:text-[22px]">
            <span className="text-base-content/85 sm:font-bold sm:mr-1.5">Downloads:</span> {app.downloads.toLocaleString()}
          </p>
          <p className="lg:text-[22px]">
            <span className="text-base-content/85 sm:font-bold">Category:{" "}</span>
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">{app.category}</span>
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-base-content/90 sm:text-xl mb-4">{app.description}</p>

      {/* Features */}
      <h2 className="font-bold sm:text-2xl text-base-content/80 mb-2">Features:</h2>
      <ul className="list-disc list-inside lg:text-lg text-base-content/90 mb-4">
        {app.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      {/* Install Button */}
      <button onClick={handleInstall} className="btn btn-primary sm:mt-2 sm:text-lg mb-6">
        {
          installBtnText ? 'Install' : 'Uninstall'
        }
      </button>

      {/* Submit Review */}
      <div className="bg-white p-4 rounded mb-6">
        <h2 className="font-bold mb-2 sm:text-2xl text-base-content/75 sm:mb-4">Submit Your Review:</h2>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review..."
          className="w-full p-2 border rounded sm:text-lg mb-2"
        />
        <input
          type="number"
          value={reviewRating}
          onChange={handleRating}
          min={1}
          max={5}
          className="w-20 p-2 border sm:text-lg rounded mr-2"
        />
        <button
          onClick={handleSubmitReview}
          className="btn btn-accent sm:text-lg"
          disabled={activeReview}
        >
          Submit Review
        </button>
      </div>

      {/* Reviews */}
      <h2 className="font-bold text-base-content/75 sm:text-xl mb-2">Recent Reviews:</h2>
      {reviews.map((rev, index) => (
        <div key={index} className="bg-white p-4 rounded mb-2 sm:mb-3 lg:mb-5">
          <p className="mb-1 text-base-content/90 sm:text-lg">{rev.comment}</p>
          <div className="flex items-center text-yellow-500">
            {Array.from({ length: rev.rating }, (_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AppDetails;
