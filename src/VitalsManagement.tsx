import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

interface Vitals {
  weight: number;
  bloodPressure: string;
  sugarLevel: number;
}

const VitalsManagementPage: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const [vitals, setVitals] = useState<Vitals>({
    weight: 77,
    bloodPressure: "134/86",
    sugarLevel: 88
  });

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVitals({ ...vitals, weight: parseFloat(event.target.value) });
  };

  const handleBloodPressureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVitals({ ...vitals, bloodPressure: event.target.value });
  };

  const handleSugarLevelChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVitals({ ...vitals, sugarLevel: parseFloat(event.target.value) });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can handle the submission of vitals data, such as sending it to a backend server
    console.log("Submitted Vitals:", vitals);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-200 to-pink-200 font-anton">
      <Navbar />
      <div className="max-w-md mx-auto mt-8 px-4">
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4"
          onClick={goBack}
        >
          Back
        </button>
      </div>
        <h2 className="text-2xl  mb-4">Vitals</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt -2 mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Weight (kg)
            </label>
            <input
              type="number"
              step="0.1"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              value={vitals.weight}
              onChange={handleWeightChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Blood Pressure
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              value={vitals.bloodPressure}
              onChange={handleBloodPressureChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Sugar Level (mg/dL)
            </label>
            <input
              type="number"
              step="0.1"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              value={vitals.sugarLevel}
              onChange={handleSugarLevelChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default VitalsManagementPage;
