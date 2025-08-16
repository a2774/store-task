'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function CustomerDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!id) return;
    const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

    fetch(`${BACKEND_BASE_URL}/GetById/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Data is not fetching");
        return response.json();
      })
      .then((data) => {
        setUser(data[0]);
        console.log("Fetched data:", data);
      })
      .catch((error) => {
        console.error("Error fetching customer:", error);
      });
  }, [id]);

  if (!user) return <p className="p-6">Loading...</p>;

return (
  <div className="p-12 bg-gray-900 min-h-screen text-gray-100 font-sans">
    <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
      <div className="p-8">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-400">
          Customer Details
        </h1>
        <div className="overflow-hidden rounded-xl border border-gray-700">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              {/* <tr>
                <th
                  scope="col"
                  className="px-8 py-4 text-left text-sm font-semibold uppercase tracking-wider text-gray-300"
                >
                  Field
                </th>
                <th
                  scope="col"
                  className="px-8 py-4 text-left text-sm font-semibold uppercase tracking-wider text-gray-300"
                >
                  Value
                </th>
              </tr> */}
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
                <td className="px-8 py-5 whitespace-nowrap text-base font-medium text-gray-200">
                  Name
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-base text-gray-400">
                  {user.Customer_Name}
                </td>
                  <td className="px-8 py-5 whitespace-nowrap text-base font-medium text-gray-200">
                  Email
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-base text-gray-400">
                  {user.Customer_Email}
                </td>
              </tr>
              {/* <tr className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
              
              </tr> */}
              <tr className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
                <td className="px-8 py-5 whitespace-nowrap text-base font-medium text-gray-200">
                  Phone
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-base text-gray-400">
                  {user.Customer_Phone}
                </td>
                  <td className="px-8 py-5 whitespace-nowrap text-base font-medium text-gray-200">
                  Aadhar
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-base text-gray-400">
                  {user.Customer_AadharNumber ?? "N/A"}
                </td>
              </tr>
              {/* <tr className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
              
              </tr> */}
              <tr className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
                <td className="px-8 py-5 whitespace-nowrap text-base font-medium text-gray-200">
                  PAN
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-base text-gray-400">
                  {user.Customer_PanNumber ?? "N/A"}
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-base font-medium text-gray-200">
                  Product Amount
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-base text-gray-400">
                  ₹{user.Customer_ProductAmount}
                </td>
              </tr>
              {/* <tr className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
                
              </tr> */}
              <tr className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
                <td className="px-8 py-5 whitespace-nowrap text-base font-medium text-gray-200">
                  Service
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-base text-gray-400">
                  {user.service_name}
                </td>
                 <td className="px-8 py-5 whitespace-nowrap text-base font-medium text-gray-200">
                  Date
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-base text-gray-400">
                  {new Date(user.Customer_Date).toLocaleDateString()}
                </td>
              </tr>
              <tr className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
               
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={() => window.history.back()}
            className="px-10 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  </div>
);

}
