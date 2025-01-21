import React from "react";

const DoctorsList = () => {
  const doctors = [
    { id: 1, name: 'Dr. John Doe', email: 'john.doe@example.com', specialization: 'Cardiology' },
    { id: 2, name: 'Dr. Jane Smith', email: 'jane.smith@example.com', specialization: 'Dermatology' },
    { id: 3, name: 'Dr. Emily Johnson', email: 'emily.johnson@example.com', specialization: 'Pediatrics' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Doctor List</h2>
      <div className="overflow-x-auto shadow-lg rounded-lg border">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-blue-100">
              <th className="text-left p-4 font-medium text-gray-600">ID</th>
              <th className="text-left p-4 font-medium text-gray-600">Name</th>
              <th className="text-left p-4 font-medium text-gray-600">Email</th>
              <th className="text-left p-4 font-medium text-gray-600">Specialization</th>
              <th className="text-left p-4 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id} className="border-b hover:bg-blue-50">
                <td className="p-4 text-gray-700">{doctor.id}</td>
                <td className="p-4 text-gray-700">{doctor.name}</td>
                <td className="p-4 text-gray-700">{doctor.email}</td>
                <td className="p-4 text-gray-700">{doctor.specialization}</td>
                <td className="p-4 text-gray-700">
                  <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mr-2">
                    View Profile
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorsList;
