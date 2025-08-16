import React, { useState } from 'react';
import { customerLogin } from '../../../services/APIServices';

function Customerlogin() {
  const [GeneratedStoreID, setGeneratedStoreID] = useState('');
  const [StorePassword, setStorePassword] = useState('');

  const handleLogin = async () => {
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
    <div>
      <h1>Login</h1>

      <div>
        <label htmlFor='store-id'>Store ID</label>
        <input id='store-id' value={GeneratedStoreID} onChange={(e) => setGeneratedStoreID(e.target.value)} placeholder='Store ID' />
      </div>

      <div>
        <label htmlFor='store-password'>Store Password</label>
        <input id='store-password' value={StorePassword} onChange={(e) => setStorePassword(e.target.value)} type='password' placeholder='Password' />
      </div>

      <button onClick={handleLogin}>Customer Login</button>
    </div>
  );
}

export default Customerlogin;
