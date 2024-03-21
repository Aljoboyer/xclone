import React, { useState } from 'react';
import { BiHide, BiShowAlt } from 'react-icons/bi';

const PasswordField = ({ isFocused, setPassword, setPassError, passError }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center mt-3 mb-2 border-2 border-gray-300 focus:outline-none focus-within:border-black rounded-md">
      <input
        type={showPassword ? 'text' : 'password'}
        id="password"
        className={`block p-2 w-full rounded-md focus:outline-none  ${
          passError && 'text-red-700 font-semibold'
        }`}
        onChange={(e) => {
          setPassword(e.target.value);
          setPassError('');
        }}
        required
      />
      {isFocused && (
        <button
          type="button"
          onClick={toggleVisibility}
          className="inset-y-0 right-0 p-2 mr-1 flex items-center focus:outline-none bg-white rounded-md"
        >
          {showPassword ? <BiShowAlt /> : <BiHide />}
        </button>
      )}
    </div>
  );
};

export default PasswordField;
