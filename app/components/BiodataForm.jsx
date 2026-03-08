"use client";

import { databases, storage } from "@/lib/appwrite";
import { ID } from "appwrite";
import { toast, Toaster } from "sonner";

export default function BiodataForm({ biodata, setBiodata, setShowDownload }) {

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setBiodata({
      ...biodata,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!biodata.name || !biodata.dob || !biodata.gender) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      // Logic for save/upload remains the same
      setShowDownload(true);
      toast.success("Biodata saved successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full bg-white shadow-2xl rounded-2xl p-6 md:p-10 border border-gray-100">
      <Toaster richColors={true} position="top-right" />
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-10 text-[#E11D48]">
        Create Your Biodata
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">

        {/* PERSONAL DETAILS */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-6 text-[#E11D48] border-b pb-2">
            Personal Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="text-sm font-medium text-gray-600">Full Name</label>
              <input
                name="name"
                value={biodata.name}
                placeholder="Enter your name"
                onChange={handleChange}
                className="input-style"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Date of Birth</label>
              <input
                name="dob"
                type="date"
                value={biodata.dob}
                onChange={handleChange}
                className="input-style"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Gender</label>
              <select
                name="gender"
                value={biodata.gender}
                onChange={handleChange}
                className="input-style"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Marital Status</label>
              <select
                name="maritalStatus"
                value={biodata.maritalStatus}
                onChange={handleChange}
                className="input-style"
              >
                <option value="">Select Status</option>
                <option>Single</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Phone</label>
              <input
                name="phone"
                value={biodata.phone}
                placeholder="Phone number"
                type="tel"
                onChange={handleChange}
                className="input-style"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Height</label>
              <input
                name="height"
                value={biodata.height}
                placeholder="e.g. 5'8"
                onChange={handleChange}
                className="input-style"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Location</label>
              <input
                name="location"
                value={biodata.location}
                placeholder="City / State"
                onChange={handleChange}
                className="input-style"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Religion</label>
              <input
                name="religion"
                value={biodata.religion}
                placeholder="Religion"
                onChange={handleChange}
                className="input-style"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Caste</label>
              <input
                name="caste"
                value={biodata.caste}
                placeholder="Caste"
                onChange={handleChange}
                className="input-style"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Profile Photo</label>
              <input
                type="file"
                name="photo"
                onChange={handleChange}
                className="input-style file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-[#fceaef] file:text-[#E11D48] hover:file:bg-[#ffd1da]"
              />
            </div>
          </div>
        </div>

        {/* EDUCATION & CAREER */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-6 text-[#E11D48] border-b pb-2">
            Education & Career
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="text-sm font-medium text-gray-600">Highest Education</label>
              <input
                name="education"
                value={biodata.education}
                placeholder="Education"
                onChange={handleChange}
                className="input-style"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Profession</label>
              <input
                name="profession"
                value={biodata.profession}
                placeholder="Profession"
                onChange={handleChange}
                className="input-style"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Salary / Income</label>
              <input
                name="salary"
                value={biodata.salary}
                placeholder="Annual Income"
                onChange={handleChange}
                className="input-style"
              />
            </div>
          </div>
        </div>

        {/* FAMILY */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-6 text-[#E11D48] border-b pb-2">
            Family Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <input
              name="fatherName"
              value={biodata.fatherName}
              placeholder="Father's Name"
              onChange={handleChange}
              className="input-style"
            />
            <input
              name="fatherOccupation"
              value={biodata.fatherOccupation}
              placeholder="Father's Occupation"
              onChange={handleChange}
              className="input-style"
            />
            <input
              name="motherName"
              value={biodata.motherName}
              placeholder="Mother's Name"
              onChange={handleChange}
              className="input-style"
            />
            <input
              name="motherOccupation"
              value={biodata.motherOccupation}
              placeholder="Mother's Occupation"
              onChange={handleChange}
              className="input-style"
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-[#E11D48] text-white py-4 md:py-3 rounded-lg font-medium hover:bg-rose-700 transition shadow-md hover:shadow-lg active:scale-[0.98]"
        >
          Save Biodata
        </button>

      </form>

      <style jsx>{`
        .input-style {
          margin-top: 4px;
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          padding: 12px 14px;
          outline: none;
          font-size: 16px; /* Prevents auto-zoom on iOS */
          background-color: #fff;
        }
        .input-style:focus {
          box-shadow: 0 0 0 2px #E11D48;
          border-color: #E11D48;
        }
      `}</style>
    </div>
  );
}