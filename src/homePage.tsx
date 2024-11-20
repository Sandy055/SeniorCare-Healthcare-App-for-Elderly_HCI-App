import React, { useState, useEffect } from "react";
import Navbar from "./navbar";

const HomePage: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger fade in effect after component mounts
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-200 to-pink-200">
      <Navbar />
      <div className={`text-center text-3xl mt-24 font-bold ${fadeIn ? "fade-in" : ""}`}>
          Welcome, Mr. T Balaji        
      </div>
      <div className="w-4/5 rounded-2xl h-1/2 mx-auto mt-48 px-4 py-8 bg-white bg-opacity-40 from-sky-50 via-cyan-50 to-fuchsia-50">
        {/* Fade in welcome message */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
          {/* Menu items */}
          <a href="/medicines">
            <div className="bg-white h-28 rounded-md shadow-md shadow-slate-600">
              <h2 className="text-xl text-center pt-10">Medicines</h2>
            </div>
          </a>

          <a href="/appointments">
            <div className="bg-white h-28 py-4 shadow-md shadow-slate-600 rounded-lg">
              <h2 className="text-xl text-center pt-6">Appointments</h2>
            </div>
          </a>

          <a href="/vitals">
            <div className="bg-white h-28  shadow-md shadow-slate-600 rounded-lg">
              <h2 className="text-xl text-center pt-10">Vitals</h2>
            </div>
          </a>

          <a href="/foodIntake">
            <div className="bg-white h-28 w-full p-4 shadow-md shadow-slate-600 rounded-lg">
              <h2 className="text-xl text-center pt-6">Food Intake</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
