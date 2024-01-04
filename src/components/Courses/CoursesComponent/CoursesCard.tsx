import React, { useEffect, useState } from "react";
import courseData from "../../../dataset/courseData";
import { useNavigate } from "react-router";
import { TabContainer } from "react-bootstrap";
import { Tab, Nav } from "react-bootstrap";

const CoursesCard = ({ newCourse, setSubmittedDataArray }: any) => {
  const navigate = useNavigate();
  const [selectedStack, setSelectedStack] = useState("frontend");
  // const [submittedDataArray, setSubmittedDataArray] = useState<any>();

  // console.log("newCourse", newCourse);
  console.log("submittedDataArray", newCourse);

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

  console.log("newCourse coming from parent", newCourse);
  const filteredCourses = newCourse.filter(
    (item: any) => item.stack === selectedStack
  );
  console.log("filteredCourses", filteredCourses);

  const handelGoToCourse = (selectedCourse: any) => {
    console.log("Selected Course Title", selectedCourse.title);
    console.log("selectedCourses", selectedCourse);
    // navigate(`detail-page/${encodeURIComponent(selectedCourse.title)}`, { state: { course: selectedCourse } });
    navigate("detail-page", { state: { course: selectedCourse } });
  };

  return (
    <div className="container">
      <TabContainer
        activeKey={selectedStack}
        onSelect={(key: any) => setSelectedStack(key)}
      >
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey={"frontend"}>Frontend</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={"backend"}>Backend</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={"other_technologies"}>
              Other Technologies
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <div className="row mt-5">
            {filteredCourses?.length > 0 &&
              filteredCourses?.map((item: any, index: any) => {
                return (
                  <div className="col-md-3 mb-4" key={index}>
                    <Tab.Pane eventKey={item.stack}>
                      <div className="card">
                        {/* <img src={item.img} className="card-img-top" alt="course-img" /> */}
                        <div className="card-body">
                          <h4 className="card-title text-capitalize blue">
                            {item.title}
                          </h4>
                          <h6 className="text-capitalize">{item.course_by}</h6>
                          <h6 className="text-capitalize red">
                            ₹ {item.price}
                          </h6>
                          <h6 className="text-capitalize purple">
                            ★ {item.rating}
                          </h6>
                          {/* <p className="card-text text-capitalize">
                            {item.stack}
                          </p> */}
                          <p className="card-text text-capitalize">
                            {item.description}
                          </p>
                          <a
                            onClick={() => handelGoToCourse(item)}
                            className="btn btn-primary"
                          >
                            View more
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
                    </div> how to show only that course only for eg if user click on python course that when user click on view more button then it should redirect to detail page and show only python detail content on detail page like these for all course card detail page should show that in that manner please write appropite logic to do this in react*/}

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
                    </Tab.Pane>
                  </div>
                );
              })}
          </div>
        </Tab.Content>
      </TabContainer>
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
