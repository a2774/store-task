// pages/customer-form.js
'use client';

import { useState } from 'react';

export default function CustomerForm() {
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    customer_aadhar_number: '',
    customer_pan_number: '',
    customer_product_amount: '',
    customer_aadhar: null,
    customer_pancard: null,
  });

  const [previews, setPreviews] = useState({
    customer_aadhar: null,
    customer_pancard: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));

      // Show image preview
      const previewUrl = URL.createObjectURL(file);
      setPreviews((prev) => ({ ...prev, [name]: previewUrl }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitting form data:', formData);
    alert('Form submitted! Check console for data.');
  };

  return (
    <>
      <h1 className='max-w-5xl mx-auto w-full h-24 bg-blue-600 text-white font-extrabold text-4xl flex items-center justify-center rounded-xl mt-12 mb-6'>Feel the All Details</h1>
      <form className='max-w-5xl mx-auto p-10 bg-white rounded-xl shadow-xl border border-gray-200' onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8'>
          {/* Customer Name */}
          <div>
            <label className='mb-3 text-base font-semibold text-slate-900 block'>Customer Name</label>
            <input
              type='text'
              name='customer_name'
              value={formData.customer_name}
              onChange={handleChange}
              placeholder='Enter Customer Name'
              className='w-full px-5 py-4 bg-[#f0f1f2] focus:bg-white text-black text-base border border-gray-300 rounded-lg shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          {/* Customer Email */}
          <div>
            <label className='mb-3 text-base font-semibold text-slate-900 block'>Customer Email</label>
            <input
              type='email'
              name='customer_email'
              value={formData.customer_email}
              onChange={handleChange}
              placeholder='Enter Customer Email'
              className='w-full px-5 py-4 bg-[#f0f1f2] focus:bg-white text-black text-base border border-gray-300 rounded-lg shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          {/* Customer Phone */}
          <div>
            <label className='mb-3 text-base font-semibold text-slate-900 block'>Customer Phone</label>
            <input
              type='tel'
              name='customer_phone'
              value={formData.customer_phone}
              onChange={handleChange}
              placeholder='Enter Customer Phone'
              className='w-full px-5 py-4 bg-[#f0f1f2] focus:bg-white text-black text-base border border-gray-300 rounded-lg shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          {/* Customer Aadhar Number */}
          <div>
            <label className='mb-3 text-base font-semibold text-slate-900 block'>Customer Aadhar Number</label>
            <input
              type='text'
              name='customer_aadhar_number'
              value={formData.customer_aadhar_number}
              onChange={handleChange}
              placeholder='Enter Aadhar Number'
              className='w-full px-5 py-4 bg-[#f0f1f2] focus:bg-white text-black text-base border border-gray-300 rounded-lg shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          {/* Customer PAN Number */}
          <div>
            <label className='mb-3 text-base font-semibold text-slate-900 block'>Customer PAN Number</label>
            <input
              type='text'
              name='customer_pan_number'
              value={formData.customer_pan_number}
              onChange={handleChange}
              placeholder='Enter PAN Number'
              className='w-full px-5 py-4 bg-[#f0f1f2] focus:bg-white text-black text-base border border-gray-300 rounded-lg shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          {/* Customer Product Amount */}
          <div>
            <label className='mb-3 text-base font-semibold text-slate-900 block'>Customer Product Amount</label>
            <input
              type='number'
              name='customer_product_amount'
              value={formData.customer_product_amount}
              onChange={handleChange}
              placeholder='Enter Amount'
              className='w-full px-5 py-4 bg-[#f0f1f2] focus:bg-white text-black text-base border border-gray-300 rounded-lg shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
              min='0'
              step='any'
            />
          </div>

          {/* Customer Aadhar Image */}
          <div>
            <label className='mb-3 text-base font-semibold text-slate-900 block'>Customer Aadhar (Image)</label>
            <input
              type='file'
              name='customer_aadhar'
              accept='image/*'
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-md px-4 py-3 cursor-pointer hover:border-blue-500 transition'
              required
            />
            {previews.customer_aadhar && (
              <img src={previews.customer_aadhar} alt='Aadhar Preview' className='mt-4 max-h-52 object-contain rounded-lg shadow-md border border-gray-300' />
            )}
          </div>

          {/* Customer PAN Card Image */}
          <div>
            <label className='mb-3 text-base font-semibold text-slate-900 block'>Customer PAN Card (Image)</label>
            <input
              type='file'
              name='customer_pancard'
              accept='image/*'
              onChange={handleChange}
              className='w-full border border-gray-300 rounded-md px-4 py-3 cursor-pointer hover:border-blue-500 transition'
              required
            />
            {previews.customer_pancard && (
              <img src={previews.customer_pancard} alt='PAN Card Preview' className='mt-4 max-h-52 object-contain rounded-lg shadow-md border border-gray-300' />
            )}
          </div>
        </div>

        <button
          type='submit'
          className='mt-12 px-8 py-3 text-lg font-semibold w-full max-w-[160px] mx-auto block bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition'>
          Submit
        </button>
      </form>
    </>
  );
}
