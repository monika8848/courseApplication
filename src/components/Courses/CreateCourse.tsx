import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CoursesCard from "./CoursesCard";

const CreateCourse = () => {
  const [show, setShow] = useState(false);
  const [submittedData, setSubmittedData] = useState({
    title: "",
    description: "",
    course_by: "",
    full_description: "",
    img: "",
    price: "",
    stack: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fieldData, setFieldData] = useState<any>({
    title: "",
    description: "",
    course_by: "",
    full_description: "",
    img: "",
    price: "",
    stack: "",
  });

  const handelChange = (e: any) => {
    const { name, value } = e.target;
    setFieldData((preVal: any) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const handelSubmit = (e: any) => {
    e.preventDefault();
    console.log("new course added", fieldData);
    setSubmittedData({ ...fieldData });
    setFieldData({
      title: "",
      name: "",
      description: "",
    });
    setShow(false);
  };

  // const fieldDatas = [];

  // fieldDatas.push(...fieldData);

  return (
    <>
      <div>
        <a onClick={handleShow}>Create New Course</a>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add your course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handelSubmit}>
              <label className="mt-4">
                <span className="mx-3 fs-5 "> Course Title : </span>
                <input
                  type="text"
                  placeholder="Write title for your course"
                  className="input-field"
                  name="title"
                  value={fieldData.title}
                  onChange={handelChange}
                />
              </label>
              <label className="mt-4">
                <span className="mx-3 fs-5 "> Course Description : </span>
                <input
                  type="text"
                  placeholder="Write description for your course"
                  className="input-field"
                  name="description"
                  value={fieldData.description}
                  onChange={handelChange}
                />
              </label>
              <label className="mt-4">
                <span className="mx-3 fs-5 "> your name : </span>
                <input
                  type="text"
                  placeholder="Write your name"
                  className="input-field"
                  name="course_by"
                  value={fieldData.course_by}
                  onChange={handelChange}
                />
              </label>
              <br />
              {/* <label className="mt-4">
            <span className="mx-3 fs-5 "> Add Image : </span>
            <img src="" alt="course-img" />
          </label> */}
              <div className="text-center mt-4">
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit" className="ms-3">
                  Post
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
        <div className="" style={{ display: "none" }}>
          <CoursesCard newCourse={submittedData} />
        </div>
      </div>
    </>
  );
};

export default CreateCourse;
