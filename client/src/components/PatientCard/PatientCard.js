import React from "react";

export default function PatientCard({ key, data }) {
  return (
    <div className="flex flex-col items-center">
      <h5 className="text-gray-500 text-xl">{data.bed_id ? data.bed_id : "Bed_id" }</h5>
      <div className="h-56 w-44 bg-white border-green-400 border-4 rounded-xl flex items-center justify-center">
        <h4 className="text-xl text-gray-500">
          {data.patientname ? data.patientname : "Patient Name"}
        </h4>
      </div>
    </div>
  );
}
