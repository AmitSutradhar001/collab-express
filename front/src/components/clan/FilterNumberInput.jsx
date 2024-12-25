import { useState } from "react";

const FilterNumberInput = ({ name, type, defaultValue }) => {
  const [value, setValue] = useState(defaultValue && defaultValue); // Initialize with a value of 1

  const handleDecrement = () => {
    if (value > 1) {
      setValue(value - 1); // Ensure value doesn't go below 1
    }
  };

  const handleIncrement = () => {
    if (value < 50) {
      setValue(value + 1); // Ensure value doesn't exceed 50
    }
  };

  return (
    <div className="flex bg-white items-center border border-gray-300 rounded-full w-fit">
      {/* Left Arrow */}
      <button
        className="py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg"
        onClick={handleDecrement}
      >
        &#10094; {/* HTML entity for left arrow */}
      </button>

      {/* Input Field */}
      <input
        type={type}
        value={value}
        name={name}
        readOnly
        className="w-32 text-center border-0 outline-none"
      />

      {/* Right Arrow */}
      <button
        className="py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg"
        onClick={handleIncrement}
      >
        &#10095; {/* HTML entity for right arrow */}
      </button>
    </div>
  );
};

export default FilterNumberInput;
