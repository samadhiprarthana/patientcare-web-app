
import React from 'react';
import DoctorCard from './DoctorCard';
import { doctors } from '../../assets/data/doctors'; // assuming the doctors data is imported from a data file

const DoctorList = ({ limit }) => {
  const displayedDoctors = limit ? doctors.slice(0, limit) : doctors;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {displayedDoctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
