import React from 'react';


function FieldLayout({ field, onClick }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {field.map((value, index) => (
        <button key={index} className="flex items-center justify-center w-24 h-24 text-4xl bg-white border-2 border-blue-500 rounded cursor-pointer hover:bg-gray-200" onClick={() => onClick(index)}>
          {value}
        </button>
      ))}
    </div>
  );
}

export default FieldLayout;

