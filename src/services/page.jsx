// src/services/APIServices.js
export const baseurl = 'http://122.160.25.202/micron/app/api/api/Customer';

export async function customerLogin(customerdata) {
  try {
    const res = await fetch(`${baseurl}/CustomerLogin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customerdata)
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}
