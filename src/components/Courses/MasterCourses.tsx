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

  // const handelRemove = (index:any) =>{
  //   const newCourseCopyArr = [...newCourse]
  //  const result =  newCourseCopyArr.slice(index);
  //  console.log("result",result) ;
  //  setSubmittedDataArray(result);
  // }
  return (
    <>
      <CreateCourse onSubmit={handleCreateCourseSubmit} />
      <CoursesCard newCourse={submittedDataArray}   setSubmittedDataArray={setSubmittedDataArray}/>
    </>
  );
};

export default MasterCourses;
