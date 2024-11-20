import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

function ControlledCheckbox({ id, name, children, defaultChecked = false }) {
  // state
  const [checked, setChecked] = React.useState(defaultChecked);
  
  return (
    <div className="my-5">
      <input type="checkbox" id={id} name={name} checked={checked} onChange={() => setChecked(!checked)} />
      <label htmlFor={id} className="ml-1">{children}</label>
    </div>
  );
};

const MedicineMonitorPage: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const [morningMedicines] = useState<{
    beforeFood: string[];
    afterFood: string[];
  }>({
    beforeFood: ["Medicine 1 Before Food", "Medicine 2 Before Food"],
    afterFood: ["Medicine 3 After Food", "Medicine 4 After Food"],
  });

  const [noonMedicines] = useState<{
    beforeFood: string[];
    afterFood: string[];
  }>({
    beforeFood: ["Medicine 5 Before Food", "Medicine 6 Before Food"],
    afterFood: ["Medicine 7 After Food", "Medicine 8 After Food"],
  });

  const [nightMedicines] = useState<{
    beforeFood: string[];
    afterFood: string[];
  }>({
    beforeFood: ["Medicine 9 Before Food", "Medicine 10 Before Food"],
    afterFood: ["Medicine 11 After Food", "Medicine 12 After Food"],
  });

  const handleFoodDivClick = (medicines: string[], foodType: string) => {
    const updatedMedicines = { ...medicines };
    updatedMedicines.map((_, index) => {
      updatedMedicines[index] = !updatedMedicines[index];
      return null;
    });
    console.log(`${foodType} clicked`);
  };

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

      <div className="max-w-md mt-6 p-4 ml-8 bg-white bg-opacity-50 w-10/12 rounded-lg ">
        <h2 className="text-2xl text-center mb-4">Morning</h2>
        <div className="grid grid-cols-2">
          <div className="bg-gray-100 mr-2 p-2 rounded-lg">
            <h3 className="text-xl text-center mb-2">Before Food</h3>
             Nothing to take !
          </div>
          <div className="bg-gray-100 mr-2 p-2 rounded-lg">
            <h3 className="text-xl text-center mb-2">After Food</h3>
            <ControlledCheckbox id="morning-after-food" name="morning-after-food">
              Lopparet 5mg
            </ControlledCheckbox>
            <ControlledCheckbox id="morning-after-food-2" name="morning-after-food-2">
              Bvita-250
            </ControlledCheckbox>
          </div>
        </div>
      </div>

      <div className="max-w-md ml-8 mt-8 py-2  px-4 bg-white bg-opacity-50 w-10/12 rounded-lg">
        <h2 className="text-2xl text-center mb-4">Noon</h2>
        <div className="grid grid-cols-2">
          <div className="bg-gray-100 mr-2 p-2 rounded-lg">
            <h3 className="text-xl text-center mb-2">Before Food</h3>
            <ControlledCheckbox id="noon-before-food" name="noon-before-food">
              evion 15mg - 10 mins before food
            </ControlledCheckbox>
            <ControlledCheckbox id="noon-before-food-2" name="noon-before-food-2">
              Rozavel 10mg
            </ControlledCheckbox>
          </div>
          <div className="bg-gray-100 mr-2 p-2 rounded-lg">
            <h3 className="text-xl text-center mb-2">After Food</h3>
            <ControlledCheckbox id="noon-after-food" name="noon-after-food">
              1 Tbsp gaviscon if needed
            </ControlledCheckbox>
          </div>
        </div>
      </div>

      <div className="max-w-md ml-8 mt-8 p-4 flex flex-col col-2 bg-white bg-opacity-50 w-10/12 rounded-lg">
        <h2 className="text-2xl text-center mb-4">Night</h2>
        <div className="grid grid-cols-2">
          <div className="bg-gray-100 mr-2 p-2 rounded-lg">
            <h3 className="text-xl text-center mb-2">Before Food</h3>
            <ControlledCheckbox id="night-before-food" name="night-before-food">
              Sporlac-DS
            </ControlledCheckbox>
            <ControlledCheckbox id="night-before-food-2" name="night-before-food-2">
              Vertin 10mg
            </ControlledCheckbox>
          </div>
          <div className="bg-gray-100 mr-2 p-2 rounded-lg">
            <h3 className="text-xl text-center mb-2">After Food</h3>
            <ControlledCheckbox id="night-after-food" name="night-after-food">
              Lopparet 5mg
            </ControlledCheckbox>
            <ControlledCheckbox id="night-after-food" name="night-after-food">
              Ensure sugar-free with water
            </ControlledCheckbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineMonitorPage;
