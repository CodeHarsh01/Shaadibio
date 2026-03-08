import { useAuth } from '@/context/Authcontext'
import React from 'react'

function Template2({ biodata, TargetRef }) {
  const { user } = useAuth()
  return (
    <div
      className="flex justify-center items-start overflow-hidden bg-gray-100 p-4 rounded-lg"
      style={{
        width: "794px",
        height: "1123px",
        margin: "0 auto"
      }}
    >
      <div
        className='scale'
        style={{

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
            color: "#333333" // Primary text color
          }}
        >
          {/* Background Image - Template 2 with purple borders */}
          <img
            src="/assets/templates/blanktemplate-2.png"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Template 2"
          />

          {/* Profile Photo - Matching Template 2 positioning */}
          <div className="absolute top-[230px] right-[60px]">
            <div className="w-[190px] h-[240px] border-[2px] border-[#700a26] rounded-md overflow-hidden bg-white shadow-sm">
              {biodata.photo ? (
                <img
                  src={URL.createObjectURL(biodata.photo)}
                  className="w-full h-full object-cover"
                  alt="Profile"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-50 text-[18px]">
                  Photo
                </div>
              )}
            </div>
          </div>

          {/* 1. Personal Details Block - Expanded for Template 2 */}
          <div className="absolute top-[210px] left-[70px] w-[460px]">
            <h3 className="text-[24px] font-bold text-[#700a26] mb-4 border-b border-[#700a26]/20">Personal Details</h3>
            <div className="grid grid-cols-[170px_15px_1fr] gap-y-1 text-[16px] leading-snug">
              <span>Full Name</span> <span>:</span> <span className="font-semibold">{biodata.name || "—"}</span>
              <span>Date of Birth</span> <span>:</span> <span>{biodata.dob || "—"}</span>
              <span>Height</span> <span>:</span> <span>{biodata.height || "—"}</span>
              <span>Place of Birth</span> <span>:</span> <span>{biodata.location || "—"}</span>
              <span>Religion</span> <span>:</span> <span>{biodata.religion || "—"}</span>
              <span>Caste / Community</span> <span>:</span> <span>{biodata.caste || "—"}</span>
              <span>Zodiac Sign</span> <span>:</span> <span>{biodata.zodiac || "—"}</span>
              <span>Nakshatra</span> <span>:</span> <span>{biodata.nakshatra || "—"}</span>
              <span>Manglik Status</span> <span>:</span> <span>{biodata.manglik || "—"}</span>
              <span>Gotra</span> <span>:</span> <span>{biodata.gotra || "—"}</span>
              <span>Gan</span> <span>:</span> <span>{biodata.gan || "—"}</span>
              <span>Complexion</span> <span>:</span> <span>{biodata.complexion || "—"}</span>
              <span>Blood Group</span> <span>:</span> <span>{biodata.bloodGroup || "—"}</span>
              <span>Higher Education</span> <span>:</span> <span>{biodata.education || "—"}</span>
              <span>Occupation</span> <span>:</span> <span>{biodata.profession || "—"}</span>
            </div>
          </div>

          {/* 2. Family Details Block */}
          <div className="absolute top-[670px] left-[70px] w-[650px]">
            <h3 className="text-[24px] font-bold text-[#700a26] mb-4 border-b border-[#700a26]/20">Family Details</h3>
            <div className="grid grid-cols-[170px_15px_1fr] gap-y-1 text-[16px] leading-snug">
              <span>Father's Name</span> <span>:</span> <span>{biodata.fatherName || "—"}</span>
              <span>Father's Occ.</span> <span>:</span> <span>{biodata.fatherOccupation || "—"}</span>
              <span>Mother's Name</span> <span>:</span> <span>{biodata.motherName || "—"}</span>
              <span>Mother's Occ.</span> <span>:</span> <span>{biodata.motherOccupation || "—"}</span>
              <span>Brothers</span> <span>:</span> <span>{biodata.brothers || "—"}</span>
              <span>Sisters</span> <span>:</span> <span>{biodata.sisters || "—"}</span>
              <span>Maternal Uncle</span> <span>:</span> <span>{biodata.maternalUncle || "—"}</span>
              <span>Relatives</span> <span>:</span> <span>{biodata.relatives || "—"}</span>
            </div>
          </div>

          {/* 3. Contact Details Block */}
          <div className="absolute top-[940px] left-[70px] w-[650px]">
            <h3 className="text-[24px] font-bold text-[#700a26] mb-4 border-b border-[#700a26]/20">Contact Details</h3>
            <div className="grid grid-cols-[170px_15px_1fr] gap-y-1 text-[16px]">
              <span>Mobile Number</span> <span>:</span> <span className="font-semibold text-[#700a26]">{biodata.mobile || "—"}</span>
              <span>Address</span> <span>:</span> <span className="leading-tight">{biodata.address || "—"}</span>
            </div>
        <p className='capitalize text-2xl absolute bottom-50 left-90' >{user ? "" : "Created by ShaadiBio"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template2