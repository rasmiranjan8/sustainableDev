import React from 'react';
import ImageSlider from '../Components/ImageSlider';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-white text-4xl font-bold mb-4">
          Welcome to Environment Friendly
        </h1>
        <p className="text-white text-lg mb-8">
          Join us in making the world a greener place with our eco-friendly solutions and products.
        </p>
        
      </div>
    </div>
  );
};

export default Home;
