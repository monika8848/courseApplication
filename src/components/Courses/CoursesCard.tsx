// import React, { useEffect, useState } from "react";
// import courseData from "../../dataset/courseData";
// import { useNavigate } from "react-router";

// const CoursesCard = ({ newCourse }: any) => {
//   const navigate = useNavigate();
//   const [submittedDataArray, setSubmittedDataArray] = useState<any>();

//   console.log("newCourse", newCourse);
//   console.log("submittedDataArray",submittedDataArray)

//   const handelGoToCourse = () => {
//     navigate("detail-page");
//   };


  
//   useEffect(() => {
    
//       setSubmittedDataArray(courseData);
   
   
//     // let newArray:any = [];
//     // newArray.push(submittedDataArray)
//     // return newArray;

//   }, []);

//   useEffect(() => {
//     if (newCourse) {
//       setSubmittedDataArray((prevArray: any) => [...prevArray, newCourse]);
   
//     }
//     // let newArray:any = [];
//     // newArray.push(submittedDataArray)
//     // return newArray;

//   }, [newCourse]);

  
  
//   console.log("data", submittedDataArray);
//   return (
//     <div className="container">
//       <div className="row">
//         {submittedDataArray?.length > 0 &&
//           submittedDataArray?.map((item: any, index: any) => {
//             return (
//               <div className="col-md-3 mb-4" key={index}>
//                 <div className="card" key={index}>
//                   {/* <img src={item.img} className="card-img-top" alt="course-img" /> */}
//                   <div className="card-body">
//                     <h4 className="card-title text-capitalize blue">
//                       {item.title}
//                     </h4>
//                     <h6 className="text-capitalize">{item.course_by}</h6>
//                     <p className="card-text text-capitalize">
//                       {item.description}
//                     </p>
//                     <a onClick={handelGoToCourse} className="btn btn-primary">
//                       Go to course
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//       </div>

//       {/* <div className="row">
//       {submittedDataArray.map((item: any, index: any) => {
//           return (
//             <div className="col-md-3 mb-4">
            
//               <div className="card" key={index}>
//                 <div className="card-body">
//                   <h4 className="card-title text-capitalize blue">
//                     {item.title}
//                   </h4>
//                   <h6 className="text-capitalize">{item.name}</h6>
//                   <p className="card-text text-capitalize">
//                     {item.description}
//                   </p>
//                   <a onClick={handelGoToCourse} className="btn btn-primary">
//                     Go to course
//                   </a>
                 
//                 </div>
//               </div>
//             </div>
//           );
//         })}
        
//       </div> */}
//     </div>
//   );
// };

// export default CoursesCard;


import React, { useState } from 'react';
const CoursesCard = () => {
  const initialData = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    // ... other data objects
  ];
  const [data, setData] = useState(initialData);
  const [newName, setNewName] = useState('');
  const addNewDataObject = () => {
    if (newName.trim() !== '') {
      const newDataObject = { id: data.length + 1, name: newName };
      // Update the state with the new data object
      setData(prevData => [...prevData, newDataObject]);
      // Clear the form input
      setNewName('');
    }
  };
  return (
    <div>
      <div>
        <label htmlFor="newName">Name:</label>
        <input
          type="text"
          id="newName"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <button onClick={addNewDataObject}>Add New Data Object</button>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default CoursesCard;