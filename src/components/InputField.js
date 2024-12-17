import React from "react";

function InputField({ label, type, placeholder }) {
  return (
    <div>
      <label className="font-serif ml-9 text-customBlue font-bold inline-block mt-5">
        {label}
      </label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        className="text-gris font-thin text-sm font-serif ml-9 mt-2 rounded-xl bg-BlueVert bg-opacity-50 pl-6 h-8 w-80 border-2 border-BlueVert"
      />
    </div>
  );
}

export default InputField;