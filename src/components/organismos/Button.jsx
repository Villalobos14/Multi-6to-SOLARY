import React from 'react';

const Button = ({ value, onClick }) => {
  return (
    <button
      onClick={() => onClick(value)}
      className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-full"
    >
      {value}
    </button>
  );
};

export default Button;
