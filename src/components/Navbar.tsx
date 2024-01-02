import React from "react";
import { useNavigate } from "react-router";
import CreateCourse from "./Courses/CoursesComponent/CreateCourse";

const Navbar = () => {
  const navigate = useNavigate();

  const handelLogout = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row py-2">
        <div className="col-md-6 blue fs-2">Coursera</div>
        <div className="col-md-6 d-flex justify-content-end">
          {/* <button className="btn btn-primary px-4 me-4">
            <CreateCourse />
          </button> */}
          <button onClick={handelLogout} className="btn btn-danger px-4 ">
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
