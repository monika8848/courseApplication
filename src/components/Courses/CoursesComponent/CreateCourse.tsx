import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CreateCourse = ({ onSubmit }: any) => {
  const [show, setShow] = useState(false);
  const [submittedData, setSubmittedData] = useState({
    title: "",
    description: "",
    course_by: "",
    price:"",
    // full_description: "",
    // img: "",
    // price: "",
    // stack: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fieldData, setFieldData] = useState<any>({
    title: "",
    description: "",
    course_by: "",
    price:"",
    // full_description: "",
    // img: "",
    // price: "",
    // stack: "",
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
    console.log("onSubmit type:", typeof onSubmit);
    console.log("onSubmit content:", onSubmit);

    if (typeof onSubmit === "function") {
      onSubmit(fieldData);
      console.log("onSubmit called with data:", fieldData);
    } else {
      console.error("onSubmit is not a function");
    }
    // onSubmit(fieldData);
    console.log("onSubmit", onSubmit);
    setSubmittedData({ ...fieldData });
    setFieldData({
      title: "",
      description: "",
      course_by: "",
    });
    setShow(false);
  };

  // const fieldDatas = [];

  // fieldDatas.push(...fieldData);

  return (
    <>
      <div>
        <a onClick={handleShow} className="btn btn-success mb-3 ms-5">
          Create New Course
        </a>

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
              <label className="mt-4">
                <span className="mx-3 fs-5 "> price for course : </span>
                <input
                  type="text"
                  placeholder="course price"
                  className="input-field"
                  name="price"
                  value={fieldData.price}
                  onChange={handelChange}
                />
              </label>
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
        {/* <div className="" >
          <CoursesCard newCourse={submittedData} />
        </div> */}
      </div>
    </>
  );
};

export default CreateCourse;
