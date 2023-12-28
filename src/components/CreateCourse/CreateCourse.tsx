import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CreateCourse = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fieldData, setFieldData] = useState({
    title: "",
    name: "",
    description: "",
  });

  const handelChange = (e: any) => {
    const { name, value } = e.target;
    setFieldData((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const handelSubmit = () => {
    console.log("new course added", fieldData);
    setFieldData({
      title: "",
      name: "",
      description: "",
    });
  };
  return (
    <>
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
                name="name"
                value={fieldData.name}
                onChange={handelChange}
              />
            </label>
            <br />
            {/* <label className="mt-4">
            <span className="mx-3 fs-5 "> Add Image : </span>
            <img src="" alt="course-img" />
          </label> */}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" className="ms-3">
              Post
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateCourse;
