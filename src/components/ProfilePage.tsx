import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
// import { ReactComponent as OldManIcon } from "../assets/oldmanicon.svg";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const [dob, setDob] = useState("01/01/1990");
  const [gender, setGender] = useState("Male");
  const [address, setAddress] = useState("123 Main Street, City, Country");
  const [familyMember, setFamilyMember] = useState("Rohit");

  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-200 to-pink-200 font-anton">
      <Navbar />
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4"
          onClick={goBack}
        >
          Back
        </button>
      </div>
      <div className="max-w-md mx-auto mt-8 px-4">
        <div className="text-center mb-6">
          {/* Profile Photo */}
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-2" />
          {/* <OldManIcon className="w-2 h-2" /> */}
          {/* Name */}
          <h2 className="text-2xl font-semibold mb-2">T Balaji</h2>
          {/* DOB, Gender, Address, Trusted Family Member */}
          <div className="text-left mt-12">
            <div className="mb-4">
              <div className=" px-2">
              Date of Birth
              </div>
              <input
                type="text"
                className="ml-2 border-b border-gray-400 focus:outline-none w-4/5 p-1 rounded-md mb-1"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            
            <div className="mb-4">
              <div className="px-2">Gender:</div>
              <input
                type="text"
                className="ml-2 border-b border-gray-400 focus:outline-none w-4/5 rounded-md mb-1 p-1"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <div className="px-2">Address:</div>
              <input
                type="text"
                className="ml-2 border-b border-gray-400 focus:outline-none p-1 rounded-md mb-1 w-4/5"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <div className="px-2">Trusted Family Member:</div>
              <input
                type="text"
                className="ml-2 border-b border-gray-400 focus:outline-none p-1 mb-1 rounded-md w-4/5"
                value={familyMember}
                onChange={(e) => setFamilyMember(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
