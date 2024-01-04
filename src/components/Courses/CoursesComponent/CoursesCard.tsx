import React, { useEffect, useState } from "react";
import courseData from "../../../dataset/courseData";
import { useNavigate } from "react-router";

const CoursesCard = ({ newCourse, setSubmittedDataArray }: any) => {
  const navigate = useNavigate();
  // const [submittedDataArray, setSubmittedDataArray] = useState<any>();

  // console.log("newCourse", newCourse);
  console.log("submittedDataArray", newCourse);

  const handelGoToCourse = () => {
    navigate("detail-page");
  };

  // useEffect(() => {
  //   setSubmittedDataArray(courseData);
  // }, []);

  // useEffect(() => {
  //   if (newCourse) {
  //     setSubmittedDataArray((prevArray: any) => [...prevArray, newCourse]);
  //   }
  //   console.log("New course added:", newCourse)

  // }, [newCourse]);

  // console.log("data", submittedDataArray);
  const newCourseCopyArr = [...newCourse];
  const handelRemoveOnlyLast = () => {
    newCourseCopyArr.pop();
    console.log("popped", newCourseCopyArr);
    setSubmittedDataArray(newCourseCopyArr);
  };

  const handelRemove = (index: any) => {
    newCourseCopyArr.splice(index, 1);
    setSubmittedDataArray(newCourseCopyArr);
  };

  const handelSort = () => {
    // localeCompare is a JavaScript method used to compare strings.
    const result = newCourseCopyArr
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));
    console.log(result, "result");
    setSubmittedDataArray(result);
  };

  const handelReverse = () => {
    const result = newCourseCopyArr.reverse();
    setSubmittedDataArray(result);
  };

  return (
    <div className="container">
      <div className="row">
        {newCourse?.length > 0 &&
          newCourse?.map((item: any, index: any) => {
            return (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card">
                  {/* <img src={item.img} className="card-img-top" alt="course-img" /> */}
                  <div className="card-body">
                    <h4 className="card-title text-capitalize blue">
                      {item.title}
                    </h4>
                    <h6 className="text-capitalize">{item.course_by}</h6>
                    <h6 className="text-capitalize red">₹ {item.price}</h6>
                    <h6 className="text-capitalize purple">★ {item.rating}</h6>
                    <p className="card-text text-capitalize">
                      {item.description}
                    </p>
                    <a onClick={handelGoToCourse} className="btn btn-primary">
                      Go to course
                    </a>

                    {/* <div>
                       <button className="btn btn-danger my-2" onClick={handelRemoveOnlyLast}>Remove only last course</button>
                    </div> */}
                    <div>
                      <button
                        className="btn btn-success my-2"
                        onClick={() => handelRemove(index)}
                      >
                        Remove course
                      </button>
                    </div>
                    {/* <div>
                      <button className="btn btn-secondary my-2" onClick={handelSort}>Sort course</button>
                    </div> */}

                    {/* <div>
                      <button className="btn btn-warning my-2" onClick={handelReverse}>Reverse course</button>
                    </div> */}
                    {/* <div>
                      <button className="btn btn-info my-2"> course</button>
                    </div>
                    <div>
                      <button className="btn btn-dark my-2"> course</button>
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CoursesCard;

// import React, { useState } from 'react';
// const CoursesCard = () => {
//   const initialData = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     // ... other data objects
//   ];
//   const [data, setData] = useState(initialData);
//   const [newName, setNewName] = useState('');
//   const addNewDataObject = () => {
//     if (newName.trim() !== '') {
//       const newDataObject = { id: data.length + 1, name: newName };
//       // Update the state with the new data object
//       setData(prevData => [...prevData, newDataObject]);
//       // Clear the form input
//       setNewName('');
//     }
//   };
//   return (
//     <div>
//       <div>
//         <label htmlFor="newName">Name:</label>
//         <input
//           type="text"
//           id="newName"
//           value={newName}
//           onChange={(e) => setNewName(e.target.value)}
//         />
//       </div>
//       <button onClick={addNewDataObject}>Add New Data Object</button>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default CoursesCard;
