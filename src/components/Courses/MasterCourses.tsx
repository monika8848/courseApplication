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

  const convertPriceToNumber = (price: any) => {
    return price.replace(",", "");
  };

  const handelSort = (sortOption: any) => {
    const newCourseCopyArr = [...submittedDataArray];
    // const result = newCourseCopyArr
    //   .slice()
    //   .sort((a, b) => a.price.localeCompare(b.price));
    // console.log(result, "result");
    // setSubmittedDataArray(result);

    let result;
    switch (sortOption) {
      case "low":
        result = newCourseCopyArr
          .slice()
          .sort(
            (a, b) =>
              convertPriceToNumber(a.price) - convertPriceToNumber(b.price)
          );
        console.log("low");
        break;
      case "high":
        result = newCourseCopyArr
          .slice()
          .sort(
            (a, b) =>
              convertPriceToNumber(b.price) - convertPriceToNumber(a.price)
          );
        console.log("high");
        break;
      case "highest-rating":
        result = newCourseCopyArr.slice().sort((a, b) => b.rating - a.rating);
        console.log("highest-rating");
        break;
      case "lowest-rating":
        result = newCourseCopyArr.slice().sort((a, b) => a.rating - b.rating);
        console.log("lowest-rating");
        break;
      case "alphabetic-order":
        result = newCourseCopyArr
          .slice()
          .sort((a, b) => a.title.localeCompare(b.title));
        console.log("alphabetic-order");
        break;
      default:
        result = newCourseCopyArr;
    }
    console.log(result, "result");
    setSubmittedDataArray(result);
  };

  return (
    <>
      <CreateCourse onSubmit={handleCreateCourseSubmit} />
      <div className="d-flex justify-content-end me-5 pe-5 mb-3">
        {/* <button className="btn btn-warning ms-3 " onClick={handelSort}>
          low to high ↑↓{" "}
        </button> */}
        <select
          className="py-2"
          onChange={(e: any) => handelSort(e.target.value)}
        >
          <option value="" >
            {" "}
            sort by ↑↓
          </option>
          <option value="low">low to high</option>
          <option value="high">high to low</option>
          <option value="highest-rating">highest rating</option>
          <option value="lowest-rating">lowest rating</option>
          <option value="alphabetic-order">A to Z order</option>
        </select>
      </div>

      <CoursesCard
        newCourse={submittedDataArray}
        setSubmittedDataArray={setSubmittedDataArray}
      />
    </>
  );
};

export default MasterCourses;
