// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../navbar";
// import * as d3 from "d3";


// interface FoodIntakeProps {
//   // Define your props interface here
// }

// const FoodIntake: React.FC<FoodIntakeProps> = () => {
//   const [consumedCalories, setConsumedCalories] = useState<number>(0);
//   const [pendingCalories, setPendingCalories] = useState<number>(1800);
//   const [foodItems, setFoodItems] = useState<{ name: string; calories: number }[]>([]);
//   const [selectedFood, setSelectedFood] = useState<string>(""); // Selected food from dropdown

//   const navigate = useNavigate();

//   const goBack = () => {
//     navigate("/");
//   };

//   const addFoodItem = () => {
//     // Find the selected food from the predefined food items
//     const food = predefinedFoodItems.find((item) => item.name === selectedFood);
//     if (food) {
//       setFoodItems([...foodItems, food]);
//       setConsumedCalories(consumedCalories + food.calories);
//       setPendingCalories(pendingCalories - food.calories);
//     }
//   };

// // D3 Pie Chart creation function
// const createPieChart = () => {
//   d3.select("#pie-chart").select("svg").remove(); // Clear existing chart
//   const data = [consumedCalories, pendingCalories];
//   const width = 200;
//   const height = 200;
//   const radius = Math.min(width, height) / 2;

//   const svg = d3.select("#pie-chart")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .append("g")
//     .attr("transform", `translate(${width / 2}, ${height / 2})`);

//   const pie = d3.pie<number>()
//     .value((d) => d as number)
//     .sort(null);

//   const arc = d3.arc<d3.PieArcDatum<number>>()
//     .innerRadius(radius * 0.4) // Adjusted inner radius
//     .outerRadius(radius);

//   const arcs = svg.selectAll("arc")
//     .data(pie(data))
//     .enter()
//     .append("g")
//     .attr("class", "arc");

//   arcs.append("path")
//     .attr("fill", (d, i) => i === 0 ? getFillColor() : "#dfc3fa") // Consumed calories color dynamically
//     .attr("d", arc);

//   // Append text for percentage inside the pie chart
//   svg.append("text")
//     .attr("text-anchor", "middle")
//     .attr("font-size", "20px")
//     .text(`${((consumedCalories / 1800) * 100).toFixed(0)}%`)
//     .attr("dy", "0.35em") // Adjust vertical position
//     .attr("x", 0) // Center horizontally
//     .attr("y", radius * 0.01) // Adjust vertical position
//     .style("fill", getFillColor()); // Consumed calories color dynamically

//   function getFillColor() {
//     const percentage = (consumedCalories / 1800) * 100;
//     if (percentage < 50) return "#00cc44"; // Green
//     else if (percentage >= 50 && percentage < 75) return "#ff9933"; // Orange
//     else return "#ff0000"; // Red
//   }
// };


  

//   // Predefined food items with calorie levels
//   const predefinedFoodItems = [
//     { name: "Dosa Chutney", calories: 200 },
//     { name: "Biriyani", calories: 900 },
//     { name: "Idly Sambar", calories: 400 },
//     // Add more predefined food items as needed
//   ];

//   useEffect(() => {
//     createPieChart();
//   }, [consumedCalories, pendingCalories]);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-violet-200 to-pink-200 font-anton">
//       <Navbar />
//       <div className="flex justify-end">
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4"
//           onClick={goBack}
//         >
//           Back
//         </button>
//       </div>
//       <div className="min-h-screen">
//         {/* Circular Meter */}
//         <div id="pie-chart" className="flex justify-center items-center h-40" />
//         <div className="text-lg text-center text-gray-600 mt-10 mx-auto">{consumedCalories} kcal / 1800 kcal</div>

//         {/* Add Food Item */}
//         <div className="max-w-md mx-auto mt-8 px-4">
//           <select
//             className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
//             value={selectedFood}
//             onChange={(e) => setSelectedFood(e.target.value)}
//           >
//             <option value="">Select food</option>
//             {predefinedFoodItems.map((item, index) => (
//               <option key={index} value={item.name}>
//                 {item.name}
//               </option>
//             ))}
//           </select>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded-md"
//             onClick={addFoodItem}
//           >
//             Add
//           </button>
//         </div>

