import React from "react";

export default function PatientCard() {
  return (
    <div className="flex flex-col items-center">
      <h5 className="text-gray-500 text-xl">101</h5>
      <div className="h-56 w-44 bg-white border-green-400 border-4 rounded-xl flex items-center justify-center">
        <h4 className="text-xl text-gray-500">Patient Name</h4>
      </div>
    </div>
  );
}
