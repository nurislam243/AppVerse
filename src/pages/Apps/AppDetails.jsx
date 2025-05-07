import React, { useState } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

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
  };



  return (
    <div className="container mx-auto bg-base-100 mt-4 shadow-2xl rounded-xl">
      <div className="max-w-[1280px] mx-auto p-4">
      {/* Top Info */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">{app.name}</h1>
        <div className="flex items-center text-yellow-500">
          <FaStar /> <span className="ml-1 font-semibold">{app.rating}</span>
        </div>
      </div>

      {/* Banner */}
      <img src={app.banner} alt={app.name} className="w-full h-48 object-cover rounded-xl mb-4" />

      {/* App Info */}
      <div className="flex items-center gap-4 mb-4">
        <img src={app.thumbnail} alt={app.name} className="w-20 h-20 object-cover rounded-lg" />
        <div>
          <p className="font-semibold">Developer: {app.developer}</p>
          <p>Downloads: {app.downloads.toLocaleString()}</p>
          <p>
            Category:{" "}
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">{app.category}</span>
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4">{app.description}</p>

      {/* Features */}
      <h2 className="font-semibold mb-2">Features:</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        {app.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      {/* Install Button */}
      <button onClick={handleInstall} className="btn btn-primary mb-6">
        {
          installBtnText ? 'Install' : 'Uninstall'
        }
      </button>

      {/* Submit Review */}
      <div className="bg-gray-100 p-4 rounded mb-6">
        <h2 className="font-semibold mb-2">Submit Your Review:</h2>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review..."
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="number"
          value={reviewRating}
          onChange={handleRating}
          min={1}
          max={5}
          className="w-20 p-2 border rounded mr-2"
        />
        <button
          onClick={handleSubmitReview}
          className="btn btn-accent"
          disabled={activeReview}
        >
          Submit Review
        </button>
      </div>

      {/* Reviews */}
      <h2 className="font-semibold mb-2">Recent Reviews:</h2>
      {reviews.map((rev, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded mb-2">
          <p className="mb-1">{rev.comment}</p>
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
