import React from "react";
import ImageSlider from "../Components/ImageSlider.jsx";

const Home = () => {
  return (
    <div>
      <div className="relative bg-grass-green min-h-screen">
        <div className="absolute inset-0 bg-grass-green  bg-opacity-50 flex flex-col items-center justify-center text-center pt-5 pb-20">
          <h1 className="text-royal-black text-4xl font-bold mb-4">
            Welcome to Environment Friendly
          </h1>
          <p className="text-black text-lg mb-8">
            <b> Sustainable Farming: Cultivating a Healthier Planet</b><br />
            Join us in making the world a greener place with our eco-friendly solutions and products.
          </p>
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default Home;