//         {/* Food Items List */}
//         <div className="max-w-md mx-auto px-4 mt-4">
//           <h2 className="text-lg  mb-4">Today's Food Items</h2>
//           <ul className="border border-gray-300 rounded-md divide-y divide-gray-300">
//             {foodItems.map((item, index) => (
//               <li key={index} className="px-4 py-2">
//                 {item.name} - {item.calories} kcal
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodIntake;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import * as d3 from "d3";

interface FoodIntakeProps {
  // Define your props interface here
}

const FoodIntake: React.FC<FoodIntakeProps> = () => {
  const [consumedCalories, setConsumedCalories] = useState<number>(0);
  const [pendingCalories, setPendingCalories] = useState<number>(1800);
  const [foodItems, setFoodItems] = useState<{ name: string; calories: number }[]>([]);
  const [selectedFood, setSelectedFood] = useState<string>(""); // Selected food from dropdown

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const addFoodItem = () => {
    // Find the selected food from the predefined food items
    const food = predefinedFoodItems.find((item) => item.name === selectedFood);
    if (food) {
      setFoodItems([...foodItems, food]);
      setConsumedCalories(consumedCalories + food.calories);
      setPendingCalories(pendingCalories - food.calories);
    }
  };

  const removeFoodItem = (index: number) => {
    const updatedFoodItems = [...foodItems];
    const removedItem = updatedFoodItems.splice(index, 1)[0];
    setFoodItems(updatedFoodItems);
    setConsumedCalories(consumedCalories - removedItem.calories);
    setPendingCalories(pendingCalories + removedItem.calories);
  };

  // D3 Pie Chart creation function
  const createPieChart = () => {
    d3.select("#pie-chart").select("svg").remove(); // Clear existing chart
    const data = [consumedCalories, pendingCalories];
    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select("#pie-chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie<number>()
      .value((d) => d as number)
      .sort(null);

    const arc = d3.arc<d3.PieArcDatum<number>>()
      .innerRadius(radius * 0.4) // Adjusted inner radius
      .outerRadius(radius);

    const arcs = svg.selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs.append("path")
      .attr("fill", (d, i) => i === 0 ? getFillColor() : "#dfc3fa") // Consumed calories color dynamically
      .attr("d", arc);

    // Append text for percentage inside the pie chart
    svg.append("text")
      .attr("text-anchor", "middle")
      .attr("font-size", "20px")
      .text(`${((consumedCalories / 1800) * 100).toFixed(0)}%`)
      .attr("dy", "0.35em") // Adjust vertical position
      .attr("x", 0) // Center horizontally
      .attr("y", radius * 0.01) // Adjust vertical position
      .style("fill", getFillColor()); // Consumed calories color dynamically

    function getFillColor() {
      const percentage = (consumedCalories / 1800) * 100;
      if (percentage < 50) return "#00cc44"; // Green
      else if (percentage >= 50 && percentage < 75) return "#ff9933"; // Orange
      else return "#ff0000"; // Red
    }
  };

  // Predefined food items with calorie levels
  const predefinedFoodItems = [
    { name: "Dosa Chutney", calories: 200 },
    { name: "Biriyani", calories: 900 },
    { name: "Idly Sambar", calories: 400 },
    // Add more predefined food items as needed
  ];

  useEffect(() => {
    createPieChart();
  }, [consumedCalories, pendingCalories]);

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
      <div className="min-h-screen">
        {/* Circular Meter */}
        <div id="pie-chart" className="flex justify-center items-center h-40" />
        <div className="text-lg text-center text-gray-600 mt-10 mx-auto">{consumedCalories} kcal / 1800 kcal</div>

        {/* Add Food Item */}
        <div className="max-w-md mx-auto mt-8 px-4">
          <select
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
            value={selectedFood}
            onChange={(e) => setSelectedFood(e.target.value)}
          >
            <option value="">Select food</option>
            {predefinedFoodItems.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={addFoodItem}
          >
            Add
          </button>
        </div>

        {/* Food Items List */}
        <div className="max-w-md mx-auto px-4 mt-4">
          <h2 className="text-lg mb-4">Today's Food Items</h2>
          <ul className="border border-gray-300 rounded-md divide-y divide-gray-300">
            {foodItems.map((item, index) => (
              <li key={index} className="px-4 py-2 flex justify-between">
                <div>
                  {item.name} - {item.calories} kcal
                </div>
                <button
                  className="text-red-500"
                  onClick={() => removeFoodItem(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodIntake;
