"use client";
import React from 'react'
import Navbar from './components/Navbar'
import { SiEasyeda } from "react-icons/si";
import { FaRupeeSign } from "react-icons/fa";
import Template from './components/Template';
import { useAuth } from '@/context/Authcontext';

export default function page() {
  return (
    <div>
      <Navbar />
      <main className='p-6 md:p-10 min-h-screen flex flex-col md:flex-row items-center justify-between'>
        <div className='w-full md:w-[50%] md:ml-6 text-center md:text-left mb-10 md:mb-0'>
          <h1 className='text-3xl lg:text-5xl 2xl:text-7xl font-bold mb-2'>Create <span className='text-[#E11D48]'>Marriage Biodata Online</span><br />
            Free - Make Your Biodata in 2 Minutes</h1>
          <p className='text-lg text-gray-700'>Your one-stop solution for all your matrimonial needs.</p>
          <div className='mt-10 space-y-4 sm:space-y-0 sm:space-x-5 flex flex-col sm:flex-row justify-center md:justify-start'>
            <a href='#template' className='px-7 cursor-pointer py-4 font-medium text-lg bg-[#E11D48] border-[#E11D48] border-2 text-white rounded-md'>Get Started</a>
            <a href='#template' className='px-4 cursor-pointer py-4 font-medium text-lg border-[#E11D48] border-2 text-[#E11D48] rounded-md'>View Templates</a>
          </div>
        </div>
        <div className='w-full md:w-[50%] flex justify-center md:justify-end'>
          <img src="/assets/marriagebiodata.webp" alt="Marriage" className='w-full max-w-lg md:w-120 rounded-xl' />
        </div>
      </main>

      <section className='bg-[#E11D48] p-8'>
        <div className=' text-white pb-5 text-center'>
          <h2 className='text-2xl font-bold mb-2'>Why Choose Our Service?</h2>
          <p className='text-md w-full md:w-[80%] mx-auto'>We provide a user-friendly platform to create professional and attractive marriage biodata. Our templates are designed to highlight your strengths and make a lasting impression.</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 p-4'>
          <div className='w-full max-w-sm bg-white rounded-lg p-5 flex flex-col items-center justify-center'>
            <div className='w-10 h-10 bg-[#E11D48] rounded-full flex items-center justify-center mb-3'>
              <SiEasyeda className='text-white text-2xl' />
            </div>
            <h1 className='font-medium text-xl'>Easy to use</h1>
            <p className='text-center w-full sm:w-50 mt-3'>Easy to make marriage biodata and download</p>
          </div>
          <div className='w-full max-w-sm bg-white rounded-lg p-5 flex flex-col items-center justify-center'>
            <div className='w-10 h-10 bg-[#E11D48] rounded-full flex items-center justify-center mb-3'>
              <FaRupeeSign className='text-white text-lg' />
            </div>
            <h1 className='font-medium text-xl text-center'> 100% Free to use</h1>
            <p className='text-center w-full sm:w-50 mt-3'>Don't need to pay any money to make biodata</p>
          </div>
        </div>
      </section>

      <section id="template">
        <Template />
      </section>

      <section className='py-20 px-6 flex flex-col items-center justify-center gap-5 text-center'>
        <h1 className='font-bold text-3xl md:text-4xl'>Start Creating Your Matrimonial Biodata</h1>
        <p className='text-lg max-w-2xl'>Start creating your shaadi biodata using our simple shaadi biodata form. No designing skills required.</p>
        <div className='px-5 py-2 bg-[#E11D48] hover:bg-[rgb(250,134,154)] transition-colors duration-200 text-white rounded-md cursor-pointer font-semibold'>
          <a href='#template' className='cursor-pointer capitalize'> Create Biodata now</a>
        </div>
      </section>

      <footer className='bg-[#2f282a] p-4 text-center text-white'>
        <p>&copy; 2024 ShaadiBio. All rights reserved.</p>
      </footer>
    </div>
  )
}