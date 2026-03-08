// import React from 'react'
// import Navbar from '../components/Navbar'

// function page() {
//   return (
//     <div>
//         <Navbar />
//         <div className='flex items-center justify-between gap-10 p-20'>
//         <div className='flex flex-col items-center gap-5'>
//             <img src="/assets/templates/template-1.webp" className='w-80 border-4 border-[#E11D48]' alt="Biodata Illustration" />
//         <button className='bg-[#E11D48] text-white py-2 px-4 rounded cursor-pointer'>Select Template</button>
//         </div>
//         <div className='flex flex-col items-center gap-5'>
//             <img src="/assets/templates/template-2.webp" className='w-80 border-4 border-[#E11D48]' alt="Biodata Illustration" />
//             <button className='bg-[#E11D48] text-white py-2 px-4 rounded cursor-pointer'>Select Template</button>
//         </div>
//         <div className='flex flex-col items-center gap-5'>
//             <img src="/assets/templates/template-3.webp" className='w-80 border-4 border-[#E11D48]' alt="Biodata Illustration" />
//             <button className='bg-[#E11D48] text-white py-2 px-4 rounded cursor-pointer'>Select Template</button>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default page
"use client";
import React from 'react'
import Template1 from '../components/template/Template1'
import client from '@/lib/appwrite';

export default function page() {
  const biodata = {
  fullName: "Rohit Mahesh Patil",
  dob: "12/04/1994 06:20 AM",
  height: "5'11",
  birthPlace: "Kolhapur",
  religion: "Hindu",
  zodiac: "Cancer",
  nakshatra: "Pushya",
  manglik: "No",
  gotra: "Kashyap",
  blood: "O+",
  education: "B.E Civil",
  occupation: "Site Engineer",

  fatherName: "Mahesh Patil",
  fatherOccupation: "Agriculture",
  motherName: "Savitribai Patil",
  motherOccupation: "Homemaker",

  brothers: "1 elder brother",
  sisters: "None",

  mobile: "+91 9876543210",
  address: "Kolhapur, Maharashtra",

  photo: "https://i.pravatar.cc/300"
};
  return (
    <div><Template1 biodata={biodata} /></div>
  )
}
