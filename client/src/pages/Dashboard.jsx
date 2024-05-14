import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import PatientCard from "../components/PatientCard/PatientCard";
import axios from "axios";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [patientDetails, setPatientDetails] = useState({});
  const [patientName, setPatientName] = useState("");
  const [bed_id, setBedId] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
 

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };



  const createPatient = async (patientName, bed_id) => {
    console.log("calling createpatient ");
    const apiUrl = "http://127.0.0.1:8080/api/patient/create";

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ` + localStorage.getItem("token"),
        },
      };
      const data = {
        patientname: patientName,
        bed_id: bed_id,
      };

      const response = await axios.post(apiUrl, data, config);
      if (response) {
        console.log(response);
        if (response.data.message === "Patient Created Succesfully") {
          console.log("inside msg");
          setErrMsg("Patient Created Succesfully");
          setBedId("");
          setPatientName("");
          getAllPatients();
          setTimeout(() => {
            toggleModal();
          }, 3000);
        }
      }
    } catch (err) {
      if (
        err.response &&
        err.response.data &&
        err.response.data.message === "Error creating patient!!"
      ) {
        setErrMsg("User already exists with associated bedid");
      } else {
        console.log("Error creating patient!!: ", err);
        setErrMsg("Error creating patient!!");
      }
    }
  };

  useEffect(() => {
    getAllPatients();
  }, []);

  const getAllPatients = async () => {
    console.log("calling getAllPatients ");
    const apiUrl = "http://127.0.0.1:8080/api/patient/patients";

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ` + localStorage.getItem("token"),
        },
      };

      const response = await axios.get(apiUrl, config);
      if (response) {
        console.log(response);
        if (response) {
          console.log("inside msg");
          setData(response.data.patients);
          setErrMsg("");
        }
      }
    } catch (err) {
      if (
        err.response &&
        err.response.data &&
        err.response.data.message === "Error creating patient!!"
      ) {
        setErrMsg("User already exists with associated bedid");
      } else {
        console.log("Error creating patient!!: ", err);
        setErrMsg("Error creating patient!!");
      }
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }
  const handlePatientInput = (e) => {
    const { name, value } = e.target;
    if (name === "patientName") {
      setPatientName(value);
    } else if (name === "bed_id") {
      console.log(value);
      setBedId(value);
    }
  };
  const handlePatientSubmit = (e) => {
    e.preventDefault();
    console.log("bed_id ", bed_id);

    createPatient(patientName, bed_id);
  };

  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex w-full  px-20 h-24 items-center border-b-2 border-gray-200  ">
        <div className="w-1/4 h-full  flex items-center border-r-2 border-gray-200">
          <button
            onClick={toggleModal}
            className="text-xl font-bold h-12 w-3/4 bg-gray-200 rounded-xl  "
            data-modal-toggle="authentication-modal"
          >
            Create Patient
          </button>
          {isModalOpen && (
            <>
              <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-50 z-50 ">
                <div className="bg-white p-8 rounded-lg  w-1/4">
                  <div className="flex flex-col">
                    <label htmlFor="" className="text-xl font-bold mb-3">
                      Patinet Name
                    </label>
                    <input
                      type="text"
                      className="border-2 h-10 rounded-lg mb-4 p-3"
                      name="patientName"
                      onChange={(e) => handlePatientInput(e)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="text-xl font-bold mb-3">
                      Bed Id{" "}
                    </label>
                    <input
                      type="text"
                      name="bed_id"
                      className="border-2 rounded-lg mb-4 h-10 p-3"
                      onChange={(e) => handlePatientInput(e)}
                    />
                  </div>
                  <div className=" ">
                    <button
                      onClick={toggleModal}
                      className="mr-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                    >
                      Close
                    </button>
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      onClick={handlePatientSubmit}
                    >
                      Submit
                    </button>
                    {errMsg && (
                      <p className="text-base text-red-600">{errMsg}</p>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="px-4 flex justify-between w-full items-center">
          <h4 className="text-2xl font-bold ">Dashboard</h4>
          <div className="">
            <input
              type="text"
              className=" h-12 w-72 p-4 rounded-lg border-2 border-black"
              placeholder="Patientname, Bed_id "
              onChange={(e)=>handleSearchChange(e)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-grow justify-center items-center">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-zinc-100 p-4">
          {data &&
            data.map((item) => <PatientCard key={item.id} data={item} />)}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
