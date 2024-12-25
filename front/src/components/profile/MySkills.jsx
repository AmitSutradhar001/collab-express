// import { useState } from "react";
import Sidebar from "./Sidebar";
import MultiInput from "./MultiInput";
import downArrow from "/downArrow.svg";
import "../../css/components/profile/Personal.css";

export const MySkills = () => {
  return (
    <div className="ps-outer">
      <Sidebar />
      <div className=" ps-inn">
        <div className="ps-inn-1">
          <div className="ps-inn-2">
            <h2 className="ps-inn-2-h2">My Skills</h2>
          </div>
          <div className="ps-inn-3">
            <form className="ps-f">
              <MultiInput
                name={"Skills"}
                placeHolder={"UI Design, UX Design"}
                type={"text"}
                svg={downArrow}
              />

              {/* {fields.map((field) => (
                <div key={field.id} className="ps-add-div">
                  <label className="ps-f-label" htmlFor={`field-${field.id}`}>
                    Additional Link
                  </label>
                  <div className="ps-f-in-div">
                    <input
                      name="otherLink"
                      id={`field-${field.id}`}
                      placeholder={field.placeholder}
                      className="ps-f-in"
                    />
                  </div>
                </div>
              ))} */}
              <div className="ps-c-btn">
                
                <button type="submit" className="ps-up">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
