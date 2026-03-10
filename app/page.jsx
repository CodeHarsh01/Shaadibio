"use client";
import React from 'react'
import Navbar from './components/Navbar'
import { SiEasyeda } from "react-icons/si";
import { FaRupeeSign } from "react-icons/fa";
import Template from './components/Template';

export default function page() {
return (
<div className="overflow-x-hidden">
<Navbar />
<main className='px-4 py-12 md:px-10 lg:px-20 min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-12'>
    <div className='w-full lg:w-1/2 text-center lg:text-left'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
        Create <span className='text-[#E11D48]'>Marriage Biodata Online</span><br />
        <span className="text-2xl sm:text-3xl font-semibold text-gray-800">Free - Make Your Biodata in 2 Minutes</span>
      </h1>
      <p className='text-base sm:text-lg text-gray-700 mb-8'>Your one-stop solution for all your matrimonial needs.</p>
      <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4'>
        <a href='#template' className='px-8 py-4 font-medium text-lg bg-[#E11D48] text-white rounded-md transition hover:bg-[#be185d] text-center'>Get Started</a>
        <a href='#template' className='px-8 py-4 font-medium text-lg border-[#E11D48] border-2 text-[#E11D48] rounded-md transition hover:bg-[#fff5f7] text-center'>View Templates</a>
      </div>
    </div>
    
    <div className='w-full lg:w-1/2 flex justify-center'>
      <img src="/assets/marriagebiodata.webp" alt="Marriage" className='w-full max-w-md lg:max-w-xl rounded-xl shadow-2xl' />
    </div>
  </main>

  <section className='bg-[#E11D48] py-16 px-4'>
    <div className='text-white text-center mb-12'>
      <h2 className='text-3xl md:text-4xl font-bold mb-4'>Why Choose Our Service?</h2>
      <p className='text-base md:text-lg max-w-2xl mx-auto opacity-90'>We provide a user-friendly platform to create professional and attractive marriage biodata. Our templates are designed to highlight your strengths.</p>
    </div>
    
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
      <div className='bg-white rounded-lg p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition'>
        <div className='w-14 h-14 bg-[#E11D48] rounded-full flex items-center justify-center mb-6'>
          <SiEasyeda className='text-white text-3xl' />
        </div>
        <h3 className='font-bold text-2xl mb-3'>Easy to use</h3>
        <p className='text-gray-600'>Streamlined interface to make your marriage biodata and download it instantly.</p>
      </div>
      
      <div className='bg-white rounded-lg p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition'>
        <div className='w-14 h-14 bg-[#E11D48] rounded-full flex items-center justify-center mb-6'>
          <FaRupeeSign className='text-white text-2xl' />
        </div>
        <h3 className='font-bold text-2xl mb-3'>100% Free</h3>
        <p className='text-gray-600'>No hidden costs. Create and download your professional biodata at zero expense.</p>
      </div>
    </div>
  </section>

  <section id="template" className="py-10">
    <Template />
  </section>

  <section className='py-20 px-4 flex flex-col items-center text-center'>
    <h2 className='font-bold text-3xl md:text-5xl mb-6'>Start Creating Your Matrimonial Biodata</h2>
    <p className='text-lg md:text-xl text-gray-600 max-w-2xl mb-10'>Start creating your shaadi biodata using our simple form. No design skills required.</p>
    <a href='#template' className='px-10 py-4 bg-[#E11D48] hover:bg-[#be185d] transition text-white rounded-md font-semibold text-lg capitalize'>
       Create Biodata now
    </a>
  </section>

  <footer className='bg-[#2f282a] py-8 text-center text-gray-300'>
    <p>&copy; 2024 ShaadiBio. All rights reserved.</p>
  </footer>
</div>
)
}