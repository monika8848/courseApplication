import React, { useState } from "react";
import CoursesCard from "./CoursesComponent/CoursesCard";
import CreateCourse from "./CoursesComponent/CreateCourse";
import courseData from "../../dataset/courseData";

const MasterCourses = ({ newCourse }: any) => {
  console.log("newCourseaa", newCourse);

  const [submittedDataArray, setSubmittedDataArray] = useState<any>([
    ...courseData,
  ]);
  console.log("submittedDataArray", submittedDataArray);

  const handleCreateCourseSubmit: any = (newCourseData: any) => {
    console.log("New course data submitted", newCourseData);
    setSubmittedDataArray((prevData: any) => [...prevData, newCourseData]);
  };
  console.log("handleCreateCourseSubmit", submittedDataArray);

  const handelSort = () =>{
    const newCourseCopyArr = [...submittedDataArray]
    const result = newCourseCopyArr.slice().sort((a, b) => a.title.localeCompare(b.title));
    console.log(result, "result");
    setSubmittedDataArray(result);
  }
  return (
    <>
      <CreateCourse onSubmit={handleCreateCourseSubmit} />
      <div className="d-flex justify-content-end me-5 pe-5 mb-3">
      <button className="btn btn-warning ms-3 " onClick={handelSort}>Sort A-Z ↑↓ </button>
      </div>
     
      <CoursesCard newCourse={submittedDataArray}   setSubmittedDataArray={setSubmittedDataArray}/>
    </>
  );
};

export default MasterCourses;
