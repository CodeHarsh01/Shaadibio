"use client";

import { useEffect, useRef, useState } from "react";
import BiodataForm from "../../components/BiodataForm";
import BiodataPreview from "../../components/BIodataPreview";
import Navbar from "../../components/Navbar";
import Downloadpop from "../../components/Downloadpop";
import { useParams } from "next/navigation";



export default function CreateBiodataPage() {
  const params = useParams()
  const Id = params.id
  console.log(Id)
  const TargetRef = useRef(null);
  const [biodata, setBiodata] = useState({
    name: "",
    dob: "",
    age: "",
    height: "",
    gender: "",
    religion: "",
    caste: "",
    location: "",
    profession: "",
    education: "",
    salary: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    photo: null
  });
  const [showDownload, setShowDownload] = useState(false);
  useEffect(() => {
    setBiodata((prev) => ({
      ...prev,
      age: calculateAge(prev.dob)
    }));
  }, [biodata.dob]);

  const calculateAge = (dob) => {
    if (!dob) return "";
    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    if (age < 0 || age < 18) {
      alert("Please enter a valid date of birth. Age must be at least 18.");
      return "";
    };
    return age;
  };

  return (<>
    <Navbar />
    <div className="min-h-screen bg-gray-50 overflow-hidden flex flex-col sm:flex-row gap-10 justify-center w-full py-10 px-4">

      <div className="w-full sm:w-[40%]">
        <BiodataForm
          biodata={biodata}
          setBiodata={setBiodata}
          setShowDownload={setShowDownload}
        />
      </div>
      <div className=" w-full sm:w-[50%]">
        <BiodataPreview
          Id={Id}
          biodata={biodata}
          TargetRef={TargetRef}
        />

      </div>
    </div>

    {showDownload && <Downloadpop TargetRef={TargetRef} setShowDownload={setShowDownload} />}

  </>
  );
}