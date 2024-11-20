import React, { useState, useEffect } from "react";

const BottomBar: React.FC = () => {
  const [emergency, setEmergency] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleEmergency = () => {
    setEmergency(!emergency);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const interval = setInterval(toggleEmergency, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 bg-red-500 text-white py-1 h-14 text-center ${
          emergency ? "flash" : ""
        }`}
        onClick={toggleModal}
      >
        Emergency!
      </div>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg">
            <p className="text-lg mb-4">Call Silambarasan?</p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  
                }}
              >
                Call
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomBar;
