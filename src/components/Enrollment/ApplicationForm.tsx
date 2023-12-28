import React, { useState } from "react";
import { useNavigate } from "react-router";

const ApplicatonForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    gender: "",
    contact_no: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormData({
      username: "",
      gender: "",
      contact_no: "",
    });
    navigate("/home/detail-page");
  };

  return (
    <div className="d-flex justify-content-center ">
      <form onSubmit={handleSubmit} className="mt-5">
        <label>
          <span className="mx-3 fs-5"> Enter your Name : </span>
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            className="input-field"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          <span className="mx-3 fs-5 "> Gender : </span>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <span className="me-5 "> Male </span>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <br />
        <br />
        <label>
          <span className="mx-3 fs-5 "> Contact no : </span>
          <input
            type="text"
            placeholder="Enter number"
            name="contact_no"
            className="input-field"
            value={formData.contact_no}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />
       
        <div className="text-center">
          <button type="submit" className="btn btn-primary px-3 mt-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicatonForm;
