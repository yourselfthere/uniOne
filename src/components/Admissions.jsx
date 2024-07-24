import React from "react";

const Admissions = () => {
  return (
    <div className="admissions mt-5 p-4">
      <h1 className="text-2xl font-bold mb-4">Admissions</h1>
      <h2 className="text-xl font-semibold mb-2">
        Admission Process and Criteria:
      </h2>
      <p className="mb-2">
        Admission forms are available for download. Submit the completed form
        along with required documents at the school office.
      </p>
      <p className="mb-2">
        Admission is based on merit and availability of seats. Entrance tests
        may be conducted for certain grades.
      </p>
      <h2 className="text-xl font-semibold mt-4 mb-2">Important Dates:</h2>
      <p className="mb-2">Admission Form Availability: March 1st</p>
      <p className="mb-2">Last Date for Submission: March 31st</p>
      <p className="mb-2">Entrance Test: April 15th</p>
      <p>Announcement of Results: April 30th</p>
    </div>
  );
};

export default Admissions;
