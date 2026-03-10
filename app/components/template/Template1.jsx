import { useAuth } from '@/context/Authcontext'
import React from 'react'

function Template1({biodata, TargetRef }) {
    const { user } = useAuth()
  return (
    <div 
      className="flex justify-center items-start  bg-gray-100 p-4 rounded-lg"
      style={{
        width: "794px",
        height: "1123px",
        margin: "0 auto"
      }}
    >

      <div 
      className='scale'
        style={{
          // transform: "scale(0.8)",
          transformOrigin: "top left",
          minWidth: "794px",
          minHeight: "1123px",
        }}
      >
        <div
          ref={TargetRef}
          className="printable relative bg-white shadow-2xl"
          style={{
            width: "794px",
            height: "1123px",
            fontFamily: "'Segoe UI', Roboto, sans-serif",
            color: "#4a1d1d"
          }}
        >
          {/* Background Image */}
          <img 
            src="/assets/templates/blanktemplate-1.png" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Template" 
          />

          {/* Profile Photo */}
          <div className="absolute top-[248px] right-[65px]">
            <div className="w-[185px] h-[235px] border-[3px] border-[#8B0000] rounded-lg overflow-hidden bg-white">
              {biodata.photo ? (
                <img
                  src={URL.createObjectURL(biodata.photo)}
                  className="w-full h-full object-cover"
                  alt="Profile"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-50 text-[20px]">
                  Photo
                </div>
              )}
            </div>
          </div>

          {/* Personal Details */}
          <div className="absolute top-[285px] left-[85px] w-[450px]">
            <h3 className="text-[26px] font-bold text-[#8B0000] mb-6">Personal Details</h3>
            <div className="grid grid-cols-[160px_20px_1fr] gap-y-2 text-[18px]">
              <span>Full Name</span> <span>:</span> <span className="font-semibold">{biodata.name || "—"}</span>
              <span>Date of Birth</span> <span>:</span> <span>{biodata.dob || "—"}</span>
              <span>Height</span> <span>:</span> <span>{biodata.height || "—"}</span>
              <span>Place of Birth</span> <span>:</span> <span>{biodata.location || "—"}</span>
              <span>Religion</span> <span>:</span> <span>{biodata.religion || "—"}</span>
              <span>Caste</span> <span>:</span> <span>{biodata.caste || "—"}</span>
              <span>Education</span> <span>:</span> <span>{biodata.education || "—"}</span>
              <span>Occupation</span> <span>:</span> <span>{biodata.profession || "—"}</span>
            </div>
          </div>

          {/* Family Details */}
          <div className="absolute top-[635px] left-[85px] w-[620px]">
            <h3 className="text-[26px] font-bold text-[#8B0000] mb-6">Family Details</h3>
            <div className="grid grid-cols-[160px_20px_1fr] gap-y-2 text-[18px]">
              <span>Father's Name</span> <span>:</span> <span>{biodata.fatherName || "—"}</span>
              <span>Father's Occ.</span> <span>:</span> <span>{biodata.fatherOccupation || "—"}</span>
              <span>Mother's Name</span> <span>:</span> <span>{biodata.motherName || "—"}</span>
              <span>Mother's Occ.</span> <span>:</span> <span>{biodata.motherOccupation || "—"}</span>
              <span>Income</span> <span>:</span> <span>{biodata.salary || "—"}</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="absolute top-[870px] left-[85px] w-[620px]">
            <h3 className="text-[26px] font-bold text-[#8B0000] mb-6">Contact Details</h3>
            <div className="grid grid-cols-[160px_20px_1fr] gap-y-2 text-[18px]">
              <span>Mobile Number</span> <span>:</span> <span className="font-semibold">{biodata.mobile || "—"}</span>
              <span>Address</span> <span>:</span> <span>{biodata.address || biodata.location || "—"}</span>
            </div>
            <p className='capitalize text-2xl absolute bottom-50 left-90' >{user ? "" : "Created by ShaadiBio"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template1
