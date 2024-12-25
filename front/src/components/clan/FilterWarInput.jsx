import { useState } from "react";

const FilterWarInput = () => {
  const arr = [
    "Always",
    "Twice a week",
    "Once a week",
    "Rarely",
    "Never",
    "Not set",
  ];

  // Initialize with index 0 (first item in the array)
  const [index, setIndex] = useState(0);

  // Handle decrement, loop back to the end if needed
  const handleDecrement = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? arr.length - 1 : prevIndex - 1));
  };

  // Handle increment, loop back to the start if needed
  const handleIncrement = () => {
    setIndex((prevIndex) => (prevIndex === arr.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex items-center bg-white border border-gray-300 rounded-full w-fit">
      {/* Left Arrow */}
      <button
        className="py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg"
        onClick={handleDecrement}
      >
        &#10094; {/* HTML entity for left arrow */}
      </button>

      {/* Input Field */}
      <input
        type="text"
        value={arr[index]} // Display the current value from the array
        name="war input"
        readOnly
        className="w-48 lg:w-64 text-center border-0 outline-none"
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

export default FilterWarInput;
