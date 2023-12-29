import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import MasterDetailPage from "./components/CourseDetail/MasterDetailPage";
// import CreateCourse from "./components/CreateCourse/CreateCourse";
import ModalComponent from "./components/Enrollment/ModalComponent";

function App() {
  return (
    <div className="container-fuild ">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/detail-page" element={<MasterDetailPage />} />
          <Route
            path="home/detail-page/enrollment"
            element={<ModalComponent />}
          />
          {/* <Route path="/home/create-course" element={<CreateCourse/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
