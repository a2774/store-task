"use client";
import React, { useState } from 'react';
import { customerLogin } from '../services/APIServices';
import Link from 'next/link';


function Customerlogin() {
  const [GeneratedStoreID, setGeneratedStoreID] = useState('');
  const [StorePassword, setStorePassword] = useState('');

  const handleLogin = async () => {
    debugger;
    const customerdata = {
      GeneratedStoreID,
      StorePassword,
    };

    try {
      const res = await customerLogin(customerdata);
      console.log('Login successful:', res);
    } catch (error) {
      console.log('error', error);
    }
  };

 return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md">
      <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">Customer Login</h1>

      <div className="mb-4">
        <label htmlFor="store-id" className="block text-sm font-medium text-gray-700 mb-1">
          Store ID
        </label>
        <input
          id="store-id"
          value={GeneratedStoreID}
          onChange={(e) => setGeneratedStoreID(e.target.value)}
          placeholder="Enter Store ID"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="store-password" className="block text-sm font-medium text-gray-700 mb-1">
          Store Password
        </label>
        <input
          id="store-password"
          value={StorePassword}
          onChange={(e) => setStorePassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* <button
        onClick={handleLogin}
        className="w-full py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
      >
        Customer Login
      </button> */}
      <Link

      href={'/store/readCustomer'}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      >Sign in</Link>
    </div>
  </div>
);

}

export default Customerlogin;
