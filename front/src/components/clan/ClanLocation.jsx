import { useState } from "react";

const ClanLocation = () => {
  const arr = [
    "Any",
    "Always",
    "Twice a week",
    "Once a week",
    "Rarely",
    "Never",
    "Not set",
  ];

  // State to track the selected value and dropdown visibility
  const [selectedValue, setSelectedValue] = useState("Any");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown visibility
  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle selecting an item from the dropdown
  const handleSelectItem = (item) => {
    setSelectedValue(item); // Set the selected item
    setIsDropdownOpen(false); // Close the dropdown
  };

  return (
    <div className="relative  bg-white flex items-center border border-gray-300 rounded-md w-fit">
      {/* Input Field */}
      <input
        type="text"
        value={selectedValue} // Display the selected value
        name="war input"
        readOnly
        className="w-48 lg:w-64 text-center border-0 outline-none"
      />

      {/* Browse Button */}
      <button
        className="py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg"
        onClick={handleToggleDropdown}
      >
        Browse
      </button>

      {/* Dropdown List */}
      {isDropdownOpen && (
        <ul className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-full">
          {arr.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelectItem(item)} // Update value on click
              className="cursor-pointer px-4 py-2 hover:bg-gray-200"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClanLocation;
