import React, { useState } from "react";
import "./Form.css";

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    fname: "",
    bloodtype: "",
    pincode: "",
    lname: "",
    gender: "male",
  });
  const [formErrors, setFormErrors] = useState({
    fname: "",
    bloodtype: "",
    pincode: "",
    gender: "",
    lname: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    if (!formData.fname.trim()) {
      errors.fname = "First Name is required";
    }
    if (!formData.lname.trim()) {
      errors.lname = "Last Name is required";
    }
    if (!formData.bloodtype.trim()) {
      errors.bloodtype = "bloodtype is required";
    }
    if (!formData.gender.trim()) {
      errors.gender = "gender is required";
    }
    if (!formData.pincode.trim()) {
      errors.pincode = "Pin code is required";
    } else if (!/^\d{6}$/.test(formData.pincode.trim())) {
      errors.pincode = "Pin code must be 6 digits";
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    // if(formData.pincode)
    onSubmit(formData);
    setFormData({
      fname: "",
      lname: "",
      bloodtype: "",
      pincode: "",
      gender: "",
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleInputChange}
        />
        {formErrors.fname && <div className="red">{formErrors.fname}</div>}
      </label>
      <br />
      <label>
        Last Name :
        <input
          type="text"
          name="lname"
          id="lname"
          value={formData.lname}
          onChange={handleInputChange}
        />
        {formErrors.lname && <div className="red">{formErrors.lname}</div>}
      </label>
      <br />
      <label>Gender :</label>
      <input
        type="radio"
        name="gender"
        value="male"
        // checked={formData.gender}
        onChange={handleInputChange}
      />
      M
      <input
        type="radio"
        name="gender"
        value="female"
        onChange={handleInputChange}
      />
      F{formErrors.gender && <div className="red">{formErrors.gender}</div>}
      <br />
      <label>
        Blood Type:
        <select
          name="bloodtype"
          value={formData.bloodtype}
          onChange={handleInputChange}
        >
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="Ab-">AB-</option>
        </select>
        {formErrors.bloodtype && (
          <div className="red">{formErrors.bloodtype}</div>
        )}
      </label>
      <br />
      <label>
        PinCode:
        <input
          type="number"
          name="pincode"
          value={formData.pincode}
          onChange={handleInputChange}
        />
        {formErrors.pincode && <div className="red">{formErrors.pincode}</div>}
      </label>
      <br />
      <button type="submit">Submit</button>
      {/* <button>Clear</button> */}
      {/* onClick={handleClear} */}
    </form>
  );
}

export default Form;
