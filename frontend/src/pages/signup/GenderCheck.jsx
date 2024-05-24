import React from "react";

const GenderCheck = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex text-black">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender == "male" ? "selected" : ""
          }`}
        >
          <span className="labet-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info  border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender == "female" ? "selected" : ""
          }`}
        >
          <span className="labet-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheck;
