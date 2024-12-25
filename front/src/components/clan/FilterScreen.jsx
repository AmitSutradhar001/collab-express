import FilterNumberInput from "./FilterNumberInput";
import FilterWarInput from "./FilterWarInput";
import ClanLocation from "./ClanLocation";
import { useState } from "react";

const FilterScreen = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <div className="flex mt-8 gap-4 mb-10 flex-col justify-center items-center w-full">
        <div className="flex bg-[#F6F6F6] flex-col justify-center items-center w-full md:w-10/12 lg:w-8/12 border-[1px] border-purple-500 rounded-md px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between gap-2 items-center w-full">
            <div className="flex flex-col gap-2">
              <p>War frequency</p>
              <FilterWarInput />
            </div>
            <div className="flex flex-col gap-2">
              <p>Clan Location</p>
              <ClanLocation />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row w-full justify-center items-center md:items-end gap-3 mt-3">
              <div className="flex flex-col gap-2">
                <label>Members:</label>
                <FilterNumberInput
                  name="members-form"
                  type="number"
                  defaultValue={1}
                />
              </div>
              <p className="text-lg font-semibold">to</p>
              <FilterNumberInput
                name="members-to"
                type="number"
                defaultValue={50}
              />
            </div>
            <div className="flex flex-col md:flex-row md:justify-center items-center md:items-end gap-3 mt-3">
              <div className="flex flex-col gap-2">
                <label>Minimum Clan Points:</label>
                <FilterNumberInput
                  name="points-form"
                  type="number"
                  defaultValue={1}
                />
              </div>
              <p className="text-lg font-semibold">to</p>
              <FilterNumberInput
                name="points-to"
                type="number"
                defaultValue={0}
              />
            </div>
            <div className="flex flex-col md:flex-row w-full md:justify-between items-center md:items-end gap-3 mt-3">
              <div className="flex flex-col gap-2">
                <label>Minimum Clan Level:</label>
                <FilterNumberInput
                  name="points-form"
                  type="number"
                  defaultValue={1}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p>Only clan I can join:</p>
                <button
                  onClick={() => setIsOn(!isOn)}
                  className={`w-44 px-4 py-2 rounded-lg text-white ${
                    isOn ? "bg-red-400 " : "bg-green-400"
                  }`}
                >
                  {isOn ? "Off" : "On"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FilterScreen;
