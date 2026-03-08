import { useRouter } from 'next/navigation'
import React from 'react'

export default function Template() {
    const router = useRouter()
    return (
        <section className='py-10 px-6 text-center bg-[#fceaef]'>
            <div>
                <h1 className='font-bold text-3xl md:text-4xl capitalize text-[#E11D48]'>Select a template</h1>
                <p className='text-md md:text-lg mt-3'>Choose from beautifully designed marriage biodata templates</p>
            </div>

            <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-30 mt-10'>
                {/* Template 1 */}
                <div onClick={() => router.push(`/create-biodata/1`)} className="w-full max-w-[320px] bg-white shadow-2xl rounded-lg 
                hover:-translate-y-1 
                ease-in-out transition-all duration-150 
                flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full overflow-hidden rounded-t-lg">
                        <img
                            src="/assets/templates/template-1.webp"
                            alt="Template 1"
                            className="w-full transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <h2 className="font-medium text-md m-3">Template 1</h2>
                </div>

                {/* Template 2 */}
                <div onClick={() => router.push(`/create-biodata/2`)} className="w-full max-w-[320px] bg-white shadow-2xl rounded-lg 
                hover:-translate-y-1 
                ease-in-out transition-all duration-150 
                flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full overflow-hidden rounded-t-lg">
                        <img
                            src="/assets/templates/template-2.webp"
                            alt="Template 2"
                            className="w-full transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <h2 className="font-medium text-md m-3">Template 2</h2>
                </div>
            </div>
        </section>
    )
}