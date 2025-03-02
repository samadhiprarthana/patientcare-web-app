import React, { useState } from 'react';
import DoctorCard from './../../components/Doctors/DoctorCard';
import { doctors } from './../../assets/data/doctors';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="bg-[#fff9ea] min-h-screen">
        <div className="container text-center py-8">
          <h2 className="text-3xl font-bold mb-6">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="py-4 px-4 bg-blue-500 text-white rounded-md">
              Search
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-8 px-4">
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Doctors;
