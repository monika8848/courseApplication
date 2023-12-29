import React, { useEffect, useState } from "react";
import courseData from "../../dataset/courseData";
import { useNavigate } from "react-router";

const CoursesCard = ({ newCourse }: any) => {
  const navigate = useNavigate();
  const [submittedDataArray, setSubmittedDataArray] = useState<any>([]);
  const [submittedArray, setSubmittedArray] = useState<any>([]);

  console.log("newCourse", newCourse);

  const handelGoToCourse = () => {
    navigate("detail-page");
  };

  // useEffect(() => {
  //   console.log("newCourse", newCourse);
  //   // setSubmittedDataArray((prevArray: any) => {
  //   //   console.log("prevArray", prevArray);
  //   //   return [...prevArray, newCourse];
  //   // });
  //   if (newCourse) {
  //     setSubmittedDataArray((prevArray: any) => {
  //       const newArray = [...prevArray];
  //       newArray.push(newCourse);
  //       return newArray;
  //     });
      
  //   }
  //   setSubmittedArray({...submittedDataArray})

  //   console.log("setSubmittedArray", submittedArray);
  // }, [newCourse]);

  useEffect(() => {
    if (newCourse) {
      setSubmittedDataArray((prevArray: any) => [...prevArray, newCourse]);
    }
  }, [newCourse]);

//   const Data =[];
//    Data.push(...courseData);
// console.log("data", Data)

  // console.log("submittedDataArray", submittedDataArray);
  // const submittedDataArray:any = [];
  // submittedDataArray.push(...newCourse)

  const Data = [...courseData, ...submittedDataArray];
  console.log("data", Data);

  useEffect(() => {
    const Data = [...courseData, ...submittedDataArray];
    console.log("data", Data);
  }, [submittedDataArray]);

  return (
    <div className="container">
      <div className="row">
        {Data.length > 0 && Data.map((item: any, index: any) => {
          return (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card" key={index}>
                {/* <img src={item.img} className="card-img-top" alt="course-img" /> */}
                <div className="card-body">
                  <h4 className="card-title text-capitalize blue">
                    {item.title}
                  </h4>
                  <h6 className="text-capitalize">{item.course_by}</h6>
                  <p className="card-text text-capitalize">
                    {item.description}
                  </p>
                  <a onClick={handelGoToCourse} className="btn btn-primary">
                    Go to course
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        
      </div>

      {/* <div className="row">
      {submittedDataArray.map((item: any, index: any) => {
          return (
            <div className="col-md-3 mb-4">
            
              <div className="card" key={index}>
                <div className="card-body">
                  <h4 className="card-title text-capitalize blue">
                    {item.title}
                  </h4>
                  <h6 className="text-capitalize">{item.name}</h6>
                  <p className="card-text text-capitalize">
                    {item.description}
                  </p>
                  <a onClick={handelGoToCourse} className="btn btn-primary">
                    Go to course
                  </a>
                 
                </div>
              </div>
            </div>
          );
        })}
        
      </div> */}
    </div>
  );
};

export default CoursesCard;
