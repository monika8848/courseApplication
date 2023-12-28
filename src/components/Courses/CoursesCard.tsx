import React from "react";
import courseData from "../../dataset/courseData";
import { useNavigate } from "react-router";

const CoursesCard = ({submittedData}:any) => {
  const navigate = useNavigate();
  const handelGoToCourse = () => {
    navigate("detail-page");
  };

  return (
    <div className="container">
      <div className="row">
        {courseData.map((item: any, index: any) => {
          return (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card" key={index}>
                <img src={item.img} className="card-img-top" alt="course-img" />
                <div className="card-body">
                  <h4 className="card-title text-capitalize blue">
                    {item.title}
                  </h4>
                  <h6 className="text-capitalize">{item.course_by}</h6>
                  <p className="card-text text-capitalize">
                    {item.description}
                  </p>
                  <button
                    onClick={handelGoToCourse}
                    className="btn btn-primary"
                  >
                    Go to course
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row">
      {submittedData && (
        <div className="mt-4">
          <h4>Submitted Data on CoursesCard:</h4>
          <p>Title: {submittedData.title}</p>
          <p>Description: {submittedData.description}</p>
          <p>Name: {submittedData.name}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default CoursesCard;
