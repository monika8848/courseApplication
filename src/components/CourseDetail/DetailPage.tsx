import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Tab, Nav } from "react-bootstrap";
import courseData from "../../dataset/courseData";
import ModalComponent from "../Enrollment/ModalComponent";

const DetailPage = () => {
  const navigate = useNavigate();
  const [selectedStack, setSelectedStack] = useState("frontend");

  const handleRegister = () => {
    navigate("/home/detail-page/enrollment");
  };

  const filteredCourses = courseData.filter((data) => data.stack === selectedStack);
  console.log("filteredCourses", filteredCourses)

  return (
    <div className="container mt-5">
      <Tab.Container activeKey={selectedStack} onSelect={(key:any) => setSelectedStack(key)}>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="frontend">Frontend</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="backend">Backend</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="other_technologies">Other Technologies</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          {filteredCourses.map((data, index) => (
            <Tab.Pane key={index}  eventKey={data.stack}>
                <div className="row my-5 py-5">
                <div className="col-md-8">
                <h2 className="text-capitalize blue">{data.title}</h2>
                <h4 className="text-capitalize">{data.description}</h4>
                <h5 className="text-capitalize">{data.course_by}</h5>
                <h5>Price: ₹ {data.price}</h5>
                <p>{data.full_description}</p>
              </div>
              <div className="col-md-4">
                <img
                  src={data.img}
                  alt="course-img"
                  width="100"
                  height="100"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="text-center mt-3">
                 <ModalComponent/>
                </div>
              </div>
                </div>
             
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default DetailPage;
