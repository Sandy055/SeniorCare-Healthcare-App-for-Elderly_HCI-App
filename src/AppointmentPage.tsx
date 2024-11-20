import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "./Calendar";
import Navbar from "./navbar";

const AppointmentPage: React.FC = () => {
    const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };
  const [nextAppointment, setNextAppointment] = useState<string | null>(null);


  const fetchNextAppointment = () => {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 5);
    nextWeek.setHours(0, 0, 0, 0);
    const nextWeekDateString = nextWeek.toLocaleDateString('en-UK').split(',')[0]
    setNextAppointment(nextWeekDateString);
  };
  
  useState(() => {
    fetchNextAppointment();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 bg-gradient-to-r from-violet-200 to-pink-200 font-anton">
      <Navbar/>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-4"
          onClick={goBack}
        >
          Back
        </button>
      </div>
      
      <Calendar nextapp={nextAppointment}/>
      <div className="max-w-md mx-auto mt-8 px-4 bg-white bg-opacity-40 w-max px-6 py-4 rounded-lg">
        <h2 className="text-2xl text-center bg-opacity-50 mb-4">Next Appointment</h2>
        {nextAppointment ? (
          <p className="text-lg text-center">{nextAppointment} at Apollo Hospital <br></br>Greams Rd. Doctor Velu</p>
        ) : (
          <p className="text-lg">No Appointments</p>
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;
